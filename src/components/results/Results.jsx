import React from 'react';
import { connect } from 'react-redux';
import Header from '../header/Header';

// eslint-disable-next-line react/prefer-stateless-function
class Results extends React.Component {
  render() {
    return (
      <div className="">
        <Header />
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  tour: state.destinationsTours.tours,
});

export default connect(mapStateToProps)(Results);
