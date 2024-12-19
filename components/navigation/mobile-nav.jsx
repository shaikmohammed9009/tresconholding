"use client";

import { useEffect } from 'react';
import { NavLink } from '@/components/ui/nav-link';
import { X } from 'lucide-react';
import { navItems, ventureItems } from './nav-items';

export function MobileNav({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="absolute inset-0 bg-[#003B3D]">
        <button
          onClick={onClose}
          className="absolute right-6 top-6 text-white hover:text-[#00A5A3] transition-colors"
          aria-label="Close menu"
        >
          <X size={32} />
        </button>
        <nav
          className="h-full flex flex-col items-center justify-center"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col items-center space-y-8">
            {navItems.map((item) => (
              <NavLink 
                key={item.href} 
                href={item.href} 
                onClick={onClose}
                className="text-2xl hover:text-[#00A5A3] transition-colors"
              >
                {item.label}
              </NavLink>
            ))}
            {ventureItems.map((item) => (
              <NavLink 
                key={item.href} 
                href={item.href} 
                onClick={onClose}
                className="text-2xl hover:text-[#00A5A3] transition-colors"
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}