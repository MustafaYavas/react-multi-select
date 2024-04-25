import { DataType } from '../../types/dataType';

type FoundItemsProps = {
  founds: DataType[];
};

const FoundItems = ({ founds }: FoundItemsProps) => {
  console.log(founds);
  return (
    <div>
      {founds.map((found) => (
        <div key={found.id}>
          <img src={found.image} alt={found.name} />
          <h1>{found.name}</h1>
          <p>{found.status}</p>
          <p>{found.species}</p>
          <p>{found.type}</p>{' '}
        </div>
      ))}
    </div>
  );
};

export default FoundItems;
