// pages/index.tsx or HomePage.tsx
'use client'
import React, { useEffect } from 'react';
import { Card } from '@organisms';
import {
  ALoveSoRomantic,
  BestLover,
  BigMouth, BringItGhost, BusinessProposal, ChasingBall, ComeAndHugMe, CrashLandingOnYou, CuteBodyGaurd, DalliAndCockyPrince, DanceOfTheSky, DatingInTheKitchen, DineWithLove, DoctorStranger, DotOfSun,
  DreamGarden,
  Encounter, EternalLoveRain, ExtraOrdinaryYou, FallInLove, GenZ, GirlFriend, Goblin, Gyeongseong, Heirs, HelloMyGirl, IAmNotARobot, IKnowILoveYou, IMayLoveYou, IntenseLove, ItsOkayToNotToBeOkay,
  KingTheLand, LieToLove, Love020, LoveAtFirstBite, LoveAtNight, LoveIsSweet, LoveMeLikeIDo, LoveScenery, LoveUnexpected, MarryMyHusband, MeetingYou2020, MeltingMeSoftly,
  MrInsomiaWaitingForLove,
  MyDearLady,
  MyDemon, MyDeskmate, MyGirlFriendIsAGumiho, MyGirlFriendIsAnAlienS1, MyGirlFriendIsAnAlienS2, MyIdIsGanganamBeauty, MyLethalMan, MyPrecious, MysteriousLove, OurSecret, PutYourHeadOnMyShoulder, QueenOfTears, Reacher, School2017,
  SecretOfLove,
  SmileToLife,
  SnowDrop, SquidGameS1, SquidGameS2, StartUp, StepByStepLove, SuspiciousPartner, SweetAndSaltyOffice, SweetFirstLove, SweetSweet, TheK2, TheKingEternalMonarch, TheLegendOfTheBlueSea, TheLoveYouGaveMe, theSecretLifeOfMySecretry, TheWheelOfTimeS1, TheWheelOfTimeS2, Time, TimeToFallInLove, ToFlyWithYou, UncontrollablyFond, UnlockMyBoss, Vincenzo, WarmMeetYou, WeightLiftingKim, WenderallasDiary, WhenLifeGivesYouTangerien, WTwoWorldApart, YouAreMyDestiny,
} from '@assets';

const HomePage = () => {
  const AllKDrama = [
      {
        img: BigMouth,
        routes: 'BigMouth',
        title: 'Big Mouth',
        description: 'Total 16 episodes'
      },
      {
        img: BusinessProposal,
        routes: 'BusinessProposal',
        title: 'Business Proposal',
        description: 'Total 12 episodes'
      },
      {
        img: CrashLandingOnYou,
        routes: 'CrashLandingOnYou',
        title: 'Crash Landing On You',
        description: 'Total 16 episodes'
      },
      {
        img: CuteBodyGaurd,
        routes: 'CuteBodyGaurd',
        title: 'Cute Body Gaurd',
        description: 'Total 24 episodes'
      },
      {
        img: DatingInTheKitchen,
        routes: 'DatingInTheKitchen',
        title: 'Dating In The Kitchen',
        description: 'Total 24 episodes'
      },
      {
        img: DotOfSun,
        routes: 'DotOfSun',
        title: 'Descendants of the Sun',
        description: 'Total 16 episodes'
      },
      {
        img: DineWithLove,
        routes: 'DineWithLove',
        title: 'Dine With Love',
        description: 'Total 16 episodes'
      },
      {
        img: DoctorStranger,
        routes: 'DoctorStranger',
        title: 'Doctor Stranger',
        description: 'Total 20 episodes'
      },
      {
        img: Encounter,
        routes: 'Encounter',
        title: 'Encounter',
        description: 'Total 16 episodes'
      },
      {
        img: ExtraOrdinaryYou,
        routes: 'ExtraOrdinaryYou',
        title: 'Extra Ordinary You',
        description: 'Total 16 episodes'
      },
      {
        img: FallInLove,
        routes: 'FallInLove',
        title: 'Fall In Love',
        description: 'Total 36 episodes(25 Hindi)'
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
        img: Goblin,
        routes: 'Goblin',
        title: 'Goblin',
        description: 'Total 16 episodes'
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
        img: ItsOkayToNotToBeOkay,
        routes: 'ItsOkayToNotToBeOkay',
        title: 'Its Okay To Not To Be Okay',
        description: 'Total 16 episodes'
      },
      {
        img: KingTheLand,
        routes: 'KingTheLand',
        title: 'King The Land',
        description: 'Total 16 episodes'
      },
      {
        img: LieToLove,
        routes: 'LieToLove',
        title: 'Lie To Love',
        description: 'Total 32 episodes'
      },
      {
        img: LoveIsSweet,
        routes: 'LoveIsSweet',
        title: 'Love Is Sweet',
        description: 'Total 36 episodes'
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
        img: LoveUnexpected,
        routes: 'LoveUnexpected',
        title: 'Love Unexpected',
        description: 'Total 24 episodes'
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
        img: MeetingYou2020,
        routes: 'MeetingYou2020',
        title: 'Meeting You 2020',
        description: 'Total 28 episodes'
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
        img: Reacher,
        routes: 'Reacher',
        title: 'Reacher',
        description: 'Total 8 episodes'
      },
      {
        img: School2017,
        routes: 'School2017',
        title: 'School 2017',
        description: 'Total 16 episodes'
      },
      {
        img: SnowDrop,
        routes: 'SnowDrop',
        title: 'Snow Drop',
        description: 'Total 16 episodes'
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
        img: TimeToFallInLove,
        routes: 'TimeToFallInLove',
        title: 'Time To Fall In Love',
        description: 'Total 24 episodes'
      },
      {
        img: UnlockMyBoss,
        routes: 'UnlockMyBoss',
        title: 'Unlock My Boss',
        description: 'Total 24 episodes'
      },
      {
        img: WTwoWorldApart,
        routes: 'WTwoWorldApart',
        title: 'W Two Worlds Apart',
        description: 'Total 16 episodes'
      },
      {
        img: YouAreMyDestiny,
        routes: 'YouAreMyDestiny',
        title: 'You Are My Destiny',
        description: 'Total 36 episodes'
      },
      
      // new drama 
      {
        img: ALoveSoRomantic,
        routes: 'ALoveSoRomantic',
        title: 'A Love So Romantic',
        description: 'Total 32 episodes'
      },
      {
        img: BestLover,
        routes: 'BestLover',
        title: 'Best Lover',
        description: 'Total 12 episodes'
      },
      {
        img: BringItGhost,
        routes: 'BringItGhost',
        title: 'Bring It Ghost',
        description: 'Total 16 episodes'
      },
      {
        img: ChasingBall,
        routes: 'ChasingBall',
        title: 'Chasing Ball',
        description: 'Total 36 episodes'
      },
      {
        img: ComeAndHugMe,
        routes: 'ComeAndHugMe',
        title: 'Come And Hug Me',
        description: 'Total 16 episodes'
      },
      {
        img: DalliAndCockyPrince,
        routes: 'DalliAndCockyPrince',
        title: 'Dalli And Cocky Prince',
        description: 'Total 16 episodes'
      },
      {
        img: DanceOfTheSky,
        routes: 'DanceOfTheSky',
        title: 'Dance Of The Sky',
        description: 'Total 28 episodes'
      },
      {
        img: DreamGarden,
        routes: 'DreamGarden',
        title: 'Dream Garden',
        description: 'Total 32 episodes'
      },
      {
        img: EternalLoveRain,
        routes: 'EternalLoveRain',
        title: 'Eternal Love Rain',
        description: 'Total 24 episodes'
      },
      {
        img: Heirs,
        routes: 'Heirs',
        title: 'Heirs',
        description: 'Total 17 episodes'
      },
      {
        img: HelloMyGirl,
        routes: 'HelloMyGirl',
        title: 'Hello My Girl',
        description: 'Total 24 episodes'
      },
      {
        img: IMayLoveYou,
        routes: 'IMayLoveYou',
        title: 'I May Love You',
        description: 'Total 24 episodes'
      },
      {
        img: IntenseLove,
        routes: 'IntenseLove',
        title: 'Intense Love',
        description: 'Total 24 episodes'
      },
      {
        img: LoveAtFirstBite,
        routes: 'LoveAtFirstBite',
        title: 'Love At First Bite',
        description: 'Total 28 episodes'
      },
      {
        img: LoveAtNight,
        routes: 'LoveAtNight',
        title: 'Love At Night',
        description: 'Total 30 episodes'
      },
      {
        img: Love020,
        routes: 'Love020',
        title: 'Love020',
        description: 'Total 30 episodes'
      },
      {
        img: MrInsomiaWaitingForLove,
        routes: 'MrInsomiaWaitingForLove',
        title: 'Mr Insomia Waiting For Love',
        description: 'Total 24 episodes'
      },
      {
        img: MyDearLady,
        routes: 'MyDearLady',
        title: 'My Dear Lady',
        description: 'Total 16 episodes'
      },
      {
        img: MyDeskmate,
        routes: 'MyDeskmate',
        title: 'My Deskmate',
        description: 'Total 30 episodes'
      },
      {
        img: MyGirlFriendIsAGumiho,
        routes: 'MyGirlFriendIsAGumiho',
        title: 'My Girl Friend Is A Gumiho',
        description: 'Total 16 episodes'
      },
      {
        img: MyIdIsGanganamBeauty,
        routes: 'MyIdIsGanganamBeauty',
        title: 'My Id Is Ganganam Beauty',
        description: 'Total 16 episodes'
      },
      {
        img: MyLethalMan,
        routes: 'MyLethalMan',
        title: 'My Lethal Man',
        description: 'Total 24 episodes'
      },
      {
        img: MysteriousLove,
        routes: 'MysteriousLove',
        title: 'Mysterious Love',
        description: 'Total 16 episodes'
      },
      {
        img: SecretOfLove,
        routes: 'SecretOfLove',
        title: 'Secret Of Love',
        description: 'Total 30 episodes'
      },
      {
        img: SmileToLife,
        routes: 'SmileToLife',
        title: 'Smile To Life',
        description: 'Total 24 episodes'
      },
      {
        img: SuspiciousPartner,
        routes: 'SuspiciousPartner',
        title: 'Suspicious Partner',
        description: 'Total 20 episodes'
      },
      {
        img: SweetAndSaltyOffice,
        routes: 'SweetAndSaltyOffice',
        title: 'Sweet And Salty Office',
        description: 'Total 20 episodes'
      },
      {
        img: SweetSweet,
        routes: 'SweetSweet',
        title: 'Sweet Sweet',
        description: 'Total 22 episodes'
      },
      {
        img: TheK2,
        routes: 'TheK2',
        title: 'TheK2',
        description: 'Total 16 episodes'
      },
      {
        img: theSecretLifeOfMySecretry,
        routes: 'theSecretLifeOfMySecretry',
        title: 'the Secret Life Of My Secretry',
        description: 'Total 16 episodes'
      },
      {
        img: Time,
        routes: 'Time',
        title: 'Time',
        description: 'Total 16 episodes'
      },
      {
        img: ToFlyWithYou,
        routes: 'ToFlyWithYou',
        title: 'To Fly With You',
        description: 'Total 33 episodes'
      },
      {
        img: UncontrollablyFond,
        routes: 'UncontrollablyFond',
        title: 'Uncontrollably Fond',
        description: 'Total 20 episodes'
      },
      {
        img: Vincenzo,
        routes: 'Vincenzo',
        title: 'Vincenzo',
        description: 'Total 20 episodes'
      },
      {
        img: WarmMeetYou,
        routes: 'WarmMeetYou',
        title: 'Warm Meet You',
        description: 'Total 24 episodes'
      },
      {
        img: WeightLiftingKim,
        routes: 'WeightLiftingKim',
        title: 'Weight Lifting Kim',
        description: 'Total 16 episodes'
      },
      {
        img: WenderallasDiary,
        routes: 'WenderallasDiary',
        title: 'Wenderallas Diary',
        description: 'Total 24 episodes'
      },
      {
        img: WhenLifeGivesYouTangerien,
        routes: 'WhenLifeGivesYouTangerien',
        title: 'When Life Gives You Tangerien',
        description: 'Total 16 episodes'
      },
      {
        img: MyPrecious,
        routes: 'MyPrecious',
        title: 'My Precious',
        description: 'Total 40 episodes'
      },

      // new drama
      {
        img: MyPrecious,
        routes: 'MyPrecious',
        title: 'Doctor John',
        description: 'Total 16 episodes'
      },
      {
        img: MyPrecious,
        routes: 'MyPrecious',
        title: 'Hospital Ship',
        description: 'Total 20 episodes'
      },
      {
        img: MyPrecious,
        routes: 'MyPrecious',
        title: 'Kill Me Heal Me',
        description: 'Total 20 episodes'
      },
      {
        img: MyPrecious,
        routes: 'MyPrecious',
        title: 'My Secret Terrius',
        description: 'Total 16 episodes'
      },
      {
        img: MyPrecious,
        routes: 'MyPrecious',
        title: 'My Strange Hero',
        description: 'Total 40 episodes'
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
