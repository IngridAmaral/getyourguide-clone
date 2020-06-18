import React from 'react';
import './Header.scss';
import { ReactComponent as Logo } from '../../assets/svgs/gyg-logo.svg';
import Navigation from './Navigation';


const Header = () => (
  <div className="header-container">
    <Logo />
    <Navigation />
  </div>
);

export default Header;
