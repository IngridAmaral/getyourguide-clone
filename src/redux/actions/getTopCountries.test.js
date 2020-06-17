import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import configureMockStore from 'redux-mock-store';
import { GET_TOP_COUNTRIES } from '../actionTypes/actionTypes';
import { fetchTopCountriesAC } from './getTopCountries';
import { topContent } from '../../service/topContent';

jest.mock('../../service/topContent', () => ({
  __esModules: true,
  topContent: jest.fn(),
}));
const middlewares = [thunk, promise];
const mockStore = configureMockStore(middlewares);
const mockTopCountriesResp = {
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
const path = 'destinations';

describe('async actions', () => {
  const store = mockStore({ topCountries: [] });

  beforeEach(() => store.clearActions());

  test('creates GET_TOP_COUNTRIES_FULFILLED when fetching todos has been done', async () => {
    topContent.mockResolvedValue(mockTopCountriesResp);
    const expectedActions = [
      `${GET_TOP_COUNTRIES}_PENDING`,
      `${GET_TOP_COUNTRIES}_FULFILLED`,
    ];

    await store.dispatch(fetchTopCountriesAC(path));

    expect(store.getActions().map(({ type }) => type)).toEqual(expectedActions);
  });

  test('creates GET_TOP_COUNTRIES_REJECTED when promise is rejected', async () => {
    topContent.mockRejectedValueOnce(error);

    const expectedActionsReject = [
      `${GET_TOP_COUNTRIES}_PENDING`,
      `${GET_TOP_COUNTRIES}_REJECTED`,
    ];

    await store.dispatch(fetchTopCountriesAC(path));

    expect(store.getActions().map(({ type }) => type)).toEqual(expectedActionsReject);
  });
});
