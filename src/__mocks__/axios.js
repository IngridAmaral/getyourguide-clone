const mockApi = jest.genMockFromModule('axios');

mockApi.create = jest.fn(() => mockApi);

export default mockApi;
