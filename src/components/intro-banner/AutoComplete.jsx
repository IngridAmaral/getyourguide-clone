import React from 'react';
import PropTypes from 'prop-types';
import './AutoComplete.scss';
import SuggestionsList from './SuggestionsList';

const AutoComplete = ({
  filteredSuggestions,
  activeSuggestion,
  showSuggestions,
  onChange,
  onClick,
  onKeyDown,
  userInput,
}) => (
  <div className="search-input-container">
    <label htmlFor="search-input">
      <input
        id="search-input"
        type="text"
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={userInput}
        autoComplete="off"
      />
      <span className="float-search">Barcelona, Paris...</span>
    </label>
    {showSuggestions
      && userInput
      && (
      <SuggestionsList
        filteredSuggestions={filteredSuggestions}
        activeSuggestion={activeSuggestion}
        onClick={onClick}
      />
      )}
  </div>
);

AutoComplete.propTypes = {
  userInput: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  filteredSuggestions: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeSuggestion: PropTypes.number.isRequired,
  showSuggestions: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default AutoComplete;
