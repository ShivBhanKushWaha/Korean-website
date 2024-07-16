// components/Card.js
import Link from 'next/link';

const Card = ({ name }:any) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition duration-300">
      <Link href={`/${name.toLowerCase().replace(/\s+/g, '-')}`}>
          <h3 className="text-xl font-bold">{name}</h3>
        
      </Link>
    </div>
  );
};

export default Card;
