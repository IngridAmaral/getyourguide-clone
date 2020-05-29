import { topContent } from '../../service/topContent';
import { GET_TOP_CONTENT } from '../actionTypes/actionTypes';

export const fetchTopContentAC = (path) => (dispatch) => dispatch({
  type: GET_TOP_CONTENT,
  payload: topContent(path),
}).catch(() => {
  // Log error to server
});
