import React, { useState } from 'react';

const initial = [
  'ㄱ',
  'ㄲ',
  'ㄴ',
  'ㄷ',
  'ㄸ',
  'ㄹ',
  'ㅁ',
  'ㅂ',
  'ㅃ',
  'ㅅ',
  'ㅆ',
  'ㅇ',
  'ㅈ',
  'ㅉ',
  'ㅊ',
  'ㅋ',
  'ㅌ',
  'ㅍ',
  'ㅎ',
];

function Form() {
  const [word, setWord] = useState<string[]>([
    initial[Math.floor(Math.random() * initial.length)],
    initial[Math.floor(Math.random() * initial.length)],
  ]);
  return (
    <>
      <div>{word}</div>
      <div>form</div>
    </>
  );
}

export default Form;
