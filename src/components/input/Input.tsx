import { useState } from 'react';
import FoundItems from '../foundItems/FoundItems';
import styles from './Input.module.scss';
import { connect } from 'react-redux';
import { RootState } from '../../redux/configureStore';
import { DataType } from '../../types/dataType';
import InputSelectedItem from './InputSelectedItem';

type InputProps = {
  datas: DataType[];
  items: { name: string; id: number }[];
};

const Input = ({ datas, items }: InputProps) => {
  const [inputValue, setInputValue] = useState<string>('');

  return (
    <div className="flex items-center flex-col">
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

      {inputValue.length > 0 && (
        <FoundItems
          founds={
            inputValue?.length > 0
              ? datas.filter((data) =>
                  data?.name?.toLowerCase().includes(inputValue)
                )
              : []
          }
          text={inputValue}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    datas: state.dataReducer.datas,
    items: state.selectedItemsReducer.selectedItems,
  };
};

export default connect(mapStateToProps)(Input);
