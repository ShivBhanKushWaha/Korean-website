// pages/cards/[cardName].js
'use client'
import { useParams, useRouter } from 'next/navigation';

const CardEpisodes = () => {
  const router = useRouter();
  const { cardName } = useParams();

  // Example: Fetch episodes data based on cardName
  // Replace with your actual data fetching logic
  const episodes = [
    { id: 1, title: 'Episode 1' },
    { id: 2, title: 'Episode 2' },
    { id: 3, title: 'Episode 3' },
  ];

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">{cardName} Episodes</h1>
      <ul>
        {episodes.map((episode) => (
          <li key={episode.id}>
            <p>{episode.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardEpisodes;
