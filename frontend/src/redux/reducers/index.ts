import { combineReducers } from 'redux';

import { jobListReducer, IjobListState } from './jobListReducer';

export interface IreducerMap {
  jobList: IjobListState;
}

export default combineReducers<IreducerMap>({ jobList: jobListReducer });
export * from './jobListReducer';
