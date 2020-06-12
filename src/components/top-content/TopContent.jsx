import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { getTopCity } from '../../redux/reducers/topCity';
import { fetchTopCityAC } from '../../redux/actions/getTopCity';
import { topCityPropType } from '../../propTypes/topCityType';
import { kebabCase } from '../../utils/kebab-case';
import { capitalCase } from '../../utils/capital-case';
import './TopContent.scss';
import Button from '../button/Button';
import TopCities from '../top-cities-nav/TopCities';
import LocationCard from '../location-card/LocationCard';
import TourCard from '../tour-card/TourCard';
import TopLocationCard from '../top-location-card/TopLocationCard';


const IS_RESULT = false;
export const MAX_CARDS = 4;

export class TopContent extends React.Component {
  state = {
    activeCity: 'paris',
    cities: {},
  };

  componentDidMount() {
    const { fetchTopCity } = this.props;
    fetchTopCity('destinations/paris');
  }

  componentDidUpdate(prevProps) {
    const { topCity } = this.props;
    if (topCity.destination !== prevProps.topCity.destination) {
      this.setState((state) => ({
        cities: { ...state.cities, [topCity.destination]: topCity },
        activeCity: topCity.destination,
      }));
    }
  }

  fetchNewCity = (city) => {
    const { fetchTopCity } = this.props;
    const { cities } = this.state;
    const kebabCaseCity = kebabCase(city);

    if (!cities[kebabCaseCity]) {
      fetchTopCity(`destinations/${kebabCaseCity}`);
    } else {
      this.setState({ activeCity: kebabCaseCity });
    }
  };

  render() {
    const { activeCity, cities } = this.state;
    const activeCityData = cities[activeCity];
    console.log(this.props.topCity);
    if (!activeCityData) {
      return null;
    }

    return (
      <div className="container-center">
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
          <Button
            text={`Find more activities in ${capitalCase(activeCity)}`}
            btnClass="bg-none"
          />

          <div className="most-iconic">
            <span className="iconic-title">{`${capitalCase(activeCity)} most iconic sights`}</span>
            <div className="top-location-card-wrapper">
              {activeCityData.iconic.map((location) => (
                <TopLocationCard
                  key={location.location + location.count}
                  location={location.location}
                  count={location.count}
                  img={location.img}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  topCity: getTopCity(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    fetchTopCity: fetchTopCityAC,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(TopContent);

TopContent.propTypes = {
  topCity: topCityPropType.isRequired,
  fetchTopCity: PropTypes.func.isRequired,
};
