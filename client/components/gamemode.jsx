import React from 'react';

const Gamemode = ({ onGamemodeClick, gamemode }) => {

  return (
    <div
      onClick={ () => (onGamemodeClick(tileLoc)) }>
      {gamemode}
    </div>
  );
}

export default Gamemode;
