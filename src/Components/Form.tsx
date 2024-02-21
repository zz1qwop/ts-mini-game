import React, { useEffect, useRef, useState } from 'react';
import { useInitial } from '../context/InitialContext';

type FormProps = {
  wordList: string[];
  handleWordList: React.Dispatch<React.SetStateAction<string[]>>;
  handleCount: React.Dispatch<React.SetStateAction<number>>;
};

function Form({ wordList, handleWordList, handleCount }: FormProps) {
  const { initial, word } = useInitial();

  const [userWord, setUserword] = useState<string[]>(['', '']);
  const [info, setInfo] = useState<string>('');
  const firstWord = useRef<HTMLInputElement>(null);

  useEffect(() => {
    firstWord.current!.focus();
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'first') {
      if (value.length > 1) {
        setUserword([value[0], userWord[1]]);
      } else {
        setUserword([value, userWord[1]]);
      }
    } else {
      if (value.length > 1) {
        setUserword([userWord[0], value[0]]);
      } else {
        setUserword([userWord[0], value]);
      }
    }
  };
  const handleSubmit = () => {
    // 초성이 맞으면 제출 성공, 아니면 동작 없음
    // 단어가 입력되지 않았을 때 ('' or 초성만 있을 때) 제출 X
    if (
      userWord[0] === '' ||
      initial.includes(userWord[0]) ||
      userWord[1] === '' ||
      initial.includes(userWord[1])
    ) {
      return;
    }
    // 이미 입력된 단어일 경우 초기화하고 제출 X
    if (wordList.includes(userWord.join(''))) {
      setUserword(['', '']);
      setInfo('이미 입력된 단어입니다.');
      setTimeout(() => {
        setInfo('');
      }, 1000);
      firstWord.current!.focus();
      return;
    }

    const ga = 44032; // "가"의 유니코드
    const first = Math.trunc((userWord[0].charCodeAt(0) - ga) / 588);
    const second = Math.trunc((userWord[1].charCodeAt(0) - ga) / 588);

    if (initial[first] === word[0] && initial[second] === word[1]) {
      handleWordList((prev) => [...prev, userWord.join('')]);
      setUserword(['', '']);
      handleCount((prev) => prev + 1);
      firstWord.current!.focus();
    }
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="mt-2 h-5 text-xs text-slate-700">
        Enter를 누르면 단어가 제출됩니다.
      </p>
      <form action="submit" className="flex justify-center items-center">
        <input
          type="text"
          className="w-24 h-24 bg-gray-200 mr-1.5 text-center"
          placeholder={word[0]}
          name="first"
          value={userWord[0]}
          onChange={onChange}
          onKeyDown={handleEnter}
          ref={firstWord}
        />
        <input
          type="text"
          className="w-24 h-24 bg-gray-200 text-center"
          placeholder={word[1]}
          name="second"
          value={userWord[1]}
          onChange={onChange}
          onKeyDown={handleEnter}
        />
      </form>
      <p className="mt-2 h-5 text-xs text-slate-700">{info}</p>
    </div>
  );
}

export default Form;
