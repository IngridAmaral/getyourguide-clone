import React from 'react';
import { shallow } from 'enzyme';
import BannerContent from './BannerContent';
import Search from '../../containers/search/Search';

describe('<BannerContent />', () => {
  it('renders component', () => {
    shallow(<BannerContent />);
  });

  it('renders the search component', () => {
    const wrapper = shallow(<BannerContent />);

    expect(wrapper.find(Search).exists()).toBe(true);
  });
});
