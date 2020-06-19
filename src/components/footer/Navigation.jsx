import React from 'react';
import PropTypes from 'prop-types';
import './Navigation.scss';
import { ReactComponent as Caret } from '../../assets/svgs/caret.svg';

class Navigation extends React.Component {
  state = {
    open: false,
  }

  handleToggle = () => {
    this.setState((state) => ({ open: !state.open }));
  }

  render() {
    const { title, items } = this.props;
    const { open } = this.state;
    return (
      <div className="navigation-container">
        <div className="title" onClick={this.handleToggle} onKeyDown={this.handleToggle}>
          <span>{title}</span>
          <Caret />
        </div>
        <div className={`items ${open ? 'open' : 'close'}`}>
          {items.map((item) => (
            <div className="item" key={title + item}>{item}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default Navigation;

Navigation.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};
