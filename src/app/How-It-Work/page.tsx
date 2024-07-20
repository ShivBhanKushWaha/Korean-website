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
        The verification code will be displayed on the screen in the uploaded episode on YouTube, based on the name of the episode and series. You will only be able to retrieve the verification code after watching the full YouTube video.
      </p>
      <p className="mb-4 text-justify">
        If the verification code you enter is correct, you will be granted access to the full episode. However, if the verification fails, you will need to watch the YouTube video again to retrieve the correct code.
      </p>

      <h2 className="text-xl sm:text-2xl font-semibold mb-3">Instructions</h2>
      <p className="mb-4 text-justify">
        When you click on an episode, a prompt will appear asking you to enter the verification code. Simply watch the YouTube video, note down the code when it appears, and enter it into the prompt.
      </p>
      <p className="mb-4 text-justify">
        If the code is correct, a popup will confirm your verification, and you will be able to access the full episode. If the code is incorrect, a message will inform you that the verification has failed, and you can rewatch the YouTube video to try again.
      </p>

      <h2 className="text-xl sm:text-2xl font-semibold mb-3">Watch Before It&apos;s Paid</h2>
      <p className="mb-4 text-justify">
        Don&apos;t miss out! Our videos are available for free for a limited time before they become paid content. Be sure to watch them as soon as they are published to enjoy them without any cost. Once the free period ends, you will need to purchase access to view the episodes.
      </p>

      <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-red-600">Warning</h2>
      <ul className="list-disc list-inside mb-4 text-justify text-red-600">
        <li>Do not share any verification codes in the YouTube comments.</li>
      </ul>

      <h2 className="text-xl sm:text-2xl font-semibold mb-3">Instructions</h2>
      <ul className="list-disc list-inside mb-4 text-justify">
        <li>To watch the full video, you need to install the TeraBox app. Download it for <Link href="https://play.google.com/store/apps/details?id=com.dubox.drive&pcampaignid=web_share" target='_blank' className="text-teal-500">Android</Link> or for <Link href="https://terabox-cloud-storage-space.en.softonic.com/?utm_source=SEM&utm_medium=paid&utm_campaign=EN_IN_KW_PC_PP_TeraBox_PSP&gad_source=1&gclid=Cj0KCQjwwO20BhCJARIsAAnTIVRfCTKw6uqrjWthCKgyxhrQnC7t0sw-uovdxNiKk1Gi0Lh2lfk1i7gaAqAYEALw_wcB" target='_blank' className="text-teal-500">PC</Link>.</li>
        <li>If the provided download links do not work, search for &quot;Tera Box&quot; in the Play Store. TeraBox offers 1024 GB of free cloud storage.</li>
        <li>To get verification codes for up to 5 chosen dramas, click on <Link href="https://www.instagram.com/black_lover14444/" target='_blank' className="text-teal-500">Contact Us</Link> to be redirected to our Instagram page. Message us, pay the fee of ₹149, and specify up to 5 dramas for which you want to receive the verification codes.</li>
      </ul>

      <h2 className="text-xl sm:text-2xl font-semibold mb-3">Subscribe to Our YouTube Channel</h2>
      <p className="mb-4 text-justify">
        To receive the verification codes for the daily video series, please subscribe to our YouTube channel. We post one video series per day, and after subscribing, you will receive the verification code for that day&apos;s video, allowing you to watch the full episode.
      </p>
      <p className="mb-4 text-justify">
        Click <Link href="https://www.youtube.com/@romanticlovekdrama" target='_blank' className="text-teal-500">here</Link> to visit our YouTube channel and subscribe.
      </p>
    </div>
  );
}

export default VideoExplanation;
