import React from 'react';
import PropTypes from 'prop-types';
import './TopLocationCard.scss';

const TopLocationCard = ({
  location, count, img, type,
}) => (
  <div className={`top-location-card-container ${type}`}>
    <img src={img} alt={location} />
    <div className="top-location-details">
      <span className="title">{location}</span>
      <span className="count">{`${count} tours & activities`}</span>
    </div>
  </div>
);

export default TopLocationCard;

TopLocationCard.propTypes = {
  location: PropTypes.string.isRequired,
  count: PropTypes.number,
  img: PropTypes.string.isRequired,
  type: PropTypes.string,
};

TopLocationCard.defaultProps = {
  type: 'top-city',
  count: null,
};
