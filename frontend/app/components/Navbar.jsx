"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-screen">
      <nav className="w-full">
        
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ): (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            ) }
          </svg>
        </button>

        <div className="hidden md:flex justify-evenly navHoverOne">
          <Link href="/">Home</Link>
          <Link href="/About">About</Link>
          <Link href="/Contact">Contact</Link>
        </div>

        <div className={`${isOpen ? "block" : "hidden" } md:hidden navHoverTwo`}>
          <Link onClick={() => setIsOpen(false)} href="/">Home</Link>
          <Link onClick={() => setIsOpen(false)} href="/About">About</Link>
          <Link onClick={() => setIsOpen(false)} href="/Contact">Contact</Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;
