import React, { useEffect } from 'react';
import { LuClock3, LuClock6, LuClock9, LuClock12 } from 'react-icons/lu';

type Mode = 'start' | 'game' | 'end';

type TimerProps = {
  count: number;
  handleFlag: React.Dispatch<React.SetStateAction<Mode>>;
  time: number;
  handleTime: React.Dispatch<React.SetStateAction<number>>;
  defaultTime: number;
};

function Timer({
  count,
  handleFlag,
  time,
  handleTime,
  defaultTime,
}: TimerProps) {
  useEffect(() => {
    const timerId = setInterval(() => {
      handleTime((prev) => prev - 1);
    }, 1000);

    if (time <= 0) {
      clearInterval(timerId);

      handleFlag('end');
    }

    return () => {
      clearInterval(timerId);
    };
  }, [time, handleFlag, handleTime]);

  useEffect(() => {
    handleTime(defaultTime);
  }, [count, handleTime, defaultTime]);

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
