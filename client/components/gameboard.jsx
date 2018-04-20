import React from 'react';
import Row from './row';

class Gameboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: this.createBoard(),
    };

    this.onTileClick = this.onTileClick.bind(this);
  }

  createBoard(data) {

  }

  onTileClick(tile) {

  }

  render() {
    return ();
  }
}

export default Gameboard;
