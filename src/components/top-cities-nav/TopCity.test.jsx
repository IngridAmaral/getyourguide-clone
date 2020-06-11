import React from 'react';
import { shallow } from 'enzyme';
import TopCity from './TopCity';
import { capitalCase } from '../../utils/capital-case';

const defaultProps = {
  city: 'paris',
  activeCity: 'paris',
  fetchCity: jest.fn(),
};

describe('<TopCity />', () => {
  it('renders component', () => {
    shallow(<TopCity {...defaultProps} />);
  });

  it('renders correct title', () => {
    const wrapper = shallow(<TopCity {...defaultProps} />);
    expect(wrapper.find('span').text()).toEqual(capitalCase(defaultProps.city));
  });
});
