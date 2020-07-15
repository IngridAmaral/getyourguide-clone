import PropTypes from 'prop-types';

export const activityPropTypes = PropTypes.shape({
  imageUrl: PropTypes.string,
  imageAlt: PropTypes.string,
  duration: PropTypes.string.isRequired,
  averageRating: PropTypes.string,
  totalRating: PropTypes.number,
  title: PropTypes.string.isRequired,
  totalRatingTitle: PropTypes.string.isRequired,
  isGygOriginal: PropTypes.bool.isRequired,
  price: PropTypes.shape({
    min: PropTypes.string.isRequired,
    original: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
  cardBannerMessage: PropTypes.string.isRequired,
  smallDescription: PropTypes.string.isRequired,
  freeCancellationFlag: PropTypes.bool.isRequired,
});

export const activitiesPropTypes = PropTypes.arrayOf(activityPropTypes);
