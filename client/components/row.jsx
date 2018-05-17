import React from 'react';
import Tile from './tile';

const Row = ({ board, onTileClick }) => {
  return (
    <div>
      {
        board.map((row, rowIdx) => {
          let col = 0;
          return (
            <div className="row">
              {
                row.map((tile, tileIdx) => {
                  return (
                      <Tile
                      tile={tile}
                      onTileClick={onTileClick}
                      tileLoc={[rowIdx, tileIdx]}>
                      </Tile>
                  );
                });
              }
            </div>
          );
        });
      }
    </div>
  );
}

export default Row;
