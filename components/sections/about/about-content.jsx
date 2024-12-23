"use client";

import { motion } from 'framer-motion';

export function AboutContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
         <h3 
        className="font-['Anek_Devanagari'] mb-12    text-[60px] font-[500] leading-[66px] text-left text-[#1E2124]"
        style={{ 
          textUnderlinePosition: 'from-font',
          textDecorationSkipInk: 'none'
        }}
      >
        Driving Global Innovation
      </h3>
      <p 
        className="font-['Manrope'] text-[22px] font-[400] leading-[39.6px] text-left text-[#1E2124]"
        style={{ 
          textUnderlinePosition: 'from-font',
          textDecorationSkipInk: 'none'
        }}
      >
        Trescon Holdings stands at the forefront of technological advancement and business 
        transformation. Through our portfolio of innovative ventures, we're creating meaningful 
        impact across global markets.
      </p>
    </motion.div>
  );
}