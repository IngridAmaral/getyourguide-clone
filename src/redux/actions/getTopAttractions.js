import { topContent } from '../../service/topContent';
import { GET_TOP_ATTRACTIONS } from '../actionTypes/actionTypes';

export const fetchTopAttractionsAC = (path) => (dispatch) => dispatch({
  type: GET_TOP_ATTRACTIONS,
  payload: topContent(path),
}).catch(() => {
  // Log error to server
});
