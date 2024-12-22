'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function AboutImages() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative flex justify-center items-center"
    >
      <div
        id="about-image-container"
        className="relative w-full max-w-[500px] aspect-square"
      >
        <Image
          src="/about_image"
          alt="About Trescon Holdings"
          fill
          className="object-cover rounded-full"
          priority
        />

        {/* Decorative dots pattern */}
        <div className="absolute inset-0 bg-[url('/dots-pattern.png')] opacity-10" />

        {/* Decorative circles */}
        {/* <div className="absolute -top-10 right-0 w-32 h-32 rounded-full bg-[#FFE600]/20 blur-2xl" />
        <div className="absolute -bottom-10 left-0 w-40 h-40 rounded-full bg-[#7FFF00]/20 blur-2xl" /> */}
      </div>
    </motion.div>
  );
}
