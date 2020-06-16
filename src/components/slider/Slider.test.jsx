import React from 'react';
import { shallow } from 'enzyme';
import { Slider } from './Slider';
import TopLocationCard from '../top-location-card/TopLocationCard';

const topActivity = {
  activitiesCount: 55,
  destination: 'Grand Canyon',
  img: 'img.jpg',
  url: 'url',
};

const defaultProps = {
  topAttractions: [topActivity],
  fetchTopAttractions: jest.fn(),
};

const {
  activitiesCount, destination, img,
} = defaultProps.topAttractions[0];

describe('<Slider />', () => {
  it('renders component', () => {
    shallow(<Slider {...defaultProps} />);
  });

  it('should call the fetch function', () => {
    expect(defaultProps.fetchTopAttractions).toHaveBeenCalled();
  });

  it('renders component wrapper', () => {
    const wrapper = shallow(<Slider {...defaultProps} />);
    expect(wrapper.find('.top-attractions-container').exists()).toBe(true);
  });

  it('renders TopLocationCard component with props', () => {
    const wrapper = shallow(<Slider {...defaultProps} />);
    expect(wrapper.find(TopLocationCard).props().location).toBe(destination);
    expect(wrapper.find(TopLocationCard).props().count).toBe(activitiesCount);
    expect(wrapper.find(TopLocationCard).props().img).toBe(img);
    expect(wrapper.find(TopLocationCard).exists()).toBe(true);
  });
});
