"use client";

import Image from 'next/image';
import { VisionWord } from './vision-word';

export function VisionText() {
  return (
    <div className="text-justify">
      <p className="font-['Anek_Devanagari'] text-[49px] leading-[88.2px] text-[#1E2124] flex flex-wrap items-center">
        <span>We bring together{' '}</span>
        <span id="contain2" className="inline-flex items-center">
          <Image
            src="/vision_image1.png"
            alt="Vision illustration 1"
            width={80}
            height={80}
            className="mr-4"
          />
          <VisionWord id="vision3" className="font-semibold">visionaries</VisionWord>
        </span>,{' '}
        <span id="contain3" className="inline-flex items-center">
          <VisionWord id="vision4" className="font-semibold">innovators</VisionWord>
          <Image
            src="/vision_image2.png"
            alt="Vision illustration 2"
            width={80}
            height={80}
            className="mx-4"
          />
        </span>, and{' '}
        <span id="contain4" className="inline-flex items-center">
          <VisionWord id="vision4" className="font-semibold">game-changers</VisionWord>
          <Image
            src="/vision_image3.png"
            alt="Vision illustration 3"
            width={80}
            height={80}
            className="ml-4"
          />
        </span>,{' '}
        <span className="font-semibold">fueling ventures</span> that shape the{' '}
        future across industries and geographies.
      </p>
    </div>
  );
}