import React from 'react';
import Gamemodes from './gamemodes';

const Options = ({ onClickNewGame, onGamemodeClick, gamemodes }) => {
  return (
    <div>
      <button
        type='button'
        onClick={onClickNewGame()}>
        New Game
      </button>
      <Gamemodes
        onGamemodeClick={onGamemodeClick}
        gamemodes={gamemodes}
      />
    </div>
  );
}

export default Options;
