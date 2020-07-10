import React from 'react';
import TopContent from '../top-content/TopContent';
import TopWrapper from '../top-wrapper/TopWrapper';
import TextCallouts from '../text-callouts/TextCallouts';
import Header from '../header/Header';
import IntroBanner from '../intro-banner/IntroBanner';
import Footer from '../footer/Footer';
import Newsletter from '../newsletter/Newsletter';
import './Home.scss';

const IS_RESULT = false;

const Home = () => (
  <div className="home-container">
    <Header />
    <IntroBanner />
    <TextCallouts />
    <TopContent isResult={IS_RESULT} />
    <Newsletter />
    <TopWrapper />
    <Footer />
  </div>
);

export default Home;
