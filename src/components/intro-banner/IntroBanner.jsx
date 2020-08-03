import React from 'react';
import './IntroBanner.scss';
import RenderImg from '../../containers/intro-banner/RenderImg';
import BannerContent from './BannerContent';


const IntroBanner = () => (
  <div className="intro-banner-container">
    <RenderImg />
    <BannerContent />
  </div>
);

export default IntroBanner;
