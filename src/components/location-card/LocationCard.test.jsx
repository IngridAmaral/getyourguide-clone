import React from 'react';
import { shallow } from 'enzyme';
import LocationCard from './LocationCard';
import IntroCategorie from './IntroCategorie';


const defaultProps = {
  description: 'The City of Love, the City of Lights, whatever you call it, falling in love with Paris is easy. Whether you explore the catacombs or lose yourself in the Louvre, make your visit to the French capital unforgettable.',
  destination: 'Paris',
  img: 'https://cdn.getyourguide.com/img/location/5b1a9b213810d.jpeg/92.jpg',
};

const { destination } = defaultProps;

describe('<LocationCard />', () => {
  it('renders component', () => {
    shallow(<LocationCard {...defaultProps} />);
  });

  it('renders image container', () => {
    const wrapper = shallow(<LocationCard {...defaultProps} />);
    expect(wrapper.find('.img-container').exists()).toBe(true);
  });

  it('renders correct destination', () => {
    const wrapper = shallow(<LocationCard {...defaultProps} />);
    expect(wrapper.find('.title').text()).toEqual(destination);
  });

  it('renders IntroCategorie component', () => {
    const wrapper = shallow(<LocationCard {...defaultProps} />);
    expect(wrapper.find(IntroCategorie).exists()).toBe(true);
  });

  it('renders the correct number of categories', () => {
    const wrapper = shallow(<LocationCard {...defaultProps} />);
    expect(wrapper.find(IntroCategorie)).toHaveLength(10);
  });
});
