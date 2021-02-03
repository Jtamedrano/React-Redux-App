import { combineReducers } from 'redux';

import { jobListReducer } from './jobListReducer';

export default combineReducers({ jobList: jobListReducer });
