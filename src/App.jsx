import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getDestinationsTours } from './redux/reducers/destinationsTours';
import { getPopular } from './redux/reducers/popular';
import { getTopContent } from './redux/reducers/topContent';
import { fetchDestinationsToursAC } from './redux/actions/getDestinationsTours';
import { fetchPopularAC } from './redux/actions/getPopular';
import { fetchTopContentAC } from './redux/actions/getTopContent';

import { colorLavanderBlush } from './styles/_colors.scss';

class App extends React.Component {
  componentDidMount() {
    const { fetchDestinationsTours, fetchPopular, fetchTopContent } = this.props;

    fetchDestinationsTours('tours-paris');
    fetchTopContent('destinations');
    fetchPopular();
  }

  render() {
    console.log('props', this.props);
    return (
      <div className="App">
        <header className="App-header">
          <p style={{ color: colorLavanderBlush, fontWeight: 'bold' }}>
            APP
          </p>
        </header>
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
