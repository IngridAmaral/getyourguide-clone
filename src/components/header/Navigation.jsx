import React from 'react';
import './Navigation.scss';
import PropTypes from 'prop-types';
import { ReactComponent as Like } from '../../assets/svgs/like.svg';
import { ReactComponent as Basket } from '../../assets/svgs/basket.svg';
import { ReactComponent as Help } from '../../assets/svgs/help.svg';
import { ReactComponent as User } from '../../assets/svgs/user.svg';
import { ReactComponent as Caret } from '../../assets/svgs/caret.svg';
import Button from '../button/Button';

export const ICONS = [
  { id: 'language', text: 'English' },
  { id: 'currency', text: 'EUR' },
  { id: 'wishlist', icon: <Like />, text: 'Wishlist' },
  { id: 'basket', icon: <Basket />, text: 'Basket' },
  { id: 'help', icon: <Help />, text: 'Help' },
  { id: 'login', icon: <User />, text: 'Log in' },
];

const hasDropdown = ['language', 'currency', 'login'];

const renderDropdown = (id) => (hasDropdown.includes(id)) && (
<div className="dropdown-content">
  <span className="section-title">All exemple</span>
  <button type="button" className="drop-item">
    example
  </button>
  <button type="button" className="drop-item">
    example
  </button>
  <button type="button" className="drop-item">
    example
  </button>
  <button type="button" className="drop-item">
    example
  </button>
</div>
);

const renderCaret = (id) => (hasDropdown.includes(id)) && <Caret />;

const NavigationList = ({ enforceCurrencyAndLang }) => (
  <div className="navigation-list-container">
    {ICONS.map((icon) => (
      <div
        className={`nav-item
          ${enforceCurrencyAndLang && (icon.id === 'currency' || icon.id === 'language')
          ? 'curr-lang-icons'
          : 'other-icons'}`}
        key={`item${icon.id}`}
      >
        <div className="menu-item">
          {icon.icon}
          <div className="item-info">
            <span>{icon.text}</span>
            <div className="caret">{renderCaret(icon.id)}</div>
          </div>
        </div>
        {renderDropdown(icon.id)}
      </div>
    ))}
    <div className={`signup-btn ${enforceCurrencyAndLang ? 'show-ipad' : ''}`}>
      <Button btnClass="bg-blue" text="Sign up" />
    </div>
  </div>
);

NavigationList.propTypes = {
  enforceCurrencyAndLang: PropTypes.bool,
};

NavigationList.defaultProps = {
  enforceCurrencyAndLang: false,
};

export default NavigationList;
