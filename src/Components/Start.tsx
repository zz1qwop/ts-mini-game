import React from 'react';
import { useInitial } from '../context/InitialContext';

type Mode = 'start' | 'game' | 'end';

type StartProps = {
  handleFlag: React.Dispatch<React.SetStateAction<Mode>>;
};

function Start({ handleFlag }: StartProps) {
  const { initial, word, setWord } = useInitial();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setWord([
      initial[Math.floor(Math.random() * initial.length)],
      initial[Math.floor(Math.random() * initial.length)],
    ]);
  };
  return (
    <div className="absolute w-full h-full bg-slate-400 opacity-90 flex flex-col justify-center items-center">
      <button
        onClick={(e) => {
          handleFlag('game');
        }}
        className="text-3xl font-bold text-white border-black"
      >
        start
      </button>
      <div className="text-center">
        <p>{word}</p>
        <button onClick={handleClick}>초성 바꾸기</button>
      </div>
    </div>
  );
}

export default Start;
