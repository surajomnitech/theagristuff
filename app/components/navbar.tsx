'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import '../styles/navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="mobile-menu-button"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <div className="desktop-menu">
          <Link href="/" className={`nav-item ${isActive('/') ? 'active' : ''}`}>Home</Link>
            <Link href="/products" className={`nav-item ${isActive('/products') ? 'active' : ''}`}>Products</Link>
            <Link href="/services" className={`nav-item ${isActive('/services') ? 'active' : ''}`}>Services</Link>
            <Link href="/contact" className={`nav-item ${isActive('/contact') ? 'active' : ''}`}>Contact</Link>
          </div>
        </div>

        {isOpen && (
          <div className="mobile-menu">
            <Link href="/" className={`nav-item ${isActive('/') ? 'active' : ''}`}>Home</Link>
            <Link href="/products" className={`nav-item ${isActive('/products') ? 'active' : ''}`}>Products</Link>
            <Link href="/services" className={`nav-item ${isActive('/services') ? 'active' : ''}`}>Services</Link>
            <Link href="/contact" className={`nav-item ${isActive('/contact') ? 'active' : ''}`}>Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;