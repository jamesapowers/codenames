import React from 'react';
import Row from './row';
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
    let selected = {n: 1};
    return cards.map(col => {
      let row = new Array(size);
      return row.map(card => {
        let word = 'n';
        while (selected[word]) {
          word = wordBank[Math.floor(Math.random() * wordBank.length)];
        }
        return {word: word, status: 'blank',};
      });
    });
    return cards;
  }

  onTileClick(tile) {
    console.log('you are the spymaster!')
  }

  render() {
    return ();
  }
}

export default SpyMasterboard;
