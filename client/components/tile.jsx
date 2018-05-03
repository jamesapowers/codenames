import React from 'react';

const Tile = ({ tile, onTileClick, tileLoc }) => {
  let tileDisplay = tile.word;
  if (tile.status !== 'blank') {
    tileDisplay = '';
  }
  return (
    <div>
      <div
        className={tile.status}
        onClick={ () => (onTileClick(tileLoc)) }>
        {tileDisplay}
      </div>
    </div>
  );
}

export default Tile;
