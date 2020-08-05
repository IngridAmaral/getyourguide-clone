import React from 'react';
import PropTypes from 'prop-types';
import { Splide } from '@splidejs/react-splide';
import './Slider.scss';
import TopLocationCard from '../top-location-card/TopLocationCard';
import { topAttractionsPropType } from '../../propTypes/topAttractionsType';
import { topCountriesPropType } from '../../propTypes/topCountriesType';

const SLIDER_OPTIONS = {
  perMove: 1,
  type: 'loop',
  gap: '1rem',
  pagination: false,
  breakpoints: {
    450: {
      perPage: 1,
      cover: true,
    },
    800: {
      perPage: 3,
      cover: false,
    },
    1400: {
      perPage: 4,
      cover: false,
    },
    2000: {
      perPage: 5,
      cover: false,
    },
  },
};

const Slider = ({ data, type }) => {
  if (!data) {
    return null;
  }

  return (
    <div className="slider-container">
      <Splide
        options={SLIDER_OPTIONS}
      >
        {data.map((attraction) => (
          <TopLocationCard
            key={attraction.destination + attraction.count}
            location={attraction.destination}
            count={attraction.activitiesCount}
            img={attraction.img}
            type={type}
          />
        ))}
      </Splide>
    </div>
  );
};

export default Slider;

Slider.propTypes = {
  type: PropTypes.string,
  data: PropTypes.oneOfType([topAttractionsPropType, topCountriesPropType]).isRequired,
};

Slider.defaultProps = {
  type: 'top-city',
};
