"use client";

import { motion } from 'framer-motion';

export function HeroContent() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-20 max-w-7xl mx-auto px-8 sm:px-6 lg:px-8 pt-32 "
    >
      <div className="sm:max-w-3xl  lg:max-w-7xl  max-w-[500px]  sm:pt-[80px] pt-60">
        <h1 className="text-[#C0F33C] text-[18px] leading-[16px] sm:text-5xl lg:text-6xl font-bold  mb-4">
          Driving
        </h1>
        <div className="space-y-4">
          <h2 className="text-white text-[18px] leading-[16px] sm:text-4xl lg:text-5xl font-semibold">
            Global Innovation &
          </h2>
          <h2 className="text-white text-[18px] leading-[16px] sm:text-4xl lg:text-5xl font-semibold">
            Sustainable Growth
          </h2>
        </div>
        <p className="text-[#EEEEEE] text-base text-[18px]  leading-[30px] sm:text-lg sm:mt-6 mt-2 max-w-xl">
          A multifaceted global enterprise nurturing transformative ventures across technologies and markets
        </p>
      </div>
    </motion.div>
  );
}