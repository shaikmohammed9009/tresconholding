"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { ventures } from './ventures-data';

export function VenturesList({ currentIndex }) {
  return (
    <div className="space-y-6">
      <AnimatePresence mode="wait">
        {ventures.map((venture, index) => (
          <motion.div
            key={venture.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: index === currentIndex ? 1 : 0.5,
              y: 0,
              scale: index === currentIndex ? 1 : 0.98
            }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-2"
          >
            <h4 className={`font-['Anek_Devanagari'] text-[24px] font-[500] text-white transition-colors duration-300`}>
              {venture.title}
            </h4>
            <p className={`font-['Manrope'] text-[16px] font-[400] leading-[24px] text-white/80 transition-colors duration-300`}>
              {venture.description}
            </p>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}