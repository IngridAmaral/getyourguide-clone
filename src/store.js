import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { topDestinationsReducer } from './redux/reducers/getTopDestinations';

const rootReducers = combineReducers({
  topDestinations: topDestinationsReducer,
});

const middlewares = [thunk, promise];

export const store = createStore(rootReducers, applyMiddleware(...middlewares));
