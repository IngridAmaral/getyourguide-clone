import { GET_TOP_ATTRACTIONS } from '../actionTypes/actionTypes';
import { initialState, topAttractionsReducer } from './topAttractions';

describe('topAttractionsReducer', () => {
  test('should return the initial state', () => {
    expect(topAttractionsReducer()).toEqual(initialState);
  });

  test('should handle GET_TOP_ATTRACTIONS_PENDING', () => {
    expect(
      topAttractionsReducer(initialState, {
        type: `${GET_TOP_ATTRACTIONS}_PENDING`,
      }),
    ).toEqual(
      {
        ...initialState,
        isPending: true,
      },
    );
  });

  test('should handle GET_TOP_ATTRACTIONS_FULFILLED', () => {
    const payload = 'payload';
    expect(
      topAttractionsReducer(initialState, {
        type: `${GET_TOP_ATTRACTIONS}_FULFILLED`,
        payload,
      }),
    ).toEqual(
      {
        ...initialState,
        attractions: payload,
      },
    );
  });

  test('should handle GET_TOP_ATTRACTIONS_REJECTED', () => {
    const payload = 'payload';
    expect(
      topAttractionsReducer(initialState, {
        type: `${GET_TOP_ATTRACTIONS}_REJECTED`,
        payload,
      }),
    ).toEqual(
      {
        ...initialState,
        error: payload,
      },
    );
  });
});
