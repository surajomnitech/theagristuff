import Link from 'next/link';
import Image from 'next/image';
import '../styles/header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link href="/" className="logo-container">
          <Image
            src="/logo.jpeg"
            alt="The Agristuff Logo"
            width={100}
            height={100}
            className="logo-image"
          />
          <span className="logo-text">The Agristuff</span>
        </Link>
        <div className="contact-info">
          <a href="tel:+1234567890" className="contact-item">
            <FontAwesomeIcon icon={faPhone} className="contact-icon" />
            <span>+94 755 186 186</span>
          </a>
          <a href="mailto:info@theagristuff.com" className="contact-item">
            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
            <span>info@theagristuff.lk</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;