import { useEffect, useState } from 'react';
import FoundItems from '../foundItems/FoundItems';
import styles from './Input.module.scss';
import { connect } from 'react-redux';
import { RootState } from '../../redux/configureStore';
import InputSelectedItem from './InputSelectedItem';
import { handleListItemNavigation } from '../../helpers/navigation';
import { useAppDispatch } from '../../redux/dispatch';
import { InputProps } from '../../types/componentPropsType';
import Icon from '../icon/Icon';

const Input = ({
  datas,
  searchResults,
  items,
  currentListItemIndex,
}: InputProps) => {
  const [inputValue, setInputValue] = useState<string>('');
  const dispatch = useAppDispatch();
  const [showList, setShowList] = useState<boolean>(true);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!showList) setShowList(true);
    setInputValue(e.target.value);
  };

  const handleClickIcon = () => {
    if (inputValue.length > 0) {
      setShowList(!showList);
    } else {
      setShowList(true);
    }
  };
  return (
    <div
      className="flex items-center flex-col"
      onKeyDown={(e) => handleKeyDown(e)}
    >
      <div className={styles['input-wrapper']}>
        <div className="w-full">
          {items.length > 0 && (
            <div className="py-2 text-start">
              {items.map((item) => (
                <InputSelectedItem key={item.id} item={item} />
              ))}
            </div>
          )}
          <input
            type="text"
            className="border-2 border-none rounded focus:outline-none w-full ps-2 pe-8 text-xl"
            value={inputValue}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <span
          onClick={() => handleClickIcon()}
          className={`cursor-pointer ${
            inputValue.length > 0 && showList ? styles['turned-icon'] : ''
          }`}
        >
          <Icon iconName="MdKeyboardArrowDown" size={22} />
        </span>
      </div>

      {inputValue.length > 0 && showList && <FoundItems text={inputValue} />}
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    datas: state.dataReducer.datas,
    searchResults: state.dataReducer.searchResults,
    items: state.selectedItemsReducer.selectedItems,
    currentListItemIndex: state.generalReducer.currentListItemIndex,
  };
};

export default connect(mapStateToProps)(Input);
