'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems } from '../shared/NavItems';

export default function MainNav() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  return (
    <div className="desktop-menu">
      {navItems.map((item) => (
        <Link
          key={item.path}
          href={item.path}
          className={`nav-item ${isActive(item.path) ? 'active' : ''}`}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}