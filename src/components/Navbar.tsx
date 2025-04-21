// src/components/Navbar.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sun } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
        <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
            <img src="https://i.postimg.cc/PrcKHHvb/logo2.jpg" alt="Blaze Group" className="h-8" />
            <img src="https://i.postimg.cc/j5c26sYG/logo1.jpg" alt="Blaze Group" className="h-8" />  
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-yellow-500 transition-colors">
              Home
            </Link>
            <Link to="/about-us" className="text-gray-700 hover:text-yellow-500 transition-colors">
              About Us
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-yellow-500 transition-colors">
              Services
            </Link>
            <Link to="/projects" className="text-gray-700 hover:text-yellow-500 transition-colors">
              Projects
            </Link>
            <Link to="/contactUs" className="text-gray-700 hover:text-yellow-500 transition-colors">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-yellow-500 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <Link
              to="/"
              className="block px-3 py-2 text-gray-700 hover:text-yellow-500 transition-colors"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about-us"
              className="block px-3 py-2 text-gray-700 hover:text-yellow-500 transition-colors"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link
              to="/services"
              className="block px-3 py-2 text-gray-700 hover:text-yellow-500 transition-colors"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              to="/projects"
              className="block px-3 py-2 text-gray-700 hover:text-yellow-500 transition-colors"
              onClick={toggleMenu}
            >
              Projects
            </Link>
           
            <Link
              to="/contactUs"
              className="block px-3 py-2 text-gray-700 hover:text-yellow-500 transition-colors"
              onClick={toggleMenu}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;