import React from 'react';

type Mode = 'start' | 'game' | 'end';

type EndProps = {
  wordList: string[];
  handleWordList: React.Dispatch<React.SetStateAction<string[]>>;
  handleFlag: React.Dispatch<React.SetStateAction<Mode>>;
};

function End({ wordList, handleWordList, handleFlag }: EndProps) {
  return (
    <div className="absolute w-full h-full bg-slate-400 opacity-90 flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold text-white">End</h2>
      <div>
        <p>작성한 단어 개수는 {wordList.length}개 입니다!</p>
      </div>
      <button
        onClick={(e) => {
          handleFlag('start');
          handleWordList([]);
        }}
      >
        다시 시작하기
      </button>
    </div>
  );
}

export default End;
