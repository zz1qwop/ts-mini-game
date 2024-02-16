import React, { createContext, useContext, useState } from 'react';

type State = {
  initial: string[];
  word: string[];
  setWord: React.Dispatch<React.SetStateAction<string[]>>;
};
const InitialContext = createContext<State | null>(null);

export function InitialProvider({ children }: { children: React.ReactNode }) {
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

  const [word, setWord] = useState<string[]>([
    initial[Math.floor(Math.random() * initial.length)],
    initial[Math.floor(Math.random() * initial.length)],
  ]);

  return (
    <InitialContext.Provider value={{ initial, word, setWord }}>
      {children}
    </InitialContext.Provider>
  );
}

export function useInitial() {
  const context = useContext(InitialContext);
  if (!context) throw new Error('Cannot find InitialContext');
  return context;
}
