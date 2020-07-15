import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mockTours } from './mockedTours';
import Results from './Results';
import Header from '../header/Header';
import ResultsItems from './ResultsItems';
import FilterSection from './FilterSection';
import NoResults from './NoResults';
import Newsletter from '../newsletter/Newsletter';
import Footer from '../footer/Footer';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const defaultProps = {
  match: {
    isExact: true,
    params: { city: 'paris' },
    path: '/results',
    url: '/results',
  },
};

const wrappConnect = (child, emptyTours) => {
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

  it('should render the header component', () => {
    const results = <Results {...defaultProps} />;
    const wrapper = mount(wrappConnect(results));

    expect(wrapper.find(Header).exists()).toBe(true);
  });

  it('should render the ResultsItems component', () => {
    const results = <Results {...defaultProps} />;
    const wrapper = mount(wrappConnect(results));

    expect(wrapper.find(ResultsItems).exists()).toBe(true);
  });

  it('should NOT render the ResultsItems component', () => {
    const results = <Results {...defaultProps} />;
    const wrapper = mount(wrappConnect(results, true));

    expect(wrapper.find(ResultsItems).exists()).toBe(false);
  });

  it('should render the NoResults component', () => {
    const results = <Results {...defaultProps} />;
    const wrapper = mount(wrappConnect(results, true));

    expect(wrapper.find(NoResults).exists()).toBe(true);
  });

  it('should NOT render the NoResults component', () => {
    const results = <Results {...defaultProps} />;
    const wrapper = mount(wrappConnect(results));

    expect(wrapper.find(NoResults).exists()).toBe(false);
  });

  it('should render the FilterSection component', () => {
    const results = <Results {...defaultProps} />;
    const wrapper = mount(wrappConnect(results));

    expect(wrapper.find(FilterSection).exists()).toBe(true);
  });


  it('should render the Newsletter component', () => {
    const results = <Results {...defaultProps} />;
    const wrapper = mount(wrappConnect(results));

    expect(wrapper.find(Newsletter).exists()).toBe(true);
  });

  it('should render the Footer component', () => {
    const results = <Results {...defaultProps} />;
    const wrapper = mount(wrappConnect(results));

    expect(wrapper.find(Footer).exists()).toBe(true);
  });
});
