import axios from 'axios';
import act from '../actionTypes';
import { Dispatch } from 'redux';

const attemptFetch = () => ({ type: act.IS_FETCHING });
const fetchSuccess = (data: any) => ({
  type: act.FETCH_SUCCESSFUL,
  payload: data,
});

export const fetchAllJobs = () => (dispatch: Dispatch) => {
  dispatch(attemptFetch());
  axios.get('http://api.dataatwork.org/v1/jobs').then((req) => {
    dispatch(fetchSuccess(req.data));
  });
};
