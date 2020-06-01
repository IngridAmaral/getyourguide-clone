import React from 'react';

class TourCardDetails extends React.Component {
  render() {
    const { topContent } = this.props;
    console.log(topContent[0].activities);
    return (
      <h1>hello</h1>
    );
  }
}

export default TourCardDetails;
