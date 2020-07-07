import React from 'react';
import { shallow } from 'enzyme';
import SuggestionsList from './SuggestionsList';

const defaultProps = {
  filteredSuggestions: ['paris', 'barcelona'],
  activeSuggestion: 0,
  onClick() {},
};

describe('<SuggestionsList />', () => {
  it('renders component', () => {
    shallow(<SuggestionsList {...defaultProps} />);
  });

  it('renders the correct number of suggestions', () => {
    const wrapper = shallow(<SuggestionsList {...defaultProps} />);
    expect(wrapper.find('li')).toHaveLength(defaultProps.filteredSuggestions.length);
  });

  it('renders the correct class when it is the active suggestion', () => {
    const wrapper = shallow(<SuggestionsList {...defaultProps} />);
    expect(wrapper.find('li').at(0).hasClass('suggestion-active')).toBe(true);
    expect(wrapper.find('li').at(1).hasClass('suggestion-active')).toBe(false);

    wrapper.setProps({ activeSuggestion: 1 });
    wrapper.update();
    expect(wrapper.find('li').at(0).hasClass('suggestion-active')).toBe(false);
    expect(wrapper.find('li').at(1).hasClass('suggestion-active')).toBe(true);
  });

  it('should call onClick prop', () => {
    const click = jest.fn();
    const wrapper = shallow(<SuggestionsList {...defaultProps} onClick={click} />);
    wrapper.find('li').at(0).simulate('click');

    expect(click).toHaveBeenCalled();
  });
});
