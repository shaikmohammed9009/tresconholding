"use client";

import Link from 'next/link';
import { ventureItems } from './nav-items';

export function VenturesDropdown() {
  return (
    <div className="absolute top-full right-0 mt-2 w-64 bg-[#003B3D] rounded-md shadow-lg border border-gray-700 overflow-hidden">
      <div className="py-2">
        {ventureItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block px-4 py-3 text-sm text-white hover:bg-[#004f52] transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}