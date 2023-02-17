import React from "react";
import Link from "next/link";
import Image from "next/image";
import ProfilePicture from "../public/george-profile-photo.png";

const Header = () => {
  return (
    <header className="flex justify-between items-center space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image className="rounded-full" src={ProfilePicture} width={50} height={50} alt="logo" />
        </Link>
        <h1>Đorđe</h1>
      </div>
      <div>
        <Link
          href="/"
          className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#F7AB0A] flex items-center rounded-full text-center">
          Sign up to the University of Code
        </Link>
      </div>
    </header>
  );
};

export default Header;
