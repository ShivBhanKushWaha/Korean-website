'use client'
import React, { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { verificationCode } from '@/AllVerificationCode/VerificationCode';

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

const BuySeriesCodesPage = () => {
    const router = useRouter();
    const { id } = useParams();
    const [seriesPayAvailable, setSeriesPayAvailable] = useState<boolean>(false);
    const drama = dramas.find((d) => d.id === Number(id));
    if (!drama) {
        return <div className="min-h-screen bg-gray-100 p-6">Drama not found</div>;
    }

    const handleBuySeries = () => {
        window.open('https://www.instamojo.com/@Romantic_love_kdrama/le359a03347d240338f295bd747943d32/');
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
                <h1 className="text-2xl font-bold mb-4">{drama.dramaName}</h1>
                <p className="mb-4">Total Episodes: {drama.episodes.length}</p>
                <div className="mb-4">
                    <p className="text-xl font-semibold">Price: ₹17</p>
                    <p className="text-red-500 text-sm font-bold">70% OFF</p>
                </div>
                <div className="text-center flex sm:flex-row flex-col sm:gap-y-0 gap-4 justify-center items-center gap-x-4">
                    {seriesPayAvailable ? (
                        <button
                            onClick={() => handleBuySeries()}
                            className="bg-rose-500 hover:bg-rose-600 text-white py-1.5 px-3 rounded"
                            rel="im-checkout"
                            data-text="Pay"
                            data-css-style="color:#ffffff; background:#75c26a; width:300px; border-radius:4px"
                            data-layout="vertical"
                        >
                            Pay Now
                        </button>
                    ) : (
                        <button className="bg-rose-500 text-white py-1.5 px-3 rounded cursor-not-allowed">
                            Not Available
                        </button>
                    )}
                    <button
                        onClick={() => router.push('/How-To-Get-All-Code')}
                        className="bg-teal-500 text-white px-3 py-1.5 rounded hover:bg-teal-600"
                    >
                        Back to Dramas
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BuySeriesCodesPage;
