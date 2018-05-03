import React from 'react';

const Tile = ({ tile, onTileClick }) => {
  return (
    <div>
      <div>
        {tile.word}
        {onTileClick}
      </div>
    </div>
  );
}

export default Tile;
