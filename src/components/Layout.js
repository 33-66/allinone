import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      {/* Navbar at the top */}
      <Navbar />

      <div className="flex flex-grow">
        {/* Sidebar on the left */}
        <Sidebar />

        {/* Main content */}
        <div className="flex-grow p-6 bg-gray-100">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
