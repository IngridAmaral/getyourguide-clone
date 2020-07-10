import React from 'react';
import './Header.scss';
import PropTypes from 'prop-types';
import { ReactComponent as Logo } from '../../assets/svgs/gyg-logo.svg';
import Navigation from './Navigation';
import Search from '../search/Search';


const Header = ({ showSearchBar, enforceCurrencyAndLang }) => (
  <div className={`header-container${showSearchBar ? ' show-search-bar-header' : ''}`}>
    <div className="navigation-bar">
      <div className="left">
        <Logo />
        {showSearchBar && (
          <div className="top-search-bar">
            <Search simplified />
          </div>
        )}
      </div>
      <Navigation enforceCurrencyAndLang={enforceCurrencyAndLang} />
    </div>
    {showSearchBar && (
      <div className="bottom-search-bar">
        <Search simplified />
      </div>
    )}
  </div>
);


Header.propTypes = {
  showSearchBar: PropTypes.bool,
  enforceCurrencyAndLang: PropTypes.bool,
};

Header.defaultProps = {
  showSearchBar: false,
  enforceCurrencyAndLang: false,
};

export default Header;
