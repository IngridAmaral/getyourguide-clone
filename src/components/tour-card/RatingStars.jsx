import React from 'react';
import { activityPropTypes } from '../../propTypes/activityType';
import './RatingStars.scss';
import { ReactComponent as Star } from '../../assets/svgs/star.svg';
import { ReactComponent as StarHalf } from '../../assets/svgs/star-half.svg';
import { ReactComponent as StarEmpty } from '../../assets/svgs/star-empty.svg';

const rating = [1, 2, 3, 4, 5];

export const renderRatingStars = (averageRating, title) => (rating.map((num) => {
  if (averageRating >= num) {
    return <Star key={title + num} />;
  }
  if (num - averageRating < 0.5) {
    return <StarHalf key={title + num} />;
  }
  return <StarEmpty key={title + num} />;
}));

const RatingStars = ({
  activity,
}) => {
  const {
    averageRating, title,
  } = activity;

  return (
    <div className="stars">
      {renderRatingStars(averageRating, title)}
    </div>
  );
};

export default RatingStars;

RatingStars.propTypes = {
  activity: activityPropTypes.isRequired,
};
