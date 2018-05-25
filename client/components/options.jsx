import React from 'react';

const Options = ({ onClickNewGame }) => {
  return (
    <div>
      <button
        type='button'
        onClick={onClickNewGame()}>
        New Game
      </button>
    </div>
  );
}

export default Options;
