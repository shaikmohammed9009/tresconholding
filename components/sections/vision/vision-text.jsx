"use client";

import { motion } from 'framer-motion';
import { VisionWord } from './vision-word';
import { VisionImage } from './vision-image';

export function VisionText() {
  return (
    <div className="text-justify mx-auto max-w-full md:max-w-[850px]">
      <p className="font-['Anek_Devanagari'] text-[45px] leading-[88.2px] text-[#1E2124] flex flex-wrap items-center">
        <span>We bring together &nbsp; </span> 
        <span id="contain2" className="inline-flex items-center">
          <Image
            src="/vision_image1.png"
            alt="Vision illustration 1"
            width={70}
            height={80}
            className="mr-4"
          />
          <VisionWord id="vision3" className="font-semibold">visionaries</VisionWord>
        </span>,{' '}
        <span id="contain3" className="inline-flex items-center">
          <Image
            src="/vision_image2.png"
            alt="Vision illustration 2"
            width={70}
            height={80}
            className="mx-4"
          />
          <VisionWord id="vision4" className="font-semibold">innovators</VisionWord>
        </span>, &{' '} 
        <span id="contain4" className="inline-flex items-center">
          <Image
            src="/vision_image3.png"
            alt="Vision illustration 3"
            width={70}
            height={80}
            className="mx-4"
          />
          <VisionWord id="vision4" className="font-semibold">game-changers,</VisionWord>
        </span>and fueling ventures that shape the future across industries and geographies.
      </p>
    </div>
  );
}