'use client';

import Image from 'next/image';
import { useRef, useEffect } from 'react';

export function VideoPlayer() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Video autoplay failed:', error);
      });
    }
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative w-[60%] h-[60%]">
        {/* Color circle overlay */}
        <div className="absolute sm:top-[19px] sm:right-[64px]   md:top-[38px] md:right-[39px]  lg:top-[17px] lg:right-[29px]    top-[5px] right-[18px]  w-10 h-10 z-10">
          <Image
            src="/color_circle.png"
            alt="Decorative circle"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Video */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full rounded-[20rem] object-cover"
        >
          <source src="/banner_video_wbs.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
