import React, { useEffect, useState } from 'react';
import { LuClock3, LuClock6, LuClock9, LuClock12 } from 'react-icons/lu';

type Mode = 'start' | 'game' | 'end';

type TimerProps = {
  count: number;
  handleFlag: React.Dispatch<React.SetStateAction<Mode>>;
};

function Timer({ count, handleFlag }: TimerProps) {
  const DEFAULT_TIME = 8;
  const [time, setTime] = useState<number>(DEFAULT_TIME);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    if (time <= 0) {
      clearInterval(timerId);

      handleFlag('end');
    }

    return () => {
      clearInterval(timerId);
    };
  }, [time, handleFlag]);

  useEffect(() => {
    setTime(DEFAULT_TIME);
  }, [count]);

  return (
    <div className="w-2/5 flex justify-around items-center text-4xl font-bold text-slate-700">
      {time >= 7 ? (
        <LuClock3 />
      ) : time >= 5 ? (
        <LuClock6 />
      ) : time >= 3 ? (
        <LuClock9 />
      ) : (
        <LuClock12 />
      )}
      <div className="text-4xl">{time}</div>
      {time >= 7 ? (
        <LuClock3 />
      ) : time >= 5 ? (
        <LuClock6 />
      ) : time >= 3 ? (
        <LuClock9 />
      ) : (
        <LuClock12 />
      )}
    </div>
  );
}

export default Timer;
