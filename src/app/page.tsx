// pages/index.tsx or HomePage.tsx
import React from 'react';
import { Card } from '@/organisms'; // Adjust the import path based on your project structure
import { DotOfSun, LoveIsSweet, WTwoWorld } from '../../assets';

const HomePage = () => {
  const dummyData = [
    {
      img: DotOfSun,
      title: 'Descendants of the sun',
      description: 'Total 16 episodes'
    },
    {
      img: LoveIsSweet,
      title: 'Love Is Sweet',
      description: 'Total 36 episodes'
    },
    {
      img: WTwoWorld,
      title: 'W Two Worlds',
      description: 'Total 16 episodes'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center py-4">
      {dummyData.map((data, index) => (
        <Card
          key={index}
          img={data.img}
          title={data.title}
          desciption={data.description} // Fixed the typo in description prop
        />
      ))}
    </div>
  );
};

export default HomePage;
