import React from 'react';
import Row from './row';

class Gameboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: this.createBoard(5),
    };

    this.onTileClick = this.onTileClick.bind(this);
  }

  createBoard(size) {
    let cards = new Array(size);
    let selected = {n: 1};
    return cards.map(col => {
      let row = new Array(size);
      return row.map(card => {
        let word = 'n';
        while (!selected[word]) {
          word = wordBank[Math.floor(Math.random() * wordBank.length)];
        }
        selected[word] = 1;
        return {word: word, status: 'blank',};
      });
    });
    return cards;
  }

  onTileClick(tile) {

  }

  render() {
    return (
      <div>
        <Row
          board={this.state.board}
          onTileClick={this.onTileClick}>
        </Row>
      </div>
    );
  }
}

export default Gameboard;
