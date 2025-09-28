"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // hamburger + close icons

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white text-black shadow-md">
      <div className="w-full container px-4 md:px-8 mx-auto flex items-center justify-between py-4">
        
        {/* Left: Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/images/site-logo.png"
              alt="Site Logo"
              width={140} // adjust size if needed
              height={40}
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* Middle: Menu (Desktop) */}
        <nav className="hidden lg:flex gap-8 text-lg">
          <Link href="/" className="hover:text-primary">Home</Link>
          <Link href="/about" className="hover:text-primary">About Us</Link>
          <Link href="/gallery" className="hover:text-primary">Gallery</Link>
          <Link href="/contact" className="hover:text-primary">Contact Us</Link>
        </nav>

        {/* Right: Contact Button (Desktop) */}
        <div className="hidden lg:block">
          <Link href="/contact">
            <button className="px-6 py-3 bg-primary text-white text-lg 2xl:text-[20px] font-medium rounded-lg border hover:bg-transparent hover:text-primary hover:border-primary transition">Read More</button>
            </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white text-black ">
          <nav className="flex flex-col gap-4 pb-10 text-lg items-center">
            <Link href="/" className="hover:text-gray-200" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/about" className="hover:text-gray-200" onClick={() => setIsOpen(false)}>About Us</Link>
            <Link href="/gallery" className="hover:text-gray-200" onClick={() => setIsOpen(false)}>Gallery</Link>
            <Link href="/contact" className="hover:text-gray-200" onClick={() => setIsOpen(false)}>Contact Us</Link>
            <Link href="/contact">
            <button class="px-6 py-3 bg-primary text-white text-lg 2xl:text-[20px] font-medium rounded-lg border hover:bg-transparent hover:text-primary hover:border-primary transition">Read More</button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
