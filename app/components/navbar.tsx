'use client';
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="text-gray-300 hover:text-white px-3 py-2">
              Home
            </Link>
            <Link href="/products" className="text-gray-300 hover:text-white px-3 py-2">
              Products
            </Link>
            <Link href="/services" className="text-gray-300 hover:text-white px-3 py-2">
              Services
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white px-3 py-2">
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block text-gray-300 hover:text-white px-3 py-2">
                Home
              </Link>
              <Link href="/products" className="block text-gray-300 hover:text-white px-3 py-2">
                Products
              </Link>
              <Link href="/services" className="block text-gray-300 hover:text-white px-3 py-2">
                Services
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:text-white px-3 py-2">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;