import React from 'react';
import { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import Results from './Results';


describe('<Results />', () => {
  it('renders component', () => {
    shallow(
      <BrowserRouter>
        <Results />
      </BrowserRouter>,
    );
  });
});
