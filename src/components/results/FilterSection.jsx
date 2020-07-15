import React from 'react';
import PropTypes from 'prop-types';
import './FilterSection.scss';
import { ReactComponent as Caret } from '../../assets/svgs/caret.svg';

class FilterSection extends React.Component {
  state = {
    isOpen: false,
  };

  handleClick = () => {
    this.setState((state) => ({ isOpen: !state.isOpen }));
  };

  render() {
    const { title, options } = this.props;
    const { isOpen } = this.state;
    return (
      <div className="filter-section-container">
        <div
          className={`title ${isOpen ? 'rotate-caret' : ''}`}
          onClick={() => this.handleClick()}
        >
          <span>{title}</span>
          <Caret />
        </div>
        <form className={isOpen ? 'open' : ''}>
          {options.map((option) => (
            <div className="option" key={option}>
              <input id={option} type="checkbox" value={option} />
              <label htmlFor={option}>{option}</label>
            </div>
          ))}
        </form>
      </div>
    );
  }
}

FilterSection.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FilterSection;
