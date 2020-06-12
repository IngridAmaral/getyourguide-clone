import React from 'react';
import { shallow } from 'enzyme';
import TopLocationCard from './TopLocationCard';

const defaultProps = {
  location: 'paris',
  count: 70,
  img: 'img.jpg',
  isSlider: false,
};

describe('<TopLocationCard />', () => {
  it('renders component', () => {
    shallow(<TopLocationCard {...defaultProps} />);
  });

  it('renders correct location', () => {
    const wrapper = shallow(<TopLocationCard {...defaultProps} />);
    expect(wrapper.find('.title').text()).toEqual(defaultProps.location);
  });

  it('renders correct location', () => {
    const wrapper = shallow(<TopLocationCard {...defaultProps} />);
    expect(wrapper.find('img').exists()).toBe(true);
  });
});
