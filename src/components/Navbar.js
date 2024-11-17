import React, { useState } from 'react';
import { FaBell, FaCommentAlt } from 'react-icons/fa';
import  "./moak.css"
const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex justify-between items-center px-6 py-3 bg-gradient-to-r from-[#1F2937] to-[#3B4252] text-white shadow-md">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <img src="/path-to-your-logo-icon.png" alt="fastcart logo" className="w-8 h-8" /> {/* Replace with actual logo path */}
        <h2 className="text-xl font-semibold tracking-wider">fastcart</h2>
      </div>

      {/* Central Search Bar */}
      <div className="flex-grow max-w-lg mx-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
        />
      </div>

      {/* Right Section: Icons and Profile Dropdown */}
      <div className="flex items-center space-x-5">
        {/* Comment Icon */}
        <button className="relative p-2 hover:bg-gray-700 rounded-full transition duration-200 ease-in-out transform hover:scale-105">
          <FaCommentAlt className="text-lg" />
        </button>

        {/* Notification Icon */}
        <button className="relative p-2 hover:bg-gray-700 rounded-full transition duration-200 ease-in-out transform hover:scale-105">
          <FaBell className="text-lg" />
          <span className="absolute top-0 right-0 bg-blue-500 text-xs rounded-full w-5 h-5 flex items-center justify-center transform translate-x-1/2 -translate-y-1/2">5</span>
        </button>

        {/* Profile Section with Dropdown */}
        <div className="relative">
          <button onClick={toggleDropdown} className="flex items-center space-x-2 focus:outline-none hover:opacity-80 transition-opacity duration-300">
            {/* Profile Picture */}
            <div className="bg-green-500 rounded-full w-9 h-9 flex items-center justify-center text-white font-bold">
              R
            </div>
            <span className="text-sm font-medium">Randhir Kumar</span>
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-3 w-48 bg-white rounded-lg shadow-lg overflow-hidden z-10 animate-fade-in">
              <button
                className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-200"
                onClick={() => {
                  // Handle Profile click
                }}
              >
                Profile
              </button>
              <button
                className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-200"
                onClick={() => {
                  // Handle Settings click
                }}
              >
                Settings
              </button>
              <button
                className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-200"
                onClick={() => {
                  // Handle Logout click
                }}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
