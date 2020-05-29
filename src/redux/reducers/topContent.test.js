import { GET_TOP_CONTENT } from '../actionTypes/actionTypes';
import { initialState, topContentReducer } from './topContent';

describe('topContentReducer', () => {
  test('should return the initial state', () => {
    expect(topContentReducer()).toEqual(initialState);
  });

  test('should handle GET_TOP_CONTENT_PENDING', () => {
    expect(
      topContentReducer(initialState, {
        type: `${GET_TOP_CONTENT}_PENDING`,
      }),
    ).toEqual(
      {
        ...initialState,
        isPending: true,
      },
    );
  });

  test('should handle GET_TOP_CONTENT_FULFILLED', () => {
    const payload = 'payload';
    expect(
      topContentReducer(initialState, {
        type: `${GET_TOP_CONTENT}_FULFILLED`,
        payload,
      }),
    ).toEqual(
      {
        ...initialState,
        content: payload,
      },
    );
  });


  test('should handle GET_TOP_CONTENT_REJECTED', () => {
    const payload = 'payload';
    expect(
      topContentReducer(initialState, {
        type: `${GET_TOP_CONTENT}_REJECTED`,
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
