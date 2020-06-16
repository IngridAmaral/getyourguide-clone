import PropTypes from 'prop-types';
import { activitiesPropTypes } from './activityType';

export const topCityPropType = PropTypes.shape({
  activities: activitiesPropTypes,
  todo: activitiesPropTypes,
  description: PropTypes.string,
  destination: PropTypes.string,
  img: PropTypes.string,
  url: PropTypes.string,
});
