import React from 'react';
import { shallow } from 'enzyme';
import Selector from './Selector';

const defaultProps = {
  title: 'language',
  options: ['English', 'Portuguese'],
};

describe('<Selector', () => {
  it('renders component', () => {
    shallow(<Selector {...defaultProps} />);
  });
});
