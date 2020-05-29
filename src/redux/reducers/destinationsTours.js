import { GET_DESTINATIONS_TOURS } from '../actionTypes/actionTypes';

export const initialState = {
  isPending: false,
  tours: [],
  error: null,
};

export function destinationsToursReducer(state = initialState, action = {}) {
  switch (action.type) {
    case `${GET_DESTINATIONS_TOURS}_PENDING`:
      return { ...state, isPending: true };
    case `${GET_DESTINATIONS_TOURS}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        tours: action.payload,
      };
    case `${GET_DESTINATIONS_TOURS}_REJECTED`:
      return {
        ...state,
        isPending: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export const getDestinationsTours = (state) => state.destinationsTours.tours;
export const getDestinationsToursPending = (state) => state.destinationsTours.isPending;
export const getDestinationsToursError = (state) => state.destinationsTours.error;
