import Input from '../input/Input';
import { useAppDispatch } from '../../redux/dispatch';
import * as actionTypes from '../../redux/actionTypes';
import { useEffect } from 'react';
import { RootState } from '../../redux/configureStore';
import { MultiSelectProps } from '../../types/componentPropsType';
import { connect } from 'react-redux';

const MultiSelect = ({ isLoading, error }: MultiSelectProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch({ type: actionTypes.DATA_REQUEST });
  }, [dispatch]);

  return (
    <div>
      <Input />

      {isLoading ? <p>Loading...</p> : null}
      {!isLoading && error ? (
        <p className="text-red-600">
          Something went wrong. PLease reload the page
        </p>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    isLoading: state.loadingReducer.isLoading,
    error: state.dataReducer.error,
  };
};

export default connect(mapStateToProps)(MultiSelect);
