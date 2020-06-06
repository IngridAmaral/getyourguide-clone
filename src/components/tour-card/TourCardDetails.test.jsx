import React from 'react';
import { shallow } from 'enzyme';
import TourCardDetails from './TourCardDetails';

const defaultProps = {
  activity: {
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

const { activity } = defaultProps;

const {
  title,
  price,
  cardBannerMessage,
  smallDescription,
} = activity;

describe('<TourCardDetails />', () => {
  it('renders component', () => {
    shallow(<TourCardDetails {...defaultProps} />);
  });

  describe('when used in result page', () => {
    const resultProps = { ...defaultProps, isResult: true };

    it('can render free cancellation tag', () => {
      const wrapper = shallow(<TourCardDetails {...resultProps} freeCancellationFlag />);
      expect(wrapper.find('.free-cancellation-flag').exists()).toBe(true);
    });

    it('toggles class', () => {
      const wrapper = shallow(<TourCardDetails {...resultProps} />);
      expect(wrapper.find('.result').exists()).toBe(true);
    });

    it('displays correct text', () => {
      const wrapper = shallow(<TourCardDetails {...resultProps} />);
      expect(wrapper.find('.tour-description').text()).toBe(smallDescription);
    });
  });

  describe('when is home page', () => {
    it('does not render the description', () => {
      const wrapper = shallow(<TourCardDetails {...defaultProps} />);
      expect(wrapper.containsMatchingElement('.tour-description')).toEqual(false);
    });

    it('renders card details message', () => {
      const wrapper = shallow(<TourCardDetails {...defaultProps} />);
      expect(wrapper.find('.card-details-message').text()).toBe(cardBannerMessage);
    });

    it('toggle class', () => {
      const wrapperHide = shallow(<TourCardDetails {...defaultProps} isResult={false} />);
      expect(wrapperHide.find('.home').exists()).toEqual(true);
    });
  });

  describe('texts', () => {
    it('has the correct title displayed', () => {
      const wrapper = shallow(<TourCardDetails {...defaultProps} />);
      expect(wrapper.find('.tour-details-title').text()).toBe(title);
    });

    it('has the correct price displayed', () => {
      const wrapper = shallow(<TourCardDetails {...defaultProps} />);
      expect(wrapper.find('.price').text()).toBe(price.original);
    });
  });
});
