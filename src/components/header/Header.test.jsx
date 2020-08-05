import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import Navigation from './Navigation';
import Search from '../../containers/search/Search';

const defaultProps = {
  showSearchBar: true,
  enforceCurrencyAndLang: true,
};

describe('<Header />', () => {
  it('renders component', () => {
    shallow(<Header {...defaultProps} />);
  });

  it('renders items', () => {
    const wrapper = shallow(<Header {...defaultProps} />);
    expect(wrapper.find(Navigation).exists()).toBe(true);
  });

  it('should render two search components', () => {
    const wrapper = shallow(<Header {...defaultProps} />);
    expect(wrapper.find(Search)).toHaveLength(2);
  });

  it('should not render any search component', () => {
    const wrapper = shallow(<Header {...defaultProps} showSearchBar={false} />);
    expect(wrapper.find(Search).exists()).toBe(false);
  });
});
