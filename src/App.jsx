import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { getDestinationsTours } from './redux/reducers/destinationsTours';
import { getPopular } from './redux/reducers/popular';
import { getTopContent } from './redux/reducers/topContent';
import { fetchDestinationsToursAC } from './redux/actions/getDestinationsTours';
import { fetchPopularAC } from './redux/actions/getPopular';
import { fetchTopContentAC } from './redux/actions/getTopContent';
import TourCard from './components/tour-card/TourCard';
import './App.scss';

class App extends React.Component {
  componentDidMount() {
    const { fetchDestinationsTours, fetchPopular, fetchTopContent } = this.props;

    fetchDestinationsTours('tours-paris');
    fetchTopContent('destinations');
    fetchPopular();
  }

  render() {
    const { topContent } = this.props;
    console.log('props', topContent);
    if (topContent.length === 0) {
      return null;
    }

    return (
      <div className="App">
        <TourCard topContent={topContent} />
        <TourCard topContent={topContent} />
        <TourCard topContent={topContent} />
        <TourCard topContent={topContent} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  destinationsTours: getDestinationsTours(state),
  popular: getPopular(state),
  topContent: getTopContent(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    fetchDestinationsTours: fetchDestinationsToursAC,
    fetchPopular: fetchPopularAC,
    fetchTopContent: fetchTopContentAC,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  fetchDestinationsTours: PropTypes.func.isRequired,
  fetchPopular: PropTypes.func.isRequired,
  fetchTopContent: PropTypes.func.isRequired,
};
