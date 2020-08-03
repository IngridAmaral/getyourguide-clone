import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';
import TopContent from '../../components/top-content/TopContent';
import TopWrapper from '../../components/top-wrapper/TopWrapper';
import TextCallouts from '../../components/text-callouts/TextCallouts';
import Header from '../../components/header/Header';
import IntroBanner from '../../components/intro-banner/IntroBanner';
import Footer from '../../components/footer/Footer';
import Newsletter from '../../containers/newsletter/Newsletter';


describe('<Home />', () => {
  it('renders component', () => {
    shallow(<Home />);
  });

  it('renders header', () => {
    const wrapper = shallow(<Home />);

    expect(wrapper.find(Header).exists()).toBe(true);
  });

  it('renders intro banner', () => {
    const wrapper = shallow(<Home />);

    expect(wrapper.find(IntroBanner).exists()).toBe(true);
  });

  it('renders TextCallouts', () => {
    const wrapper = shallow(<Home />);

    expect(wrapper.find(TextCallouts).exists()).toBe(true);
  });

  it('renders top content', () => {
    const wrapper = shallow(<Home />);

    expect(wrapper.find(TopContent).exists()).toBe(true);
  });

  it('renders newsletter', () => {
    const wrapper = shallow(<Home />);

    expect(wrapper.find(Newsletter).exists()).toBe(true);
  });

  it('renders top wrapper', () => {
    const wrapper = shallow(<Home />);

    expect(wrapper.find(TopWrapper).exists()).toBe(true);
  });

  it('renders footer', () => {
    const wrapper = shallow(<Home />);

    expect(wrapper.find(Footer).exists()).toBe(true);
  });
});
