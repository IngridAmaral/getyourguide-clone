import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ btnClass, text }) => (
  <button type="button" className={`btn ${btnClass}`}>
    {text}
  </button>
);

export default Button;

Button.propTypes = {
  btnClass: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
