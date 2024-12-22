'use client';

import Image from 'next/image';

export function VideoBackground() {
  return (
    <div className="absolute inset-0 top[-43%] left[-43%]  flex items-center justify-center">
      <div className="relative w-full h-full">
        <Image
          src="/big_dot_image.png"
          alt="Circle background"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}
