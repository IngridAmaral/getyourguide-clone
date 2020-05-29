import { fetchTopDestinations } from '../../service/fetchTopDestinations';
import { GET_TOP_DESTINATIONS } from '../actionTypes/actionTypes';

export const fetchTopDestinationsAC = () => (dispatch) => dispatch({
  type: GET_TOP_DESTINATIONS,
  payload: fetchTopDestinations(),
}).catch(() => {
  // Log error to server
});
