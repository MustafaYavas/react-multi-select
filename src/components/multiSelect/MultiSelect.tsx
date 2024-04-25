import Input from '../input/Input';
import { useAppDispatch } from '../../redux/dispatch';
import * as actionTypes from '../../redux/actionTypes';
import { useEffect } from 'react';

const MultiSelect = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch({ type: actionTypes.DATA_REQUEST });
  }, [dispatch]);

  return (
    <div>
      <Input />
    </div>
  );
};

export default MultiSelect;
