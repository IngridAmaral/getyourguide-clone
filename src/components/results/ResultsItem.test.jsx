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

  it('should render the TourCard component one time', () => {
    const wrapper = shallow(<ResultsItems {...defaultProps} />);

    expect(wrapper.find(TourCard)).toHaveLength(1);
  });
});
