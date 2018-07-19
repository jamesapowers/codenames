import React from 'react';
import Row from './row';
import Options from './options';

class Gameboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: this.createBoard(5),
      wordBank: this.props.wordBank,
      gamemode: this.props.gamemodes[0],
    };

    this.onTileClick = this.onTileClick.bind(this);
    this.onClickNewGame = this.onClickNewGame.bind(this);
    this.onGamemodeClick = this.onGamemodeClick.bind(this);
  }

  createBoard(size) {
    let cards = new Array(size);
    let selected = {n: 1};
    return cards.map(col => {
      let row = new Array(size);
      return row.map(card => {
        let word = 'n';
        while (!selected[word]) {
          word = this.state.wordBank[Math.floor(Math.random() * this.state.wordBank.length)];
        }
        selected[word] = 1;
        return {word: word, status: 'blank',};
      });
    });
    return cards;
  }

  onTileClick(loc) {
    let curStatus = this.state.board[loc[0]][loc[1]].status;
    if (curStatus === 'blank') {
      curStatus = 'red';
    } else if (curStatus === 'red') {
      curStatus = 'blue';
    } else if (curStatus === 'blue') {
      curStatus = 'neutral';
    } else {
      curStatus = 'black';
    }
    this.state.board[loc[0]][loc[1]].status = curStatus;
    this.setState({
      board: this.state.board,
    });
  }

  onClickNewGame() {
    this.setState({
      board: this.createBoard(5),
    });
  }

  onGamemodeClick(position) {
  }

  render() {
    return (
      <div>
        <Row
          board={this.state.board}
          onTileClick={this.onTileClick}>
        </Row>
        <Options
          onClickNewGame={this.onClickNewGame}
          gamemodes={this.props.gamemodes}
          onGamemodeClick={this.onGamemodeClick}
        />
      </div>
    );
  }
}

export default Gameboard;
