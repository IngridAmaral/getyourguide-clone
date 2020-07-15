import React from 'react';
import { shallow } from 'enzyme';
import NoResults from './NoResults';

describe('<NoResults />', () => {
  it('renders component', () => {
    shallow(<NoResults />);
  });
});
