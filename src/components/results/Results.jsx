import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../header/Header';
import ResultsItems from './ResultsItems';
import FilterSection from './FilterSection';
import NoResults from './NoResults';
import Newsletter from '../newsletter/Newsletter';
import Footer from '../footer/Footer';
import './Results.scss';

const SERVICES = [
  'Private Tour',
  'Wheelchair accessible',
  'Skip the line',
  'Hotel pickup possible',
  'Small group',
  'Additional health',
];

const DURATION = [
  '0-3 hours',
  '3-5 hours',
  '5-7 hours',
  'Full day (7 + hours)',
  'Multi Day',
];

const PRICE = ['0 - 25', '25 - 50', '50 - 75', '75 - 100', '100 +'];

export const ResultsClass = ({ tours, match }) => (
  <div className="results-container">
    <div className="results-header">
      <Header enforceCurrencyAndLang showSearchBar />
    </div>
    <div className="sort">
      <div className="results-found">
        <span className="searched-input">
          {match.params.city}
        </span>
        <span className="results-number">
          ,
          {' '}
          {tours.length}
          {' '}
          tours found.
        </span>
      </div>
      <div className="sort-by">
        <span>Sort by:</span>
        <select id="sort-by">
          <option value="Recommended">Recommended</option>
          <option value="Price (Low to High)">Price (Low to High)</option>
          <option value="Price (High to Low)">Price (High to Low)</option>
          <option value="Rating (High to Low)">Rating (High to Low)</option>
        </select>
      </div>
    </div>
    <div className="main-content">
      <div className="filter-content">
        <FilterSection
          title="Price"
          options={PRICE}
        />
        <FilterSection
          title="Duration"
          options={DURATION}
        />
        <FilterSection
          title="Services"
          options={SERVICES}
        />
      </div>
      {tours.length ? <ResultsItems tours={tours} /> : <NoResults /> }
    </div>
    <Newsletter />
    <Footer />
  </div>
);

ResultsClass.propTypes = {
  tours: PropTypes.arrayOf(PropTypes.object),
  match: PropTypes.exact({
    isExact: PropTypes.bool,
    params: PropTypes.shape({ city: PropTypes.string }),
    path: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

ResultsClass.defaultProps = {
  tours: [],
};

const mapStateToProps = (state) => ({
  tours: state.destinationsTours.tours,
});

export default connect(mapStateToProps)(ResultsClass);
