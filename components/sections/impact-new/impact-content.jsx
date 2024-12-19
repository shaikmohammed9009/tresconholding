"use client";

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

export function ImpactContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >
      <h3 
        className="font-['Anek_Devanagari'] text-[60px] font-[500] leading-[78px] text-left text-[#003B3D]"
      >
        Empowering Change, Driving Innovation, and Creating Lasting Impact
      </h3>
      
      <Link
        href="#"
        className="inline-flex items-center gap-2 px-6 py-3 bg-[#00A5A3] text-white rounded-md hover:bg-[#00A5A3]/90 transition-colors font-manrope text-base font-semibold"
      >
        View Website
        <ExternalLink className="w-5 h-5" />
      </Link>
    </motion.div>
  );
}