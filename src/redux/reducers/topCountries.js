import { GET_TOP_COUNTRIES } from '../actionTypes/actionTypes';

export const initialState = {
  isPending: false,
  countries: [],
  error: null,
};

export function topCountriesReducer(state = initialState, action = {}) {
  switch (action.type) {
    case `${GET_TOP_COUNTRIES}_PENDING`:
      return { ...state, isPending: true };
    case `${GET_TOP_COUNTRIES}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        countries: action.payload,
      };
    case `${GET_TOP_COUNTRIES}_REJECTED`:
      return {
        ...state,
        isPending: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export const getTopCountries = (state) => state.topCountries.countries;
export const getTopCountriesPending = (state) => state.topCountries.isPending;
export const getTopCountriesError = (state) => state.topCountries.error;
