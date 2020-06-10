import React from 'react';
import './TopCity.scss';
import PropTypes from 'prop-types';

const TopCity = ({ city, active }) => (
  <button type="button" className={`top-city-container ${active ? 'active' : ''}`}>
    <span>{city}</span>
  </button>
);

export default TopCity;

TopCity.propTypes = {
  city: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};
