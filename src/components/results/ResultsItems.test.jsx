import React from 'react';
import { shallow, mount } from 'enzyme';
import ResultsItems from './ResultsItems';
import TourCard from '../tour-card/TourCard';

const tour = {
  imageUrl: 'www.img.com',
  imageAlt: 'an image',
  averageRating: '4',
  totalRating: 4.7,
  tourId: 'yrtfds',
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

const tours = [];

const multiplyTour = (times) => {
  while (tours.length < times) {
    tours.push({ ...tour, tourId: `tour${tours.length}` });
  }
};

multiplyTour(50);

const defaultProps = {
  tours,
};

describe('<ResultsItems />', () => {
  it('renders component', () => {
    shallow(<ResultsItems {...defaultProps} />);
  });

  it('should render TourCard component', () => {
    const wrapper = shallow(<ResultsItems {...defaultProps} />);
    const tourCards = wrapper.find(TourCard);

    tourCards.forEach((card, idx) => {
      expect(card.props().isResult).toBe(true);
      expect(card.props().activity).toEqual(defaultProps.tours[idx]);
    });
  });

  it('should show more tours on click', () => {
    const wrapper = mount(<ResultsItems {...defaultProps} />);
    const tourCards = wrapper.find(TourCard);
    const state = wrapper.state().numberToShow;

    expect(tourCards).toHaveLength(state);

    wrapper.find('button').simulate('click');
    expect(wrapper.update().state().numberToShow).toEqual(40);

    wrapper.find('button').simulate('click');
    expect(wrapper.update().state().numberToShow).toEqual(defaultProps.tours.length);
  });
});
