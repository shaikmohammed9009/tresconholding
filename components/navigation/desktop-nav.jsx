"use client";

import { useRef, useState } from 'react';
import { NavLink } from '@/components/ui/nav-link';
import { ChevronDown } from 'lucide-react';
import { useClickOutside } from '@/hooks/use-click-outside';
import { navItems } from './nav-items';

export function DesktopNav() {
  const [isVenturesOpen, setIsVenturesOpen] = useState(false);
  const venturesRef = useRef(null);

  useClickOutside(venturesRef, () => setIsVenturesOpen(false));

  return (
    <nav className="hidden md:flex space-x-8" aria-label="Main navigation">
      {navItems.map((item) => 
        item.isDropdown ? (
          <div key={item.href} ref={venturesRef} className="relative">
            <button
              onClick={() => setIsVenturesOpen(!isVenturesOpen)}
              className="flex items-center space-x-1 py-2 group"
            >
              <span className="relative font-medium text-white hover:text-[#C0F43C] transition-colors">
                {item.label}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C0F43C] scale-x-0 transition-transform group-hover:scale-x-100" />
              </span>
              <ChevronDown 
                className={`w-4 h-4 text-white transition-transform duration-200 group-hover:text-[#C0F43C] ${
                  isVenturesOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            {isVenturesOpen && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-[#003B3D] rounded-md shadow-lg border border-gray-700 overflow-hidden">
                <div className="py-2">
                  <span className="block px-4 py-2 text-sm text-gray-400">
                    Coming soon...
                  </span>
                </div>
              </div>
            )}
          </div>
        ) : (
          <NavLink key={item.href} href={item.href}>
            {item.label}
          </NavLink>
        )
      )}
    </nav>
  );
}