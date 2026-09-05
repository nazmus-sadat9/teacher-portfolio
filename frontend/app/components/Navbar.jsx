"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-screen">
      <nav className="w-full">

        <div className="w-full flex justify-center items-center md:hidden py-[3%]">
            <div className="w-[95%] flex justify-between items-center p-[2%] rounded-xl backdrop-blur bg-[#ffffff49]">
            <h2 className="font-semibold md:hidden text-[1.5rem]">Atik Hasan</h2>
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden cursor-pointer">

              <svg className="w-8 aspect-[1/1]" fill="none" stroke="currentColor" viewBox="0 0 20 20">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ): (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              ) }
              </svg>
            </button>
          </div>
        </div>

        <div className="hidden md:flex cursor-pointer fixed left-0 top-0 w-full justify-evenly navHoverOne border-[#1e593c] border-[0.1em] py-[1%] backdrop-blur">
          <h2 className="text-[2rem] font-bold pl-[2%]">Atik Hasan</h2>

          <div className="w-[50%] flex justify-evenly text-[2rem] items-center">
            <Link className="hoverlink" href="/">Home</Link>
            <Link className="hoverlink" href="/About">About</Link>
            <Link className="hoverlink" href="/Contact">Contact</Link>
          </div>
        </div>

        <div className={`${isOpen ? "block" : "hidden" } md:hidden cursor-pointer py-[3%] flex justify-evenly items-center border-[#1e593c] border-[0.1em] flex-col`}>
          <Link className="link" onClick={() => setIsOpen(false)} href="/">Home</Link>
          <Link className="link" onClick={() => setIsOpen(false)} href="/About">About</Link>
          <Link className="link" onClick={() => setIsOpen(false)} href="/Contact">Contact</Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;
