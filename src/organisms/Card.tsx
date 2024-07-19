// components/Card.tsx
'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

interface CardProps {
  img?: any;
  title: string;
  routes: string;
  desciption: string;
}

const Card: React.FC<CardProps> = ({ img, routes, title, desciption }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/AllDrama/${routes}`);
  };

  return (
    <div className='sm:w-full w-[280px]  max-w-md mx-auto my-4 cursor-pointer border border-gray-300 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 ease-in-out' onClick={handleClick}>
      <div className="relative h-40 overflow-hidden">
        <Image src={img} alt={title} />
      </div>
      <div className="p-4">
        <p className="text-[18px] font-medium text-gray-800">{title}</p>
        <p className="text-sm text-gray-600">{desciption}</p>
      </div>
    </div>
  );
};

export default Card;
