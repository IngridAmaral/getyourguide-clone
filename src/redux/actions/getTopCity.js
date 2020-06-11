import { topContent } from '../../service/topContent';
import { GET_TOP_CITY } from '../actionTypes/actionTypes';

export const fetchTopCityAC = (path) => (dispatch) => dispatch({
  type: GET_TOP_CITY,
  payload: topContent(path),
}).catch(() => {
  // Log error to server
});
