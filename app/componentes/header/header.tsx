"use client";

import { useRef } from 'react';

export default function Header({ aboutRef, tokenomicsRef, buyLionsRef }) {
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gradient-to-br from-amber-200 to-amber-500 min-w-screen top-0 h-24 flex items-center justify-between text-2xl px-10">
      <span className="flex items-center space-x-20 font-black ml-96">
        <h1 onClick={() => scrollToSection(aboutRef)} className="cursor-pointer">About us</h1>
        <h1 onClick={() => scrollToSection(tokenomicsRef)} className="cursor-pointer">Tokenomics</h1>
        <h1 onClick={() => scrollToSection(buyLionsRef)} className="cursor-pointer">Buy Lions</h1>
      </span>

      <span className="flex justify-end">
        <button className="rounded-2xl bg-red-600 mr-4 h-12 w-56 font-extrabold text-white">
          <h1>Connect wallet</h1>
        </button>
      </span>
    </div>
  );
}
