import { GET_TOP_CITY } from '../actionTypes/actionTypes';
import { initialState, topCityReducer } from './topCity';

describe('topCityReducer', () => {
  test('should return the initial state', () => {
    expect(topCityReducer()).toEqual(initialState);
  });

  test('should handle GET_TOP_City_PENDING', () => {
    expect(
      topCityReducer(initialState, {
        type: `${GET_TOP_CITY}_PENDING`,
      }),
    ).toEqual(
      {
        ...initialState,
        isPending: true,
      },
    );
  });

  test('should handle GET_TOP_City_FULFILLED', () => {
    const payload = 'payload';
    expect(
      topCityReducer(initialState, {
        type: `${GET_TOP_CITY}_FULFILLED`,
        payload,
      }),
    ).toEqual(
      {
        ...initialState,
        city: payload,
      },
    );
  });


  test('should handle GET_TOP_City_REJECTED', () => {
    const payload = 'payload';
    expect(
      topCityReducer(initialState, {
        type: `${GET_TOP_CITY}_REJECTED`,
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
