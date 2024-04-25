import { DataType } from '../types/dataType';

export const handleListItemNavigation = (
  e: React.KeyboardEvent<HTMLDivElement>,
  dispatch: any,
  currentListItemIndex: number | null,
  searchResults: DataType[]
) => {
  if (currentListItemIndex !== null) {
    if (e.key === 'ArrowDown' || e.key === 'Tab') {
      if (currentListItemIndex < searchResults.length - 1) {
        e.preventDefault();
        dispatch({
          type: 'SET_CURRENT_LIST_ITEM_INDEX',
          payload: currentListItemIndex + 1,
        });
      }
      if (currentListItemIndex === searchResults.length - 1) {
        dispatch({
          type: 'SET_CURRENT_LIST_ITEM_INDEX',
          payload: 0,
        });
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (currentListItemIndex > 0) {
        dispatch({
          type: 'SET_CURRENT_LIST_ITEM_INDEX',
          payload: currentListItemIndex - 1,
        });
      }
    } else {
      return;
    }
  } else {
    if (e.key === 'Tab') {
      dispatch({
        type: 'SET_CURRENT_LIST_ITEM_INDEX',
        payload: 0,
      });
    }
  }
};
