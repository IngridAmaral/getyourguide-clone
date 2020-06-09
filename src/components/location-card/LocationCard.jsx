/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { topLocationPropType } from '../../propTypes/topContentType';
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

const LOCATION_CARD = 'location-card';
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

class LocationCard extends React.Component {
  render() {
    const { location } = this.props;
    const {
      description, destination, img,
    } = location;
    return (
      <div className={`${LOCATION_CARD}-container`}>
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
                categorie={categorie}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default LocationCard;

LocationCard.propTypes = {
  location: topLocationPropType.isRequired,
};
