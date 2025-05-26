import React, { useState } from "react";
import { Leaf, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-green-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-green-600" />
            <span className="text-2xl font-bold text-green-800">GreenThumb Gardens</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-green-600 transition-colors">Services</a>
            <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors">About</a>
            <a href="#testimonials" className="text-gray-700 hover:text-green-600 transition-colors">Reviews</a>
            <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors">Contact</a>
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition-colors">Get Quote</button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-green-600" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-3">
            <a href="#services" className="block text-gray-700 hover:text-green-600">Services</a>
            <a href="#about" className="block text-gray-700 hover:text-green-600">About</a>
            <a href="#testimonials" className="block text-gray-700 hover:text-green-600">Reviews</a>
            <a href="#contact" className="block text-gray-700 hover:text-green-600">Contact</a>
            <button className="bg-green-600 hover:bg-green-700 text-white w-full py-2 rounded">Get Quote</button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
