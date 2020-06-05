import React from 'react';
import PropTypes from 'prop-types';
import { activityPropTypes } from '../../propTypes/activityType';
import './RatingStars.scss';
import { ReactComponent as Star } from '../../assets/svgs/star.svg';
import { ReactComponent as StarHalf } from '../../assets/svgs/star-half.svg';
import { ReactComponent as StarEmpty } from '../../assets/svgs/star-empty.svg';

const rating = [1, 2, 3, 4, 5];

const renderRatingStars = (averageRating, title) => (rating.map((num) => {
  if (averageRating >= num) {
    return <Star key={title + num} />;
  }
  if (num - averageRating < 0.5) {
    return <StarHalf key={title + num} />;
  }
  return <StarEmpty key={title + num} />;
}));

const RatingStars = ({
  page, position, activity,
}) => {
  const {
    totalRating, totalRatingTitle, averageRating, title,
  } = activity;
  const chooseText = (position === 'bottom' && page === 'home') || (position === 'top' && page === 'result');
  const text = chooseText ? totalRatingTitle : totalRating;
  return (
    <div className={`rating-stars-container ${page} ${position}`}>
      <div className="stars">
        {renderRatingStars(averageRating, title)}
      </div>
      <span className="rating">{text}</span>
    </div>
  );
};

export default RatingStars;

RatingStars.propTypes = {
  activity: activityPropTypes.isRequired,
  position: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
};
