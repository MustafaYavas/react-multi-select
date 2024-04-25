import { useState } from 'react';
import FoundItems from '../foundItems/FoundItems';
import styles from './Input.module.scss';
import { connect } from 'react-redux';
import { RootState } from '../../redux/configureStore';
import { DataType } from '../../types/dataType';

type InputProps = {
  datas: DataType[];
};

const Input = ({ datas }: InputProps) => {
  const [inputValue, setInputValue] = useState<string>('');

  return (
    <div className="flex items-center flex-col">
      <div className={styles['input-wrapper']}>
        <input
          type="text"
          className="border-2 border-none rounded focus:outline-none "
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
  };
};

export default connect(mapStateToProps)(Input);
