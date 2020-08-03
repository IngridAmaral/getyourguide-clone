import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { getPopular } from '../../redux/reducers/popular';
import { fetchPopularAC } from '../../redux/actions/getPopular';
import './TopAttractionCategories.scss';
import { ReactComponent as Caret } from '../../assets/svgs/caret.svg';

export class TopAttractionCategoriesClass extends React.Component {
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
              <span className="number">{idx + 1}</span>
              <span className="attraction">{item}</span>
            </div>
          ))}
        </div>
        <div className={`show-more ${isOpen}`} onClick={this.handleClick} onKeyDown={this.handleClick}>
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
)(TopAttractionCategoriesClass);

TopAttractionCategoriesClass.propTypes = {
  fetchPopular: PropTypes.func.isRequired,
  popular: PropTypes.arrayOf(PropTypes.string).isRequired,
};
