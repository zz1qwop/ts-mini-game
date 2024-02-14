import React from 'react';

type WordListProps = {
  wordList: string[];
  handleWordList: React.Dispatch<React.SetStateAction<string[]>>;
};

function WordList({ wordList, handleWordList }: WordListProps) {
  return (
    <div className="flex flex-wrap">
      {wordList.map((word) => (
        <p className="m-4">{word}</p>
      ))}
    </div>
  );
}

export default WordList;
