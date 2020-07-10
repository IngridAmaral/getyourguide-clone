import React from 'react';
import { shallow } from 'enzyme';
import RenderImg from './RenderImg';

describe('<RenderImg />', () => {
  it('renders component', () => {
    shallow(<RenderImg />);
  });

  it('renders the correct class each time', () => {
    jest.useFakeTimers();
    const wrapper = shallow(<RenderImg />);

    expect(wrapper.find('img').at(0).hasClass('show')).toBe(true);
    expect(wrapper.find('img').at(1).hasClass('hide')).toBe(true);
    expect(wrapper.find('img').at(2).hasClass('hide')).toBe(true);

    jest.runOnlyPendingTimers();
    wrapper.update();

    expect(wrapper.find('img').at(0).hasClass('hide')).toBe(true);
    expect(wrapper.find('img').at(1).hasClass('show')).toBe(true);
    expect(wrapper.find('img').at(2).hasClass('hide')).toBe(true);

    jest.useRealTimers();
  });
});
