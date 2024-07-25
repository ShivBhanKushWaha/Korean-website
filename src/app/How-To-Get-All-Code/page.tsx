'use client'
import React, { useEffect, useState } from 'react';
import { verificationCode } from '@/AllVerificationCode/VerificationCode';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

type Episode = {
  id: number;
  title: string;
  verificationCode: string;
};

type Drama = {
  id: number;
  dramaName: string;
  status: string;
  episodes: Episode[];
};

const dramas: Drama[] = verificationCode;

const MyComponent = () => {
  const router = useRouter();
  const [selectedDrama, setSelectedDrama] = useState<Drama | null>(null);
  const [showCodes, setShowCodes] = useState<boolean>(false);
  const [isPaymentAvailable, setIsPaymentAvailable] = useState<boolean>(false)

  useEffect(() => {
    const disableRightClick = (event: MouseEvent) => {
      event.preventDefault();
    };

    document.addEventListener("contextmenu", disableRightClick);

    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
    };
  }, []);

  const handleViewCodes = () => {
    setShowCodes(!showCodes);
  };

  const handleBuyAllSeries = () => {
    window.open('https://www.instamojo.com/@Romantic_love_kdrama/l45a8661dd4894f81a22212adad880e2b/')
  };

  const handleBuySeriesCodes = (drama: Drama) => {
    // Implement logic for purchasing codes for the selected series
    router.push(`/BuySeriesCodes/${drama.id}`);
  };

  return (
    <div className="sm:py-20 py-10 bg-gray-100 p-6">
      {selectedDrama ? (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">{selectedDrama.dramaName}</h1>
          <button
            onClick={() => setSelectedDrama(null)}
            className="bg-teal-500 text-white px-3 py-1.5 rounded hover:bg-teal-600 mb-4">
            Back to Dramas
          </button>

          {selectedDrama.status === 'paid' ? (
            <div className="text-center">
              <button
                onClick={() => handleBuySeriesCodes(selectedDrama)}
                className="bg-rose-500 hover:bg-rose-600 text-white py-1.5 px-3 rounded">
                Buy Series Codes
              </button>
            </div>
          ) : (
            <div>
              <button
                onClick={() => handleViewCodes()}
                className="bg-teal-500 hover:bg-teal-600 text-white py-1.5 px-3 rounded mb-4">
                {showCodes ? 'Hide Codes' : 'Show Codes'}
              </button>
              {showCodes && (
                <ul className="pl-5 list-decimal">
                  {selectedDrama.episodes.map((episode) => (
                    <li key={episode.id} className="mb-2">
                      <div className="p-4 border rounded bg-gray-50">
                        <h2 className="font-semibold text-[16px]">{episode.title}</h2>
                        <span className="text-gray-600 text-center font-serif text-[14px]">Code: {episode.verificationCode}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">Dramas</h1>
          <div className="flex justify-between mb-4">
            {
              isPaymentAvailable ? 
              <button onClick={() => handleBuyAllSeries()} rel="im-checkout" data-text="Pay" data-css-style="color:#ffffff; background:#75c26a; width:300px; border-radius:4px" className="bg-teal-500 hover:bg-teal-600 text-white py-1.5 px-3 rounded" data-layout="vertical">Buy All Series Code</button> 
              : 
              <button
                className="bg-rose-500 text-white py-1.5 px-3 rounded">
                Enjoy free access
              </button>
            }
          </div>
          <ul className="list-none">
            {dramas.map((drama) => (
              <li key={drama.id} className="mb-2">
                <div className="flex flex-col sm:flex-row items-center justify-between p-4 border rounded bg-gray-50">
                  <div className="bg-teal-500 text-center text-white px-3 py-1.5 rounded w-full sm:w-1/2 mb-2 sm:mb-0">
                    {drama.dramaName}
                  </div>
                  {drama.status === 'paid' ? (
                    <button
                      onClick={() => handleBuySeriesCodes(drama)}
                      className="bg-rose-500 hover:bg-rose-600 text-white py-1 px-3 rounded sm:ml-4 w-full sm:w-auto">
                      Buy Series Codes
                    </button>
                  ) : (
                    <button
                      onClick={() => setSelectedDrama(drama)}
                      className="bg-teal-500 hover:bg-teal-600 text-white py-1 px-3 rounded sm:ml-4 w-full sm:w-auto">
                      View Code
                    </button>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MyComponent;
