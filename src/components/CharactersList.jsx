import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Character from './Character';
import './CharactersList.css';

export default class CharactersList extends Component {
  render() {
    const { data, filterName, filterPlanets } = this.props;
    const filtered = data.filter(
      (personagem) => personagem.nome
        .toLowerCase().includes(filterName.toLowerCase())
        && personagem.altura >= Number(filterPlanets),
    );
    return (
      <div className="characters-list">
        {
          filtered.length > 0 ? (
            filtered.map((personagem) => (
              <Character key={ personagem.nome } personagem={ personagem } />
            ))
          ) : (
            <p>Nenhum encontrado</p>
          )
        }
      </div>
    );
  }
}

CharactersList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      map: PropTypes.func,
      filter: PropTypes.func,
    }),
  ).isRequired,
  filterName: PropTypes.string.isRequired,
  filterPlanets: PropTypes.string.isRequired,
};
