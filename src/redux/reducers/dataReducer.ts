import { dataReducerType } from '../../types/reducerType';
import * as actionTypes from '../actionTypes';

const initialDataState: dataReducerType = {
  datas: [],
  searchResults: [],
};

const dataReducer = (state = initialDataState, action: any) => {
  const { type, payload } = action;

  if (type === actionTypes.SET_DATA) {
    return {
      ...state,
      datas: payload,
    };
  } else if (type === actionTypes.SEARCH_RESULTS_DATA) {
    return {
      ...state,
      searchResults: payload,
    };
  } else {
    return state;
  }
};

export default dataReducer;
