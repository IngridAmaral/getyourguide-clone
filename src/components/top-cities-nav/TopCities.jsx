import React from 'react';
import TopCity from './TopCity';
import './TopCities.scss';
// import PropTypes from 'prop-types';

export const CITIES = [
  { city: 'Amsterdam', active: false },
  { city: 'Barcelona', active: false },
  { city: 'Berlin', active: false },
  { city: 'Dubai', active: false },
  { city: 'London', active: false },
  { city: 'New York City', active: false },
  { city: 'Paris', active: true },
  { city: 'Rome', active: false },
];

const TopCities = ({ cities }) => (
  <div className="top-cities-container">
    <span className="title">Explore our top destinations</span>
    <div className="top-cities">
      {CITIES.map((local) => (
        <TopCity
          key={local.city}
          city={local.city}
          active={local.active}
        />
      ))}
    </div>
  </div>
);

export default TopCities;

// TopCities.propTypes = {
//   cities: PropTypes.string.isRequired,
// };
