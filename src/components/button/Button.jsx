import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const mockFunc = () => {
  window.alert('sorry, click not allowed');
};

const Button = ({ btnClass, text, click }) => (
  <button type="submit" className={`btn ${btnClass}`} onClick={() => click()}>
    {text}
  </button>
);

export default Button;

Button.propTypes = {
  btnClass: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  click: PropTypes.func,
};

Button.defaultProps = {
  click: mockFunc,
};
