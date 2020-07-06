import React from 'react';
import { shallow } from 'enzyme';
import IntroBanner from './IntroBanner';
import RenderImg from './RenderImg';
import Search from './Search';

describe('<IntroBanner />', () => {
  it('renders component', () => {
    shallow(<IntroBanner />);
  });

  it('renders the image compononent', () => {
    const wrapper = shallow(<IntroBanner />);

    expect(wrapper.find(RenderImg).exists()).toBe(true);
  });

  it('renders the image compononent', () => {
    const wrapper = shallow(<IntroBanner />);

    expect(wrapper.find(Search).exists()).toBe(true);
  });
});
