import React from 'react';
import './TopCity.scss';
import PropTypes from 'prop-types';
import { capitalCase } from '../../utils/capital-case';

const AVAILABLE_CITIES = ['barcelona', 'new-york-city', 'paris'];

const TopCity = ({ city, activeCity, fetchCity }) => (
  <button
    type="button"
    disabled={!AVAILABLE_CITIES.includes(city)}
    onClick={() => fetchCity(city === 'new-york-city' ? 'new-york' : city)}
    className={`top-city-container ${activeCity === city ? 'active' : ''} ${city}`}
  >
    <span>{capitalCase(city)}</span>
  </button>
);

export default TopCity;

TopCity.propTypes = {
  city: PropTypes.string.isRequired,
  activeCity: PropTypes.string.isRequired,
  fetchCity: PropTypes.func.isRequired,
};
