import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTopDestinationsAC } from './redux/actions/getTopDestinations';
import { getTopDestinations } from './redux/reducers/getTopDestinations';
import { fetchToursBarcelonaAC } from './redux/actions/getToursBarcelona';
import { getToursBarcelona } from './redux/reducers/getToursBarcelona';

import { colorLavanderBlush } from './styles/_colors.scss';

class App extends React.Component {
  componentDidMount() {
    const { fetchTopDestinations, fetchToursBarcelona } = this.props;
    fetchTopDestinations();
    fetchToursBarcelona();
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
  topDestinations: getTopDestinations(state),
  toursBarcelona: getToursBarcelona(state),

});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    fetchTopDestinations: fetchTopDestinationsAC,
    fetchToursBarcelona: fetchToursBarcelonaAC,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
