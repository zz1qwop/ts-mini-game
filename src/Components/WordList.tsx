import React from 'react';
import './WordList.css';

type WordListProps = {
  wordList: string[];
  handleWordList: React.Dispatch<React.SetStateAction<string[]>>;
};

function WordList({ wordList, handleWordList }: WordListProps) {
  return (
    <div className="flex flex-col w-full items-center mb-4">
      <p className="mb-2 font-bold text-slate-700">제출한 단어</p>
      <div className="wordListBox flex flex-wrap justify-center items-center w-5/6 h-16 overflow-y-scroll border-2 border-slate-700">
        {wordList.map((word, idx) => (
          <p key={idx} className="m-4 text-slate-700">
            {word}
          </p>
        ))}
      </div>
    </div>
  );
}

export default WordList;
