// pages/index.tsx or HomePage.tsx
import React from 'react';
import { Card } from '@/organisms';
import { BusinessProposal, CuteBodyGaurd, DineWithLove, DotOfSun, Encounter, ExtraOrdinaryYou, FallInLove, Goblin, ItsOkayToNotToBeOkay, KingTheLand, LieToLove, LoveIsSweet, LoveMeLikeIDo, LoveScenery, MarryMyHusband, MeltingMeSoftly, MyDemon, MyGirlFriendIsAnAlien, OurSecret, PutYourHeadOnMyShoulder, QueenOfTears, School2017, SnowDrop, TheLegendOfTheBlueSea, TheLoveYouGaveMe, TimeToFallInLove, WTwoWorld, } from '@assets';

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
    {
      img: MarryMyHusband,
      routes:'MarryMyHusband',
      title: 'Marry My Husband',
      description: 'Total 16 episodes'
    },
    {
      img: School2017,
      routes:'School2017',
      title: 'School 2017',
      description: 'Total 16 episodes'
    },
    {
      img: TheLegendOfTheBlueSea,
      routes:'TheLegendOfTheBlueSea',
      title: 'The Legend Of The Blue Sea',
      description: 'Total 40 episodes'
    },
    {
      img: BusinessProposal,
      routes:'BusinessProposal',
      title: 'Business Proposal',
      description: 'Total 12 episodes'
    },
    {
      img: CuteBodyGaurd,
      routes:'CuteBodyGaurd',
      title: 'Cute Body Gaurd',
      description: 'Total 24 episodes'
    },
    {
      img: DineWithLove,
      routes:'DineWithLove',
      title: 'Dine With Love',
      description: 'Total 16 episodes'
    },
    {
      img: Encounter,
      routes:'Encounter',
      title: 'Encounter',
      description: 'Total 16 episodes'
    },
    {
      img: ExtraOrdinaryYou,
      routes:'ExtraOrdinaryYou',
      title: 'Extra Ordinary You',
      description: 'Total 16 episodes'
    },
    {
      img: FallInLove,
      routes:'FallInLove',
      title: 'Fall In Love',
      description: 'Total 36 episodes (Hindi 25)'
    },
    {
      img: Goblin,
      routes:'Goblin',
      title: 'Goblin',
      description: 'Total 16 episodes'
    },
    {
      img: KingTheLand,
      routes:'KingTheLand',
      title: 'King The Land',
      description: 'Total 16 episodes'
    },
    {
      img: LieToLove,
      routes:'LieToLove',
      title: 'Lie To Love',
      description: 'Total 32 episodes'
    },
    {
      img: LoveMeLikeIDo,
      routes:'LoveMeLikeIDo',
      title: 'Love Me Like I Do',
      description: 'Total 18 episodes'
    },
    {
      img: MeltingMeSoftly,
      routes:'MeltingMeSoftly',
      title: 'Melting Me Softly',
      description: 'Total 16 episodes'
    },
    {
      img: MyDemon,
      routes:'MyDemon',
      title: 'My Demon',
      description: 'Total 16 episodes'
    },
    {
      img: OurSecret,
      routes:'OurSecret',
      title: 'Our Secret',
      description: 'Total 24 episodes'
    },
    {
      img: PutYourHeadOnMyShoulder,
      routes:'PutYourHeadOnMyShoulder',
      title: 'Put Your Head On My Shoulder',
      description: 'Total 24 episodes'
    },
    {
      img: QueenOfTears,
      routes:'QueenOfTears',
      title: 'Queen Of Tears',
      description: 'Total 16 episodes'
    },
    {
      img: SnowDrop,
      routes:'SnowDrop',
      title: 'Snow Drop',
      description: 'Total 16 episodes'
    },
    {
      img: TheLoveYouGaveMe,
      routes:'TheLoveYouGaveMe',
      title: 'The Love You Gave Me',
      description: 'Total 28 episodes'
    },
    {
      img: TimeToFallInLove,
      routes:'TimeToFallInLove',
      title: 'Time To Fall In Love',
      description: 'Total 24 episodes'
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
          desciption={data.description}
        />
      ))}
    </div>
  );
};

export default HomePage;
