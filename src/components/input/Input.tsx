import { useEffect, useState } from 'react';
import FoundItems from '../foundItems/FoundItems';
import styles from './Input.module.scss';
import { connect } from 'react-redux';
import { RootState } from '../../redux/configureStore';
import { DataType } from '../../types/dataType';
import InputSelectedItem from './InputSelectedItem';
import { handleListItemNavigation } from '../../helpers/navigation';
import { useAppDispatch } from '../../redux/dispatch';

type InputProps = {
  datas: DataType[];
  searchResults: DataType[];
  items: { name: string; id: number }[];
  currentListItemIndex: number | null;
  currentSelectedItemIndex: number | null;
};

const Input = ({
  datas,
  searchResults,
  items,
  currentListItemIndex,
}: InputProps) => {
  const [inputValue, setInputValue] = useState<string>('');
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (inputValue.length === 0) {
      dispatch({ type: 'SEARCH_RESULTS_DATA', payload: [] });
    } else {
      dispatch({
        type: 'SET_CURRENT_LIST_ITEM_INDEX',
        payload: null,
      });
      const resultDatas = datas.filter((data) =>
        data?.name?.toLowerCase().includes(inputValue)
      );
      dispatch({ type: 'SEARCH_RESULTS_DATA', payload: resultDatas });
    }
  }, [inputValue, datas, dispatch]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    handleListItemNavigation(e, dispatch, currentListItemIndex, searchResults);
  };

  return (
    <div
      className="flex items-center flex-col"
      onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => handleKeyDown(e)}
    >
      <div className={styles['input-wrapper']}>
        {items.length > 0 && (
          <div className="py-2 text-start">
            {items.map((item) => (
              <InputSelectedItem key={item.id} item={item} />
            ))}
          </div>
        )}
        <input
          type="text"
          className="border-2 border-none rounded focus:outline-none w-full px-2 text-xl"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>

      {inputValue.length > 0 && <FoundItems text={inputValue} />}
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    datas: state.dataReducer.datas,
    searchResults: state.dataReducer.searchResults,
    items: state.selectedItemsReducer.selectedItems,
    currentListItemIndex: state.generalReducer.currentListItemIndex,
    currentSelectedItemIndex: state.generalReducer.currentSelectedItemIndex,
  };
};

export default connect(mapStateToProps)(Input);
