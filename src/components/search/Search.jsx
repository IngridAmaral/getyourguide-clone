import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { destinationsToursReducer } from '../../redux/reducers/destinationsTours';
import { fetchDestinationsToursAC } from '../../redux/actions/getDestinationsTours';
import './Search.scss';
import { kebabCase } from '../../utils/kebab-case';
import AutoComplete from './AutoComplete';
import Button from '../button/Button';
import { ReactComponent as SearchIcon } from '../../assets/svgs/search.svg';

const SUGGESTIONS = ['Paris', 'Paris, France', 'New York', 'New York City', 'Barcelona', 'Barcelona, Spain'];
const CITIES_SUGGESTIONS = [
  {
    city: 'paris',
    suggestions: ['Paris', 'Paris, France'],
  },
  {
    city: 'barcelona',
    suggestions: ['Barcelona', 'Barcelona, Spain'],
  },
  {
    city: 'new-york',
    suggestions: ['New York', 'New York City'],
  },
];

export class SearchClass extends React.Component {
  state = {
    activeSuggestion: 0,
    filteredSuggestions: [],
    showSuggestions: false,
    userInput: '',
  }

  handleOnChange = (e) => {
    const userInput = e.currentTarget.value;

    const filteredSuggestions = SUGGESTIONS.filter(
      (suggestion) => suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1,
    );

    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.target.value,
    });
  }

  handleInputClick = (e) => {
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.target.innerText,
    });
  }

  handleKeyDown = (e) => {
    const { activeSuggestion, filteredSuggestions } = this.state;

    // enter key
    if (e.keyCode === 13) {
      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion],
      });
    // up arrow
    } else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion - 1 });

      // down arrow
    } else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  }

  handleSubmit = (e, history) => {
    e.preventDefault();
    const { userInput } = this.state;
    const { fetchDestinationsTours } = this.props;
    let city = 'none';

    CITIES_SUGGESTIONS.forEach((location) => {
      if (location.suggestions.includes(userInput) || location.city.includes(userInput)) {
        city = location.city;
      }
    });

    fetchDestinationsTours(city);
    history.push(`/results/${kebabCase(userInput)}`);
  }

  buttonRender = (history) => {
    const { simplified } = this.props;

    if (!simplified) {
      return (<Button text="Search" btnClass="bg-blue" click={(e) => this.handleSubmit(e, history)} />);
    }
    return (
      <button type="submit" onClick={(e) => this.handleSubmit(e, history)}>
        <SearchIcon />
      </button>
    );
  }

  render() {
    const {
      filteredSuggestions,
      activeSuggestion,
      showSuggestions,
      userInput,
    } = this.state;

    const { simplified } = this.props;
    return (
      <Route
        render={({ history }) => (
          <div className="search-container">
            <form className={`search-form ${simplified ? 'simplified' : ''}`}>
              <AutoComplete
                onClick={this.handleInputClick}
                onChange={this.handleOnChange}
                onKeyDown={this.handleKeyDown}
                userInput={userInput}
                showSuggestions={showSuggestions}
                activeSuggestion={activeSuggestion}
                filteredSuggestions={filteredSuggestions}
                placeHolder={!simplified ? '' : 'Where are you going?'}
                simplified={simplified}
              />
              {this.buttonRender(history)}
            </form>
          </div>
        )}
      />
    );
  }
}

SearchClass.propTypes = {
  fetchDestinationsTours: PropTypes.func.isRequired,
  simplified: PropTypes.bool,
};

SearchClass.defaultProps = {
  simplified: false,
};

const mapStateToProps = (state) => ({
  tours: destinationsToursReducer(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    fetchDestinationsTours: fetchDestinationsToursAC,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(SearchClass);
