import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { fetchDestinationsToursAC } from '../../redux/actions/getDestinationsTours';
import Header from '../header/Header';
import ResultsItems from './ResultsItems';
import FilterSection from './FilterSection';
import NoResults from './NoResults';
import Newsletter from '../newsletter/Newsletter';
import Footer from '../footer/Footer';
import { ReactComponent as Caret } from '../../assets/svgs/caret.svg';
import './Results.scss';

export const SERVICES = [
  { name: 'Private Tour', id: 'private-tour' },
  { name: 'Wheelchair accessible', id: 'wheelchair-accessible' },
  { name: 'Skip the line', id: 'skip-the-line' },
  { name: 'Hotel pickup possible', id: 'hotel-pickup' },
  { name: 'Small group', id: 'small-group' },
  { name: 'Additional health', id: 'additional-health' },
];

export const DURATION = [
  { name: '0-3 hours', id: '0-3' },
  { name: '3-5 hours', id: '3-5' },
  { name: '5-7 hours', id: '5-7' },
  { name: 'Full day (7 + hours)', id: '7' },
  { name: 'Multi Day', id: 'n' },
];

export const PRICE = [
  { name: '0 - 25', id: '0-25' },
  { name: '25 - 50', id: '25-30' },
  { name: '50 - 75', id: '50-75' },
  { name: '75 - 100', id: '75-100' },
  { name: '100 +', id: '100' },
];

class Results extends React.Component {
  state = {
    openFilters: false,
    optionsSelected: {},
  };

  filterOptions = (e, history, title, optionId) => {
    const { match } = this.props;
    e.preventDefault();
    const { fetchDestinationsTours } = this.props;

    const currentUrlParams = new URLSearchParams(history.location.search);
    currentUrlParams.set(title, e.target.value);
    fetchDestinationsTours(`${match.params.city}?${currentUrlParams}`);

    history.push(`${history.location.pathname}?${currentUrlParams}`);


    this.setState((state) => ({
      optionsSelected: { ...state.optionsSelected, [title]: optionId },
    }));
  };

  openFilters = () => {
    this.setState((state) => ({ openFilters: !state.openFilters }));
  };

  render() {
    const { tours, match } = this.props;
    const { openFilters, optionsSelected } = this.state;
    return (
      <div className="results-container">
        <div className="results-header">
          <Header enforceCurrencyAndLang showSearchBar />
        </div>
        <div className="sort">
          <div className="results-found">
            <span className="searched-input">{match.params.city}</span>
            <span className="results-number">
              {`, ${tours.length} tours found.`}
            </span>
          </div>
          <div className="sort-by">
            <span>Sort by:</span>
            <select id="sort-by">
              <option key="Recommended" value="Recommended">
                Recommended
              </option>
              <option key="Price(Low to High)" value="Price (Low to High)">
                Price (Low to High)
              </option>
              <option key="Price(High to Low)" value="Price (High to Low)">
                Price (High to Low)
              </option>
              <option
                key="Rating (High to Low)"
                value="Rating (High to Low)"
              >
                Rating (High to Low)
              </option>
            </select>
          </div>
        </div>
        <div className="main-content">
          <div className="open-filters" onClick={this.openFilters}>
            <span>Filter results</span>
            <Caret />
          </div>
          <div
            className={`filter-content ${openFilters ? ' show' : ' hide'}`}
          >
            <FilterSection
              key="price"
              title="Price"
              options={PRICE}
              city={match.params.city}
              optionsSelected={optionsSelected.Price ? optionsSelected.Price : ''}
              filterOptions={this.filterOptions}
            />
            <FilterSection
              key="duration"
              title="Duration"
              options={DURATION}
              city={match.params.city}
              optionsSelected={optionsSelected.Duration ? optionsSelected.Duration : ''}
              filterOptions={this.filterOptions}
            />
            <FilterSection
              key="services"
              title="Services"
              options={SERVICES}
              city={match.params.city}
              optionsSelected={optionsSelected.Services ? optionsSelected.Services : ''}
              filterOptions={this.filterOptions}
            />
          </div>
          {tours.length ? <ResultsItems tours={tours} /> : <NoResults />}
        </div>
        <Newsletter />
        <Footer />
      </div>
    );
  }
}

Results.propTypes = {
  tours: PropTypes.arrayOf(PropTypes.object),
  match: PropTypes.exact({
    isExact: PropTypes.bool,
    params: PropTypes.shape({ city: PropTypes.string }),
    path: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
  fetchDestinationsTours: PropTypes.func.isRequired,
};

Results.defaultProps = {
  tours: [],
};

const mapStateToProps = (state) => ({
  tours: state.destinationsTours.tours,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    fetchDestinationsTours: fetchDestinationsToursAC,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(Results);
