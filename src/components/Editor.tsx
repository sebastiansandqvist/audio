declare const React: typeof import('react');
declare const Wad: typeof import('web-audio-daw');
import { Song, Note } from '../song';
import { Instrument, instruments } from '../instrument';

const pianoKeys = {
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


interface EditorProps {
  activeBeat: number;
  activeSongId: string;
  song: Song;
  addNote: (note: Note) => void;
  toggleNote: (note: Note) => void;
  playPreviewNote: (pitch: string) => void;
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

const Editor: React.FC<EditorProps> = ({ activeBeat, activeSongId, song, addNote, toggleNote, playPreviewNote }) => {
  const X_OFFSET = 60;
  const Y_OFFSET = 7;
  const ROW_HEIGHT = 15;
  const ROW_WIDTH = 15;
  const PADDING = 2;

  const [hoveredX, setHoveredX] = React.useState(-1);
  const [hoveredY, setHoveredY] = React.useState(-1);
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas === null) return;

    let isPainting = false;
    let [internalHoveredX, internalHoveredY] = [-1, -1];

    const paint = (event: MouseEvent) => {
      const screenX = event.offsetX - canvas.offsetLeft;
      const screenY = event.offsetY - canvas.offsetTop;

      const x = Math.round(screenX / (ROW_WIDTH + PADDING)) - Math.round(X_OFFSET / ROW_WIDTH);
      const y = Math.round(screenY / (ROW_HEIGHT + PADDING)) - 1;

      if (x < 0 || y < 0) return;

      setHoveredX(x);
      setHoveredY(y);

      if (!isPainting) return;

      const pitch = fullScale[y];
      // we're in add-only mode when dragging (no note removal/toggle):
      addNote({ x, pitch, duration: 1 });

      // only play the preview note if we've hovered to a new cell:
      // (avoids repeating the same note when dragging within a cell)
      if (internalHoveredX !== x || internalHoveredY !== y) {
        playPreviewNote(pitch);
      }

      [internalHoveredX, internalHoveredY] = [x, y];
    };

    const startPaint = (event: MouseEvent) => {
      isPainting = true;
      const screenX = event.offsetX - canvas.offsetLeft;
      const screenY = event.offsetY - canvas.offsetTop;

      const x = Math.round(screenX / (ROW_WIDTH + PADDING)) - Math.round(X_OFFSET / ROW_WIDTH);
      const y = Math.round(screenY / (ROW_HEIGHT + PADDING)) - 1;

      if (x < 0 || y < 0) return;

      const pitch = fullScale[y];
      // toggle mode when dragging (can add OR remove notes, determined by prior state):
      toggleNote({ x, pitch, duration: 1 });
      playPreviewNote(pitch);

      [internalHoveredX, internalHoveredY] = [x, y];
    };

    const stopPaint = (event: MouseEvent) => {
      isPainting = false;
      setHoveredX(-1);
      setHoveredY(-1);
      [internalHoveredX, internalHoveredY] = [-1, -1];
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
      for (let i = 0; i < fullScale.length; i++) {
        const pitch = fullScale[i];
        const key = (pitch.includes('#') || pitch.includes('b')) ? pianoKeys.black : pianoKeys.white;
        const x = 0;
        const y = (ROW_HEIGHT + PADDING) * (i + 1) - key.offset;
        ctx.fillStyle = key.color;
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

    // draw a grid of empty squares, with some highlighted for :hover:
    {
      for (let y = 0; y < fullScale.length; y++) {
        for (let x = 0; x < columns; x++) {
          const v = Y_OFFSET + ((ROW_HEIGHT + PADDING) * y);
          const h = X_OFFSET + ((ROW_WIDTH + PADDING) * x);
          ctx.fillStyle =
            (x === hoveredX && y === hoveredY) ? '#8699b5' :
            (x === activeBeat || x === hoveredX || y === hoveredY) ? '#b5c2d2' :
            '#c5cfdc';
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
