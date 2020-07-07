import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { destinationsToursReducer } from '../../redux/reducers/destinationsTours';
import { fetchDestinationsToursAC } from '../../redux/actions/getDestinationsTours';
import './Search.scss';
import AutoComplete from './AutoComplete';
import Button from '../button/Button';

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
    let noResults = true;

    CITIES_SUGGESTIONS.forEach((location) => {
      if (location.suggestions.includes(userInput) || location.city.includes(userInput)) {
        fetchDestinationsTours(location.city);
        noResults = false;
      }
    });

    history.push('/results', noResults);
  }

  render() {
    const {
      filteredSuggestions,
      activeSuggestion,
      showSuggestions,
      userInput,
    } = this.state;
    return (
      <Route
        render={({ history }) => (
          <div className="search-container">
            <p className="banner-title">
              Book tours, activities, and attractions anywhere
            </p>
            <form className="search-form">
              <AutoComplete
                onClick={this.handleInputClick}
                onChange={this.handleOnChange}
                onKeyDown={this.handleKeyDown}
                userInput={userInput}
                showSuggestions={showSuggestions}
                activeSuggestion={activeSuggestion}
                filteredSuggestions={filteredSuggestions}
              />
              <Button text="Search" btnClass="bg-blue" click={(e) => this.handleSubmit(e, history)} />
            </form>
          </div>
        )}
      />
    );
  }
}

SearchClass.propTypes = {
  fetchDestinationsTours: PropTypes.func.isRequired,
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
