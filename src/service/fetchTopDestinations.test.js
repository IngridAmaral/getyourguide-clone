import axios from 'axios';
import { fetchTopDestinations } from './fetchTopDestinations';

jest.mock('axios');
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

describe('fetch data from API', () => {
  test('fetches successfully data from an API', async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve(mockTopDestinationsResp));

    await expect(fetchTopDestinations()).resolves.toEqual(mockTopDestinationsResp.data);

    expect(axios.get).toHaveBeenCalledWith('top-destinations');
  });

  test('fetches erroneously data from an API', async () => {
    await axios.get.mockImplementationOnce(() => Promise.reject(error));

    expect(fetchTopDestinations()).resolves.toEqual(error);
  });
});
