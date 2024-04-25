import { DataType } from './dataType';

export type FoundItemsProps = {
  text: string;
  searchResults: DataType[];
};

export type ItemProps = {
  found: DataType;
  text: string;
  items: { name: string; id: number }[];
  itemIndex: number;
  currentListItemIndex: number | null;
};

export type IconProps = {
  size?: number;
  className?: string;
  iconName: string;
  color?: string;
};

export type InputProps = {
  datas: DataType[];
  searchResults: DataType[];
  items: { name: string; id: number }[];
  currentListItemIndex: number | null;
};

export type InputSelectedItemProps = {
  item: { name: string; id: number };
};

export type MultiSelectProps = {
  isLoading: boolean;
  error: boolean;
};
