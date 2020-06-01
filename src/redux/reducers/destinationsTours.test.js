import { GET_DESTINATIONS_TOURS } from '../actionTypes/actionTypes';
import { initialState, destinationsToursReducer } from './destinationsTours';

describe('destinationsToursReducer', () => {
  test('should return the initial state', () => {
    expect(destinationsToursReducer()).toEqual(initialState);
  });

  test('should handle GET_DESTINATIONS_TOURS_PENDING', () => {
    expect(
      destinationsToursReducer(initialState, {
        type: `${GET_DESTINATIONS_TOURS}_PENDING`,
      }),
    ).toEqual(
      {
        isPending: true,
        tours: [],
        error: null,
      },
    );
  });

  test('should handle GET_DESTINATIONS_TOURS_FULFILLED', () => {
    const payload = 'payload';
    expect(
      destinationsToursReducer(initialState, {
        type: `${GET_DESTINATIONS_TOURS}_FULFILLED`,
        payload,
      }),
    ).toEqual(
      {
        isPending: false,
        tours: payload,
        error: null,
      },
    );
  });

  test('should handle GET_DESTINATIONS_TOURS_REJECTED', () => {
    const payload = 'payload';
    expect(
      destinationsToursReducer(initialState, {
        type: `${GET_DESTINATIONS_TOURS}_REJECTED`,
        payload,
      }),
    ).toEqual(
      {
        isPending: false,
        tours: [],
        error: payload,
      },
    );
  });
});
