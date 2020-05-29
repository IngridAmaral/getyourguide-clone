import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { popularReducer } from './reducers/popular';
import { topContentReducer } from './reducers/topContent';
import { destinationsToursReducer } from './reducers/destinationsTours';

const rootReducers = combineReducers({
  popular: popularReducer,
  topContent: topContentReducer,
  destinationsTours: destinationsToursReducer,
});

const middlewares = [thunk, promise];

export const store = createStore(rootReducers, applyMiddleware(...middlewares));
