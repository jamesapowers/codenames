import React from 'react';
import Gamemode from './gamemode';

const Gamemodes = ({ onGamemodeClick }) => {

  return (
    <div className="gamemodes">
      {
        row.map((gamemode, idx) => {
          return (
              <Gamemode
                onGamemodeClick={onGamemodeClick}
                gamemode={gamemode}
                position={idx}>
              </Gamemode>
          );
        });
      }
    </div>
  );
}

export default Gamemodes;
