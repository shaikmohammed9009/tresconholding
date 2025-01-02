"use client";

import Image from 'next/image';

export function DecorativeElements() {
  return (
    <div className="absolute inset-0 z-20 pointer-events-none">
      {/* Bottom left decorative elements */}
      <div className="absolute bottom-0 left-0">
        {/* Ellipse background */}
        <div className="relative md:w-[821.753px]   sm:h-[821.753px] w-[450.753px] h-[350.753px]">
          <Image
            src="/group_dot_image.png"
            alt="Decorative ellipse"
            fill
            className="object-contain shrink"
            priority
          />
        </div>
        
        {/* Dot pattern overlay */}
        <div className="absolute bottom-[0] left-[-3%]">
          <Image
            src="/Ellipse_4.png"
            alt="Decorative dots"
           width={100}
            height={100}
            className="sm:w-[684.753px] sm:h-[564.753px] w-[370.753px] h-[260px]"
          />
        </div>
      </div>
    </div>
  );
}