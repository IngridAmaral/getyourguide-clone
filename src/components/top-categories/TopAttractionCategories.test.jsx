import React from 'react';
import { shallow } from 'enzyme';
import { TopAttractionCategoriesClass } from './TopAttractionCategories';

const defaultProps = {
  popular: ['Dubai Sky Diving', 'Rome City Cards', 'Paris Cruises & Boat Tours', 'New York City City Cards'],
  fetchPopular() {},
};

describe('<TopAttractionCategories />', () => {
  it('renders component', () => {
    shallow(<TopAttractionCategoriesClass {...defaultProps} />);
  });

  it('should call the fetch popular function', () => {
    const func = jest.fn();
    shallow(<TopAttractionCategoriesClass {...defaultProps} fetchPopular={func} />);

    expect(func).toHaveBeenCalled();
  });

  it('should render the correct number of items with correct content', () => {
    const wrapper = shallow(<TopAttractionCategoriesClass {...defaultProps} />);
    const items = wrapper.find('.item');

    expect(items).toHaveLength(defaultProps.popular.length);
    items.forEach((item, idx) => {
      expect(item.find('.number').text()).toEqual(`${idx + 1}`);
      expect(item.find('.attraction').text()).toEqual(defaultProps.popular[idx]);
    });
  });

  it('expands the list on show more click', () => {
    const wrapper = shallow(<TopAttractionCategoriesClass {...defaultProps} />);
    const showMore = wrapper.find('.show-more');
    showMore.simulate('click');
    wrapper.update();

    expect(wrapper.find('.open').exists()).toBe(true);
  });

  it('closes the list on show less click', () => {
    const wrapper = shallow(<TopAttractionCategoriesClass {...defaultProps} />);
    const showMore = wrapper.find('.show-more');
    showMore.simulate('click');
    wrapper.update();
    showMore.simulate('click');

    expect(wrapper.find('.close').exists()).toBe(true);
  });
});
