import React from 'react';
import { shallow } from 'enzyme';
import FilterSection from './FilterSection';

const defaultProps = {
  title: 'filter',
  options: ['option1', 'option2', 'option3'],
};

describe('<FilterSection />', () => {
  it('renders component', () => {
    shallow(<FilterSection {...defaultProps} />);
  });

  it('should open and close the filter options on click', () => {
    const wrapper = shallow(<FilterSection {...defaultProps} />);

    // OPEN
    wrapper.find('.title').simulate('click');
    wrapper.update();

    expect(wrapper.find('.open').exists()).toBe(true);
    expect(wrapper.find('.rotate-caret').exists()).toBe(true);

    // CLOSE
    wrapper.find('.title').simulate('click');
    wrapper.update();

    expect(wrapper.find('.open').exists()).not.toBe(true);
    expect(wrapper.find('.rotate-caret').exists()).not.toBe(true);
  });

  it('should render options list', () => {
    const wrapper = shallow(<FilterSection {...defaultProps} />);
    const options = wrapper.find('.option');

    expect(options).toHaveLength(defaultProps.options.length);
    options.forEach((option, idx) => {
      expect(option.find('input').props().value).toEqual(defaultProps.options[idx]);
      expect(option.find('label').text()).toEqual(defaultProps.options[idx]);
    });
  });
});
