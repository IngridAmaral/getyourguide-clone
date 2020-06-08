import React from 'react';
import { shallow } from 'enzyme';
import TourCard from './TourCard';
import TourCardDetails from './TourCardDetails';

const defaultProps = {
  activity: {
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
  },
  isResult: false,
};

describe('<TourCard />', () => {
  it('renders component', () => {
    shallow(<TourCard {...defaultProps} />);
  });

  it('renders image wrapper', () => {
    const wrapper = shallow(<TourCard {...defaultProps} />);
    expect(wrapper.find('.tourcard-image').exists()).toBe(true);
  });

  it('renders img element', () => {
    const wrapper = shallow(<TourCard {...defaultProps} />);
    expect(wrapper.find('.tourcard-image')).toHaveLength(1);
  });

  it('renders TourCardDetails component with props', () => {
    const wrapper = shallow(<TourCard {...defaultProps} />);
    expect(wrapper.find(TourCardDetails).props().isResult).toBe(false);
    expect(wrapper.find(TourCardDetails).props().activity).toBe(defaultProps.activity);
    expect(wrapper.find(TourCardDetails).exists()).toBe(true);
  });
});
