import { GET_TOP_DESTINATIONS } from '../actionTypes/actionTypes';

const initialState = {
  isPending: false,
  destinations: [],
  error: null,
};

export function topDestinationsReducer(state = initialState, action) {
  console.log(action.type);
  switch (action.type) {
    case `${GET_TOP_DESTINATIONS}_PENDING`:
      return { ...state, isPending: true };
    case `${GET_TOP_DESTINATIONS}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        destinations: action.payload,
      };
    case `${GET_TOP_DESTINATIONS}_REJECTED`:
      return {
        ...state,
        isPending: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export const getTopDestinations = (state) => state.topDestinations.destinations;
export const getTopDestinationsPending = (state) => state.topDestinations.isPending;
export const getTopDestinationsError = (state) => state.topDestinations.error;
