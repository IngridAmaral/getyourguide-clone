import React from 'react';
import { shallow } from 'enzyme';
import Navigation from './Navigation';

const defaultProps = {
  enforceCurrencyAndLang: true,
};

describe('<Navigation />', () => {
  it('renders component', () => {
    shallow(<Navigation {...defaultProps} />);
  });

  it('renders items', () => {
    const wrapper = shallow(<Navigation {...defaultProps} />);
    expect(wrapper.find('.nav-item').exists()).toBe(true);
  });

  it('renders dropwdown', () => {
    const wrapper = shallow(<Navigation {...defaultProps} />).find('.curr-lang-icons').at(0);
    expect(wrapper.find('.dropdown-content').exists()).toBe(true);
  });

  it('dooes not render dropwdown', () => {
    const wrapper = shallow(<Navigation {...defaultProps} />).find('.other-icons').at(2);
    expect(wrapper.find('.dropdown-content').exists()).toBe(false);
  });
});
