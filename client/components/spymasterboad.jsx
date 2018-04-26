import React from 'react';
import Row from './row';
import Options from './options';
import wordBank from '../../data/default';

class SpyMasterboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: this.createBoard(5),
    };

    this.onTileClick = this.onTileClick.bind(this);
  }

  createBoard(size) {
    let cards = new Array(size);
    return cards.map(col => {
      let row = new Array(size);
      return row.map(card => {
        return {word: '', status: 'blank',};
      });
    });
    cards = this.placeSpyTiles(cards);
    return cards;
  }

  placeSpyTiles(cards) {
    let advantage = Math.round(Math.random());
    let red = 9;
    let blue = 8;
    if (advantage) {
      red = 8;
      blue = 9
    }
    while (red > 0 && blue > 0) {
      let redRow = Math.floor(Math.random() * cards.length);
      let redCol = Math.floor(Math.random() * cards.length);
      let blueRow = Math.floor(Math.random() * cards.length);
      let blueCol = Math.floor(Math.random() * cards.length);
      if (red !== 0 && cards[redRow][redCol].status === 'blank') {
        red -= 1;
        cards[redRow][redCol].status === 'red';
      }
      if (blue !== 0 && cards[blueRow][blueCol].status === 'blank') {
        blue -= 1;
        cards[blueRow][blueCol].status === 'blue';
      }
    }
    return cards;
  }

  onTileClick(tile) {
    console.log('you are the spymaster!')
  }

  render() {
    return (
      <div>
      <Row board={this.state.board}></Row>
      <Options></Options>
      </div>
    );
  }
}

export default SpyMasterboard;
