import { topContent } from '../../service/topContent';
import { GET_TOP_COUNTRIES } from '../actionTypes/actionTypes';

export const fetchTopCountriesAC = () => (dispatch) => dispatch({
  type: GET_TOP_COUNTRIES,
  payload: topContent('countries'),
}).catch(() => {
  // Log error to server
});
