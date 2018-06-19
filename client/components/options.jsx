import React from 'react';
import Gamemodes from './gamemodes';

const Options = ({ onClickNewGame onGamemodeClick}) => {
  return (
    <div>
      <button
        type='button'
        onClick={onClickNewGame()}>
        New Game
      </button>
      <Gamemodes
        onGamemodeClick={onGamemodeClick}
      />
    </div>
  );
}

export default Options;
