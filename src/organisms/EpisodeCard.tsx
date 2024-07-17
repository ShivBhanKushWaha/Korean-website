// components/EpisodeCard.tsx
'use client'
import React, { useState } from 'react';
import Image from 'next/image';

interface Episode {
  id: number;
  title: string;
  imageUrl: any;
  verificationCode: string;
  link: string;
}

interface EpisodeCardProps {
  episode: Episode;
}

const EpisodeCard: React.FC<EpisodeCardProps> = ({ episode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [isVerified, setIsVerified] = useState(false);

  const handleVerification = () => {
    if (verificationCode === episode.verificationCode) {
      setIsVerified(true);
      setIsOpen(false);
    } else {
      alert('Invalid verification code');
    }
  };

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md">
      <div className="relative w-full h-40">
        <Image
          src={episode.imageUrl}
          alt={episode.title}
          width={250}
          height={200}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">Episode {episode.id}</h3>
        <h2 className="text-xl font-semibold mb-2">{episode.title}</h2>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-500 hover:bg-blue-600 text-black px-4 py-2 rounded"
        >
          View Episode
        </button>

        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg">
              <h2 className="text-2xl mb-4">Enter Verification Code</h2>
              <input
                type="text"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                className="border p-2 mb-4 w-full"
              />
              <button
                onClick={handleVerification}
                className="bg-green-500 text-black px-4 py-2 rounded"
              >
                Verify
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="bg-red-500 text-black px-4 py-2 rounded ml-2"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {isVerified && (
          <a
            href={episode.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-2 text-blue-500 underline"
          >
            Go to Episode
          </a>
        )}
      </div>
    </div>
  );
};

export default EpisodeCard;
