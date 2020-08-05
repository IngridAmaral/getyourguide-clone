import React from 'react';
import { shallow } from 'enzyme';
import IntroBanner from './IntroBanner';
import RenderImg from '../../containers/intro-banner/RenderImg';
import BannerContent from './BannerContent';

describe('<IntroBanner />', () => {
  it('renders component', () => {
    shallow(<IntroBanner />);
  });

  it('renders the image compononent', () => {
    const wrapper = shallow(<IntroBanner />);

    expect(wrapper.find(RenderImg).exists()).toBe(true);
  });

  it('renders the banner content component', () => {
    const wrapper = shallow(<IntroBanner />);

    expect(wrapper.find(BannerContent).exists()).toBe(true);
  });
});
