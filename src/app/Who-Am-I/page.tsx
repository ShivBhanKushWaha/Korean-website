import Link from 'next/link';
import React from 'react';

const WhoAmI = () => {
    return (
        <div className="max-w-3xl mx-auto p-4 sm:p-6">
            <h1 className="text-3xl font-bold mb-4 text-center">Who Am I?</h1>

            <p className="mb-4 text-justify">
                Hello! I am a passionate and skilled Full Stack Developer with a strong foundation in both front-end and back-end technologies. I also specialize in Android development, bringing versatile mobile solutions to life.
            </p>

            <p className="mb-4 text-justify">
                Currently, I am expanding my horizons by delving into freelance projects. Whether you need a robust website or an intuitive mobile application, I am here to help you turn your vision into reality.
            </p>

            <p className="mb-4 text-justify">
                If you&apos;re looking to create a new website or develop an app, feel free to reach out to me. I am available for freelance work and would love to discuss how I can assist you with your project.
            </p>

            <p className="mb-4 text-justify">
                You can contact me through LinkedIn for any inquiries or project discussions. Let&apos;s connect and create something amazing together!
            </p>

            <div className="text-center">
                <Link
                    href="https://www.linkedin.com/in/shivbhan-kushwaha-183b18226/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                >
                    Connect with me on LinkedIn
                </Link>
            </div>
        </div>
    );
}

export default WhoAmI;
