/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import './TourCardDetails.scss';
import ActivityDuration from './ActivityDuration';
import { ReactComponent as Star } from '../../assets/svgs/star.svg';
import { ReactComponent as StarHalf } from '../../assets/svgs/star-half.svg';
import { ReactComponent as StarEmpty } from '../../assets/svgs/star-empty.svg';

const rating = [1, 2, 3, 4, 5];

class TourCardDetails extends React.Component {
  renderRatingStars = () => {
    const { averageRating } = this.props;

    return rating.map((num) => {
      if (averageRating >= num) {
        return <Star />;
      }
      if (num - averageRating < 0.5) {
        return <StarHalf />;
      }
      return <StarEmpty />;
    });
  };

  render() {
    const {
      totalRating,
      title,
      totalRatingTitle,
      duration,
      isGygOriginal,
      price,
      cardBannerMessage,
      smallDescription,
      freeCancellationFlag,
      isResult,
    } = this.props;

    return (
      <div className="tour-details-container">
        <span className="tour-details-title">{title}</span>
        <div className={isResult ? 'show-stars' : 'rating-stars'}>
          {this.renderRatingStars()}
          <span className="total-rating">{totalRating}</span>
          {isResult && (<span className="tour-details-stamp result-stamp">GetYourGuide Original</span>
          )}
        </div>
        <ActivityDuration
          isResult={isResult}
          duration={duration}
          position="top"
        />
        {isResult && (
          <div className="result-description">
            {smallDescription}
          </div>
        )}
        <span className={`tour-details-stamp ${!isResult && isGygOriginal ? 'show-stamp' : 'hide-stamp'}`}>GetYourGuide Original</span>
        <ActivityDuration
          isResult={isResult}
          duration={duration}
          position="bottom"
        />
        {isResult && freeCancellationFlag && (<span className="free-cancellation-flag">Free cancellation up to 24 hours in advance</span>)}
        <div className="tour-details-overall">
          {!isResult && (
          <div className="title-rating-stars">
            <div className="title-stars">
              {this.renderRatingStars()}
            </div>
            {totalRatingTitle}
          </div>
          )}
          <div className="tour-price">
            <span className="from-price">From</span>
            <span className="price">{price.original}</span>
            {!isResult && (<span className="card-details-message">{cardBannerMessage}</span>)}
          </div>
        </div>
      </div>
    );
  }
}

export default TourCardDetails;

TourCardDetails.propTypes = {
  isResult: PropTypes.bool.isRequired,
  duration: PropTypes.string.isRequired,
  averageRating: PropTypes.string.isRequired,
  totalRating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  totalRatingTitle: PropTypes.string.isRequired,
  isGygOriginal: PropTypes.bool.isRequired,
  price: PropTypes.objectOf(PropTypes.string).isRequired,
  cardBannerMessage: PropTypes.string.isRequired,
  smallDescription: PropTypes.string.isRequired,
  freeCancellationFlag: PropTypes.bool.isRequired,
};
