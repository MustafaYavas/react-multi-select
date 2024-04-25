import { useAppDispatch } from '../../redux/dispatch';
import * as actionTypes from '../../redux/actionTypes';
import Icon from '../icon/Icon';

type InputSelectedItemProps = {
  item: { name: string; id: number };
};

const InputSelectedItem = ({ item }: InputSelectedItemProps) => {
  const dispatch = useAppDispatch();

  const handleRemoveItem = (id: number) => {
    dispatch({ type: actionTypes.REMOVE_ITEM_FROM_SELECTED, payload: id });
  };

  return (
    <div className="inline-flex flex-shrink-0 w-fit h-auto bg-slate-200 m-2 px-2 py-2 rounded-md items-center">
      <div>
        <span>{item.name}</span>
      </div>

      <div
        className="ms-2 text-xl p-1 bg-slate-400 rounded-md cursor-pointer"
        onClick={() => handleRemoveItem(item.id)}
      >
        <Icon size={16} iconName="FiX" color="black" />
      </div>
    </div>
  );
};

export default InputSelectedItem;
