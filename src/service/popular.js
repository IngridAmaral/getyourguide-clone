import { api } from '../api/api';

export const popular = async () => {
  const response = await api.get('popular');
  return response.data;
};
