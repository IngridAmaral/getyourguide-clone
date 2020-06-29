import React from 'react';
import PropTypes from 'prop-types';
import './AutoComplete.scss';

const AutoComplete = ({
  suggestionsListComponent,
  onChange,
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
    {suggestionsListComponent}
  </div>
);


AutoComplete.propTypes = {
  userInput: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  suggestionsListComponent: PropTypes.element.isRequired,
};

export default AutoComplete;
