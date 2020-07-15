import React from 'react';
import { shallow } from 'enzyme';
import { mockTours } from './mockedTours';
import ResultsItems from './ResultsItems';
import TourCard from '../tour-card/TourCard';


const defaultProps = {
  tours: mockTours,
};

describe('<ResultsItems />', () => {
  it('renders component', () => {
    shallow(<ResultsItems {...defaultProps} />);
  });

  it('should render TourCard component', () => {
    const wrapper = shallow(<ResultsItems {...defaultProps} />);
    const tourCards = wrapper.find(TourCard);

    expect(tourCards).toHaveLength(defaultProps.tours.length);

    tourCards.forEach((card, idx) => {
      expect(card.props().isResult).toBe(true);
      expect(card.props().activity).toEqual(defaultProps.tours[idx]);
    });
  });
});
