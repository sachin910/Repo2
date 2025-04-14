"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navbar() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#1A1A1D]/80 border-b border-[#3B1C32]/30">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link href="/" className="flex items-center space-x-2">
          <img src="logo.png" alt="logo" className="h-7 w-7 rounded-full" />
          <span className="font-bold text-xl">AIPlaneTech</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#about" className="text-sm hover:text-[#A64D79] transition-colors">About</Link>

          {/* <Link href="/workshops" className="text-sm hover:text-[#A64D79] transition-colors">Workshop Page</Link>  */}

          <Link href="#workshop" className="text-sm hover:text-[#A64D79] transition-colors">Workshop</Link>
          <Link href="#solutions" className="text-sm hover:text-[#A64D79] transition-colors">Solutions</Link>
          <Link href="#testimonials" className="text-sm hover:text-[#A64D79] transition-colors">Testimonials</Link>
        </nav>

        <div className="flex items-center space-x-3">
          <div className="hidden md:flex items-center bg-[#2C2C2E] px-3 py-1 rounded-lg w-40 h-9">
            {isMounted && (
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent border-none focus:ring-0 text-white placeholder-gray-400 outline-none w-full"
              />
            )}
          </div>

          <Button className="bg-[#6A1E55] hover:bg-[#A64D79] transition-all duration-300 shadow-lg hover:shadow-[#A64D79]/20 hover:shadow-xl">
            Explore Solutions
          </Button>
        </div>
      </div>
    </header>
  );
}
