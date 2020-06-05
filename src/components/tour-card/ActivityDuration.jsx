import React from 'react';
import PropTypes from 'prop-types';
import { isResultPropType } from '../../propTypes/isRestultPropType';
import './ActivityDuration.scss';
import { ReactComponent as Time } from '../../assets/svgs/time.svg';
import { ReactComponent as Duration } from '../../assets/svgs/aboutTour/duration.svg';

const ActivityDuration = ({
  page, duration, position,
}) => (
  <div className={`activity-duration ${page} ${position}`}>
    {position === 'top' ? <Time /> : <Duration />}
    <div className="activity-duration-title">Duration:</div>
    <span>{duration}</span>
  </div>
);

export default ActivityDuration;

ActivityDuration.propTypes = {
  page: isResultPropType.isRequired,
  duration: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};
