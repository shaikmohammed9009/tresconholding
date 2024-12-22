"use client";

import { motion } from 'framer-motion';
import { LAYOUT_CONSTANTS } from '@/lib/constants';

export function VisionHeading() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      <h2 
        id="vision1" 
        className="text-[#00A5A366] text-lg font-semibold pb-4 border-b border-[#00A5A366] "
        
      >
        VISION
      </h2>
    </motion.div>
  );
}