import * as actionTypes from '../actionTypes';

type initialStateType = {
  selectedItems: { name: string; id: number }[];
};
const initialSelectedItemsState: initialStateType = {
  selectedItems: [],
};

const selectedItemsReducer = (
  state = initialSelectedItemsState,
  action: any
) => {
  const { type, payload } = action;

  if (type === actionTypes.SET_ITEM_TO_SELECTED) {
    const isExist = state.selectedItems.find(
      (item) => item.name === payload.name
    );

    return {
      ...state,
      selectedItems: isExist
        ? state.selectedItems.filter((item) => item.name !== payload.name)
        : [...state.selectedItems, payload],
    };
  } else if (type === actionTypes.REMOVE_ITEM_FROM_SELECTED) {
    return {
      ...state,
      selectedItems: state.selectedItems.filter((item) => item.id !== payload),
    };
  } else {
    return state;
  }
};

export default selectedItemsReducer;
