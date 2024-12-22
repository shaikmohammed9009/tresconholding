"use client";

import { motion } from 'framer-motion';
import { VisionWord } from './vision-word';
import { VisionImage } from './vision-image';

export function VisionText() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="space-y-2 md:space-y-4 md:text-center"
    >
      <div className="flex flex-wrap items-center gap-2 md:gap-4 md:justify-center">
        <span className="text-[32px] text-[#1E2124] md:text-[49px] font-[400] leading-[1.2] md:leading-[88.2px]">
          We Bring together
        </span>
        <div className="flex items-center gap-2 md:gap-4">
          <VisionImage
            src="/vision_image1.png"
            alt="Visionaries icon"
            className="w-16 h-16 md:w-20 md:h-20"
          />
          <VisionWord>Visionaries,</VisionWord>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 md:gap-4 md:justify-center">
        <div className="flex items-center gap-2 md:gap-4">
          <VisionWord>innovators,</VisionWord>
          <VisionImage
            src="/vision_image2.png"
            alt="Innovators icon"
            className="w-16 h-16 md:w-20 md:h-20"
          />
        </div>
        <span>&</span>
        <div className="flex items-center gap-2 md:gap-4">
          <VisionImage
            src="/vision_image3.png"
            alt="Game-changers icon"
            className="w-16 h-16 md:w-20 md:h-20"
          />
          <VisionWord>game-changers,</VisionWord>
        </div>
      </div>

      <div className="text-[32px] md:text-[49px] font-[400] leading-[1.2] md:leading-[88.2px] text-left md:text-justify md:text-center text-[#1E2124]">
        <VisionWord>fueling ventures</VisionWord> that shape the future across industries and geographies.
      </div>
    </motion.div>
  );
}