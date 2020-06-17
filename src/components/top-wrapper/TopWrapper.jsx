import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { topAttractionsPropType } from '../../propTypes/topAttractionsType';
import { topCountriesPropType } from '../../propTypes/topCountriesType';
import { getTopAttractions } from '../../redux/reducers/topAttractions';
import { fetchTopAttractionsAC } from '../../redux/actions/getTopAttractions';
import { getTopCountries } from '../../redux/reducers/topCountries';
import { fetchTopCountriesAC } from '../../redux/actions/getTopCountries';
import Slider from '../slider/Slider';
import { ReactComponent as Zigzag } from '../../assets/svgs/separators/zigzag.svg';
import './TopWrapper.scss';

export class TopWrapper extends React.Component {
  componentDidMount() {
    const { fetchTopAttractions, fetchTopCountries } = this.props;
    fetchTopAttractions();
    fetchTopCountries();
  }

  render() {
    const { topAttractions, topCountries } = this.props;

    if (!topAttractions.length || !topCountries.length) {
      return null;
    }

    return (
      <div className="top-wrapper-container">
        <div className="separator">
          <Zigzag />
        </div>
        <div className="top-slider">
          <span className="title">Top tourists attractions worldwide</span>
          <Slider data={topAttractions} />
        </div>
        <div className="top-slider">
          <span className="title">Top Destinations</span>
          <Slider data={topAttractions} type="destinations" />
        </div>
        <div className="top-slider">
          <span className="title">Top countries to visit</span>
          <Slider data={topCountries} type="countries" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  topAttractions: getTopAttractions(state),
  topCountries: getTopCountries(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    fetchTopAttractions: fetchTopAttractionsAC,
    fetchTopCountries: fetchTopCountriesAC,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(TopWrapper);

TopWrapper.propTypes = {
  topAttractions: topAttractionsPropType.isRequired,
  fetchTopAttractions: PropTypes.func.isRequired,
  topCountries: topCountriesPropType.isRequired,
  fetchTopCountries: PropTypes.func.isRequired,
};
