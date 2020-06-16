import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import configureMockStore from 'redux-mock-store';
import { GET_TOP_ATTRACTIONS } from '../actionTypes/actionTypes';
import { fetchTopAttractionsAC } from './getTopAttractions';
import { topContent } from '../../service/topContent';

jest.mock('../../service/topContent', () => ({
  __esModules: true,
  topContent: jest.fn(),
}));
const middlewares = [thunk, promise];
const mockStore = configureMockStore(middlewares);
const mockTopAttractionsResp = {
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
const path = 'attractions';

describe('async actions', () => {
  const store = mockStore({ topAttractions: {} });

  beforeEach(() => store.clearActions());

  test('creates GET_TOP_ATTRACTIONS_FULFILLED when fetching todos has been done', async () => {
    topContent.mockResolvedValue(mockTopAttractionsResp);
    const expectedActions = [
      `${GET_TOP_ATTRACTIONS}_PENDING`,
      `${GET_TOP_ATTRACTIONS}_FULFILLED`,
    ];

    await store.dispatch(fetchTopAttractionsAC(path));

    expect(store.getActions().map(({ type }) => type)).toEqual(expectedActions);
  });

  test('creates GET_TOP_ATTRACTIONS_REJECTED when promise is rejected', async () => {
    topContent.mockRejectedValueOnce(error);

    const expectedActionsReject = [
      `${GET_TOP_ATTRACTIONS}_PENDING`,
      `${GET_TOP_ATTRACTIONS}_REJECTED`,
    ];

    await store.dispatch(fetchTopAttractionsAC(path));

    expect(store.getActions().map(({ type }) => type)).toEqual(expectedActionsReject);
  });
});
