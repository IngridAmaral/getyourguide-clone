import React from 'react';
import { shallow } from 'enzyme';
import Footer, {
  language, currency, support, company, workWithUs,
} from './Footer';
import Selector from './Selector';
import Mobile from './Mobile';
import FooterNavigation from './FooterNavigation';
import PayMethods from './PayMethods';

describe('<Footer />', () => {
  it('renders component', () => {
    shallow(<Footer />);
  });

  it('renders Selector components with correct props', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find(Selector).at(0).props().title).toBe('language');
    expect(wrapper.find(Selector).at(0).props().options).toEqual(language);

    expect(wrapper.find(Selector).at(1).props().title).toBe('currency');
    expect(wrapper.find(Selector).at(1).props().options).toEqual(currency);
  });

  it('renders Mobile component', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find(Mobile).exists()).toBe(true);
  });


  it('renders FooterNavigation component with correct props', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find(FooterNavigation).at(0).props().title).toBe('Support');
    expect(wrapper.find(FooterNavigation).at(0).props().items).toEqual(support);

    expect(wrapper.find(FooterNavigation).at(1).props().title).toBe('Company');
    expect(wrapper.find(FooterNavigation).at(1).props().items).toEqual(company);

    expect(wrapper.find(FooterNavigation).at(2).props().title).toBe('Work With Us');
    expect(wrapper.find(FooterNavigation).at(2).props().items).toEqual(workWithUs);
  });

  it('renders PayMethods component', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find(PayMethods).exists()).toBe(true);
  });

  it('renders social icons', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('.social').children()).toHaveLength(5);
  });
});
