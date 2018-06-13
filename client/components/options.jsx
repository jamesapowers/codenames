import React from 'react';
import Gamemode from './gamemode';

const Options = ({ onClickNewGame onGamemodeClick}) => {
  return (
    <div>
      <button
        type='button'
        onClick={onClickNewGame()}>
        New Game
      </button>
      <Gamemode
        onGamemodeClick={onGamemodeClick}
      />
    </div>
  );
}

export default Options;
