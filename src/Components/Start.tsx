import React from 'react';
import { useInitial } from '../context/InitialContext';
import {
  AiOutlineUndo,
  AiOutlineDoubleLeft,
  AiOutlineDoubleRight,
  AiFillStar,
} from 'react-icons/ai';

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
    <div className="absolute w-full h-full sm:rounded bg-slate-50 flex flex-col items-center">
      <div className="flex flex-col h-full justify-around items-center">
        <div className="flex flex-col justify-around items-center">
          <div className="flex mb-2 items-center text-4xl font-bold text-slate-700">
            <AiFillStar className="text-2xl mr-2" />
            초성 게임
            <AiFillStar className="text-2xl ml-2" />
          </div>
          <p className="mb-2 text-4xl font-bold bg-slate-700 text-white w-full text-center">
            {word}
          </p>
          <button
            className="text-slate-500 flex items-center"
            onClick={handleClick}
          >
            <AiOutlineUndo />
            <p className="pl-2">초성 바꾸기</p>
          </button>
        </div>

        <button
          onClick={(e) => {
            handleFlag('game');
          }}
          className="w-full flex justify-between items-center font-bold text-slate-700"
        >
          <AiOutlineDoubleRight className="w-8 h-8" />
          <p className="text-3xl">START</p>
          <AiOutlineDoubleLeft className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
}

export default Start;
