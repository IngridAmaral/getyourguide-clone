import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import configureMockStore from 'redux-mock-store';
import { GET_TOP_CONTENT } from '../actionTypes/actionTypes';
import { fetchTopContentAC } from './getTopContent';
import { topContent } from '../../service/topContent';

jest.mock('../../service/topContent', () => ({
  __esModules: true,
  topContent: jest.fn(),
}));
const middlewares = [thunk, promise];
const mockStore = configureMockStore(middlewares);
const mockTopContentResp = {
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
  const store = mockStore({ topContent: [] });

  beforeEach(() => store.clearActions());

  test('creates GET_TOP_CONTENT_FULFILLED when fetching todos has been done', async () => {
    topContent.mockResolvedValue(mockTopContentResp);
    const expectedActions = [
      `${GET_TOP_CONTENT}_PENDING`,
      `${GET_TOP_CONTENT}_FULFILLED`,
    ];

    await store.dispatch(fetchTopContentAC(path));

    expect(store.getActions().map(({ type }) => type)).toEqual(expectedActions);
  });

  test('creates GET_TOP_CONTENT_REJECTED when promise is rejected', async () => {
    topContent.mockRejectedValueOnce(error);

    const expectedActionsReject = [
      `${GET_TOP_CONTENT}_PENDING`,
      `${GET_TOP_CONTENT}_REJECTED`,
    ];

    await store.dispatch(fetchTopContentAC(path));

    expect(store.getActions().map(({ type }) => type)).toEqual(expectedActionsReject);
  });
});
