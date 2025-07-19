import React from 'react';
import brand_img from '../assets/brand_img.png';
import CountUp from 'react-countup';

const About = () => {
  return (
    <div
      className="flex flex-col justify-center items-center container mx-auto 
        p-14 px-6 md:px-20 lg:px-32 w-full overflow-hidden bg-transparent"
      id="About"
    >
      {/* Heading */}
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        About <span className="underline underline-offset-4 decoration-1 font-light">Our Brand</span>
      </h1>

      {/* Subheading */}
      <p className="text-gray-500 max-w-80 text-center mb-8">
        Passionate About Properties, Dedicated to your vision
      </p>

      {/* Image + Stats Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12 mt-10">
        {/* Image Left */}
        <img
          src={brand_img}
          alt="Brand"
          className="w-[150px] md:w-[180px] transition-transform duration-300 hover:scale-105 shadow-xl rounded-lg"
        />

        {/* Stats Right */}
        <div className="grid grid-cols-2 gap-6 md:gap-10 text-center md:text-left">
          <div>
            <p className="text-4xl font-medium text-gray-800">
              <CountUp end={10} duration={3} />+
            </p>
            <p>Years of Excellence</p>
          </div>
          <div>
            <p className="text-4xl font-medium text-gray-800">
              <CountUp end={12} duration={3} />+
            </p>
            <p>Projects Completed</p>
          </div>
          <div>
            <p className="text-4xl font-medium text-gray-800">
              <CountUp end={20} duration={3} />+
            </p>
            <p>Mn. sq Ft. Delivered</p>
          </div>
          <div>
            <p className="text-4xl font-medium text-gray-800">
              <CountUp end={25} duration={3} />+
            </p>
            <p>Ongoing Projects</p>
          </div>
        </div>
      </div>

      {/* Paragraph at Bottom */}
      <p className="text-gray-500 text-center mt-12 max-w-xl mx-auto">
        We are committed to redefining modern living through innovation, trust, and timeless design — creating spaces that truly feel like home.
      </p>

      {/* Learn More Button */}
      <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300">
        Learn More
      </button>
    </div>
  );
};

export default About;
