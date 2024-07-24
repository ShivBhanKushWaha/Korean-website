'use client'
import React, { useState, useEffect } from "react";
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

  // Effect to handle scroll and close the menu
  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMenuOpen]);

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
                HowItWork
              </Link>
            </li>
            <li>
              <Link href="/Who-Am-I" className="text-white hover:scale-105 transition-transform ease-in duration-300 font-semibold text-[18px] cursor-pointer">
                WhoAmI
              </Link>
            </li>
            <li>
              <Link href="/" className="text-white hover:scale-105 transition-transform ease-in duration-300 font-semibold text-[18px] cursor-pointer">
                AllDrama
              </Link>
            </li>
            <li>
              <Link href="/How-To-Get-All-Code" className="text-white hover:scale-105 transition-transform ease-in duration-300 font-semibold text-[18px] cursor-pointer">
                GetAllCode
              </Link>
            </li>
          </ul>

          <button 
            onClick={handleContactUs} 
            className="hidden md:block bg-teal-400 px-5 py-1 hover:bg-teal-500 rounded-lg text-white font-sans transition-all duration-300 text-[20px]"
          >
            ContactUs
          </button>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
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
                HowItWork
              </Link>
            </li>
            <li onClick={() => setIsMenuOpen(false)}>
              <Link href="/Who-Am-I" className="text-white font-semibold text-[18px] cursor-pointer" >
                WhoAmI
              </Link>
            </li>
            <li onClick={() => setIsMenuOpen(false)}>
              <Link href="/" className="text-white font-semibold text-[18px] cursor-pointer">
                AllDrama
              </Link>
            </li>
            <li onClick={() => setIsMenuOpen(false)}>
              <Link href="/How-To-Get-All-Code" className="text-white hover:scale-105 transition-transform ease-in duration-300 font-semibold text-[18px] cursor-pointer">
                GetAllCode
              </Link>
            </li>
            <li onClick={() => setIsMenuOpen(false)}>
              <button 
                className="bg-red-300 px-5 py-1 hover:bg-red-500 rounded-lg font-mono text-white" 
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
