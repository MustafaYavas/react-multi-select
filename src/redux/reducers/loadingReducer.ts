import { loadingReducerType } from '../../types/reducerType';
import * as actionTypes from '../actionTypes';

const initialState: loadingReducerType = {
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
