import { api } from '../api/api';

export const destinationsTours = async (path) => {
  const response = await api.get(`destinations/${path}`);
  return response.data;
};
