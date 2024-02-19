import React from 'react';
import './WordList.css';

type WordListProps = {
  wordList: string[];
  handleWordList: React.Dispatch<React.SetStateAction<string[]>>;
};

function WordList({ wordList, handleWordList }: WordListProps) {
  return (
    <div className="wordListBox flex flex-wrap justify-center items-center w-5/6 h-16 overflow-y-scroll border-2 border-slate-700">
      {wordList.map((word) => (
        <p className="m-4 text-slate-700">{word}</p>
      ))}
    </div>
  );
}

export default WordList;
