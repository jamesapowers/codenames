import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import DefaultBank from '../../data/default';
import HeroesBank from '../../data/heroes';
import Gameboard from './gameboard';
import SpyMasterboard from './spymasterboard';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: DefaultBank,
      gameboard: true,
      gamemodes: [
        {type: Classic, data: Gameboard},
        {type: SuperHeroes, data: SpyMasterboard},
      ],
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
        wordBank={this.state.data}
        gamemodes={this.state.gamemodes}
      />
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
// window.Amenities = App;
