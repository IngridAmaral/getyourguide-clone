/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import './IntroCategorie.scss';

class IntroCategorie extends React.Component {
  render() {
    const { categorie } = this.props;
    const { name, img } = categorie;

    return (
      <div className="categorie-container">
        <img src={img} alt={name} />
        <div className="intro-categorie">
          <span className="categorie">{name}</span>
        </div>
      </div>
    );
  }
}

export default IntroCategorie;

IntroCategorie.propTypes = {
  categorie: PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
};
