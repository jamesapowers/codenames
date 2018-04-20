import React from 'react';
import Row from './row';

class SpyMasterboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: this.createBoard(),
    };

    this.onTileClick = this.onTileClick.bind(this);
  }

  createBoard() {

  }

  onTileClick(tile) {
    console.log('you are the spymaster!')
  }

  render() {
    return ();
  }
}

export default SpyMasterboard;
