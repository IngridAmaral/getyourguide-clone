import React from 'react';
import { shallow, mount } from 'enzyme';
import { SearchClass } from './Search';
import AutoComplete from './AutoComplete';
import Button from '../button/Button';


const defaultProps = {
  tours: [{ tour: 1 }],
  fetchDestinationsTours() {},
};

describe('<Search />', () => {
  it('renders component', () => {
    shallow(<SearchClass {...defaultProps} />);
  });

  it('should render the button component', () => {
    const wrapper = shallow(<SearchClass {...defaultProps} />);

    expect(wrapper.find(Button).exists()).toBe(true);
  });

  it('should render the AutoComplete component', () => {
    const wrapper = shallow(<SearchClass {...defaultProps} />);

    expect(wrapper.find(AutoComplete).exists()).toBe(true);
  });

  it('should render fetch the tours on click', () => {
    const fetch = jest.fn();
    const wrapper = mount(<SearchClass {...defaultProps} fetchDestinationsTours={fetch} />);
    wrapper.setProps({ userInput: 'paris' });
    wrapper.find('button').simulate('click');

    expect(fetch).toHaveBeenCalled();
  });
});
