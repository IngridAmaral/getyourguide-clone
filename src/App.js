import React from 'react';
import { colorLavanderBlush, colorBrightSun } from './styles/_colors.scss';
import { ReactComponent as Basket } from './assets/svgs/basket.svg';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p style={{ color: colorLavanderBlush, fontWeight: 'bold' }}>
          Edit
          {' '}
          <Basket />
          <code>src/App.js</code>
          {' '}
          and save to reload.
        </p>
        <p style={{ color: colorBrightSun }}>
          Learn React
        </p>
      </header>
    </div>
  );
}

export default App;
