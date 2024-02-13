import React from 'react';
import './App.css';
import Timer from './Components/Timer';
import Form from './Components/Form';
import WordList from './Components/WordList';

function App() {
  return (
    <div className="bg-white w-3/5 h-3/4 rounded flex flex-col justify-around items-center">
      <div className="font-bold text-4xl">초성 게임</div>
      <Timer />
      <Form />
      <WordList />
    </div>
  );
}

export default App;
