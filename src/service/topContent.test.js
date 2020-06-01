import axios from 'axios';
import { topContent } from './topContent';

jest.mock('axios');

describe('fetch data from API', () => {
  const path = 'destinations';
  const mockTopContent = {
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

  test('fetches successfully data from an API', () => {
    axios.get.mockImplementationOnce(() => Promise.resolve(mockTopContent));

    expect(topContent(path)).resolves.toEqual(mockTopContent.data);

    expect(axios.get).toHaveBeenCalledWith(`top/${path}`);
  });

  test('fetches erroneously data from an API', async () => {
    axios.get.mockImplementationOnce(() => Promise.reject(error));

    try {
      await topContent(path);
    } catch (e) {
      expect(e).toEqual(error);
    }
  });
});
