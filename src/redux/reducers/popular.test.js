import { GET_POPULAR } from '../actionTypes/actionTypes';
import { initialState, popularReducer } from './popular';

describe('popularReducer', () => {
  test('should return the initial state', () => {
    expect(popularReducer()).toEqual(initialState);
  });

  test('should handle GET_POPULAR_PENDING', () => {
    expect(
      popularReducer(initialState, {
        type: `${GET_POPULAR}_PENDING`,
      }),
    ).toEqual(
      {
        ...initialState,
        isPending: true,
      },
    );
  });

  test('should handle GET_POPULAR_FULFILLED', () => {
    const payload = 'payload';
    expect(
      popularReducer(initialState, {
        type: `${GET_POPULAR}_FULFILLED`,
        payload,
      }),
    ).toEqual(
      {
        ...initialState,
        popular: payload,
      },
    );
  });

  test('should handle GET_POPULAR_REJECTED', () => {
    const payload = 'payload';
    expect(
      popularReducer(initialState, {
        type: `${GET_POPULAR}_REJECTED`,
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
