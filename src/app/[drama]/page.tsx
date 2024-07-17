// pages/episodes.tsx
import React from 'react';
import { EpisodeCard } from '@/organisms';
import { DotOfSun } from '../../../assets';

const episodes = [
  {
    id: 1,
    title: 'Episode 1',
    imageUrl: DotOfSun,
    verificationCode: '123456',
    link: 'https://1024terabox.com/s/1PiAxBcBpYFS55ECpJ5U_0w',
  },
  {
    id: 2,
    title: 'Episode 2',
    imageUrl: DotOfSun,
    verificationCode: '654321',
    link: 'https://example.com/episode2',
  },
  // Add more episodes as needed
];

const EpisodesPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {episodes.map((episode) => (
        <EpisodeCard key={episode.id} episode={episode} />
      ))}
    </div>
  );
};

export default EpisodesPage;
