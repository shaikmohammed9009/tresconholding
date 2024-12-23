"use client";

import { motion } from 'framer-motion';

export function StrengthHeading() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-8"
    >
      <h2 
        className="text-[#00A5A366]  text-[24px] leading-[32.78px] font-semibold mb-6 pb-4 border-b border-[#00A5A366]"
      >
        OUR STRENGTH
      </h2>
    </motion.div>
  );
}