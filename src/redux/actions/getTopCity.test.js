import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import configureMockStore from 'redux-mock-store';
import { GET_TOP_CITY } from '../actionTypes/actionTypes';
import { fetchTopCityAC } from './getTopCity';
import { topContent } from '../../service/topContent';

jest.mock('../../service/topContent', () => ({
  __esModules: true,
  topContent: jest.fn(),
}));
const middlewares = [thunk, promise];
const mockStore = configureMockStore(middlewares);
const mockTopCityResp = {
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
const path = 'destinations/paris';

describe('async actions', () => {
  const store = mockStore({ topCity: {} });

  beforeEach(() => store.clearActions());

  test('creates GET_TOP_CITY_FULFILLED when fetching todos has been done', async () => {
    topContent.mockResolvedValue(mockTopCityResp);
    const expectedActions = [
      `${GET_TOP_CITY}_PENDING`,
      `${GET_TOP_CITY}_FULFILLED`,
    ];

    await store.dispatch(fetchTopCityAC(path));

    expect(store.getActions().map(({ type }) => type)).toEqual(expectedActions);
  });

  test('creates GET_TOP_CITY_REJECTED when promise is rejected', async () => {
    topContent.mockRejectedValueOnce(error);

    const expectedActionsReject = [
      `${GET_TOP_CITY}_PENDING`,
      `${GET_TOP_CITY}_REJECTED`,
    ];

    await store.dispatch(fetchTopCityAC(path));

    expect(store.getActions().map(({ type }) => type)).toEqual(expectedActionsReject);
  });
});
