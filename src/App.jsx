import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTopDestinationsAC } from './redux/actions/getTopDestinations';
import { colorLavanderBlush } from './styles/_colors.scss';
import { getTopDestinations } from './redux/reducers/getTopDestinations';

class App extends React.Component {
  componentDidMount() {
    const { fetchTopDestinations } = this.props;
    fetchTopDestinations();
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
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    fetchTopDestinations: fetchTopDestinationsAC,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
