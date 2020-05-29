import { api } from '../api/api';

export const topContent = async (path) => {
  const response = await api.get(`top/${path}`);
  return response.data;
};
