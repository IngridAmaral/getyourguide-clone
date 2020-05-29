import { api } from '../api/api';

export const fetchTopDestinations = async () => {
  const response = await api.get('top-destinations');
  return response.data;
};
