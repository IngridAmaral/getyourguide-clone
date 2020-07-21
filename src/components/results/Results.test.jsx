import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { mockTours } from './mockedTours';
import Results, { SECTIONS } from './Results';
import Header from '../header/Header';
import ResultsItems from './ResultsItems';
import FilterSection from './FilterSection';
import NoResults from './NoResults';
import Newsletter from '../newsletter/Newsletter';
import Footer from '../footer/Footer';

const middlewares = [thunk, promise];
const mockStore = configureMockStore(middlewares);

const defaultProps = {
  match: {
    isExact: true,
    params: { city: 'paris' },
    path: '/results',
    url: '/results',
  },
};

const wrapperConnect = (child, emptyTours) => {
  let store = mockStore({
    destinationsTours: { tours: mockTours },
  });

  if (emptyTours) {
    store = mockStore({
      destinationsTours: { tours: [] },
    });
  }
  return (
    <Provider store={store}>
      <BrowserRouter>
        {child}
      </BrowserRouter>
    </Provider>
  );
};

describe('<Results />', () => {
  it('renders component', () => {
    shallow(
      <BrowserRouter>
        <Results {...defaultProps} />
      </BrowserRouter>,
    );
  });

  it('should render the `Header` component', () => {
    const results = <Results {...defaultProps} />;
    const wrapper = mount(wrapperConnect(results));

    expect(wrapper.find(Header).exists()).toBe(true);
    expect(wrapper.find(Header).props().enforceCurrencyAndLang).toBe(true);
    expect(wrapper.find(Header).props().showSearchBar).toBe(true);
  });

  it('should render the `ResultsItems` component', () => {
    const results = <Results {...defaultProps} />;
    const wrapper = mount(wrapperConnect(results));

    expect(wrapper.find(ResultsItems).exists()).toBe(true);
    expect(wrapper.find(ResultsItems).props().tours).toEqual(mockTours);
    expect(wrapper.find(NoResults).exists()).toBe(false);
  });

  it('should render `NoResults` component when no tours are provided', () => {
    const results = <Results {...defaultProps} />;
    const wrapper = mount(wrapperConnect(results, true));

    expect(wrapper.find(ResultsItems).exists()).toBe(false);
    expect(wrapper.find(NoResults).exists()).toBe(true);
  });

  it('should render the `FilterSection` component', () => {
    const results = <Results {...defaultProps} />;
    const wrapper = mount(wrapperConnect(results));

    expect(wrapper.find(FilterSection).exists()).toBe(true);

    SECTIONS.forEach((option, idx) => {
      expect(wrapper.find(FilterSection).at(idx).props().title).toEqual(option.title);
      expect(wrapper.find(FilterSection).at(idx).props().options).toEqual(option.options);
    });
  });

  it('should render the `Newsletter` component', () => {
    const results = <Results {...defaultProps} />;
    const wrapper = mount(wrapperConnect(results));

    expect(wrapper.find(Newsletter).exists()).toBe(true);
  });

  it('should render the `Footer` component', () => {
    const results = <Results {...defaultProps} />;
    const wrapper = mount(wrapperConnect(results));

    expect(wrapper.find(Footer).exists()).toBe(true);
  });
});
