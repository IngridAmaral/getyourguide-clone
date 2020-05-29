import { GET_POPULAR } from '../actionTypes/actionTypes';

export const initialState = {
  isPending: false,
  popular: [],
  error: null,
};

export function popularReducer(state = initialState, action = {}) {
  switch (action.type) {
    case `${GET_POPULAR}_PENDING`:
      return { ...state, isPending: true };
    case `${GET_POPULAR}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        popular: action.payload,
      };
    case `${GET_POPULAR}_REJECTED`:
      return {
        ...state,
        isPending: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export const getPopular = (state) => state.popular.popular;
export const getPopularPending = (state) => state.popular.isPending;
export const getPopularError = (state) => state.popular.error;
