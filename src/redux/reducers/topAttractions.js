import { GET_TOP_ATTRACTIONS } from '../actionTypes/actionTypes';

export const initialState = {
  isPending: false,
  attractions: [],
  error: null,
};

export function topAttractionsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case `${GET_TOP_ATTRACTIONS}_PENDING`:
      return { ...state, isPending: true };
    case `${GET_TOP_ATTRACTIONS}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        attractions: action.payload,
      };
    case `${GET_TOP_ATTRACTIONS}_REJECTED`:
      return {
        ...state,
        isPending: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export const getTopAttractions = (state) => state.topAttractions.attractions;
export const getTopAttractionsPending = (state) => state.topAttractions.isPending;
export const getTopAttractionsError = (state) => state.topAttractions.error;
