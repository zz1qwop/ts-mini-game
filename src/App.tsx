import React, { useState } from 'react';
import './App.css';
import Form from './Components/Form';
import WordList from './Components/WordList';
import Timer from './Components/Timer';
import Start from './Components/Start';
import End from './Components/End';

type Mode = 'start' | 'game' | 'end';

function App() {
  const [count, setCount] = useState<number>(0);
  const [flag, setFlag] = useState<Mode>('start');
  const [wordList, setWordList] = useState<string[]>([]);
  return (
    <div className="bg-white w-3/5 h-3/4 rounded absolute flex flex-col justify-around items-center">
      {flag === 'start' && <Start handleFlag={setFlag} />}
      <div className="font-bold text-4xl">초성 게임</div>
      {flag === 'game' && <Timer count={count} handleFlag={setFlag} />}
      <Form
        wordList={wordList}
        handleWordList={setWordList}
        handleCount={setCount}
      />
      <WordList wordList={wordList} handleWordList={setWordList} />
      {flag === 'end' && (
        <End
          wordList={wordList}
          handleWordList={setWordList}
          handleFlag={setFlag}
        />
      )}
    </div>
  );
}

export default App;
