"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export function NavLink({ href, children, className, onClick, ...props }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        'relative py-2 font-medium transition-colors',
        'hover:text-[#C0F43C] group',
        isActive ? 'text-[#C0F43C]' : 'text-white',
        className
      )}
      {...props}
    >
      {children}
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C0F43C] scale-x-0 transition-transform group-hover:scale-x-100" />
    </Link>
  );
}