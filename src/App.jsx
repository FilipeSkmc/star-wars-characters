import React, { Component } from 'react';
import CharactersList from './components/CharactersList';
import Filters from './components/Filters';

import { personagens } from './data/characters';

export default class App extends Component {
  state = {
    filterName: '',
    filterPlanets: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { filterName, filterPlanets } = this.state;
    return (
      <main className="main">
        <h1>STAR WARS - Personagens</h1>
        <Filters
          filterName={ filterName }
          filterPlanets={ filterPlanets }
          handleChange={ this.handleChange }
        />
        <CharactersList
          data={ personagens }
          filterName={ filterName }
          filterPlanets={ filterPlanets }
        />
      </main>
    );
  }
}
