import React from 'react';
import Gamemode from './gamemode';

const Gamemodes = ({ onGamemodeClick }) => {

  return (
    <div className="gamemodes">
      {
        row.map((gamemode) => {
          return (
              <Tile
                onGamemodeClick={onGamemodeClick}
                gamemode={gamemode}
                >
              </Tile>
          );
        });
      }
    </div>
  );
}

export default Gamemodes;
