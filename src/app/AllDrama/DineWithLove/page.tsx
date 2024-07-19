// pages/episodes.tsx
import React from 'react';
import { EpisodeCard } from '@/organisms';
import {Episodes} from "./PlayList"

const EpisodesPage = () => {
  return (
    <div className="grid items-center justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 z-50">
      {Episodes.map((episode) => (
        <EpisodeCard key={episode.id} episode={episode} />
      ))}
    </div>
  );
};

export default EpisodesPage;
