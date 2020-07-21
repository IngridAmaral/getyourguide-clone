import React from 'react';
import PropTypes from 'prop-types';
import './RatingStars.scss';
import { ReactComponent as Star } from '../../assets/svgs/star.svg';
import { ReactComponent as StarHalf } from '../../assets/svgs/star-half.svg';
import { ReactComponent as StarEmpty } from '../../assets/svgs/star-empty.svg';

const rating = [1, 2, 3, 4, 5];

export const renderRatingStars = (averageRating) => (rating.map((num) => {
  if (averageRating >= num) {
    return <Star key={num} />;
  }
  if (num - averageRating < 1) {
    return <StarHalf key={num} />;
  }
  return <StarEmpty key={num} />;
}));

const RatingStars = ({ averageRating }) => (
  <div className="stars">
    {renderRatingStars(averageRating)}
  </div>
);

export default RatingStars;

RatingStars.propTypes = {
  averageRating: PropTypes.string,
};

RatingStars.defaultProps = {
  averageRating: '5',
};
