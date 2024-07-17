import React, { useEffect, useState } from "react";
import { TimerInitialStateProps } from "./timer";
import { TimerProps } from "./timer";

const Timer: React.FC<TimerProps> = ({ second, onEnd }) => {
  const initialState: TimerInitialStateProps = {
    sec: second,
  };

  const [state, setState] = useState(initialState);
  const { sec } = state;

  useEffect(() => {
    if (sec <= 0) {
      return;
    }

    const countDown = setInterval(() => {
      setState((prev) => {
        if (prev.sec <= 1) {
          clearInterval(countDown);
          onEnd();
          return { sec: 0 };
        }
        return { sec: prev.sec - 1 };
      });
    }, 1000);

    return () => clearInterval(countDown);
  }, [sec, onEnd]);

  const formatTime = (sec: number): string => {
    const minutes = Math.floor(sec / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (sec % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div>
      <span>{formatTime(sec)}</span>
    </div>
  );
};

export default Timer;
