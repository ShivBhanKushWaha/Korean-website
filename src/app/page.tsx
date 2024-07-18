// pages/index.tsx or HomePage.tsx
import React from 'react';
import { Card } from '@/organisms'; // Adjust the import path based on your project structure
import { DotOfSun, ItsOkayToNotToBeOkay, LoveIsSweet, LoveScenery, MyGirlFriendIsAnAlien, WTwoWorld } from '../../assets';

const HomePage = () => {
  const dummyData = [
    {
      img: DotOfSun,
      routes:'DotOfSun',
      title: 'Descendants of the sun',
      description: 'Total 16 episodes'
    },
    {
      img: LoveIsSweet,
      routes:'LoveIsSweet',
      title: 'Love Is Sweet',
      description: 'Total 36 episodes'
    },
    {
      img: WTwoWorld,
      routes:'WTwoWorld',
      title: 'W Two Worlds',
      description: 'Total 16 episodes'
    },
    {
      img: ItsOkayToNotToBeOkay,
      routes:'ItsOkayToNotToBeOkay',
      title: 'Its Okay To Not To Be Okay',
      description: 'Total 16 episodes'
    },
    {
      img: LoveScenery,
      routes:'LoveScenery',
      title: 'Love Scenery',
      description: 'Total 31 episodes'
    },
    {
      img: MyGirlFriendIsAnAlien,
      routes:'MyGirlFriendIsAnAlien',
      title: 'My Girl Friend Is An Alien',
      description: 'Total 28 episodes'
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center py-4 mx-2 sm:mx-10">
      {dummyData.map((data, index) => (
        <Card
          key={index}
          img={data.img}
          routes={data.routes}
          title={data.title}
          desciption={data.description} // Fixed the typo in description prop
        />
      ))}
    </div>
  );
};

export default HomePage;
