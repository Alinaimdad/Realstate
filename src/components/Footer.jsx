
// import React from 'react';
// import logo_dark from '../assets/logo_dark.svg';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 pt-10 px-4 md:px-20 lg:px-32 w-full overflow-hidden" id="Footer">
//       <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-10">

//         {/* Left Section: Logo & Description */}
//         <div className="md:w-1/3 flex flex-col items-start">
//           <img src={logo_dark} alt="Company Logo" className="w-28 mb-2" />
//           <p className="text-white text-sm max-w-[220px]">
//             Lorem is a simple dummy text of the printing and typesetting industry.
//           </p>
//         </div>

//         {/* Middle Section: Navigation Links */}
//         <div className="md:w-1/3">
//           <h3 className="text-white text-lg font-bold mb-4">Company</h3>
//           <ul className="flex flex-col gap-2 text-gray-400">
//             <li><a href="#Header" className="hover:text-white">Home</a></li>
//             <li><a href="#AboutUs" className="hover:text-white">About Us</a></li>
//             <li><a href="#Contact" className="hover:text-white">Contact Us</a></li>
//             <li><a href="#Privacy" className="hover:text-white">Privacy</a></li>
//           </ul>
//         </div>

//         {/* Right Section: Newsletter Subscription */}
//         <div className="md:w-1/3">
//           <h3 className="text-white text-lg font-bold mb-4">Subscribe to our newsletter</h3>
//           <p className="text-gray-400 mb-4 max-w-[280px]">
//             The latest news, articles, and resources — sent to your inbox weekly.
//           </p>

//           {/* Input + Button */}
//           <div className="flex flex-col md:flex-row items-center gap-4">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="h-12 px-4 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto"
//             />
//             <button className="h-12 px-6 text-base rounded bg-blue-500 text-white hover:text-amber-50 hover:scale-105 transition-transform">
//               Subscribe
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Copyright */}
//       <div className="text-white py-4 font-semibold text-center mt-10 border-t border-gray-700">
//         © 2025 Estate. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from 'react';
import logo_dark from '../assets/logo_dark.svg';

const Footer = () => {
  return (
    <footer className="bg-gray-900 pt-10 px-4 md:px-20 lg:px-32 w-full overflow-hidden" id="Footer">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        
        {/* Left Section: Logo & Description */}
        <div className="md:w-1/3 flex flex-col items-start">
          <img src={logo_dark} alt="Company Logo" className="w-28 mb-2" />
          <p className="text-white text-sm max-w-[220px]">
            Lorem is a simple dummy text of the printing and typesetting industry.
          </p>
        </div>

        {/* Middle Section: Navigation Links */}
        <div className="md:w-1/3">
          <h3 className="text-white text-lg font-bold mb-4">Company</h3>
          <ul className="flex flex-col gap-2 text-gray-400">
            <li><a href="#Header" className="hover:text-white">Home</a></li>
            <li><a href="#About" className="hover:text-white">About Us</a></li>
            <li><a href="#Contact" className="hover:text-white">Contact Us</a></li>
            <li><a href="#Privacy" className="hover:text-white">Privacy</a></li>
          </ul>
        </div>

        {/* Right Section: Newsletter Subscription */}
        <div className="md:w-1/3">
          <h3 className="text-white text-lg font-bold mb-4">Subscribe to our newsletter</h3>
          <p className="text-gray-400 mb-4 max-w-[280px]">
            The latest news, articles, and resources — sent to your inbox weekly.
          </p>

          <div className="flex flex-col md:flex-row items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="h-12 px-4 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto"
            />
            <button className="h-12 px-6 text-base rounded bg-blue-500 text-white hover:text-amber-50 hover:scale-105 transition-transform">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-white py-4 font-semibold text-center mt-10 border-t border-gray-700">
        © 2025 Estate. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

