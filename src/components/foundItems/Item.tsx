import { DataType } from '../../types/dataType';
import { useAppDispatch } from '../../redux/dispatch';
import * as actionTypes from '../../redux/actionTypes';
import { RootState } from '../../redux/configureStore';
import { connect } from 'react-redux';
import styles from './FoundItems.module.scss';

type ItemProps = {
  found: DataType;
  text: string;
  items: { name: string; id: number }[];
};

const Item = ({ found, text, items }: ItemProps) => {
  const dispatch = useAppDispatch();

  const makeBold = (text: string, searchTerm: string) => {
    const regex = new RegExp(searchTerm, 'gi');
    const boldText = text.replace(regex, `<b>$&</b>`);
    return boldText;
  };

  const handleItem = (name: string, id: number) => {
    dispatch({ type: actionTypes.SET_ITEM_TO_SELECTED, payload: { name, id } });
  };

  return (
    <div
      className={`flex cursor-pointer hover:bg-slate-200 p-3 ${styles['item']}`}
      onClick={() => handleItem(found.name, found.id)}
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
  };
};

export default connect(mapStateToProps)(Item);
