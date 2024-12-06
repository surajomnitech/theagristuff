import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="bg-gradient-to-b from-black via-black to-[#050B03] shadow-md text-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 mb-4 md:mb-0">
            <Image
              src="/logo.jpeg"
              alt="The Agristuff Logo"
              width={80}
              height={80}
              className="rounded-lg"
            />
            <span className="text-2xl font-bold text-gray-200">The Agristuff</span>
          </Link>
          
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <a 
              href="tel:+94755186186" 
              className="flex items-center space-x-2 text-gray-200 hover:text-lime-400 transition-colors group"
            >
              <span className="bg-black/50 p-2 rounded-full group-hover:bg-black/70 transition-colors">
                <FontAwesomeIcon 
                  icon={faPhone} 
                  className="h-5 w-5 group-hover:text-lime-400 transition-colors" 
                />
              </span>
              <span className="font-medium">+94 755 186 186</span>
            </a>
            
            <a 
              href="mailto:sales@theagristuff.lk" 
              className="flex items-center space-x-2 text-gray-200 hover:text-lime-400 transition-colors group"
            >
              <span className="bg-black/50 p-2 rounded-full group-hover:bg-black/70 transition-colors">
                <FontAwesomeIcon 
                  icon={faEnvelope} 
                  className="h-5 w-5 group-hover:text-lime-400 transition-colors" 
                />
              </span>
              <span className="font-medium">sales@theagristuff.lk</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;