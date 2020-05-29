import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import configureMockStore from 'redux-mock-store';
import { GET_POPULAR } from '../actionTypes/actionTypes';
import { fetchPopularAC } from './getPopular';
import { popular } from '../../service/popular';

jest.mock('../../service/popular', () => ({
  __esModules: true,
  popular: jest.fn(),
}));
const middlewares = [thunk, promise];
const mockStore = configureMockStore(middlewares);
const mockPopularResp = {
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
  const store = mockStore({ popular: [] });

  beforeEach(() => store.clearActions());

  test('creates GET_POPULAR_FULFILLED when fetching todos has been done', async () => {
    popular.mockResolvedValue(mockPopularResp);
    const expectedActions = [
      `${GET_POPULAR}_PENDING`,
      `${GET_POPULAR}_FULFILLED`,
    ];

    await store.dispatch(fetchPopularAC());

    expect(store.getActions().map(({ type }) => type)).toEqual(expectedActions);
  });

  test('creates GET_POPULAR_REJECTED when promise is rejected', async () => {
    popular.mockRejectedValueOnce(error);

    const expectedActionsReject = [
      `${GET_POPULAR}_PENDING`,
      `${GET_POPULAR}_REJECTED`,
    ];

    await store.dispatch(fetchPopularAC());

    expect(store.getActions().map(({ type }) => type)).toEqual(expectedActionsReject);
  });
});
