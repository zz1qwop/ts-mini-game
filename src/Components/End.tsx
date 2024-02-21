import React from 'react';
import { AiOutlineUndo } from 'react-icons/ai';

type Mode = 'start' | 'game' | 'end';

type EndProps = {
  wordList: string[];
  handleWordList: React.Dispatch<React.SetStateAction<string[]>>;
  handleFlag: React.Dispatch<React.SetStateAction<Mode>>;
};

function End({ wordList, handleWordList, handleFlag }: EndProps) {
  return (
    <div className="absolute w-full h-full sm:rounded bg-slate-50 flex flex-col justify-around items-center">
      <h2 className="text-4xl font-bold text-slate-700">END</h2>
      <div className="w-5/6 flex flex-col items-center">
        <div className="flex font-bold text-xl text-slate-700">
          작성한 단어 개수는&nbsp;
          <span className="bg-slate-700 text-white">
            {wordList.length}개
          </span>{' '}
          &nbsp;입니다!
        </div>
        <div className="mt-4 flex flex-wrap justify-center items-center">
          {wordList.map((word, idx) => (
            <p key={idx} className="m-1 font-bold text-slate-700">
              {word}
            </p>
          ))}
        </div>
      </div>
      <button
        onClick={(e) => {
          handleFlag('start');
          handleWordList([]);
        }}
        className="flex items-center p-2 text-3xl font-bold bg-slate-700 text-white text-center"
      >
        <AiOutlineUndo />
        <p className="pl-2">다시 시작하기</p>
      </button>
    </div>
  );
}

export default End;
