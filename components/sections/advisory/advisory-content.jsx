"use client";

import { motion } from 'framer-motion';

export function AdvisoryContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >
      <h3 
        className="font-['Anek_Devanagari'] text-[60px] font-[500] leading-[60px] text-[#1E2124]"
        style={{ 
          textUnderlinePosition: 'from-font',
          textDecorationSkipInk: 'none'
        }}
      >
        Guided by Visionaries
      </h3>
      
      <p 
        className="font-manrope text-[20px] font-[400] leading-[30px] text-[#1E1E1E]"
        style={{ 
          textUnderlinePosition: 'from-font',
          textDecorationSkipInk: 'none'
        }}
      >
        Our advisory board consists of industry leaders and experts who provide invaluable guidance and insights.
      </p>
    </motion.div>
  );
}