import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';
import { ReactComponent as SearchIcon } from '../../assets/svgs/search.svg';

const defaultProps = {
  btnClass: 'bg-blue',
  text: 'Search',
  click() {},
};

describe('<Button />', () => {
  it('renders component', () => {
    shallow(<Button {...defaultProps} />);
  });

  it('renders search icon ', () => {
    const wrapper = shallow(<Button {...defaultProps} />);

    expect(wrapper.find(SearchIcon).exists()).toBe(true);
  });

  it('should have the correct class passed in props', () => {
    const wrapper = shallow(<Button {...defaultProps} />);

    expect(wrapper.hasClass(defaultProps.btnClass)).toBe(true);
  });

  it('should trigger the function when clicked', () => {
    const click = jest.fn();
    const wrapper = shallow(<Button {...defaultProps} click={click} />);
    wrapper.find('button').simulate('click');
    wrapper.update();

    expect(click).toHaveBeenCalled();
  });
});
