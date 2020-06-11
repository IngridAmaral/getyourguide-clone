import { GET_TOP_CITY } from '../actionTypes/actionTypes';

export const initialState = {
  isPending: false,
  city: {},
  error: null,
};

export function topCityReducer(state = initialState, action = {}) {
  switch (action.type) {
    case `${GET_TOP_CITY}_PENDING`:
      return { ...state, isPending: true };
    case `${GET_TOP_CITY}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        city: action.payload,
      };
    case `${GET_TOP_CITY}_REJECTED`:
      return {
        ...state,
        isPending: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export const getTopCity = (state) => state.topCity.city;
export const getTopCityPending = (state) => state.topCity.isPending;
export const getTopCityError = (state) => state.topcity.error;
