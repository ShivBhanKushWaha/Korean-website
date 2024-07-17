// components/Popup.tsx
import Link from 'next/link';
import React from 'react';

interface PopupProps {
  message: string;
  onClose: () => void;
  link: string;
}

const Popup: React.FC<PopupProps> = ({ message, onClose, link }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-md z-60">
        <h2 className="text-2xl mb-4">{message}</h2>
        <div className='flex flex-row justify-center gap-x-6 items-center'>
          {link && (
            <Link
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 text-blue-500 underline mb-4"
            >
              Watch Video
            </Link>
          )}
          <button
            onClick={onClose}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
