import React from 'react';
import { shallow } from 'enzyme';
import { TopContentClass, MAX_CARDS } from './TopContent';
import { fetchTopCityAC as fetchTopCity } from '../../redux/actions/getTopCity';
import LocationCard from '../location-card/LocationCard';
import TopCities from '../top-cities-nav/TopCities';
import TourCard from '../tour-card/TourCard';

const activity = {
  imageUrl: 'www.img.com',
  imageAlt: 'an image',
  averageRating: '4',
  totalRating: 4.7,
  title: 'Tour to some place',
  totalRatingTitle: '900 Reviews',
  duration: '1 hour',
  isGygOriginal: true,
  price: {
    min: '65',
    original: '65',
    type: 'euro',
  },
  cardBannerMessage: 'message',
  smallDescription: 'This tour is awesome, go for it',
  freeCancellationFlag: true,
};

const iconic = {
  location: 'paris',
  count: 70,
  img: 'img.jpg',
};

const defaultProps = {
  topCity: {
    activities: [activity, activity, activity, activity],
    todo: [activity, activity, activity, activity],
    description: 'The City of Love, the City of Lights, whatever you call it, falling in love with Paris is easy. Whether you explore the catacombs or lose yourself in the Louvre, make your visit to the French capital unforgettable.',
    destination: 'Paris',
    iconic: [iconic, iconic, iconic],
    img: 'https://cdn.getyourguide.com/img/location/5b1a9b213810d.jpeg/92.jpg',
    url: 'destinations/paris',
  },
  fetchTopCity,
};

const stateUpdate = (wrapper) => {
  wrapper.setProps({ topCity: { ...defaultProps.topCity, destination: 'barcelona' } });
  wrapper.update();
};

describe('<TopContentClass />', () => {
  it('renders component', () => {
    shallow(<TopContentClass {...defaultProps} />);
  });

  it('renders the new active city', () => {
    const wrapper = shallow(<TopContentClass {...defaultProps} />);
    wrapper.setProps({ topCity: { ...defaultProps.topCity, destination: 'barcelona' } });
    wrapper.update();
    expect(wrapper.state('activeCity')).toEqual('barcelona');
  });

  it('renders TopCities component', () => {
    const wrapper = shallow(<TopContentClass {...defaultProps} />);
    stateUpdate(wrapper);
    expect(wrapper.find(TopCities).exists()).toBe(true);
  });

  it('renders LocationCard component', () => {
    const wrapper = shallow(<TopContentClass {...defaultProps} />);
    stateUpdate(wrapper);
    expect(wrapper.find(LocationCard).exists()).toBe(true);
  });

  it('renders TourCard component', () => {
    const wrapper = shallow(<TopContentClass {...defaultProps} />);
    stateUpdate(wrapper);
    expect(wrapper.find(TourCard).exists()).toBe(true);
  });

  it('renders the correct number of cards', () => {
    const wrapper = shallow(<TopContentClass {...defaultProps} />);
    stateUpdate(wrapper);
    expect(wrapper.find(TourCard)).toHaveLength(2 * MAX_CARDS);
  });
});
