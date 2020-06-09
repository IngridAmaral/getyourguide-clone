import PropTypes from 'prop-types';
import { activitiesPropTypes } from './activityType';

export const topLocationPropType = PropTypes.shape({
  activities: activitiesPropTypes.isRequired,
  description: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
});

export const topContentPropType = PropTypes.arrayOf(topLocationPropType);
