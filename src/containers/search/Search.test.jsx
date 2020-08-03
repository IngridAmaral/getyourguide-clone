import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { SearchClass } from './Search';
import AutoComplete from './AutoComplete';

const defaultProps = {
  tours: [{ tour: 1 }],
  fetchDestinationsTours() {},
  simplified: true,
};

describe('<Search />', () => {
  it('renders component', () => {
    shallow(
      <BrowserRouter>
        <SearchClass {...defaultProps} />
      </BrowserRouter>,
    );
  });

  it('should render the button component', () => {
    const wrapper = mount(
      <BrowserRouter>
        <SearchClass {...defaultProps} />
      </BrowserRouter>,
    );

    expect(wrapper.find('button').exists()).toBe(true);
  });

  it('should render the AutoComplete component', () => {
    const wrapper = mount(
      <BrowserRouter>
        <SearchClass {...defaultProps} />
      </BrowserRouter>,
    );

    expect(wrapper.find(AutoComplete).exists()).toBe(true);
  });

  it('should fetch the tours on click', () => {
    const fetch = jest.fn();
    const wrapper = mount(
      <BrowserRouter>
        <SearchClass {...defaultProps} fetchDestinationsTours={fetch} simplified={false} />
      </BrowserRouter>,
    );
    wrapper.setProps({ userInput: 'paris' });
    wrapper.update();
    wrapper.find('button').simulate('click');

    expect(fetch).toHaveBeenCalled();
  });
});
