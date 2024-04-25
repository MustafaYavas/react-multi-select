import { DataType } from '../../types/dataType';
import styles from './FoundItems.module.scss';

type FoundItemsProps = {
  founds: DataType[];
  text: string;
};

const FoundItems = ({ founds, text }: FoundItemsProps) => {
  const makeBold = (text: string, searchTerm: string) => {
    const regex = new RegExp(searchTerm, 'gi');
    const boldText = text.replace(regex, `<b>$&</b>`);
    return boldText;
  };

  return (
    <div className={`${styles['found-items-wrapper']}`}>
      {founds.map((found) => (
        <div
          key={found.id}
          className="flex cursor-pointer hover:bg-slate-200 p-3"
        >
          <div className="flex">
            <input type="checkbox" />
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
      ))}
    </div>
  );
};

export default FoundItems;
