import React from 'react';
import { shallow } from 'enzyme';
import Stamp from './Stamp';

const STAMPS = {
  default: 'Find Your Next Adventure',
  gygOriginal: 'GetYourGuide Original',
};

const defaultProps = {
  position: 'top',
  sentKey: 'gygOriginal',
  page: 'home',
};

const { sentKey } = defaultProps;

describe('<Stamp />', () => {
  it('renders component', () => {
    shallow(<Stamp {...defaultProps} />);
  });

  it('renders the correct stamp', () => {
    const wrapper = shallow(<Stamp {...defaultProps} />);
    expect(wrapper.find(`.${sentKey}`).exists()).toBe(true);
  });

  it('renders stamp text', () => {
    const wrapper = shallow(<Stamp {...defaultProps} />);
    expect(wrapper.find(`.${sentKey}`).text()).toBe(STAMPS[sentKey]);
  });

  it('renders default stamp', () => {
    const wrapper = shallow(<Stamp {...defaultProps} sentKey={undefined} />);
    expect(wrapper.find('.default').text()).toBe(STAMPS.default);
  });
});
