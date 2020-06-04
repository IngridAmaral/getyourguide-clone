import React from 'react';
import PropTypes from 'prop-types';

import './Stamp.scss';

const STAMPS = {
  default: 'GetYourGuide Original',
  gygOriginal: 'GetYourGuide Original',
};

const getStampKey = (key) => {
  if (STAMPS[key] === undefined) {
    return 'default';
  }
  return key;
};

const Stamp = ({ position, key, page }) => {
  const stampKey = getStampKey(key);
  return (
    <div className="stamp-container">
      <span className={`${stampKey} ${position} ${page}`}>{STAMPS[stampKey]}</span>
    </div>
  );
};

export default Stamp;

Stamp.propTypes = {
  position: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
};
