import Link from 'next/link';
import React from 'react';

const FeeExplanation = () => {
  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center">Accessing Verification Codes for All Dramas</h1>

      <p className="mb-4 text-justify">
        Welcome to our fee explanation page. Here, we outline the process and fee structure for accessing verification codes for all episodes of all dramas.
      </p>

      <h2 className="text-xl sm:text-2xl font-semibold mb-3">Fee Structure</h2>
      <p className="mb-4 text-justify">
        To obtain the verification codes for all episodes across all dramas, you will need to pay a one-time fee. This fee covers the cost of accessing the verification codes for every drama in our collection.
      </p>
      <p className="mb-4 text-justify">
        The fee for accessing verification codes for all dramas is ₹119. This fee allows you to receive verification codes for every drama, which you can then use to unlock the full episodes.
      </p>

      <h2 className="text-xl sm:text-2xl font-semibold mb-3">How to Pay</h2>
      <p className="mb-4 text-justify">
        To make the payment and receive verification codes for all dramas, please follow these steps:
      </p>
      <ul className="list-disc list-inside mb-4 text-justify">
        <li>Click on <Link href="https://www.instagram.com/black_lover14444/" target='_blank' className="text-teal-500">Contact Us</Link> to be redirected to our Instagram page.</li>
        <li>Send us a message on Instagram, indicating that you want to access verification codes for all dramas.</li>
        <li>Complete the payment of ₹119 as instructed by us.</li>
      </ul>

      <h2 className="text-xl sm:text-2xl font-semibold mb-3">Payment Confirmation</h2>
      <p className="mb-4 text-justify">
        After completing the payment, you will receive the verification codes for all the dramas. Ensure you provide accurate details to receive the correct codes for every episode.
      </p>

      <h2 className="text-xl sm:text-2xl font-semibold mb-3">Contact Us</h2>
      <p className="mb-4 text-justify">
        For any questions or issues regarding the payment or verification codes, please feel free to reach out to us via our Instagram page or email us at <Link href="mailto:petersonwatson770@gmail.com" className="text-teal-500">petersonwatson770@gmail.com</Link>.
      </p>

      <h2 className="text-xl sm:text-2xl font-semibold mb-3">Subscribe to Our YouTube Channel</h2>
      <p className="mb-4 text-justify">
        Don’t forget to subscribe to our YouTube channel to stay updated with the latest video series. Click <Link href="https://www.youtube.com/@romanticlovekdrama" target='_blank' className="text-teal-500">here</Link> to visit and subscribe to our channel.
      </p>
    </div>
  );
}

export default FeeExplanation;
