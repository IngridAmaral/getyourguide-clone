import React from 'react';
import PropTypes from 'prop-types';
import './ResultsItems.scss';
import TourCard from '../tour-card/TourCard';

const ResultsItems = ({ tours }) => (
  <div className="results-items-container">
    {tours.map((tour) => (
      <TourCard key={tour.tourId} isResult activity={tour} />
    ))}
  </div>
);

ResultsItems.propTypes = {
  tours: PropTypes.arrayOf(PropTypes.object),
};

ResultsItems.defaultProps = {
  tours: [],
};


export default ResultsItems;
