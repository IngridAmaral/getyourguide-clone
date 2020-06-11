import PropTypes from 'prop-types';
import { activitiesPropTypes } from './activityType';

export const topCityPropType = PropTypes.shape({
  activities: activitiesPropTypes.isRequired,
  todo: activitiesPropTypes,
  description: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
});
