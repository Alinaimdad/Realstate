import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.svg';
import menu_icon from '../assets/menu_icon.svg';
import cross_icon from '../assets/cross_icon.svg';

const Navbartemp = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">

        {/* Logo */}
        <img src={logo} alt="Logo" className="w-26 h-auto" />

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-7 text-black">
          <a href="#Header" className="cursor-pointer text-white font-bold">Home</a>
          <a href="#About" className="cursor-pointer text-white font-bold">About</a>
          <a href="#Projects" className="cursor-pointer text-white font-bold">Projects</a>
          <a href="#Testimonials" className="cursor-pointer text-white font-bold">Testimonials</a>
        </ul>

        {/* Sign Up Button (Desktop Only) */}
        <button className="hidden md:block bg-white px-8 py-2 rounded-full text-black border border-gray-300 hover:bg-gray-100">
          Sign Up
        </button>

        {/* Mobile Menu Icon */}
        <img
          src={menu_icon}
          alt="menu-icon"
          className="md:hidden w-7 cursor-pointer"
          onClick={() => setIsMenuOpen(true)}
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed right-0 top-0 bottom-0 w-full bg-white transition-all duration-300 ${
          isMenuOpen ? 'h-screen' : 'h-0 overflow-hidden'
        }`}
      >
        <div className="flex justify-end p-6">
          <img
            src={cross_icon}
            className="w-6 cursor-pointer"
            alt="cross_icon"
            onClick={() => setIsMenuOpen(false)}
          />
        </div>

        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
          <a
            onClick={() => setIsMenuOpen(false)}
            href="#Header"
            className="px-4 py-2 inline-block rounded-full"
          >
            Home
          </a>
          <a
            onClick={() => setIsMenuOpen(false)}
            href="#About"
            className="px-4 py-2 inline-block rounded-full"
          >
            About
          </a>
          <a
            onClick={() => setIsMenuOpen(false)}
            href="#Projects"
            className="px-4 py-2 inline-block rounded-full"
          >
            Projects
          </a>
          <a
            onClick={() => setIsMenuOpen(false)}
            href="#Testimonials"
            className="px-4 py-2 inline-block rounded-full"
          >
            Testimonials
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbartemp;
