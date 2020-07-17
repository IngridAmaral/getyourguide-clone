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
      title, options, filterOptions, optionsSelected,
    } = this.props;
    const { isOpen } = this.state;
    return (
      <Route
        render={({ history }) => (
          <div className="filter-section-container">
            <div
              className={`title${isOpen ? ' rotate-caret' : ''}`}
              onClick={this.handleOpenOptions}
            >
              <span>{title}</span>
              <Caret />
            </div>
            <form className={isOpen ? 'open' : ''}>
              {options.map((option) => {
                if (optionsSelected === option.id) {
                  return (
                    <div className="option" key={option.id} onClick={(e) => filterOptions(e, history, title, option.id)}>
                      <input id={option.id} checked type="checkbox" value={option.id} />
                      <label htmlFor={option.id}>{option.name}</label>
                    </div>
                  );
                }
                return (
                  <div className="option" key={option.id} onClick={(e) => filterOptions(e, history, title, option.id)}>
                    <input id={option.id} type="checkbox" value={option.id} />
                    <label htmlFor={option.id}>{option.name}</label>
                  </div>
                );
              })}
            </form>
          </div>
        )}
      />
    );
  }
}

FilterSection.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.objectOf(PropTypes.string).isRequired,
  filterOptions: PropTypes.func.isRequired,
  optionsSelected: PropTypes.string.isRequired,
};

export default FilterSection;
