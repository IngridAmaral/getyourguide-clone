import axios from 'axios';
import { popular } from './popular';

jest.mock('axios');
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

describe('fetch data from API', () => {
  test('fetches successfully data from an API', () => {
    axios.get.mockImplementationOnce(() => Promise.resolve(mockPopularResp));

    expect(popular()).resolves.toEqual(mockPopularResp.data);

    expect(axios.get).toHaveBeenCalledWith('popular');
  });

  test('fetches erroneously data from an API', () => {
    axios.get.mockImplementationOnce(() => Promise.reject(error));

    expect(popular()).resolves.toEqual(error);
  });
});
