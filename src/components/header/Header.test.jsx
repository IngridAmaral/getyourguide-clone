import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import Navigation from './Navigation';

describe('<Header />', () => {
  it('renders component', () => {
    shallow(<Header />);
  });

  it('renders items', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find(Navigation).exists()).toBe(true);
  });
});
