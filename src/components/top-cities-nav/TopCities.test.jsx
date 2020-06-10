import React from 'react';
import { shallow } from 'enzyme';
import TopCities, { CITIES } from './TopCities';
import TopCity from './TopCity';

describe('<TopCities />', () => {
  it('renders component', () => {
    shallow(<TopCities {...CITIES} />);
  });

  it('renders correct title', () => {
    const wrapper = shallow(<TopCities {...CITIES} />);
    expect(wrapper.find('.title').text()).toEqual('Explore our top destinations');
  });

  it('renders TopCity component', () => {
    const wrapper = shallow(<TopCities {...CITIES} />);
    expect(wrapper.find(TopCity).exists()).toBe(true);
  });

  it('renders the correct number of cities', () => {
    const wrapper = shallow(<TopCities {...CITIES} />);
    expect(wrapper.find(TopCity)).toHaveLength(8);
  });
});
