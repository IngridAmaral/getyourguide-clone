import { topContent } from '../../service/topContent';
import { GET_TOP_ATTRACTIONS } from '../actionTypes/actionTypes';

export const fetchTopAttractionsAC = () => (dispatch) => dispatch({
  type: GET_TOP_ATTRACTIONS,
  payload: topContent('attractions'),
}).catch(() => {
  // Log error to server
});
