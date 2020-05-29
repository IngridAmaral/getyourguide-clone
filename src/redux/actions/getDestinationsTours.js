import { destinationsTours } from '../../service/destinationsTours';
import { GET_DESTINATIONS_TOURS } from '../actionTypes/actionTypes';

export const fetchDestinationsToursAC = (path) => (dispatch) => dispatch({
  type: GET_DESTINATIONS_TOURS,
  payload: destinationsTours(path),
}).catch(() => {
  // Log error to server
});
