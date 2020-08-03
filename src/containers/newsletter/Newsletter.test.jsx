import React from 'react';
import { shallow, mount } from 'enzyme';
import Newsletter from './Newsletter';
import Button from '../button/Button';

describe('<Newsletter />', () => {
  it('should render the component', () => {
    shallow(<Newsletter />);
  });

  it('should receive correct input', () => {
    const wrapper = shallow(<Newsletter />);

    wrapper.find('input[type="email"]').simulate('change', { target: { name: 'userInput', value: 'g@g.com' } });
    wrapper.update();

    expect(wrapper.state('userInput')).toEqual('g@g.com');
  });

  it('should receive wrong input', () => {
    const wrapper = shallow(<Newsletter />);

    wrapper.find('input[type="email"]').simulate('change', { target: { value: 'g@g.com' } });
    wrapper.update();

    expect(wrapper.state('userInput')).not.toEqual('g@.com');
  });

  it('should open a window alert when click to submit', () => {
    window.alert = jest.fn();
    const wrapper = mount(<Newsletter />);
    const btn = wrapper.find(Button);

    wrapper.find('input[type="email"]').simulate('change', { target: { value: 'g@g.com' } });
    wrapper.update();
    btn.find('button').simulate('click');

    expect(window.alert).toHaveBeenCalledWith('g@g.com');
  });
});
