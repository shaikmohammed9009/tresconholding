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
      <div className="relative aspect-[0.9]  overflow-hidden w-auto" >
        <Image
          src="/saleem.png"
          alt="Mohammed Saleem - Founder & CEO"
          className="object-cover"
          priority
          fill
        />
        
       
      </div>
    </motion.div>
  );
}