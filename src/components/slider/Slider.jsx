import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Splide } from '@splidejs/react-splide';
import { topAttractionsPropType } from '../../propTypes/topAttractionsType';
import { getTopAttractions } from '../../redux/reducers/topAttractions';
import { fetchTopAttractionsAC } from '../../redux/actions/getTopAttractions';
import './Slider.scss';
import TopLocationCard from '../top-location-card/TopLocationCard';

const SLIDER_OPTIONS = {
  perMove: 1,
  type: 'loop',
  gap: '1rem',
  pagination: false,
  breakpoints: {
    450: {
      perPage: 1,
      cover: true,
    },
    768: {
      perPage: 3,
      cover: false,
    },
    1280: {
      perPage: 4,
      cover: false,
    },
  },
};


export class Slider extends React.Component {
  componentDidMount() {
    const { fetchTopAttractions } = this.props;
    fetchTopAttractions('attractions');
  }

  render() {
    const { topAttractions, type } = this.props;
    console.log(topAttractions);
    if (!topAttractions.length) {
      return null;
    }

    return (
      <div className="top-attractions-container">
        <Splide
          options={SLIDER_OPTIONS}
        >
          { topAttractions.map((attraction) => (
            <TopLocationCard
              key={attraction.destination + attraction.count}
              location={attraction.destination}
              count={attraction.activitiesCount}
              img={attraction.img}
              type={type}
            />
          ))}
        </Splide>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  topAttractions: getTopAttractions(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    fetchTopAttractions: fetchTopAttractionsAC,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(Slider);

Slider.propTypes = {
  topAttractions: topAttractionsPropType.isRequired,
  fetchTopAttractions: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};
