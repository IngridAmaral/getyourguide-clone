import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { popularReducer } from './reducers/popular';
import { topCountriesReducer } from './reducers/topCountries';
import { destinationsToursReducer } from './reducers/destinationsTours';
import { topCityReducer } from './reducers/topCity';
import { topAttractionsReducer } from './reducers/topAttractions';

const rootReducers = combineReducers({
  popular: popularReducer,
  topCountries: topCountriesReducer,
  destinationsTours: destinationsToursReducer,
  topCity: topCityReducer,
  topAttractions: topAttractionsReducer,
});

const middlewares = [thunk, promise];

export const store = createStore(rootReducers, applyMiddleware(...middlewares));
