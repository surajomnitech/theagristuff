'use client';
import MobileNav from '../../components/client/MobileNav';
import MainNav from '../../components/server/MainNav';
import '../styles/navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <MobileNav />
          <MainNav />
        </div>
      </div>
    </nav>
  );
}