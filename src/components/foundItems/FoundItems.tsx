import { connect } from 'react-redux';
import styles from './FoundItems.module.scss';
import Item from './Item';
import { DataType } from '../../types/dataType';
import { RootState } from '../../redux/configureStore';

type FoundItemsProps = {
  text: string;
  searchResults: DataType[];
};

const FoundItems = ({ text, searchResults }: FoundItemsProps) => {
  return (
    <>
      {searchResults.length > 0 && (
        <div className={`${styles['found-items-wrapper']}`}>
          {searchResults.map((result, index) => (
            <Item
              key={result.id}
              found={result}
              text={text}
              itemIndex={index}
            />
          ))}
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    searchResults: state.dataReducer.searchResults,
  };
};

export default connect(mapStateToProps)(FoundItems);
