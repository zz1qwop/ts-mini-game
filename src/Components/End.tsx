import React, { useRef } from 'react';
import { AiOutlineUndo } from 'react-icons/ai';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie, getElementAtEvent } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

type Mode = 'start' | 'game' | 'end';

type EndProps = {
  wordList: string[];
  handleWordList: React.Dispatch<React.SetStateAction<string[]>>;
  handleFlag: React.Dispatch<React.SetStateAction<Mode>>;
  wordGrade: string[][];
};

function End({ wordList, handleWordList, handleFlag, wordGrade }: EndProps) {
  const selectWords = (grade: string) => {
    return wordGrade.filter((wordArray) => wordArray[0] === grade);
  };
  const perfectWords = selectWords('perfect');
  const greatWords = selectWords('great');
  const goodWords = selectWords('good');
  const niceWords = selectWords('nice');

  type ColorType = {
    [index: string]: string;
    perfect: string;
    great: string;
    good: string;
    nice: string;
  };
  const gradeColor: ColorType = {
    perfect: '#CD1818',
    great: '#4E3636',
    good: '#321E1E',
    nice: '#116D6E',
  };
  const data = {
    labels: ['perfect', 'great', 'good', 'nice'],
    datasets: [
      {
        label: 'Grade',
        data: [
          perfectWords.length,
          greatWords.length,
          goodWords.length,
          niceWords.length,
        ],
        backgroundColor: [
          gradeColor.perfect,
          gradeColor.great,
          gradeColor.good,
          gradeColor.nice,
        ],
        borderWidth: 0,
      },
    ],
  };
  const options = {
    responsive: true,
  };

  // graph click event
  const chartRef = useRef();
  const wordRef = useRef<HTMLDivElement>(null);
  const onClick = (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    const chart = chartRef.current;
    if (!chart) return;
    const clickItem = data.labels[getElementAtEvent(chart, event)[0].index];
    let innerWord = '';
    switch (clickItem) {
      case 'perfect':
        innerWord += perfectWords.map((word) => word[1]).join(' ');
        break;
      case 'great':
        innerWord += greatWords.map((word) => word[1]).join(' ');
        break;
      case 'good':
        innerWord += goodWords.map((word) => word[1]).join(' ');
        break;
      case 'nice':
        innerWord += niceWords.map((word) => word[1]).join(' ');
        break;
    }
    wordRef.current!.innerHTML = innerWord;
    wordRef.current!.style.setProperty('color', gradeColor[clickItem]);
  };

  return (
    <div className="absolute w-full h-full sm:rounded bg-slate-50 flex flex-col justify-around items-center">
      <h2 className="text-4xl font-bold text-slate-700">END</h2>
      <div className="w-5/6 flex flex-col items-center">
        <div className="w-full h-60 flex justify-center">
          <Pie
            ref={chartRef}
            onClick={onClick}
            data={data}
            width="100%"
            options={options}
          />
        </div>
        <div
          ref={wordRef}
          className="font-bold mt-4 h-8 flex flex-wrap justify-center items-center"
        >
          그래프를 클릭하면 이곳에 해당하는 단어가 나타납니다.
        </div>
        <div className="flex font-bold text-xl text-slate-700 mt-2">
          작성한 단어 개수는&nbsp;
          <span className="bg-slate-700 pl-1 pr-1 text-white">
            {wordList.length}개
          </span>{' '}
          &nbsp;입니다!
        </div>
      </div>
      <button
        onClick={(e) => {
          handleFlag('start');
          handleWordList([]);
        }}
        className="flex items-center p-2 text-3xl font-bold bg-slate-700 text-white text-center"
      >
        <AiOutlineUndo />
        <p className="pl-2">다시 시작하기</p>
      </button>
    </div>
  );
}

export default End;
