/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { topContentPropType } from '../../propTypes/topContentType';
import './TourCard.scss';
import TourCardDetails from './TourCardDetails';

const isResult = true;

class TourCard extends React.Component {
  render() {
    const { topContent } = this.props;
    const {
      imageUrl,
      imageAlt,
    } = topContent[0].activities[0];
    return (
      <div className={`tourcard-container ${isResult ? 'card-result' : 'card-tour'} `}>
        <div className="tourcard-image">
          <img src={imageUrl} alt={imageAlt} />
        </div>
        <TourCardDetails
          isResult={isResult}
          activity={topContent[0].activities[0]}
        />
      </div>
    );
  }
}

export default TourCard;

TourCard.propTypes = {
  topContent: topContentPropType.isRequired,
};
