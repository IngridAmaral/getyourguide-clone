import React from 'react';
import { shallow } from 'enzyme';
import TopCity from './TopCity';
import TopCities from './TopCities';

const defaultProps = {
  activeCity: 'paris',
  fetchCity: jest.fn(),
  city: 'paris',
};

describe('<TopCities />', () => {
  it('renders component', () => {
    shallow(<TopCities {...defaultProps} />);
  });

  it('renders correct title', () => {
    const wrapper = shallow(<TopCities {...defaultProps} />);
    expect(wrapper.find('.title').text()).toEqual('Explore our top destinations');
  });

  it('renders TopCity component', () => {
    const wrapper = shallow(<TopCities {...defaultProps} />);
    expect(wrapper.find(TopCity).exists()).toBe(true);
  });

  it('renders the correct number of cities', () => {
    const wrapper = shallow(<TopCities {...defaultProps} />);
    expect(wrapper.find(TopCity)).toHaveLength(8);
  });
});
