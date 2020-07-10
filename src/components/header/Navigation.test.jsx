import React from 'react';
import { shallow } from 'enzyme';
import Navigation, { ICONS } from './Navigation';


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

  it('should render correct number of items', () => {
    const wrapper = shallow(<Navigation {...defaultProps} />);

    expect(wrapper.find('.nav-item')).toHaveLength(ICONS.length);
  });

  it('renders dropwdown', () => {
    const wrapper = shallow(<Navigation {...defaultProps} />).find('.curr-lang-icons').at(0);

    expect(wrapper.find('.dropdown-content').exists()).toBe(true);
  });

  it('dooes not render dropwdown', () => {
    const wrapper = shallow(<Navigation {...defaultProps} />).find('.other-icons').at(2);

    expect(wrapper.find('.dropdown-content').exists()).toBe(false);
  });

  it('should have two elements with class curr-lang-icons', () => {
    const wrapper = shallow(<Navigation {...defaultProps} />);

    expect(wrapper.find('.curr-lang-icons')).toHaveLength(2);
  });
});
