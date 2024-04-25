import { Loading } from '../../types/loadingType';
import * as actionTypes from '../actionTypes';

const initialState: Loading = {
  isLoading: false,
};

export const loadingReducer = (state = initialState, action: any) => {
  const { type, payload } = action;

  if (type === actionTypes.FETCH_START) {
    return {
      ...state,
      isLoading: payload,
    };
  } else if (type === actionTypes.FETCH_END) {
    return {
      ...state,
      isLoading: payload,
    };
  } else {
    return state;
  }
};

export default loadingReducer;
