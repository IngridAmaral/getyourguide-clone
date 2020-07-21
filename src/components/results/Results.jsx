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

const SELECT_SORT = [
  'Recommended',
  'Price (Low to High)',
  'Price (High to Low)',
  'Rating (High to Low)',
];

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
  { name: '25 - 50', id: '25-50' },
  { name: '50 - 75', id: '50-75' },
  { name: '75 - 100', id: '75-100' },
  { name: '100 +', id: '100' },
];

export const SECTIONS = [
  { title: 'Price', options: PRICE },
  { title: 'Duration', options: DURATION },
  { title: 'Services', options: SERVICES },
];

class Results extends React.Component {
  state = {
    openFilters: false,
    optionsSelected: {},
  };

  componentDidMount() {
    const { match } = this.props;

    this.fetchResults(match.params.city);
  }

  fetchResults = async (path) => {
    const { fetchDestinationsTours } = this.props;

    fetchDestinationsTours(path);
  }

  filterOptions = (e, history, title, optionId) => {
    const { match } = this.props;
    const { optionsSelected } = this.state;
    const currentUrlParams = new URLSearchParams(history.location.search);

    if (optionId === optionsSelected[title]) {
      this.setState((state) => ({
        optionsSelected: { ...state.optionsSelected, [title]: '' },
      }));

      currentUrlParams.delete(title);
    } else {
      this.setState((state) => ({
        optionsSelected: { ...state.optionsSelected, [title]: optionId },
      }));

      currentUrlParams.set(title, optionId);
    }

    this.fetchResults(`${match.params.city}?${currentUrlParams}`);
    history.push(`${history.location.pathname}?${currentUrlParams}`);
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
              {SELECT_SORT.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
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
            {SECTIONS.map((section) => (
              <FilterSection
                key={section.title}
                title={section.title}
                options={section.options}
                optionSelected={optionsSelected[section.title]}
                filterOptions={this.filterOptions}
              />
            ))}
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
