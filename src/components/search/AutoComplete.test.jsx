import React from 'react';
import { shallow, mount } from 'enzyme';
import AutoComplete from './AutoComplete';
import SuggestionsList from './SuggestionsList';


const defaultProps = {
  filteredSuggestions: ['Paris', 'Barcelona'],
  activeSuggestion: 0,
  showSuggestions: true,
  onChange() {},
  onKeyDown() {},
  onClick() {},
  userInput: 'paris',
};

describe('<AutoComplete />', () => {
  it('renders component', () => {
    shallow(<AutoComplete {...defaultProps} />);
  });

  it('renders the correct props to suggestions list', () => {
    const wrapper = shallow(<AutoComplete {...defaultProps} />);

    expect(wrapper.find(SuggestionsList).props().filteredSuggestions)
      .toBe(defaultProps.filteredSuggestions);
    expect(wrapper.find(SuggestionsList).props().activeSuggestion)
      .toBe(defaultProps.activeSuggestion);
    expect(wrapper.find(SuggestionsList).props().onClick).toBe(defaultProps.onClick);
  });

  it('should NOT render the suggestions list when showSuggestions is false', () => {
    const wrapper = shallow(<AutoComplete {...defaultProps} showSuggestions={false} />);

    expect(wrapper.find(SuggestionsList)).not.toBe(true);
  });

  it('should NOT render the suggestions list when user input is empty', () => {
    const wrapperEmptyInput = shallow(<AutoComplete {...defaultProps} userInput="" />);

    expect(wrapperEmptyInput.find(SuggestionsList)).not.toBe(true);
  });

  it('should trigger the onChange prop on input', () => {
    const mockChange = jest.fn();
    const wrapper = mount(<AutoComplete {...defaultProps} onChange={mockChange} />);
    wrapper.find('input').simulate('change', { target: { value: 'barcelona' } });
    wrapper.update();

    expect(mockChange).toHaveBeenCalledWith(expect.objectContaining({
      target: { value: 'barcelona' },
    }));
  });

  it('should trigger the onKeyDown on input', () => {
    const mockKeyDown = jest.fn();
    const wrapper = mount(<AutoComplete {...defaultProps} onKeyDown={mockKeyDown} />);
    wrapper.find('input').simulate('keydown', { keyCode: 13 });
    wrapper.update();

    expect(mockKeyDown).toHaveBeenCalledWith(expect.objectContaining({
      keyCode: 13,
    }));

    wrapper.find('input').simulate('keydown', { keyCode: 38 });
    wrapper.update();

    expect(mockKeyDown).toHaveBeenCalledWith(expect.objectContaining({
      keyCode: 38,
    }));

    wrapper.find('input').simulate('keydown', { keyCode: 40 });
    wrapper.update();

    expect(mockKeyDown).toHaveBeenCalledWith(expect.objectContaining({
      keyCode: 40,
    }));
  });
});
