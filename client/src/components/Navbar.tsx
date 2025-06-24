import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showUseCases, setShowUseCases] = useState(false);
  const [showResources, setShowResources] = useState(false);

  return (
    <header className="flex justify-between items-center px-8 py-4 shadow-md bg-white relative">
      <div className="text-xl font-bold text-blue-900">
        <Link to="/">Journey</Link>
      </div>

      <nav className="flex items-center space-x-6 text-sm font-medium text-gray-700">
        <Link to="/product" className="hover:text-blue-700">Product</Link>

        {/* Use Cases Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setShowUseCases(true)}
          onMouseLeave={() => setShowUseCases(false)} >
          <button className="hover:text-blue-900">Use Cases ▾</button>
          {showUseCases && (
            <div className="absolute top-full mt-2 bg-white shadow-md rounded-md w-40 z-10">
              <Link to="/usecases/marketing" className="block px-4 py-2 hover:bg-gray-100">Marketing</Link>
              <Link to="/usecases/sales" className="block px-4 py-2 hover:bg-gray-100">Sales</Link>
              <Link to="/usecases/education" className="block px-4 py-2 hover:bg-gray-100">Education</Link>
            </div>
          )}
        </div>

        <Link to="/pricing" className="hover:text-blue-700">Pricing</Link>

        {/* Resources Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setShowResources(true)}
          onMouseLeave={() => setShowResources(false)}>
          <button className="hover:text-blue-900">Resources ▾</button>
          {showResources && (
            <div className="absolute top-full mt-2 bg-white shadow-md rounded-md w-40 z-10">
              <Link to="/resources/blog" className="block px-4 py-2 hover:bg-gray-100">Blog</Link>
              <Link to="/resources/walloflove" className="block px-4 py-2 hover:bg-gray-100">walloflove</Link>
              <Link to="/resources/help" className="block px-4 py-2 hover:bg-gray-100">Help Center</Link>
            </div>
          )}
        </div>

        <Link to="/about" className="hover:text-blue-900">About</Link>

        <Link to="/login">
          <button className="bg-gray-100 px-4 py-1 rounded">Log in</button>
        </Link>
        <Link to="/signup">
          <button className="bg-blue-900 text-white px-4 py-1 rounded">Sign up</button>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;