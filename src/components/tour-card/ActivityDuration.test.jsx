import React from 'react';
import { shallow } from 'enzyme';
import ActivityDuration from './ActivityDuration';
import { ReactComponent as Time } from '../../assets/svgs/time.svg';
import { ReactComponent as Duration } from '../../assets/svgs/aboutTour/duration.svg';

const defaultProps = {
  page: 'home',
  position: 'top',
  duration: '2 hours',
};

describe('<ActivityDuration />', () => {
  it('renders component', () => {
    shallow(<ActivityDuration {...defaultProps} />);
  });

  it('has correct class if page is result or not', () => {
    const wrapper = shallow(<ActivityDuration {...defaultProps} />);
    expect(wrapper.find('div.activity-duration').hasClass('home')).toEqual(true);

    const wrapperResult = shallow(<ActivityDuration {...defaultProps} page="result" />);
    expect(wrapperResult.find('div.activity-duration').hasClass('result')).toEqual(true);
  });

  it('has correct component based on position', () => {
    const wrapperTop = shallow(<ActivityDuration {...defaultProps} />);
    expect(wrapperTop.find(Time).exists()).toEqual(true);

    const wrapperBottom = shallow(<ActivityDuration {...defaultProps} position="bottom" />);
    expect(wrapperBottom.find(Duration).exists()).toEqual(true);
  });

  it('has correct text displayed based on duration', () => {
    const wrapper = shallow(<ActivityDuration {...defaultProps} />);
    expect(wrapper.find('span').text()).toBe(defaultProps.duration);
  });
});
