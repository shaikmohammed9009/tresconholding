"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

export function AboutImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <div className="relative aspect-square mx-auto">
        <Image
          src="/member_image.png"
          alt="About Trescon Holdings"
          fill
          className=" w-500 h-auto rounded-2xl"
          priority
        />

      
      </div>
    </motion.div>
  );
}