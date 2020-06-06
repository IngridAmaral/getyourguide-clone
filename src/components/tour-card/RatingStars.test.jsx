import React from 'react';
import { shallow } from 'enzyme';
import RatingStars from './RatingStars';
import { ReactComponent as Star } from '../../assets/svgs/star.svg';

const defaultProps = {
  activity: {
    totalRating: 900,
    averageRating: '5',
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
};

describe('<RatingStars />', () => {
  it('renders component', () => {
    shallow(<RatingStars {...defaultProps} />);
  });

  it('renders rating stars', () => {
    const wrapper = shallow(<RatingStars {...defaultProps} />);
    expect(wrapper.find('.stars').exists()).toBe(true);
  });

  it('renders 5 stars', () => {
    const wrapper = shallow(<RatingStars {...defaultProps} />);
    expect(wrapper.find(Star)).toHaveLength(5);
  });
});
