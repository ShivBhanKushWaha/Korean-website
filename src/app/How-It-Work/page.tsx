import Link from 'next/link';
import React from 'react';

const VideoExplanation = () => {
  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center">Video Publishing and Verification Logic</h1>

      <p className="mb-4 text-justify">
        Welcome! This page explains the logic behind our video publishing and verification system.
      </p>

      <h2 className="text-xl sm:text-2xl font-semibold mb-3">Publishing Videos</h2>
      <p className="mb-4 text-justify">
        If a video is not published yet, it will be updated daily with the latest information from YouTube. Once the video is published on YouTube, it will be marked as uploaded on our platform.
      </p>
      <p className="mb-4 text-justify">
        Every time a video is published, we check YouTube to see if the latest version is available. This ensures that you always have access to the most recent content.
      </p>

      <h2 className="text-xl sm:text-2xl font-semibold mb-3">Verification Codes</h2>
      <p className="mb-4 text-justify">
        Each video contains a unique verification code that is embedded within the video at various points. To access the full episode on our platform, you will need to enter this verification code.
      </p>
      <p className="mb-4 text-justify">
        If the verification code you enter is correct, you will be granted access to the full episode. However, if the verification fails, you will need to watch the YouTube video again to retrieve the correct code.
      </p>

      <h2 className="text-xl sm:text-2xl font-semibold mb-3">How to Enter the Verification Code</h2>
      <p className="mb-4 text-justify">
        When you click on an episode, a prompt will appear asking you to enter the verification code. Simply watch the YouTube video, note down the code when it appears, and enter it into the prompt.
      </p>
      <p className="mb-4 text-justify">
        If the code is correct, a popup will confirm your verification, and you will be able to access the full episode. If the code is incorrect, a message will inform you that the verification has failed, and you can rewatch the YouTube video to try again.
      </p>

      <h2 className="text-xl sm:text-2xl font-semibold mb-3">Why Use This System?</h2>
      <p className="mb-4 text-justify">
        This verification system ensures that only viewers who have watched the YouTube video can access the full episode. It helps us maintain the integrity of our content and ensures that our viewers are engaged with the material.
      </p>
      <p className="mb-4 text-justify">
        Thank you for understanding and participating in our verification process. If you have any questions or need assistance, please feel free to reach out to our support team. For any problems, comment on our YouTube channel by clicking <Link href="https://www.youtube.com/@romanticlovekdrama" target='_blank' className="text-blue-500">here</Link>.
      </p>

      <h2 className="text-xl sm:text-2xl font-semibold mb-3">Watch Before It&apos;s Paid</h2>
      <p className="mb-4 text-justify">
        Don&apos;t miss out! Our videos are available for free for a limited time before they become paid content. Be sure to watch them as soon as they are published to enjoy them without any cost. Once the free period ends, you will need to purchase access to view the episodes.
      </p>
    </div>
  );
}

export default VideoExplanation;
