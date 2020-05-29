import axios from 'axios';
import { destinationsTours } from './destinationsTours';

jest.mock('axios');
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

describe('fetch data from API', () => {
  test('fetches successfully data from an API', () => {
    axios.get.mockImplementationOnce(() => Promise.resolve(mockDestinationsToursResp));

    expect(destinationsTours(path)).resolves.toEqual(mockDestinationsToursResp.data);

    expect(axios.get).toHaveBeenCalledWith(`destinations/${path}`);
  });

  test('fetches erroneously data from an API', () => {
    axios.get.mockImplementationOnce(() => Promise.reject(error));

    expect(destinationsTours(path)).resolves.toEqual(error);
  });
});
