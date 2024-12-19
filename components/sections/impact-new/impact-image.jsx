"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export function ImpactImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <div className="relative aspect-square max-w-[500px] mx-auto">
        {/* Dotted border effect */}
        <div className="absolute inset-[-20px] rounded-full border-2 border-dashed border-[#00A5A3] animate-spin-slow" />
        
        {/* Main image */}
        <div className="relative w-full h-full rounded-full overflow-hidden">
          <Image
            src="/our_impact.png"
            alt="Our Impact Visualization"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Decorative dot */}
        <div className="absolute top-0 right-0 w-8 h-8 bg-[#C0F43C] rounded-full transform translate-x-1/4 -translate-y-1/4" />
      </div>
    </motion.div>
  );
}