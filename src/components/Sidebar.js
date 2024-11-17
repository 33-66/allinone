import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaChartLine,
  FaBox,
  FaTags,
  FaUsers,
  FaChartBar,
  FaEnvelope,
  FaCog,
  FaQuestionCircle,
  FaUser,
  FaAngleDoubleLeft,
  FaAngleDoubleRight
} from 'react-icons/fa';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navItems = [
    { name: 'Dashboard', path: '/', icon: <FaChartLine /> },
    { name: 'Orders', path: '/orders', icon: <FaBox /> },
    { name: 'Products', path: '/products', icon: <FaTags /> },
    { name: 'Categories', path: '/categories', icon: <FaChartBar /> },
    { name: 'Customers', path: '/customers', icon: <FaUsers /> },
    { name: 'Reports', path: '/reports', icon: <FaChartBar /> },
    { name: 'Coupons', path: '/coupons', icon: <FaTags /> },
    { name: 'Inbox', path: '/inbox', icon: <FaEnvelope /> },
  ];

  const otherItems = [
    { name: 'Knowledge Base', icon: <FaQuestionCircle /> },
    { name: 'Personal Settings', icon: <FaUser /> }
  ];

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  return (
    <div className={`bg-blue-900 text-white h-full transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'} flex flex-col`}>
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="flex items-center justify-end p-4 focus:outline-none text-xl hover:bg-blue-800 transition duration-300"
      >
        {isCollapsed ? <FaAngleDoubleRight /> : <FaAngleDoubleLeft />}
      </button>

      {/* Navigation Items */}
      <nav className="space-y-2">
        {navItems.map((item) => (
          <NavLink
            to={item.path}
            key={item.name}
            className={`flex items-center space-x-3 px-4 py-2 rounded hover:bg-blue-800 transition duration-300 ${isCollapsed ? 'justify-center' : ''}`}
            activeClassName="bg-blue-800"
          >
            {item.icon}
            {!isCollapsed && <span>{item.name}</span>}
          </NavLink>
        ))}
      </nav>

      {/* Other Items */}
      <div className="mt-auto space-y-2">
        {otherItems.map((item, index) => (
          <div
            key={index}
            className={`flex items-center space-x-3 px-4 py-2 rounded hover:bg-blue-800 transition duration-300 ${isCollapsed ? 'justify-center' : ''}`}
          >
            {item.icon}
            {!isCollapsed && <span>{item.name}</span>}
          </div>
        ))}

        <NavLink
          to="/settings"
          className={`flex items-center space-x-3 px-4 py-2 rounded hover:bg-blue-800 transition duration-300 mt-4 ${isCollapsed ? 'justify-center' : ''}`}
        >
          <FaCog />
          {!isCollapsed && <span>Settings</span>}
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
