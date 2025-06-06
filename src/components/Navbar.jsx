"use client";
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 sm:px-6 lg:px-16 xl:px-56 bg-white shadow-sm">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">C</span>
          </div>
          <span className="text-lg sm:text-xl font-semibold text-gray-900">CipherSolutions</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors text-sm lg:text-base">Features</a>
          <a href="#demo" className="text-gray-600 hover:text-gray-900 transition-colors text-sm lg:text-base">Demo</a>
          <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors text-sm lg:text-base">About</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors text-sm lg:text-base">Contact</a>
        </div>
        
        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
          <button className="text-gray-600 hover:text-gray-900 transition-colors text-sm lg:text-base">
            Sign In
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 lg:px-4 lg:py-2 rounded-lg transition-colors text-sm lg:text-base">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-gray-600 hover:text-gray-900"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-16 left-0 right-0 z-40 bg-white shadow-lg md:hidden transition-all duration-300">
          <div className="flex flex-col space-y-1 px-4 py-3">
            <a 
              href="#features" 
              className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#demo" 
              className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Demo
            </a>
            <a 
              href="#about" 
              className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#contact" 
              className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
          <div className="border-t border-gray-100 px-4 py-3 flex flex-col space-y-2">
            <button className="w-full text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded transition-colors text-left">
              Sign In
            </button>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded transition-colors text-center">
              Get Started
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;