import React from 'react';

const Gamemode = ({ onGamemodeClick, gamemode, position }) => {

  return (
    <div
      onClick={ () => (onGamemodeClick(position)) }>
      {gamemode}
    </div>
  );
}

export default Gamemode;
