import React from 'react';
import PropTypes from 'prop-types';
import './Selector.scss';
import { capitalCase } from '../../utils/capital-case';

const Selector = ({ title, options }) => (
  <div className="selector-container">
    <span>{capitalCase(title)}</span>
    <div className="select-wrapper">
      <select className="select-css">
        {options.map((opt) => (
          <option key={title + opt} value={opt === 'English (United States)' || opt === 'Euro'}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  </div>
);

export default Selector;

Selector.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
