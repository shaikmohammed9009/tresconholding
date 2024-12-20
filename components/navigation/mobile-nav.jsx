"use client";

import { useEffect, useState } from 'react';
import { NavLink } from '@/components/ui/nav-link';
import { ChevronDown, X } from 'lucide-react';
import { navItems } from './nav-items';

export function MobileNav({ isOpen, onClose }) {
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      
      const handleScroll = () => {
        onClose();
      };
      
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
        document.body.style.overflow = '';
      };
    }
  }, [isOpen, onClose]);

  return (
    <div
      className={`fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="absolute inset-0 bg-[#003B3D]">
        <button
          onClick={onClose}
          className="absolute right-6 top-6 text-white hover:text-[#C0F43C] transition-colors"
          aria-label="Close menu"
        >
          <X size={32} />
        </button>
        <nav
          className="h-full flex flex-col items-center justify-center"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col items-center space-y-8">
            {navItems.map((item) => 
              item.isDropdown ? (
                <div key={item.href} className="flex flex-col items-center">
                  <button
                    onClick={() => setOpenDropdown(openDropdown === item.href ? null : item.href)}
                    className="flex items-center space-x-2 text-2xl text-white hover:text-[#C0F43C] transition-colors"
                  >
                    <span>{item.label}</span>
                    <ChevronDown 
                      className={`w-5 h-5 transition-transform duration-200 ${
                        openDropdown === item.href ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openDropdown === item.href && (
                    <div className="mt-4 text-center">
                      <span className="text-gray-400">
                        Coming soon...
                      </span>
                    </div>
                  )}
                </div>
              ) : (
                <NavLink 
                  key={item.href} 
                  href={item.href} 
                  onClick={onClose}
                  className="text-2xl"
                >
                  {item.label}
                </NavLink>
              )
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}