import React from 'react';
import { connect } from 'react-redux';
import Header from '../header/Header';

const Results = () => (
  <div className="results-container">
    <div className="results-header">
      <Header enforceCurrencyAndLang showSearchBar />
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  tour: state.destinationsTours.tours,
});

export default connect(mapStateToProps)(Results);
