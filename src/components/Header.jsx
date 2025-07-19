import React from 'react';

const Header = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center w-full overflow-hidden"
      style={{ backgroundImage: "url('/header_img.png')" }}
      id="Header"
    >
      <div className="text-white text-center px-8">
        <h2 className="text-4xl font-bold mb-6">
          Explore Homes that Fit Your Dream
        </h2>
        <div className="space-x-4">
          <a
            href="#projects"
            className="px-6 py-2 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-200 transition"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-2 border border-white text-white rounded-full font-semibold hover:bg-white hover:text-blue-600 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
