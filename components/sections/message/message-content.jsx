"use client";

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export function MessageContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="space-y-8 relative bg-no-repeat bg-bottom-right h-full"
      style={{
        backgroundImage: "url('/chairmanBackground.png')",
        backgroundPosition: "bottom 0 right 0",
        backgroundSize: "contain", // or "cover" depending on your needs
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="border-b border-white pb-4">
        <h2 className="font-manrope text-2xl font-bold leading-[32.78px] text-white">
          MESSAGE FROM THE CEO
        </h2>
      </div>
      
      <div className="relative">
        <Quote className="absolute -left-8 -top-6 w-12 h-12 text-[#00A5A3] opacity-50" />
        <p className="font-manrope text-lg leading-relaxed text-white/90">
          At Trescon Holdings, we believe in the power of innovation and collaboration to create a more sustainable future. Our commitment is to support ventures that positively impact how people live and work globally.
        </p>
      </div>
      
      <div className="pt-6">
        <h3 className="font-anek-devanagari text-2xl font-medium text-white">
          Mohammed Saleem
        </h3>
        <p className="text-[#00A5A3] font-manrope">
          Founder & CEO
        </p>
      </div>
    </motion.div>
  );
}