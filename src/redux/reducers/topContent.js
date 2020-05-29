import { GET_TOP_CONTENT } from '../actionTypes/actionTypes';

export const initialState = {
  isPending: false,
  content: [],
  error: null,
};

export function topContentReducer(state = initialState, action = {}) {
  switch (action.type) {
    case `${GET_TOP_CONTENT}_PENDING`:
      return { ...state, isPending: true };
    case `${GET_TOP_CONTENT}_FULFILLED`:
      return {
        ...state,
        isPending: false,
        content: action.payload,
      };
    case `${GET_TOP_CONTENT}_REJECTED`:
      return {
        ...state,
        isPending: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export const getTopContent = (state) => state.topContent.content;
export const getTopContentPending = (state) => state.topContent.isPending;
export const getTopContentError = (state) => state.topContent.error;
