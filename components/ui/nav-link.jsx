"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function NavLink({ href, children, onClick }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`py-2 px-4 font-medium hover:font-semibold text-white hover:text-[#00A5A3] transition-colors ${
        isActive ? 'font-semibold text-[#00A5A3]' : 'font-medium'
      }`}
    >
      {children}
    </Link>
  );
}