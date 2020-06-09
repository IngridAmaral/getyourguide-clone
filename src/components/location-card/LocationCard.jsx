/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import './LocationCard.scss';
import {
  boat,
  city,
  food,
  hopOnOff,
  localPin,
  nature,
  sightseeing,
  sun,
  tickets,
  transport,
} from '../../assets/imgs/cityIntro/cityIntro';
import IntroCategorie from './IntroCategorie';

const INTRO_CATEGORIES = [
  { name: 'Attraction tickets', img: tickets },
  { name: 'Sightseeing tours', img: sightseeing },
  { name: 'Food & drink', img: food },
  { name: 'Day trips', img: sun },
  { name: 'Local culture', img: localPin },
  { name: 'Boat tours', img: boat },
  { name: 'Transportation', img: transport },
  { name: 'Nature & adventure', img: nature },
  { name: 'Hop-on hop-off', img: hopOnOff },
  { name: 'City Cards', img: city },
];

const LocationCard = ({ description, destination, img }) => (
  <div className="location-card-container">
    <div className="img-container">
      <img src={img} alt={destination} />
    </div>
    <div className="intro-container">
      <span className="title">{destination}</span>
      <p>{description}</p>
      <div className="categories">
        { INTRO_CATEGORIES.map((categorie) => (
          <IntroCategorie
            key={categorie.name.split(' ').join('').toLocaleLowerCase()}
            name={categorie.name}
            img={categorie.img}
          />
        ))}
      </div>
    </div>
  </div>
);

export default LocationCard;

LocationCard.propTypes = {
  description: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
