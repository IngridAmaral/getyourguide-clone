import PropTypes from 'prop-types';
import { activitiesPropTypes } from './activityType';

export const topContentPropType = PropTypes.arrayOf(PropTypes.shape({
  activities: activitiesPropTypes.isRequired,
  bgColor: PropTypes.string.isRequired,
  btnTxt: PropTypes.string.isRequired,
  descripton: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}));
