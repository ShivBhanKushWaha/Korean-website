import React from 'react';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <h1 className="text-6xl font-bold text-teal-500 mb-4">404</h1>
      <p className="text-2xl mb-4">Oops! The Korean drama you&apos;re looking for is not available right now.</p>
      <p className="text-lg mb-8">It might have been moved or removed. Please check the title and try again.</p>
      <Link href="/" className="text-xl text-white bg-teal-500 px-4 py-2 rounded hover:bg-teal-600">
          Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
