import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getDestinationsTours } from '../../redux/reducers/destinationsTours';
import { fetchDestinationsToursAC } from '../../redux/actions/getDestinationsTours';
import './Search.scss';
import AutoComplete from './AutoComplete';
import Button from '../button/Button';

const SUGGESTIONS = ['Paris', 'Paris, France', 'New York', 'New York City', 'Barcelona', 'Barcelona, Spain'];

class Search extends React.Component {
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

  handleSubmit = (e) => {
    e.preventDefault();
    const { userInput } = this.state;
    const { fetchDestinationsTours } = this.props;
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

    let city;
    CITIES_SUGGESTIONS.forEach((location) => {
      if (location.suggestions.includes(userInput)) {
        city = location.city;
      }
    });

    fetchDestinationsTours(city);
  }

  render() {
    const {
      filteredSuggestions, activeSuggestion, showSuggestions, userInput,
    } = this.state;
    let suggestionsListComponent;

    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul className="suggestions">
            {filteredSuggestions.map((suggestion, idx) => {
              let classSuggestion;
              if (idx === activeSuggestion) {
                classSuggestion = 'suggestion-active';
              }
              return (
                <li
                  className={classSuggestion}
                  key={suggestion}
                  onClick={this.handleInputClick}
                >
                  {suggestion}
                </li>
              );
            })}
          </ul>
        );
      }
    }

    console.log(this.props);
    return (
      <div className="search-container">
        <p className="banner-title">
          Book tours, activities, and attractions anywhere
        </p>
        <form className="search-form">
          <AutoComplete
            suggestionsListComponent={suggestionsListComponent}
            suggestions={SUGGESTIONS}
            onClick={this.handleInputClick}
            onChange={this.handleOnChange}
            onKeyDown={this.handleKeyDown}
            userInput={userInput}
          />
          <Button text="Search" btnClass="bg-blue" click={this.handleSubmit} />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  tours: getDestinationsTours(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    fetchDestinationsTours: fetchDestinationsToursAC,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(Search);
