import React from 'react';

type Mode = 'start' | 'game' | 'end';

type StartProps = {
  handleFlag: React.Dispatch<React.SetStateAction<Mode>>;
};

function Start({ handleFlag }: StartProps) {
  return (
    <div className="absolute w-full h-full bg-slate-400 opacity-90 flex justify-center items-center">
      <button
        onClick={(e) => {
          handleFlag('game');
        }}
        className="text-3xl font-bold text-white"
      >
        start
      </button>
    </div>
  );
}

export default Start;
