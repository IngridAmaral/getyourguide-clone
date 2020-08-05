import React from 'react';
import PropTypes from 'prop-types';
import './ResultsItems.scss';
import TourCard from '../../components/tour-card/TourCard';
import Button from '../../components/button/Button';


class ResultsItems extends React.Component {
  state = {
    numberToShow: 20,
    hideBtn: false,
  }

  handleClick = () => {
    const { numberToShow } = this.state;
    const { tours } = this.props;
    let num;
    let hide = false;

    if (numberToShow < tours.length - 20) {
      num = numberToShow + 20;
      hide = false;
    } else {
      num = tours.length;
      hide = true;
    }

    this.setState({ numberToShow: num, hideBtn: hide });
  }

  render() {
    const { tours } = this.props;
    const { numberToShow, hideBtn } = this.state;
    return (
      <div className="results-items-container">
        {tours.slice(0, numberToShow).map((tour) => (
          <TourCard
            key={tour.tourId}
            isResult
            activity={tour}
          />
        ))}
        {hideBtn ? null : <Button text="Show more" btnClass="bg-blue" click={this.handleClick} />}
      </div>
    );
  }
}

ResultsItems.propTypes = {
  tours: PropTypes.arrayOf(PropTypes.object),
};

ResultsItems.defaultProps = {
  tours: [],
};


export default ResultsItems;
