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
    className="space-y-8 relative bg-no-repeat bg-bottom-right h-full flex items-center justify-center bg-[#003B3D]"
    style={{
      backgroundImage: "url('/chairmanBackground.png')",
      backgroundPosition: "bottom 0 right 0",
      backgroundSize: "contain", // or "cover" depending on your needs
      backgroundRepeat: "no-repeat",
    }}
  >
  
    <div className="relative">
      <Quote className="absolute -left-8 -top-6 w-12 h-12 text-[#00A5A3] opacity-50" />
      <p className="font-manrope text-lg leading-relaxed text-white/90">
        At Trescon Holdings, we believe in <br/> the power of innovation and collaboration <br/> to create a more sustainable future. <br/> Our commitment is to support ventures that<br/> positively impact how people live and work globally.
      </p>
    </div>
  
    </motion.div>
  );
}