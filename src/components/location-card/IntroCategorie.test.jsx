import React from 'react';
import { shallow } from 'enzyme';
import IntroCategorie from './IntroCategorie';

const defaultProps = {
  name: 'Attractions tickets',
  img: 'https://cdn.getyourguide.com/img/location/5b1a9b213810d.jpeg/92.jpg',
};

const { name, img } = defaultProps;

describe('<IntroCategorie />', () => {
  it('renders component', () => {
    shallow(<IntroCategorie {...defaultProps} />);
  });

  it('renders container', () => {
    const wrapper = shallow(<IntroCategorie {...defaultProps} />);
    expect(wrapper.find('.categorie-container').exists()).toBe(true);
  });

  it('renders image', () => {
    const wrapper = shallow(<IntroCategorie {...defaultProps} />);
    expect(wrapper.find('img').prop('src')).toEqual(img);
  });

  it('renders correct categorie name', () => {
    const wrapper = shallow(<IntroCategorie {...defaultProps} />);
    expect(wrapper.find('.categorie').text()).toEqual(name);
  });
});
