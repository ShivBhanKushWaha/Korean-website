// pages/index.tsx or HomePage.tsx
'use client'
import React, { useEffect } from 'react';
import { Card } from '@organisms';
import {
  BigMouth, BusinessProposal, CrashLandingOnYou, CuteBodyGaurd, DatingInTheKitchen, DineWithLove, DoctorStranger, DotOfSun,
  Encounter, ExtraOrdinaryYou, FallInLove, GenZ, GirlFriend, Goblin, Gyeongseong, IAmNotARobot, IKnowILoveYou, ItsOkayToNotToBeOkay,
  KingTheLand, LieToLove, LoveIsSweet, LoveMeLikeIDo, LoveScenery, LoveUnexpected, MarryMyHusband, MeetingYou2020, MeltingMeSoftly,
  MyDemon, MyGirlFriendIsAnAlienS1, MyGirlFriendIsAnAlienS2, OurSecret, PutYourHeadOnMyShoulder, QueenOfTears, Reacher, School2017,
  SnowDrop, SquidGameS1, SquidGameS2, StartUp, StepByStepLove, SweetFirstLove, TheKingEternalMonarch, TheLegendOfTheBlueSea, TheLoveYouGaveMe, TheWheelOfTimeS1, TheWheelOfTimeS2, TimeToFallInLove, UnlockMyBoss, WTwoWorldApart, YouAreMyDestiny,
} from '@assets';

const HomePage = () => {
  const AllKDrama = [
    // complete published
    {
      img: DotOfSun,
      routes: 'DotOfSun',
      title: 'Descendants of the sun',
      description: 'Total 16 episodes'
    },
    {
      img: LoveIsSweet,
      routes: 'LoveIsSweet',
      title: 'Love Is Sweet',
      description: 'Total 36 episodes'
    },
    {
      img: WTwoWorldApart,
      routes: 'WTwoWorldApart',
      title: 'W Two Worlds Apart',
      description: 'Total 16 episodes'
    },
    {
      img: DineWithLove,
      routes: 'DineWithLove',
      title: 'Dine With Love',
      description: 'Total 16 episodes'
    },
    {
      img: BusinessProposal,
      routes: 'BusinessProposal',
      title: 'Business Proposal',
      description: 'Total 12 episodes'
    },
    {
      img: Encounter,
      routes: 'Encounter',
      title: 'Encounter',
      description: 'Total 16 episodes'
    },
    {
      img: KingTheLand,
      routes: 'KingTheLand',
      title: 'King The Land',
      description: 'Total 16 episodes'
    },
    {
      img: ExtraOrdinaryYou,
      routes: 'ExtraOrdinaryYou',
      title: 'Extra Ordinary You',
      description: 'Total 16 episodes'
    },
    {
      img: CuteBodyGaurd,
      routes: 'CuteBodyGaurd',
      title: 'Cute Body Gaurd',
      description: 'Total 24 episodes'
    },
    {
      img: Goblin,
      routes: 'Goblin',
      title: 'Goblin',
      description: 'Total 16 episodes'
    },
    {
      img: ItsOkayToNotToBeOkay,
      routes: 'ItsOkayToNotToBeOkay',
      title: 'Its Okay To Not To Be Okay',
      description: 'Total 16 episodes'
    },
    {
      img: LieToLove,
      routes: 'LieToLove',
      title: 'Lie To Love',
      description: 'Total 32 episodes'
    },
    {
      img: LoveMeLikeIDo,
      routes: 'LoveMeLikeIDo',
      title: 'Love Me Like I Do',
      description: 'Total 18 episodes'
    },
    {
      img: LoveScenery,
      routes: 'LoveScenery',
      title: 'Love Scenery',
      description: 'Total 31 episodes'
    },
    {
      img: MarryMyHusband,
      routes: 'MarryMyHusband',
      title: 'Marry My Husband',
      description: 'Total 16 episodes'
    },
    {
      img: MeltingMeSoftly,
      routes: 'MeltingMeSoftly',
      title: 'Melting Me Softly',
      description: 'Total 16 episodes'
    },
    {
      img: MyDemon,
      routes: 'MyDemon',
      title: 'My Demon',
      description: 'Total 16 episodes'
    },
    {
      img: MyGirlFriendIsAnAlienS1,
      routes: 'MyGirlFriendIsAnAlienS1',
      title: 'My Girl Friend Is An Alien Season 1',
      description: 'Total 28 episodes'
    },
    {
      img: MyGirlFriendIsAnAlienS2,
      routes: 'MyGirlFriendIsAnAlienS2',
      title: 'My Girl Friend Is An Alien Season 2',
      description: 'Total 30 episodes'
    },
    {
      img: OurSecret,
      routes: 'OurSecret',
      title: 'Our Secret',
      description: 'Total 24 episodes'
    },
    {
      img: PutYourHeadOnMyShoulder,
      routes: 'PutYourHeadOnMyShoulder',
      title: 'Put Your Head On My Shoulder',
      description: 'Total 24 episodes'
    },
    {
      img: QueenOfTears,
      routes: 'QueenOfTears',
      title: 'Queen Of Tears',
      description: 'Total 16 episodes'
    },
    {
      img: School2017,
      routes: 'School2017',
      title: 'School 2017',
      description: 'Total 16 episodes'
    },
    {
      img: TheLegendOfTheBlueSea,
      routes: 'TheLegendOfTheBlueSea',
      title: 'The Legend Of The Blue Sea',
      description: 'Total 40 episodes'
    },
    {
      img: TheLoveYouGaveMe,
      routes: 'TheLoveYouGaveMe',
      title: 'The Love You Gave Me',
      description: 'Total 28 episodes'
    },
    {
      img: SnowDrop,
      routes: 'SnowDrop',
      title: 'Snow Drop',
      description: 'Total 16 episodes'
    },
    {
      img: TimeToFallInLove,
      routes: 'TimeToFallInLove',
      title: 'Time To Fall In Love',
      description: 'Total 24 episodes'
    },
    // new kdrama
    {
      img: BigMouth,
      routes: 'BigMouth',
      title: 'Big Mouth',
      description: 'Total 16 episodes'
    },
    {
      img: CrashLandingOnYou,
      routes: 'CrashLandingOnYou',
      title: 'Crash Landing On You',
      description: 'Total 16 episodes'
    },
    {
      img: DatingInTheKitchen,
      routes: 'DatingInTheKitchen',
      title: 'Dating In The Kitchen',
      description: 'Total 24 episodes'
    },
    {
      img: DoctorStranger,
      routes: 'DoctorStranger',
      title: 'Doctor Stranger',
      description: 'Total 20 episodes'
    },
    {
      img: GenZ,
      routes: 'GenZ',
      title: 'Gen Z',
      description: 'Total 40 episodes'
    },
    {
      img: GirlFriend,
      routes: 'GirlFriend',
      title: 'Girl Friend',
      description: 'Total 36 episodes'
    },
    {
      img: Gyeongseong,
      routes: 'Gyeongseong',
      title: 'Gyeongseong',
      description: 'Total 7 episodes'
    },
    {
      img: IAmNotARobot,
      routes: 'IAmNotARobot',
      title: 'I Am Not A Robot',
      description: 'Total 28 episodes'
    },
    {
      img: IKnowILoveYou,
      routes: 'IKnowILoveYou',
      title: 'I Know I Love You',
      description: 'Total 24 episodes'
    },
    {
      img: LoveUnexpected,
      routes: 'LoveUnexpected',
      title: 'Love Unexpected',
      description: 'Total 24 episodes'
    },
    {
      img: MeetingYou2020,
      routes: 'MeetingYou2020',
      title: 'Meeting You 2020',
      description: 'Total 28 episodes'
    },
    {
      img: Reacher,
      routes: 'Reacher',
      title: 'Reacher',
      description: 'Total 8 episodes'
    },
    {
      img: SquidGameS1,
      routes: 'SquidGameS1',
      title: 'Squid Game Season 1',
      description: 'Total 9 episodes'
    },
    {
      img: SquidGameS2,
      routes: 'SquidGameS2',
      title: 'Squid Game Season 2',
      description: 'Total 7 episodes'
    },
    {
      img: StartUp,
      routes: 'StartUp',
      title: 'Start Up',
      description: 'Total 16 episodes'
    },
    {
      img: StepByStepLove,
      routes: 'StepByStepLove',
      title: 'Step By Step Love',
      description: 'Total 28 episodes'
    },
    {
      img: SweetFirstLove,
      routes: 'SweetFirstLove',
      title: 'Sweet First Love',
      description: 'Total 24 episodes'
    },
    {
      img: TheKingEternalMonarch,
      routes: 'TheKingEternalMonarch',
      title: 'The King Eternal Monarch',
      description: 'Total 16 episodes'
    },
    {
      img: TheWheelOfTimeS1,
      routes: 'TheWheelOfTimeS1',
      title: 'The Wheel Of Time Season 1',
      description: 'Total 8 episodes'
    },
    {
      img: TheWheelOfTimeS2,
      routes: 'TheWheelOfTimeS2',
      title: 'The Wheel Of Time Season 2',
      description: 'Total 8 episodes'
    },
    {
      img: UnlockMyBoss,
      routes: 'UnlockMyBoss',
      title: 'Unlock My Boss',
      description: 'Total 24 episodes'
    },
    {
      img: YouAreMyDestiny,
      routes: 'YouAreMyDestiny',
      title: 'You Are My Destiny',
      description: 'Total 36 episodes'
    },
  ];
  useEffect(() => {
    const disableRightClick = (event: MouseEvent) => {
      event.preventDefault();
    };

    document.addEventListener("contextmenu", disableRightClick);

    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
    };
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center py-4 mx-2 sm:mx-10">
      {AllKDrama.map((drama, index) => (
        <Card
          key={index}
          img={drama.img}
          routes={drama.routes}
          title={drama.title}
          desciption={drama.description}
        />
      ))}
    </div>
  );
};

export default HomePage;
