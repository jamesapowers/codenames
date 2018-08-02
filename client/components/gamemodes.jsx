import React from 'react';
import Gamemode from './gamemode';

const Gamemodes = ({ gamemodes, onGamemodeClick }) => {

  return (
    <div className="gamemodes">
      {
        gamemodes.map((gamemode, idx) => {
          return (
              <Gamemode
                onGamemodeClick={onGamemodeClick}
                gamemode={gamemode[idx].type}
                position={idx}>
              </Gamemode>
          );
        });
      }
    </div>
  );
}

export default Gamemodes;
