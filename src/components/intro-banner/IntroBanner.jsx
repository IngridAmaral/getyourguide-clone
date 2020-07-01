import React from 'react';
import './IntroBanner.scss';
import RenderImg from './RenderImg';
import Search from './Search';


const IntroBanner = () => (
  <div className="intro-banner-container">
    <RenderImg />
    <Search />
  </div>
);

export default IntroBanner;
