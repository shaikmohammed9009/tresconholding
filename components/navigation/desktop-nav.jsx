"use client";

import { useRef, useState } from 'react';
import { NavLink } from '@/components/ui/nav-link';
import { VenturesDropdown } from '@/components/navigation/ventures-dropdown';
import { ChevronDown } from 'lucide-react';
import { useClickOutside } from '@/hooks/use-click-outside';
import { navItems } from './nav-items';

export function DesktopNav() {
  const [isVenturesOpen, setIsVenturesOpen] = useState(false);
  const venturesRef = useRef(null);

  useClickOutside(venturesRef, () => {
    if (isVenturesOpen) {
      setIsVenturesOpen(false);
    }
  });

  return (
    <nav className="hidden md:flex space-x-8" aria-label="Main navigation">
      {navItems.map((item) => (
        <NavLink key={item.href} href={item.href}>
          {item.label}
        </NavLink>
      ))}
      <div ref={venturesRef} className="relative">
        <button
          onClick={() => setIsVenturesOpen(!isVenturesOpen)}
          className="flex items-center space-x-1 py-2 px-4 font-medium hover:font-semibold text-white hover:text-[#00A5A3] transition-colors"
        >
          <span>VENTURES</span>
          <ChevronDown 
            className={`w-4 h-4 transition-transform duration-200 ${
              isVenturesOpen ? 'rotate-180' : ''
            }`}
          />
        </button>
        {isVenturesOpen && <VenturesDropdown />}
      </div>
    </nav>
  );
}