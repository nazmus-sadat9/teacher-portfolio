"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-screen">
      <nav className="w-full relative">

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden absolute cursor-pointer right-[3%]">

          <svg className="w-8 aspect-[1/1]" fill="none" stroke="currentColor" viewBox="0 0 20 20">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ): (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            ) }
          </svg>
        </button>

        <div className="hidden md:flex cursor-pointer justify-evenly navHoverOne border-[#1e593c] border-[0.1em] py-[2%]">
          <h2 className="text-[3rem]">Atik Hasan</h2>

          <div className="w-[70vw] flex justify-evenly text-[2rem] items-center">
            <Link href="/">Home</Link>
            <Link href="/About">About</Link>
            <Link href="/Contact">Contact</Link>
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
