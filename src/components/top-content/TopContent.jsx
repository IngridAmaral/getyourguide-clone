import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { getTopContent } from '../../redux/reducers/topContent';
import { fetchTopContentAC } from '../../redux/actions/getTopContent';
import { topContentPropType } from '../../propTypes/topContentType';
import { kebabCase } from '../../utils/kebab-case';
import './TopContent.scss';
import TopCities from '../top-cities-nav/TopCities';
import LocationCard from '../location-card/LocationCard';
import TourCard from '../tour-card/TourCard';

const IS_RESULT = false;
export const MAX_CARDS = 4;

class TopContent extends React.Component {
  state = {
    activeCity: 'paris',
    cities: {},
  };

  componentDidMount() {
    const { fetchTopContent } = this.props;
    fetchTopContent('destinations/paris');
  }

  componentDidUpdate(prevProps) {
    const { topContent } = this.props;
    if (topContent.destination !== prevProps.topContent.destination) {
      this.setState((state) => ({
        cities: { ...state.cities, [topContent.destination]: topContent },
        activeCity: topContent.destination,
      }));
    }
  }

  fetchNewCity = (city) => {
    const { fetchTopContent } = this.props;
    const { cities } = this.state;
    const kebabCaseCity = kebabCase(city);

    if (!cities[kebabCaseCity]) {
      fetchTopContent(`destinations/${kebabCaseCity}`);
    } else {
      this.setState({ activeCity: kebabCaseCity });
    }
  };

  render() {
    const { activeCity, cities } = this.state;
    const activeCityData = cities[activeCity];

    if (!activeCityData) {
      return null;
    }

    return (
      <div className="top-content-wrapper">
        <TopCities
          fetchCity={this.fetchNewCity}
          activeCity={activeCity}
        />
        <LocationCard
          location={activeCityData}
        />
        <div className="activities-container">
          <span className="card-header">Unmissable sights and activities</span>
          <div className="activities-cards">
            {activeCityData.activities.slice(0, MAX_CARDS).map((activity) => (
              <TourCard
                key={activity.tourId}
                isResult={IS_RESULT}
                activity={activity}
              />
            ))}
          </div>
        </div>
        <div className="activities-container">
          <span className="card-header">Extraordinary things to do</span>
          <div className="activities-cards">
            {activeCityData.todo.slice(0, MAX_CARDS).map((activity) => (
              <TourCard
                key={activity.tourId}
                isResult={IS_RESULT}
                activity={activity}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  topContent: getTopContent(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    fetchTopContent: fetchTopContentAC,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(TopContent);

TopContent.propTypes = {
  topContent: topContentPropType.isRequired,
  fetchTopContent: PropTypes.func.isRequired,
};
