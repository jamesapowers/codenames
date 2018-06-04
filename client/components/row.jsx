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
                row.map((tile, colIdx) => {
                  return (
                      <Tile
                        tile={tile}
                        onTileClick={onTileClick}
                        tileLoc={[rowIdx, colIdx]}>
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
