import React from 'react';
import { shallow } from 'enzyme';
import TextCallouts, { calloutsLength } from './TextCallouts';

describe('<TextCallouts />', () => {
  it('renders component', () => {
    shallow(<TextCallouts />);
  });

  it('renders the correct number of text callouts', () => {
    const wrapper = shallow(<TextCallouts />);
    expect(wrapper.find('.callout')).toHaveLength(calloutsLength);
  });
});
