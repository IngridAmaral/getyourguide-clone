import React from 'react';
import { shallow } from 'enzyme';
import TopCity from './TopCity';

const defaultProps = {
  city: 'Paris',
  active: false,
};

describe('<TopCity />', () => {
  it('renders component', () => {
    shallow(<TopCity {...defaultProps} />);
  });

  it('renders correct title', () => {
    const wrapper = shallow(<TopCity {...defaultProps} />);
    expect(wrapper.find('span').text()).toEqual(defaultProps.city);
  });
});
