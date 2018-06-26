import React from 'react';
import Gamemode from './gamemode';

const Gamemodes = ({ onGamemodeClick }) => {

  return (
    <div className="gamemodes">
      {
        row.map((gamemode) => {
          return (
              <Gamemode
                onGamemodeClick={onGamemodeClick}
                gamemode={gamemode}
                >
              </Gamemode>
          );
        });
      }
    </div>
  );
}

export default Gamemodes;
