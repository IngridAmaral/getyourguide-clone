import PropTypes from 'prop-types';

export const topCountriePropType = PropTypes.shape({
  destination: PropTypes.string,
  img: PropTypes.string,
});

export const topCountriesPropType = PropTypes.arrayOf(topCountriePropType);
