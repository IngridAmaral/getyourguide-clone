import React from 'react';
import './NoResults.scss';

const NoResults = () => (
  <div className="no-results-container">
    <span className="title">No Results</span>
    <span className="subtitle">We searched high and low but we couldn&apos;t find any results.</span>
    <span className="small-contact">
      Try searching for something else, or
      {' '}
      <span className="get-in-touch">get in touch</span>
      {' '}
      and we&apos;ll help you find the perfect experience.
    </span>
  </div>
);

export default NoResults;
