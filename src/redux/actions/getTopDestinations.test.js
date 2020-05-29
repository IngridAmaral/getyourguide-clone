import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import configureMockStore from 'redux-mock-store';
import { GET_TOP_DESTINATIONS } from '../actionTypes/actionTypes';
import { fetchTopDestinationsAC } from './getTopDestinations';
import { fetchTopDestinations } from '../../service/fetchTopDestinations';

jest.mock('../../service/fetchTopDestinations', () => ({
  __esModules: true,
  fetchTopDestinations: jest.fn(),
}));
const middlewares = [thunk, promise];
const mockStore = configureMockStore(middlewares);
const mockTopDestinationsResp = {
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

describe('async actions', () => {
  const store = mockStore({ topDestinations: [] });

  beforeEach(() => store.clearActions());

  test('creates GET_TOP_DESTINATIONS_FULFILLED when fetching todos has been done', async () => {
    fetchTopDestinations.mockResolvedValue(mockTopDestinationsResp);
    const expectedActions = [
      `${GET_TOP_DESTINATIONS}_PENDING`,
      `${GET_TOP_DESTINATIONS}_FULFILLED`,
    ];

    await store.dispatch(fetchTopDestinationsAC());

    expect(store.getActions().map(({ type }) => type)).toEqual(expectedActions);
  });

  test('creates GET_TOP_DESTINATIONS_REJECTED when promise is rejected', async () => {
    fetchTopDestinations.mockRejectedValueOnce(error);

    const expectedActionsReject = [
      `${GET_TOP_DESTINATIONS}_PENDING`,
      `${GET_TOP_DESTINATIONS}_REJECTED`,
    ];

    await store.dispatch(fetchTopDestinationsAC());

    expect(store.getActions().map(({ type }) => type)).toEqual(expectedActionsReject);
  });
});
