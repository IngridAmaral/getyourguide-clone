import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import './FilterSection.scss';
import { ReactComponent as Caret } from '../../assets/svgs/caret.svg';

class FilterSection extends React.Component {
  state = {
    isOpen: false,
  };

  handleOpenOptions = () => {
    this.setState((state) => ({ isOpen: !state.isOpen }));
  };

  render() {
    const {
      title, options, filterOptions, optionSelected,
    } = this.props;
    const { isOpen } = this.state;

    return (
      <Route
        render={({ history }) => (
          <div className={`filter-section-container ${title}`}>
            <div
              className={`title ${isOpen ? 'rotate-caret' : ''}`}
              onClick={this.handleOpenOptions}
            >
              <span>{title}</span>
              <Caret />
            </div>
            <form className={isOpen ? 'open' : ''}>
              {options.map((option) => (
                <label className="option" key={option.id} htmlFor={option.id}>
                  <input
                    id={option.id}
                    onChange={(e) => filterOptions(e, history, title, option.id)}
                    checked={optionSelected === option.id}
                    type="checkbox"
                    value={option.id}
                  />
                  {option.name}
                </label>
              ))}
            </form>
          </div>
        )}
      />
    );
  }
}

FilterSection.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  filterOptions: PropTypes.func.isRequired,
  optionSelected: PropTypes.string,
};

FilterSection.defaultProps = {
  optionSelected: '',
};

export default FilterSection;
