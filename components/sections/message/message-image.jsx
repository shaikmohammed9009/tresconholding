"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

export function MessageImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <div className="relative aspect-[1] rounded-lg overflow-hidden">
        <Image
          src="/saleem.png"
          alt="Mohammed Saleem - Founder & CEO"
          fill
          className="object-cover"
          priority
        />
        
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#003B3D]/80 to-transparent" />
        <div className="absolute top-4 right-4 w-24 h-24 rounded-full bg-[#00A5A3]/20 blur-xl" />
      </div>
    </motion.div>
  );
}