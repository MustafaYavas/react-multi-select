import * as actionTypes from '../actionTypes';

type initialStateType = {
  currentListItemIndex: number | null;
  currentSelectedItemIndex: number | null;
};

const initialState: initialStateType = {
  currentListItemIndex: null,
  currentSelectedItemIndex: null,
};

export const generalReducer = (state = initialState, action: any) => {
  const { type, payload } = action;

  if (type === actionTypes.SET_CURRENT_LIST_ITEM_INDEX) {
    return {
      ...state,
      currentListItemIndex: payload,
    };
  } else if (type === actionTypes.SET_CURRENT_SELECTED_ITEM_INDEX) {
    return {
      ...state,
      currentSelectedItemIndex: payload,
    };
  } else {
    return state;
  }
};

export default generalReducer;
