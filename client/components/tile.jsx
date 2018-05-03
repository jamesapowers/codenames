import React from 'react';

const Tile = ({ tile, onTileClick, tileLoc }) => {
  let tileDisplay = tile.word;
  if (tile.status !== 'blank') {
    tileDisplay = '';
  }
  return (
    <div
      className={tile.status}
      onClick={ () => (onTileClick(tileLoc)) }>
      {tileDisplay}
    </div>
  );
}

export default Tile;
