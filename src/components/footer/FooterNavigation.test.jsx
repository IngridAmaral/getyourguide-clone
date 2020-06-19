import React from 'react';
import { shallow } from 'enzyme';
import FooterNavigation from './FooterNavigation';

const defaultProps = {
  title: 'Support',
  items: ['Contact', 'Legal'],
};

describe('<FooterNavigation', () => {
  it('renders component', () => {
    shallow(<FooterNavigation {...defaultProps} />);
  });

  it('expands on title click', () => {
    const wrapper = shallow(<FooterNavigation {...defaultProps} />);
    wrapper.find('.title').simulate('click');
    wrapper.update();
    expect(wrapper.find('.open').exists()).toBe(true);
  });

  it('expands on title click', () => {
    const wrapper = shallow(<FooterNavigation {...defaultProps} />);
    const title = wrapper.find('.title');
    title.simulate('click');
    wrapper.update();
    title.simulate('click');
    expect(wrapper.find('.close').exists()).toBe(true);
  });
});
