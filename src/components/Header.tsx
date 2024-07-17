// components/Header.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Logo } from "../../assets";

const Header = () => {
  return (
    <div className="w-full h-20 sticky top-0 bg-slate-500 z-50">
      <div className="container mx-auto sm:px-8 px-2 h-full">
        <div className="flex justify-between items-center h-full">
          <Image src={Logo} alt="Logo" width={200} height={80} className="rounded-xl" />
          <ul className="hidden md:flex gap-x-6 text-black">
            <li>
              <Link href="#" className="text-rose-900 hover:scale-105 transition-transform ease-in duration-300 font-semibold text-[18px]">About Us</Link>
            </li>
            <li>
              <Link href="#" className="text-rose-900 hover:scale-105 transition-transform ease-in duration-300 font-semibold text-[18px]">Kdrama</Link>
            </li>
            <li>
              <Link href="#" className="text-rose-900 hover:scale-105 transition-transform ease-in duration-300 font-semibold text-[18px]">Contacts</Link>
            </li>
          </ul>
          <button className="bg-red-300 px-5 py-2 hover:bg-red-500 rounded-lg font-mono text-white">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
