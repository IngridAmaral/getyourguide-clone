/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPopular } from '../../redux/reducers/popular';
import { fetchPopularAC } from '../../redux/actions/getPopular';
import './TopAttractionCategories.scss';
import { ReactComponent as Caret } from '../../assets/svgs/caret.svg';

class TopAttractionCategories extends React.Component {
  state = {
    expand: false,
  }

  componentDidMount() {
    const { fetchPopular } = this.props;
    fetchPopular();
  }

  handleClick = () => {
    this.setState((state) => ({ expand: !state.expand }));
  }

  render() {
    const { popular } = this.props;
    const { expand } = this.state;
    const isOpen = expand ? 'open' : 'close';
    const show = expand ? 'Show Less' : 'Show More';
    return (
      <div className="top-attraction-categories-container">
        <div className={`items ${isOpen}`}>
          {popular.map((item, idx) => (
            <div key={item} className="item">
              <span className="number">{idx}</span>
              <span className="attraction">{item}</span>
            </div>
          ))}
        </div>
        <div className={`show-more ${isOpen}`} onClick={() => this.handleClick()}>
          <span>{show}</span>
          <Caret />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  popular: getPopular(state),
});

const mapDispatchTopProps = (dispatch) => bindActionCreators(
  {
    fetchPopular: fetchPopularAC,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchTopProps,
)(TopAttractionCategories);
