import React, { useState } from 'react';
import './App.css';
import Form from './Components/Form';
import WordList from './Components/WordList';
import Timer from './Components/Timer';
import Start from './Components/Start';
import End from './Components/End';
import { useInitial } from './context/InitialContext';

type Mode = 'start' | 'game' | 'end';

function App() {
  const [count, setCount] = useState<number>(0);
  const [flag, setFlag] = useState<Mode>('start');
  const [wordList, setWordList] = useState<string[]>([]);
  const { word } = useInitial();

  // Timer
  const DEFAULT_TIME = 8;
  const [time, setTime] = useState<number>(DEFAULT_TIME);

  return (
    <div className="bg-slate-50 w-full sm:w-3/5 h-3/4 pt-4 pb-4 sm:rounded absolute flex flex-col justify-around items-center">
      {flag === 'start' && <Start handleFlag={setFlag} />}
      <div className="mt-8 p-2 w-5/6 font-bold text-4xl bg-slate-700 text-white text-center">
        {word}
      </div>
      {flag === 'game' && (
        <Timer
          count={count}
          handleFlag={setFlag}
          time={time}
          handleTime={setTime}
          defaultTime={DEFAULT_TIME}
        />
      )}
      {flag === 'game' && (
        <Form
          wordList={wordList}
          handleWordList={setWordList}
          handleCount={setCount}
          time={time}
          defaultTime={DEFAULT_TIME}
        />
      )}
      {flag === 'game' && (
        <WordList wordList={wordList} handleWordList={setWordList} />
      )}
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
