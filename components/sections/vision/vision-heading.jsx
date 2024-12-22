"use client";

import { motion } from 'framer-motion';

export function VisionHeading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8 md:mb-16"
      >
        <h2 className="text-[#00A5A3] text-lg font-semibold pb-4 border-b border-[#00A5A3]/40">
          VISION
        </h2>
      </motion.div>
    </div>
  );
}