declare const React: typeof import('react');
declare const Wad: typeof import('web-audio-daw');
import { Song } from '../song';
import { Instrument, instruments } from '../instrument';


const scale = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'Bb', 'B'];
const fullScale: string[] = [];
for (let i = 1; i < 7; i++) {
  for (const pitch of scale) {
    fullScale.unshift(`${pitch}${i}`);
  }
}

const fullScaleToYCoord: { [key: string]: number } = {};
(() => {
  for (let i = 0; i < fullScale.length; i++) {
    fullScaleToYCoord[fullScale[i]] = i;
  }
})();


function playPreviewNote(pitch: string, instrument: Instrument) {
  instrument.wad.play({
    pitch,
    env: { hold: 0.1 }
  });
}


interface EditorProps {
  activeBeat: number;
  activeSongId: string;
  song: Song;
  updateSong: (songId: string, updates: Partial<Song>) => void;
}

function formatPitch(pitch: string) {
  if (pitch.includes('#')) return pitch.replace('#', '♯');
  if (pitch.includes('b')) return pitch.replace('b', '♭');
  return `${pitch[0]} ${pitch[1]}`;
}

// determines the # of beats (columns) to show
function getColumnCount(song: Song) {
  const MIN_LENGTH = 20;
  const EXTRA_VISIBLE_COLUMNS = 10; // the number of additional columns to show after the last detected note
  let maxNotePosition = 0;
  for (const note of song.notes) {
    maxNotePosition = Math.max(maxNotePosition, note.x);
  }
  return Math.max(maxNotePosition + EXTRA_VISIBLE_COLUMNS, MIN_LENGTH);
}

interface Coordinate {
  x: number;
  y: number;
}

const Editor: React.FC<EditorProps> = ({ activeBeat, activeSongId, song, updateSong }) => {
  const X_OFFSET = 60;
  const Y_OFFSET = 7;
  const ROW_HEIGHT = 15;
  const ROW_WIDTH = 15;
  const Y_FIX = ROW_HEIGHT; // magic offset # to handle rounding errors when determining which cell is hovered
  const PADDING = 2;

  const [hoveredX, setHoveredX] = React.useState(-1);
  const [hoveredY, setHoveredY] = React.useState(-1);
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas === null) return;

    let isPainting = false;

    let x = 0;
    let y = 0;

    const paint = (event: MouseEvent) => {
      const newX = event.offsetX - canvas.offsetLeft;
      const newY = event.offsetY - canvas.offsetTop;

      const xCoord = Math.round(newX / (ROW_WIDTH + PADDING)) - Math.round(X_OFFSET / ROW_WIDTH);
      const yCoord = Math.round(newY / (ROW_HEIGHT + PADDING)) - Math.round(Y_FIX / ROW_HEIGHT);

      if (xCoord < 0 || yCoord < 0) return;

      setHoveredX(xCoord);
      setHoveredY(yCoord);

      if (!isPainting) return;

      {
        // add only mode when dragging, no removal:
        const pitch = fullScale[yCoord];
        const existingNote = song.notes.find((note) => note.pitch === pitch && note.x === xCoord);
        if (!existingNote) {
          song.notes.push({
            x: xCoord,
            pitch,
            duration: 1
          });
          if (song.instrumentId in instruments) {
            playPreviewNote(pitch, instruments[song.instrumentId]);
          }
          console.log('updating song', song);
          updateSong(activeSongId, { notes: song.notes });
        }
      }

      x = newX;
      y = newY;
    };

    const startPaint = (event: MouseEvent) => {
      isPainting = true;
      x = event.offsetX - canvas.offsetLeft;
      y = event.offsetY - canvas.offsetTop;

      const xCoord = Math.round(x / (ROW_WIDTH + PADDING)) - Math.round(X_OFFSET / ROW_WIDTH);
      const yCoord = Math.round(y / (ROW_HEIGHT + PADDING)) - Math.round(Y_FIX / ROW_HEIGHT);

      if (xCoord < 0 || yCoord < 0) return;

      {
        const pitch = fullScale[yCoord];
        const existingNoteIndex = song.notes.findIndex((note) => note.pitch === pitch && note.x === xCoord);
        if (existingNoteIndex === -1) {
          song.notes.push({
            x: xCoord,
            pitch,
            duration: 1
          });
          if (song.instrumentId in instruments) {
            playPreviewNote(pitch, instruments[song.instrumentId]);
          }
        }
        else {
          // clicking an already existing note will toggle it off
          song.notes.splice(existingNoteIndex, 1);
        }
        console.log('updating song', song);
        updateSong(activeSongId, { notes: song.notes });
      }
    };

    const stopPaint = (event: MouseEvent) => {
      isPainting = false;
      x = 0;
      y = 0;
      setHoveredX(-1);
      setHoveredY(-1);
    };

    canvas.addEventListener('mousedown', startPaint);
    canvas.addEventListener('mousemove', paint);
    canvas.addEventListener('mouseleave', stopPaint);
    canvas.addEventListener('mouseup', stopPaint);

    return () => {
      canvas.removeEventListener('mousedown', startPaint);
      canvas.removeEventListener('mousemove', paint);
      canvas.removeEventListener('mouseleave', stopPaint);
      canvas.removeEventListener('mouseup', stopPaint);
    };
  }, [activeSongId]);


  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas === null) return;

    const ctx = canvas.getContext('2d');
    if (ctx === null) return;

    const columns = getColumnCount(song);

    // create a high DPI canvas based on devicePixelRatio:
    {
      const pixelRatio = window.devicePixelRatio || 1;

      const height = fullScale.length * (ROW_HEIGHT + PADDING) + Y_OFFSET;
      const width = columns * (ROW_WIDTH + PADDING * 2) + X_OFFSET;

      canvas.height = height * pixelRatio;
      canvas.width = width * pixelRatio;

      canvas.style.height = `${height}px`;
      canvas.style.width = `${width}px`;

      ctx.scale(pixelRatio, pixelRatio);
    }

    // piano keys
    {
      const keys = {
        black: {
          color: '#000',
          offset: 5,
          height: 4,
          width: 6
        },
        white: {
          color: '#fff',
          offset: 5,
          height: 5,
          width: 12
        }
      };
      for (let i = 0; i < fullScale.length; i++) {
        const pitch = fullScale[i];
        const key = (pitch.includes('#') || pitch.includes('b')) ? keys.black : keys.white;
        ctx.fillStyle = key.color;
        const x = 0;
        const y = (ROW_HEIGHT + PADDING) * (i + 1) - key.offset;
        ctx.fillRect(x, y, key.width, key.height);
      }
    }

    // write each note name in the first column:
    {
      ctx.font = '12px monospace';
      ctx.fillStyle = '#677fa1';

      for (let i = 0; i < fullScale.length; i++) {
        const pitch = fullScale[i];
        const x = 20;
        const y = (ROW_HEIGHT + PADDING) * (i + 1);
        ctx.fillText(formatPitch(pitch), x, y);
      }
    }

    // draw a grid of empty squares:
    {

      for (let y = 0; y < fullScale.length; y++) {
        for (let x = 0; x < columns; x++) {
          const v = Y_OFFSET + ((ROW_HEIGHT + PADDING) * y);
          const h = X_OFFSET + ((ROW_WIDTH + PADDING) * x);
          ctx.fillStyle = (x === hoveredX && y === hoveredY) ? '#8699b5' : (x === activeBeat || x === hoveredX || y === hoveredY) ? '#b5c2d2' : '#c5cfdc';
          ctx.fillRect(h, v, ROW_WIDTH, ROW_HEIGHT);
        }
      }
    }

    // fill in the squares for the song's notes:
    {
      ctx.fillStyle = '#00a9ff';

      for (const note of song.notes) {
        const { x, duration, pitch } = note;
        const y = fullScaleToYCoord[pitch];
        const v = Y_OFFSET + ((ROW_HEIGHT + PADDING) * y);
        const h = X_OFFSET + ((ROW_WIDTH + PADDING) * x);
        const width = (ROW_WIDTH * duration) + (PADDING * (duration - 1));
        ctx.fillRect(h, v, width, ROW_HEIGHT);
      }
    }

  }, [song, hoveredX, hoveredY, activeBeat]);

  return <>
    <div className="Editor">
      <canvas id="canvas" ref={canvasRef} />
    </div>
  </>;
}

export default Editor;
