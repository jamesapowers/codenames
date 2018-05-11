import React from 'react';
import Tile from './tile';

const Row = ({ board, onTileClick }) => {
  return (
    <div>
      {
        board.map(row => {
          return (
            row.map(tile => {
              return (
                  <Tile
                  tile={tile}
                  onTileClick={onTileClick}>
                  </Tile>
              );
            });
          );
        });
      }
    </div>
  );
}

export default Row;
