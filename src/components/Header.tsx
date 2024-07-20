'use client'
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { RomanticLogo } from "@assets";
import { FiMenu, FiX } from "react-icons/fi";
import { useRouter } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleContactUs = () => {
    window.open('https://www.instagram.com/black_lover14444/');
  };


  return (
    <div className="w-full h-20 sticky top-0 bg-slate-500 z-50">
      <div className="container mx-auto sm:px-8 px-2 h-full">
        <div className="flex justify-between items-center h-full">
          <Image 
            onClick={() => router.push('/')} 
            src={RomanticLogo} 
            alt="Logo" 
            width={200} 
            height={80} 
            className="rounded-xl cursor-pointer" 
          />

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-x-6 text-black">
            <li>
              <Link href="/How-It-Work" className="text-white hover:scale-105 transition-transform ease-in duration-300 font-semibold text-[18px] cursor-pointer">
                How It Work
              </Link>
            </li>
            <li>
              <Link href="/Who-Am-I" className="text-white hover:scale-105 transition-transform ease-in duration-300 font-semibold text-[18px] cursor-pointer">
                Who Am I
              </Link>
            </li>
            <li>
              <Link href="/" className="text-white hover:scale-105 transition-transform ease-in duration-300 font-semibold text-[18px] cursor-pointer">
                All Drama
              </Link>
            </li>
          </ul>

          <button 
            onClick={handleContactUs} 
            className="hidden md:block bg-teal-400 px-5 py-2 hover:bg-teal-500 rounded-lg text-white font-sans transition-all duration-300 text-[20px]"
          >
            ContactUs
          </button>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-500 z-40 absolute top-20 w-full">
          <ul className="flex flex-col items-center gap-y-4 py-4 text-black">
            <li onClick={() => setIsMenuOpen(false)}>
              <Link href="/How-It-Work" className="text-white font-semibold text-[18px] cursor-pointer" onClick={() => router.push('/How-It-Work')}>
                How It Work
              </Link>
            </li>
            <li onClick={() => setIsMenuOpen(false)}>
              <Link href="/Who-Am-I" className="text-white font-semibold text-[18px] cursor-pointer" >
                Who Am I
              </Link>
            </li>
            <li onClick={() => setIsMenuOpen(false)}>
              <Link href="/" className="text-white font-semibold text-[18px] cursor-pointer" onClick={() => router.push('/')}>
                All Drama
              </Link>
            </li>
            <li onClick={() => setIsMenuOpen(false)}>
              <button 
                className="bg-red-300 px-5 py-2 hover:bg-red-500 rounded-lg font-mono text-white" 
                onClick={handleContactUs}
              >
                ContactUs
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
