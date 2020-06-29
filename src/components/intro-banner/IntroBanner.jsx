import React from 'react';
import './IntroBanner.scss';
import RenderImg from './RenderImg';
import Search from './Search';


class IntroBanner extends React.Component {
  render() {
    return (
      <div className="intro-banner-container">
        <RenderImg />
        <Search />
      </div>
    );
  }
}

export default IntroBanner;
