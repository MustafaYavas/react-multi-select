import { DataType } from '../../types/dataType';
import styles from './FoundItems.module.scss';
import Item from './Item';

type FoundItemsProps = {
  founds: DataType[];
  text: string;
};

const FoundItems = ({ founds, text }: FoundItemsProps) => {
  return (
    <>
      {founds.length > 0 && (
        <div className={`${styles['found-items-wrapper']}`}>
          {founds.map((found) => (
            <Item key={found.id} found={found} text={text} />
          ))}
        </div>
      )}
    </>
  );
};

export default FoundItems;
