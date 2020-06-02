/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './TourCard.scss';
import TourCardDetails from './TourCardDetails';

const isResult = true;

class TourCard extends React.Component {
  render() {
    const { topContent } = this.props;
    // console.log(topContent[0].activitiess[0]);
    const {
      imageUrl,
      imageAlt,
      averageRating,
      title,
      totalRatingTitle,
      duration,
      isGygOriginal,
      price,
      cardBannerMessage,
      totalRating,
      smallDescription,
      freeCancellationFlag,
    } = topContent[0].activities[0];

    return (
      <div className={`tourcard-container ${isResult ? 'card-result' : 'card-tour'} `}>
        <div className="tourcard-image">
          <img src={imageUrl} alt={imageAlt} />
        </div>
        <TourCardDetails
          isResult={isResult}
          averageRating={averageRating}
          totalRating={totalRating}
          title={title}
          totalRatingTitle={totalRatingTitle}
          duration={duration}
          isGygOriginal={isGygOriginal}
          price={price}
          cardBannerMessage={cardBannerMessage}
          smallDescription={smallDescription}
          freeCancellationFlag={freeCancellationFlag}
        />
      </div>
    );
  }
}

export default TourCard;
