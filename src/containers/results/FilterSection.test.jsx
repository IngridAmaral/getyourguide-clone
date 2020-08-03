import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import FilterSection from './FilterSection';

const defaultProps = {
  title: 'filter',
  options: [
    { name: '0-3 hours', id: '0-3' },
    { name: '3-5 hours', id: '3-5' },
    { name: '5-7 hours', id: '5-7' },
    { name: 'Full day (7 + hours)', id: '7' },
    { name: 'Multi Day', id: 'n' },
  ],
  filterOptions() {},
  optionsSelected: '',
};

describe('<FilterSection />', () => {
  it('renders component', () => {
    shallow(
      <BrowserRouter>
        <FilterSection {...defaultProps} />
      </BrowserRouter>,
    );
  });

  it('should open and close the filter options on click', () => {
    const wrapper = mount(
      <BrowserRouter>
        <FilterSection {...defaultProps} />
      </BrowserRouter>,
    );

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
    const wrapper = mount(
      <BrowserRouter>
        <FilterSection {...defaultProps} />
      </BrowserRouter>,
    );

    const options = wrapper.find('.option');

    expect(options).toHaveLength(defaultProps.options.length);
    options.forEach((option, idx) => {
      expect(option.find('input').props().value).toEqual(defaultProps.options[idx].id);
      expect(option.find('label').text()).toEqual(defaultProps.options[idx].name);
    });
  });
});
