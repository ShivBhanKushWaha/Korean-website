import React from "react";
import Link from "next/link";


const Header = () => {
  return (
    <>
      <div className="w-full h-20 bg-rose-200 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <p>Romaticlovekdrama</p>
            <ul className="hidden md:flex gap-x-6 text-white">
              <li>
                <Link href="/about">
                  <p>About Us</p>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <p>Services</p>
                </Link>
              </li>
              <li>
                <Link href="/contacts">
                  <p>Contacts</p>
                </Link>
              </li>
            </ul>
            <button>login</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;