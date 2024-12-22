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
      <div className="relative aspect-square max-w-[500px] mx-auto">
        <Image
          src="/member_image.png"
          alt="About Trescon Holdings"
          fill
          className="object-cover rounded-2xl"
          priority
        />

        {/* Decorative elements */}
        <div className="absolute -top-10 right-0 w-32 h-32 rounded-full bg-[#FFE600]/20 blur-2xl" />
        <div className="absolute -bottom-10 left-0 w-40 h-40 rounded-full bg-[#7FFF00]/20 blur-2xl" />
      </div>
    </motion.div>
  );
}