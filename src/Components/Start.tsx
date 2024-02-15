import React from 'react';

type Mode = 'start' | 'game' | 'end';

type StartProps = {
  handleFlag: React.Dispatch<React.SetStateAction<Mode>>;
};

function Start({ handleFlag }: StartProps) {
  return (
    <div>
      Start
      <button
        onClick={(e) => {
          handleFlag('game');
        }}
      >
        start
      </button>
    </div>
  );
}

export default Start;
