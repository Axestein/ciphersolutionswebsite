import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 lg:px-56 bg-white shadow-sm">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">C</span>
        </div>
        <span className="text-xl font-semibold text-gray-900">CipherSolutions</span>
      </div>
      
      <div className="hidden md:flex items-center space-x-8">
        <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
        <a href="#demo" className="text-gray-600 hover:text-gray-900 transition-colors">Demo</a>
        <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
        <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="text-gray-600 hover:text-gray-900 transition-colors">
          Sign In
        </button>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
