import React from 'react';
import { shallow } from 'enzyme';
import RatingStars from './RatingStars';
import { ReactComponent as Star } from '../../assets/svgs/star.svg';
import { ReactComponent as StarHalf } from '../../assets/svgs/star-half.svg';
import { ReactComponent as StarEmpty } from '../../assets/svgs/star-empty.svg';

const defaultProps = {
  averageRating: '4',
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
    const wrapper = shallow(<RatingStars averageRating="5" />);

    expect(wrapper.find(Star)).toHaveLength(5);
  });

  it.each(['0', '1', '2', '3', '4', '5'])('renders correctly full stars and empty', (stars) => {
    const starsEmpty = 5 - Number(stars);
    const wrapper = shallow(<RatingStars averageRating={stars} />);

    expect(wrapper.find(Star)).toHaveLength(Number(stars));
    expect(wrapper.find(StarEmpty)).toHaveLength(starsEmpty);
  });

  it.each(['2.5', '2.9', '4.7'])('renders correctly half stars', (stars) => {
    const starsEmpty = 4 - Math.floor(Number(stars));
    const starsFull = 4 - starsEmpty;
    const wrapper = shallow(<RatingStars averageRating={stars} />);

    expect(wrapper.find(StarHalf)).toHaveLength(1);
    expect(wrapper.find(StarEmpty)).toHaveLength(starsEmpty);
    expect(wrapper.find(Star)).toHaveLength(starsFull);
  });
});
