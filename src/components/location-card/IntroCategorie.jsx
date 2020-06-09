import React from 'react';
import PropTypes from 'prop-types';
import './IntroCategorie.scss';

const IntroCategorie = ({ name, img }) => (
  <div className="categorie-container">
    <img src={img} alt={name} />
    <div className="intro-categorie">
      <span className="categorie">{name}</span>
    </div>
  </div>
);

export default IntroCategorie;

IntroCategorie.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
