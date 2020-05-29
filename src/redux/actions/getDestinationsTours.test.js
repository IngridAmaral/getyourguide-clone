import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import configureMockStore from 'redux-mock-store';
import { GET_DESTINATIONS_TOURS } from '../actionTypes/actionTypes';
import { fetchDestinationsToursAC } from './getDestinationsTours';
import { destinationsTours } from '../../service/destinationsTours';

jest.mock('../../service/destinationsTours', () => ({
  __esModules: true,
  destinationsTours: jest.fn(),
}));
const middlewares = [thunk, promise];
const mockStore = configureMockStore(middlewares);
const mockDestinationsToursResp = {
  data: {
    hits: [
      {
        objectID: '1',
        title: 'a',
      },
      {
        objectID: '2',
        title: 'b',
      },
    ],
  },
};
const error = new Error('Network Error');
const path = 'tours-paris';

describe('async actions', () => {
  const store = mockStore({ destinationsTours: [] });

  beforeEach(() => store.clearActions());

  test('creates GET_DESTINATIONS_TOURS_FULFILLED when fetching todos has been done', async () => {
    destinationsTours.mockResolvedValue(mockDestinationsToursResp);
    const expectedActions = [
      `${GET_DESTINATIONS_TOURS}_PENDING`,
      `${GET_DESTINATIONS_TOURS}_FULFILLED`,
    ];

    await store.dispatch(fetchDestinationsToursAC(path));

    expect(store.getActions().map(({ type }) => type)).toEqual(expectedActions);
  });

  test('creates GET_DESTINATIONS_TOURS_REJECTED when promise is rejected', async () => {
    destinationsTours.mockRejectedValueOnce(error);

    const expectedActionsReject = [
      `${GET_DESTINATIONS_TOURS}_PENDING`,
      `${GET_DESTINATIONS_TOURS}_REJECTED`,
    ];

    await store.dispatch(fetchDestinationsToursAC(path));

    expect(store.getActions().map(({ type }) => type)).toEqual(expectedActionsReject);
  });
});
