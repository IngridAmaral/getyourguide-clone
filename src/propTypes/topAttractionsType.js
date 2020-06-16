import PropTypes from 'prop-types';

export const topAttractionPropType = PropTypes.shape({
  activitiesCount: PropTypes.number,
  destination: PropTypes.string,
  img: PropTypes.string,
  url: PropTypes.string,
});

export const topAttractionsPropType = PropTypes.arrayOf(topAttractionPropType);
