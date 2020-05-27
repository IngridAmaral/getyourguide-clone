import { instance } from '../../api';
import { GET_TOP_DESTINATIONS } from '../actionTypes/actionTypes';

export const fetchTopDestinations = () => async () => {
  const response = await instance.get('top-destinations');
  return response.data;
};

export const fetchTopDestinationsAC = () => (dispatch) => dispatch({
  type: GET_TOP_DESTINATIONS,
  payload: fetchTopDestinations(),
});
