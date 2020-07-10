import React from 'react';
import { shallow } from 'enzyme';
import Slider from './Slider';
import TopLocationCard from '../top-location-card/TopLocationCard';

const topActivity = {
  activitiesCount: 55,
  destination: 'Grand Canyon',
  img: 'img.jpg',
  url: 'url',
};

const defaultProps = {
  data: [topActivity],
};

const {
  activitiesCount, destination, img,
} = topActivity;

describe('<Slider />', () => {
  it('renders component', () => {
    shallow(<Slider {...defaultProps} />);
  });

  it('renders the component container', () => {
    const wrapper = shallow(<Slider {...defaultProps} />);
    expect(wrapper.find('.slider-container').exists()).toBe(true);
  });

  it('renders TopLocationCard component with props', () => {
    const wrapper = shallow(<Slider {...defaultProps} />);
    expect(wrapper.find(TopLocationCard).props().location).toBe(destination);
    expect(wrapper.find(TopLocationCard).props().count).toBe(activitiesCount);
    expect(wrapper.find(TopLocationCard).props().img).toBe(img);
    expect(wrapper.find(TopLocationCard).exists()).toBe(true);
  });
});
