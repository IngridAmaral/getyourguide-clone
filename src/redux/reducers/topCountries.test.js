import { GET_TOP_COUNTRIES } from '../actionTypes/actionTypes';
import { initialState, topCountriesReducer } from './topCountries';

describe('topCountriesReducer', () => {
  test('should return the initial state', () => {
    expect(topCountriesReducer()).toEqual(initialState);
  });

  test('should handle GET_TOP_COUNTRIES_PENDING', () => {
    expect(
      topCountriesReducer(initialState, {
        type: `${GET_TOP_COUNTRIES}_PENDING`,
      }),
    ).toEqual(
      {
        ...initialState,
        isPending: true,
      },
    );
  });

  test('should handle GET_TOP_COUNTRIES_FULFILLED', () => {
    const payload = 'payload';
    expect(
      topCountriesReducer(initialState, {
        type: `${GET_TOP_COUNTRIES}_FULFILLED`,
        payload,
      }),
    ).toEqual(
      {
        ...initialState,
        countries: payload,
      },
    );
  });


  test('should handle GET_TOP_COUNTRIES_REJECTED', () => {
    const payload = 'payload';
    expect(
      topCountriesReducer(initialState, {
        type: `${GET_TOP_COUNTRIES}_REJECTED`,
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
