// components/EpisodeCard.tsx
'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Popup from './PopUp';

interface Episode {
  id: number;
  title: string;
  imageUrl: any;
  verificationCode: string;
  videolink: string;
  youtubeLink: string;
  uploaded: boolean;
}

interface EpisodeCardProps {
  episode: Episode;
}

const EpisodeCard: React.FC<EpisodeCardProps> = ({ episode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [popupLink, setPopupLink] = useState('');

  const handleVerification = () => {
    if (verificationCode === episode.verificationCode) {
      setIsVerified(true);
      setPopupMessage('Verification successful! You can now access the episode.');
      setPopupLink(episode.videolink);
    } else {
      setPopupMessage('Invalid verification code. You can still watch the YouTube video below.');
      setPopupLink(episode.youtubeLink);
    }
    setIsOpen(false);
    setVerificationCode('');
  };

  const handleCancel = () => {
    setIsOpen(false);
    setVerificationCode('');
  };

  return (
    <>
      <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md w-60 hover:shadow-2xl transition duration-500 ease-linear">
        <div className="w-full h-24 flex items-center justify-center">
          <Image
            src={episode.imageUrl}
            alt={episode.title}
          />
        </div>
        <div className="py-4 px-2">
          <div className='flex flex-col justify-start items-start mt-2 mb-2 gap-x-1'>
            <h2 className="text-[18px] font-semibold">{episode.title}</h2>
            <h3 className="text-base font-semibold">Episode {episode.id}</h3>
          </div>
          {episode.uploaded ? (
            <button
              onClick={() => setIsOpen(true)}
              className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded w-full text-center"
            >
              View Episode
            </button>
          ) : (
            <button
              disabled
              className="bg-gray-400 text-black px-4 py-2 rounded w-full text-center cursor-not-allowed"
            >
              Not Published
            </button>
          )}
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 sm:px-auto px-2">
          <div className="bg-white p-6 rounded-lg z-60">
            <h2 className="text-[20px] mb-4 text-center">Enter Verification Code</h2>
            <input
              type="text"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              className="border p-2 mb-4 w-full"
            />
            <button
              onClick={handleVerification}
              className="bg-teal-500 text-black px-4 py-2 rounded w-full text-center"
            >
              Verify
            </button>
            <button
              onClick={handleCancel}
              className="bg-red-500 text-black px-4 py-2 rounded w-full text-center mt-2"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {popupMessage && (
        <Popup
          message={popupMessage}
          onClose={() => setPopupMessage('')}
          link={popupLink}
        />
      )}
    </>
  );
};

export default EpisodeCard;
