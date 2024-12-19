"use client";

import { motion } from 'framer-motion';

export function AboutHeading() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-8"
    >
      <h2 className="text-[#00A5A3] text-lg font-semibold mb-6">ABOUT</h2>
      <h3 
        className="font-['Anek_Devanagari'] text-[60px] font-[500] leading-[66px] text-left"
        style={{ 
          textUnderlinePosition: 'from-font',
          textDecorationSkipInk: 'none'
        }}
      >
        Driving Global Innovation
      </h3>
    </motion.div>
  );
}