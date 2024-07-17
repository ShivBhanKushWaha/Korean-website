// pages/episodes.tsx
import React from 'react';
import { EpisodeCard } from '@/organisms';
import { DotOfSun } from '../../../assets';

const episodes = [
  {
    id: 1,
    title: 'DotOfSun',
    imageUrl: DotOfSun,
    verificationCode: '123456',
    videolink: 'https://1024terabox.com/s/1PiAxBcBpYFS55ECpJ5U_0w',
    youtubeLink: 'https://www.youtube.com/watch?v=example1',
  },
  {
    id: 2,
    title: 'DotOfSun',
    imageUrl: DotOfSun,
    verificationCode: '654321',
    videolink: 'https://example.com/episode2',
    youtubeLink: 'https://www.youtube.com/watch?v=example2',
  },
  {
    id: 3,
    title: 'DotOfSun',
    imageUrl: DotOfSun,
    verificationCode: '654321',
    videolink: 'https://example.com/episode2',
    youtubeLink: 'https://www.youtube.com/watch?v=example2',
  },
  {
    id: 4,
    title: 'DotOfSun',
    imageUrl: DotOfSun,
    verificationCode: '654321',
    videolink: 'https://example.com/episode2',
    youtubeLink: 'https://www.youtube.com/watch?v=example2',
  },
  {
    id: 5,
    title: 'DotOfSun',
    imageUrl: DotOfSun,
    verificationCode: '654321',
    videolink: 'https://example.com/episode2',
    youtubeLink: 'https://www.youtube.com/watch?v=example2',
  },
  // Add more episodes as needed
];

const EpisodesPage = () => {
  return (
    <div className="grid items-center justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 z-50">
      {episodes.map((episode) => (
        <EpisodeCard key={episode.id} episode={episode} />
      ))}
    </div>
  );
};

export default EpisodesPage;
