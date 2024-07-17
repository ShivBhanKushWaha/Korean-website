import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Logo } from "../../assets";


const Header = () => {
  return (
    <>
      <div className="w-full h-20  sticky top-0 bg-slate-500">
        <div className="container mx-auto px-10 h-full">
          <div className="flex justify-between items-center h-full">
            <Image src={Logo} alt="Logo" width={200} height={80} className="rounded-xl"/>
            <ul className="hidden md:flex gap-x-6 text-black">
                <Link href="" className="text-rose-900 hover:scale-105 transition-transform ease-in duration-300 font-semibold text-[18px]">
                  <p>About Us</p>
                </Link>
                <Link href="" className="text-rose-900 hover:scale-105 transition-transform ease-in duration-300 font-semibold text-[18px]">
                  <p>Kdrama</p>
                </Link>
                <Link href="" className="text-rose-900 hover:scale-105 transition-transform ease-in duration-300 font-semibold text-[18px]">
                  <p>Contacts</p>
                </Link>
            </ul>
            <button className="bg-red-300 px-4 py-2 hover:bg-red-500 rounded-lg font-mono text-white">login</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;