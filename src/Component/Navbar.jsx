/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Image from "./Imagekit";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [open, setopen] = useState(false);
  return (
    <div className="w-full h-16 items-center flex justify-between md:h-20">
      {/* logo */}
      <div className="flex  gap-4 text-2xl font-bold  ">
        <Image src="logo.png" alt="logo " w={32} h={32} />
        <span>lamalog</span>
      </div>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        <div
          className="cursor-pointer text-2xl"
          onClick={() => setopen((prev) => !prev)}
        >
          {open ? "X" : "#"}
        </div>
      </div>
      {/* MOBILE LINK LIST */}

      <div
        className={`w-full h-screen flex flex-col bg-blue-900 gap-8 text-lg font-medium  justify-center items-center  top-16 absolute transition-all ease-in-out ${
          open ? "-right-0" : "-right-[100%] hidden "
        }`}
      >
        <Link to="/">Home</Link>

        <Link to="/">Trending</Link>
        <Link to="/"> Most Popular</Link>
        <Link to="/">About</Link>
        <Link to="/">
          <button className="rounded-3xl py-2 px-4  bg-blue-800 text-white">
            Login ✌️
          </button>
        </Link>
      </div>
      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-8 font-medium xl:gap-12  ">
        <Link to="/">Home</Link>

        <Link to="/">Trending</Link>
        <Link to="/"> Most Popular</Link>
        <Link to="/">About</Link>
        <SignedOut>
          <Link to="/login">
            <button className="rounded-3xl py-2 px-4  bg-blue-800 text-white">
              Login ✌️
            </button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}
