/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { activityPropTypes } from '../../propTypes/activityType';
import { isResultPropType } from '../../propTypes/isRestultPropType';
import './TourCardDetails.scss';
import Stamp from './Stamp';
import RatingStars from './RatingStars';
import ActivityDuration from './ActivityDuration';
import { ReactComponent as Like } from '../../assets/svgs/like.svg';
import { ReactComponent as LikeHome } from '../../assets/svgs/like-home.svg';

class TourCardDetails extends React.Component {
  render() {
    const { activity, isResult } = this.props;
    const {
      title,
      duration,
      isGygOriginal,
      price,
      cardBannerMessage,
      smallDescription,
      freeCancellationFlag,
      totalRating,
      totalRatingTitle,
    } = activity;
    const page = isResult ? 'result' : 'home';
    return (
      <div className={`tour-details-container ${page}`}>
        <div className="header">
          <span className="tour-details-title">{title}</span>
          <div className="like">
            {isResult ? <Like /> : <LikeHome />}
          </div>
        </div>

        <div className={`rating-horizontal ${page}`}>
          <div className={`rating-stars-container ${page} top`}>
            <RatingStars activity={activity} />
            <span className="rating">{ totalRating}</span>
            <span className="rating-title">{ totalRatingTitle }</span>
          </div>
          {isGygOriginal && (
            <Stamp position="top" sentKey="gygOriginal" page={page} />
          )}
        </div>
        <ActivityDuration
          page={page}
          duration={duration}
          position="top"
        />
        <div className={`tour-description ${page}`}>{smallDescription}</div>
        <ActivityDuration
          page={page}
          duration={duration}
          position="bottom"
        />
        {isGygOriginal && (
          <Stamp position="bottom" sentKey="gygOriginal" page={page} />
        )}
        {isResult && freeCancellationFlag && (
          <span className="free-cancellation-flag">
            Free cancellation up to 24 hours in advance
          </span>
        )}
        <div className="tour-details-overall">
          <div className={`rating-column ${page}`}>
            <div className={`rating-stars-container ${page} bottom`}>
              <RatingStars activity={activity} />
              <span className="rating">{ totalRating}</span>
              <span className="rating-title">{ totalRatingTitle }</span>
            </div>
          </div>

          <div className="tour-price">
            <span className="from-price">From</span>
            <span className="price">{price.original}</span>
            {!isResult && (
              <span className="card-details-message">{cardBannerMessage}</span>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default TourCardDetails;

TourCardDetails.propTypes = {
  activity: activityPropTypes.isRequired,
  isResult: isResultPropType.isRequired,
};
