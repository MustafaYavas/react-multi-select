import { DataType } from './dataType';

export type dataReducerType = {
  datas: DataType[];
  searchResults: DataType[];
};

export type generalReducerype = {
  currentListItemIndex: number | null;
  currentSelectedItemIndex: number | null;
};

export type loadingReducerType = {
  isLoading: boolean;
};

export type selectedItemsReducerType = {
  selectedItems: { name: string; id: number }[];
};
