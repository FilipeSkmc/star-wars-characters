import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './Character.css';

export default class Character extends Component {
  render() {
    const { personagem: { nome, altura, planetaNatal, image } } = this.props;
    return (
      <div className="character">
        <h3>{nome}</h3>
        <img src={ image } alt="nome" />
        <p>
          Altura:
          {' '}
          {altura}
        </p>
        <p>
          Planeta natal:
          {' '}
          {planetaNatal}
        </p>
      </div>
    );
  }
}

Character.propTypes = {
  personagem: PropTypes.shape({
    altura: PropTypes.number,
    nome: PropTypes.string,
    planetaNatal: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};
