declare const React: typeof import('react');
import Icon from './Icon';


function useSpinner(value: number, action: Function) {
  const [isSpinning, setIsSpinning] = React.useState(false);
  // const [runOnce, setRunOnce] = React.useState(true);
  const rafId = React.useRef<number | undefined>();
  const timeoutId = React.useRef<number | undefined>();

  React.useEffect(() => {
    const spin = () => {
      if (isSpinning) {
        action();
        rafId.current = requestAnimationFrame(spin);
      }
    };

    rafId.current = requestAnimationFrame(spin);

    return () => {
      if (rafId.current !== undefined) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [value, isSpinning]);

  return {
    start() {
      action();
      timeoutId.current = setTimeout(() => {
        setIsSpinning(true);
      }, 300)
    },
    stop() {
      setIsSpinning(false);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
      clearTimeout(timeoutId.current);
    }
  };
}

interface TempoProps {
  bpm: number;
  updateBpm: (bpm: number) => void;
};

const Tempo: React.FC<TempoProps> = ({ bpm, updateBpm }) => {
  const [isMouseDown, setMouseDown] = React.useState(false);
  const increment = useSpinner(bpm, () => updateBpm(bpm + 1));
  const decrement = useSpinner(bpm, () => updateBpm(bpm - 1));

  React.useEffect(() => {
    const onMouseUp = () => {
      increment.stop();
      decrement.stop();
    }
    document.addEventListener('mouseup', onMouseUp);
    return () => {
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  return <>
    <input
      className="Tempo-input"
      type="number"
      maxLength={3}
      value={bpm.toString()}
      onInput={(event) => {
        updateBpm((event.target as HTMLInputElement).valueAsNumber);
      }}
    />
    <span className="Tempo-label">bpm</span>
    <div className="Tempo-controls">
      <button onMouseDown={increment.start}>
        <Icon name="increment" />
      </button>
      <button onMouseDown={decrement.start}>
        <Icon name="decrement" />
      </button>
    </div>
  </>;
};


export default Tempo;
