import React from 'react';
import { shallow } from 'enzyme';
import { TopWrapperClass } from './TopWrapper';
import Slider from '../slider/Slider';

const topActivity = {
  activitiesCount: 55,
  destination: 'Grand Canyon',
  img: 'img.jpg',
  url: 'url',
};

const topCountry = {
  destination: 'United States',
  img: 'img.jpg',
};

const defaultProps = {
  topAttractions: [topActivity],
  topCountries: [topCountry],
  fetchTopAttractions() {},
  fetchTopCountries() {},
};

describe('<TopWrapper />', () => {
  it('renders component', () => {
    shallow(<TopWrapperClass {...defaultProps} />);
  });

  it('should call the fetch attractions function', () => {
    const func = jest.fn();
    shallow(<TopWrapperClass {...defaultProps} fetchTopAttractions={func} />);

    expect(func).toHaveBeenCalled();
  });

  it('should call the fetch countries function', () => {
    const func = jest.fn();
    shallow(<TopWrapperClass {...defaultProps} fetchTopCountries={func} />);

    expect(func).toHaveBeenCalled();
  });

  it('renders component wrapper', () => {
    const wrapper = shallow(<TopWrapperClass {...defaultProps} />);
    expect(wrapper.find('.top-wrapper-container').exists()).toBe(true);
  });

  it('renders Slider components with corrects props', () => {
    const wrapper = shallow(<TopWrapperClass {...defaultProps} />);
    expect(wrapper.find(Slider).at(0).props().data).toBe(defaultProps.topAttractions);
    expect(wrapper.find(Slider).at(0).props().type).not.toBe('destinations');
    expect(wrapper.find(Slider).at(1).props().data).toBe(defaultProps.topAttractions);
    expect(wrapper.find(Slider).at(1).props().type).toBe('destinations');
    expect(wrapper.find(Slider).at(2).props().data).toBe(defaultProps.topCountries);
    expect(wrapper.find(Slider).at(2).props().type).toBe('countries');
  });
});
