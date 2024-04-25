import { DataType } from '../../types/dataType';
import * as actionTypes from '../actionTypes';

type initialStateType = {
  datas: DataType[];
};
const initialDataState: initialStateType = {
  datas: [],
};

const dataReducer = (state = initialDataState, action: any) => {
  const { type, payload } = action;

  if (type === actionTypes.SET_DATA) {
    return {
      ...state,
      datas: payload,
    };
  } else {
    return state;
  }
};

export default dataReducer;
