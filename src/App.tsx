import React, { useState } from 'react';
import './App.css';
import Timer from './Components/Timer';
import Form from './Components/Form';
import WordList from './Components/WordList';

function App() {
  const [wordList, setWordList] = useState<string[]>([]);
  return (
    <div className="bg-white w-3/5 h-3/4 rounded flex flex-col justify-around items-center">
      <div className="font-bold text-4xl">초성 게임</div>
      <Timer />
      <Form handleWordList={setWordList} />
      <WordList wordList={wordList} handleWordList={setWordList} />
    </div>
  );
}

export default App;
