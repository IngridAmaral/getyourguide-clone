/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { activityPropTypes } from '../../propTypes/activityType';
import './TourCard.scss';
import TourCardDetails from './TourCardDetails';

const isResult = true;

class TourCard extends React.Component {
  render() {
    const { activity } = this.props;
    const {
      imageUrl,
      imageAlt,
    } = activity;
    const page = isResult ? 'result' : 'home';
    return (
      <div className={`tourcard-container ${page}`}>
        <div className={`tourcard-image ${page}`}>
          <img src={imageUrl} alt={imageAlt} />
        </div>
        <TourCardDetails
          isResult={isResult}
          activity={activity}
        />
      </div>
    );
  }
}

export default TourCard;

TourCard.propTypes = {
  activity: activityPropTypes.isRequired,
};
