import './App.css';
import React from 'react';
import pokemons from './data';
import Pokedex from './Pokedex';
import pokemonlogo from './pokemonlogo.png';

class App extends React.Component {
  render () {
    return  <div className="App">
    <header>
    <img src={pokemonlogo} alt="logo" />
    </header>
    <Pokedex pokemons={pokemons} />
  </div>
  }
}

export default App;
