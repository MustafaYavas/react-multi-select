import { useAppDispatch } from '../../redux/dispatch';
import * as actionTypes from '../../redux/actionTypes';
import { RootState } from '../../redux/configureStore';
import { connect } from 'react-redux';
import styles from './FoundItems.module.scss';
import { useEffect, useRef } from 'react';
import { ItemProps } from '../../types/componentPropsType';

const Item = ({
  found,
  text,
  items,
  itemIndex,
  currentListItemIndex,
}: ItemProps) => {
  const dispatch = useAppDispatch();
  const itemRef = useRef<HTMLDivElement>(null);

  const makeBold = (text: string, searchTerm: string) => {
    const regex = new RegExp(searchTerm, 'gi');
    const boldText = text.replace(regex, `<b>$&</b>`);
    return boldText;
  };

  useEffect(() => {
    if (currentListItemIndex === itemIndex) {
      itemRef?.current?.focus();
    }
  }, [currentListItemIndex, itemIndex]);

  const handleItem = (name: string, id: number) => {
    dispatch({ type: actionTypes.SET_ITEM_TO_SELECTED, payload: { name, id } });
    dispatch({
      type: actionTypes.SET_CURRENT_LIST_ITEM_INDEX,
      payload: itemIndex,
    });
    itemRef?.current?.focus();
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLDivElement>,
    name: string,
    id: number
  ) => {
    if (e.key === 'Enter') {
      dispatch({
        type: actionTypes.SET_ITEM_TO_SELECTED,
        payload: { name, id },
      });
    }
  };

  return (
    <div
      className={`flex cursor-pointer p-3 ${styles['item']} ${
        currentListItemIndex === itemIndex ? 'bg-slate-300' : ''
      }`}
      onClick={() => handleItem(found.name, found.id)}
      ref={itemRef}
      tabIndex={itemIndex}
      onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) =>
        handleKeyDown(e, found.name, found.id)
      }
    >
      <div className="flex">
        <input
          className="cursor-pointer"
          type="checkbox"
          defaultChecked={false}
          checked={items.find((item) => item.id === found.id) ? true : false}
        />
        <img
          src={found.image}
          alt={found.name}
          height={50}
          width={50}
          className="rounded-xl ms-5"
        />
      </div>
      <div className="flex flex-col justify-center items-start ms-5">
        <span
          className="Features"
          dangerouslySetInnerHTML={{ __html: makeBold(found.name, text) }}
        />
        <span>{found.episode.length} Episodes</span>
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    items: state.selectedItemsReducer.selectedItems,
    currentListItemIndex: state.generalReducer.currentListItemIndex,
  };
};

export default connect(mapStateToProps)(Item);
