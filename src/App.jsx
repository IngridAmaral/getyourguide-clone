/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import TopContent from './components/top-content/TopContent';
import TopWrapper from './components/top-wrapper/TopWrapper';
import TextCallouts from './components/text-callouts/TextCallouts';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import './App.scss';

const IS_RESULT = false;

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TextCallouts />
        <TopContent isResult={IS_RESULT} />
        <TopWrapper />
        <Footer />
      </div>
    );
  }
}

export default App;
