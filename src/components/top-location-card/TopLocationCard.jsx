import React from 'react';
import PropTypes from 'prop-types';
import './TopLocationCard.scss';

const TopLocationCard = ({
  location, count, img, isSlider,
}) => (
  <div className="top-location-card-container">
    <img src={img} alt={location} />
    <div className="top-location-details">
      <span>{location}</span>
      <span className="count">{`${count} tours & activities`}</span>
    </div>
  </div>
);

export default TopLocationCard;

TopLocationCard.propTypes = {
  location: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  isSlider: PropTypes.bool,
};

TopLocationCard.defaultProps = {
  isSlider: false,
};
