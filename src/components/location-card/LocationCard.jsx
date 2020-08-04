import React from 'react';
import './LocationCard.scss';
import { topCityPropType } from '../../propTypes/topCityType';
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
} from '../../constants/imgs/cityIntro';
import { capitalCase } from '../../utils/capital-case';
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

const LocationCard = ({ location }) => {
  const { destination, description, img } = location;
  return (
    <div className="location-card-container">
      <div className="img-container">
        <img src={img} alt={destination} />
      </div>
      <div className="intro-container">
        <span className="title">{capitalCase(destination)}</span>
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
};

export default LocationCard;

LocationCard.propTypes = {
  location: topCityPropType.isRequired,
};
