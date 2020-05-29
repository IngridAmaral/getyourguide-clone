import { popular } from '../../service/popular';
import { GET_POPULAR } from '../actionTypes/actionTypes';

export const fetchPopularAC = () => (dispatch) => dispatch({
  type: GET_POPULAR,
  payload: popular(),
}).catch(() => {
  // Log error to server
});
