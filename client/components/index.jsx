import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import data from '../../data/default';
import Gameboard from './gameboard';
import SpyMasterboard from './spymasterboard';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      gameboard: true,
      gamemodes: 'Classic',
    };
    this.onTileClick = this.onTileClick.bind(this);
  }

  componentDidMount() {

  }

  render() {
    let Board = SpyMasterboard;
    if (gameboard) {
      Board = Gameboard;
    }
    return (
      <Board
        wordBank={this.state.data};
      />
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
// window.Amenities = App;
