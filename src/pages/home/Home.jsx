import React from 'react';
import TopContent from '../../components/top-content/TopContent';
import TopWrapper from '../../components/top-wrapper/TopWrapper';
import TextCallouts from '../../components/text-callouts/TextCallouts';
import Header from '../../components/header/Header';
import IntroBanner from '../../components/intro-banner/IntroBanner';
import Footer from '../../components/footer/Footer';
import Newsletter from '../../containers/newsletter/Newsletter';
import './Home.scss';


const Home = () => (
  <div className="home-container">
    <Header />
    <IntroBanner />
    <TextCallouts />
    <TopContent />
    <Newsletter />
    <TopWrapper />
    <Footer />
  </div>
);

export default Home;
