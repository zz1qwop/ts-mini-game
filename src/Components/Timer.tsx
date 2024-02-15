import React, { useEffect, useState } from 'react';

type Mode = 'start' | 'game' | 'end';

type TimerProps = {
  count: number;
  handleFlag: React.Dispatch<React.SetStateAction<Mode>>;
};

function Timer({ count, handleFlag }: TimerProps) {
  const [time, setTime] = useState<number>(8);

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
    setTime(8);
  }, [count]);

  return (
    <div className="h-1/6 flex justify-center items-center">
      <p className="font-bold text-2xl">{time}</p>
    </div>
  );
}

export default Timer;
