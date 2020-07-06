import React from 'react';
import PropTypes from 'prop-types';

const SuggestionsList = ({
  filteredSuggestions,
  activeSuggestion,
  onClick,
}) => (
  <ul className="suggestions">
    {filteredSuggestions.map((suggestion, idx) => (
      <li
        className={idx === activeSuggestion ? 'suggestion-active' : ''}
        key={suggestion}
        onClick={onClick}
      >
        {suggestion}
      </li>
    ))}
  </ul>
);

SuggestionsList.propTypes = {
  filteredSuggestions: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeSuggestion: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SuggestionsList;
