/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './TourCard.scss';

class TourCard extends React.Component {
  render() {
    const { topContent } = this.props;
    console.log(topContent[0].activities[0]);
    const {
      imageUrl,
      imageAlt,
      averageRating,
      title,
      totalRatingTitle,
      duration,
      isGygOriginal,
      price,
    } = topContent[0].activities[0];

    return (
      <div className="tourcard-container">
        <div className="tourcard-image">
          <img src={imageUrl} alt={imageAlt} />
        </div>
        Tour card Details
      </div>
    );
  }
}

export default TourCard;
