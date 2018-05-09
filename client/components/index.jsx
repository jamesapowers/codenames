import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import data from '../../data/default';
import Gameboard from './gameboard';
import SpyMasterboard from './spymasterboard';
import Options from './options';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      gameboard: true,
    };
    this.onTileClick = this.onTileClick.bind(this);
  }

  componentDidMount() {

  }

  onClickNewGame() {
    
  }

  render() {
    return (
      <Options onClickNewGame={this.onTileClick} />
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
// window.Amenities = App;
