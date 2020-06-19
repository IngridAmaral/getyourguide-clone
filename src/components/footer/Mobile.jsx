import React from 'react';
import './Mobile.scss';
import { appleStoreUrl } from '../../assets/imgs/apple-store';
import { googlePlayUrl } from '../../assets/imgs/google-play';

const Mobile = () => (
  <div className="mobile">
    <span>Mobile</span>
    <div className="download">
      <img src={googlePlayUrl} alt="google play" />
      <img src={appleStoreUrl} alt="apple store" />
    </div>
  </div>
);

export default Mobile;
