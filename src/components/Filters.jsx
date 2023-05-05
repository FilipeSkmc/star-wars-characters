import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './Filters.css';

class Filters extends Component {
  render() {
    const { filterName, filterPlanets, handleChange } = this.props;
    return (
      <div className="filters">
        <h2>Filtros</h2>
        <form>
          <label htmlFor="filterName">
            <input
              type="text"
              name="filterName"
              id="filterName"
              placeholder="Nome"
              value={ filterName }
              onChange={ handleChange }
            />
          </label>
          <label htmlFor="filterPlanets">
            <input
              type="number"
              name="filterPlanets"
              id="filterPlanets"
              placeholder="Altura >= "
              value={ filterPlanets }
              onChange={ handleChange }

            />
          </label>
        </form>
      </div>
    );
  }
}
export default Filters;

Filters.propTypes = {
  filterName: PropTypes.string.isRequired,
  filterPlanets: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
