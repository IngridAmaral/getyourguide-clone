import React from 'react';
import { shallow } from 'enzyme';
import Navigation from './Navigation';

describe('<Navigation />', () => {
  it('renders component', () => {
    shallow(<Navigation />);
  });

  it('renders items', () => {
    const wrapper = shallow(<Navigation />);
    expect(wrapper.find('.nav-item').exists()).toBe(true);
  });

  it('renders dropwdown', () => {
    const wrapper = shallow(<Navigation />).find('.language');
    expect(wrapper.find('.dropdown-content').exists()).toBe(true);
  });

  it('dooes not render dropwdown', () => {
    const wrapper = shallow(<Navigation />).find('.basket');
    expect(wrapper.find('.dropdown-content').exists()).toBe(false);
  });
});
