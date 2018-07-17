import React from 'react';
import Row from './row';
import Options from './options';
import wordBank from '../../data/default';
import Options from './options';

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

  placeSpyTiles(tiles) {
    let advantage = Math.round(Math.random());
    let red = 9;
    let blue = 8;
    if (advantage) {
      red = 8;
      blue = 9
    }
    let blackRow = this.cardRandomizer(tiles.length);
    let backCol = this.cardRandomizer(tiles.length);
    tiles[blackRow][backCol].status = 'black';
    while (red > 0 && blue > 0) {
      let redRow = this.cardRandomizer(tiles.length);
      let redCol = this.cardRandomizer(tiles.length);
      let blueRow = this.cardRandomizer(tiles.length);
      let blueCol = this.cardRandomizer(tiles.length);
      if (red !== 0 && tiles[redRow][redCol].status === 'blank') {
        red -= 1;
        tiles[redRow][redCol].status === 'red';
      }
      if (blue !== 0 && tiles[blueRow][blueCol].status === 'blank') {
        blue -= 1;
        tiles[blueRow][blueCol].status === 'blue';
      }
    }
    return tiles;
  }

  cardRandomizer(length) {
    return Math.floor(Math.random() * length)
  }

  onTileClick(tile) {
    console.log('you are the spymaster!')
  }

  onClickNewGame() {
    this.setState({
      board: this.createBoard(5),
    });
  }

  render() {
    return (
      <div>
        <Row board={this.state.board}></Row>
        <Options
          onClickNewGame={this.onTileClick}
        />
      </div>
    );
  }
}

export default SpyMasterboard;
