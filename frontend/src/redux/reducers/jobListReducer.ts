import act from '../actionTypes';

export interface IjobListState {
  isFetchingApi: boolean;
  data: any;
  error: string;
}

const initialState = {
  isFetchingApi: false,
  data: null,
  error: '',
};

export const jobListReducer = (
  state: IjobListState = initialState,
  action: { type: number; payload?: any }
) => {
  switch (action.type) {
    case act.IS_FETCHING:
      return { ...state, isFetchingApi: true };
    case act.FETCH_SUCCESSFUL:
      return { ...state, data: action.payload, isFetchingApi: false };
    default:
      return state;
  }
};
