import React from 'react';
import PropTypes from 'prop-types';
import './Stamp.scss';

const STAMPS = {
  default: 'Find Your Next Adventure',
  gygOriginal: 'GetYourGuide Original',
};

const getStampKey = (sentKey) => {
  if (!STAMPS[sentKey]) {
    return 'default';
  }
  return sentKey;
};

const Stamp = ({ position, sentKey, page }) => {
  const stampKey = getStampKey(sentKey);
  return (
    <div className="stamp-container">
      <span className={`${stampKey} ${position} ${page}`}>{STAMPS[stampKey]}</span>
    </div>
  );
};

export default Stamp;

Stamp.propTypes = {
  position: PropTypes.string.isRequired,
  sentKey: PropTypes.string,
  page: PropTypes.string.isRequired,
};

Stamp.defaultProps = {
  sentKey: 'default',
};
