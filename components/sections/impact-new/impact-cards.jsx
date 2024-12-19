"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { impactCards } from './impact-data';

export function ImpactCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {impactCards.map((card, index) => (
        <motion.div
          key={card.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group relative overflow-hidden rounded-lg"
        >
          <div className="relative aspect-[4/3]">
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#00A5A3]/0 group-hover:bg-[#00A5A3]/80 transition-colors duration-300" />
            
            {/* Title */}
            <div className="absolute inset-0 flex items-center justify-center p-6">
              <h4 className="text-white text-2xl font-semibold text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {card.title}
              </h4>
            </div>
            
            {/* Decorative dot */}
            <div className="absolute top-4 right-4 w-6 h-6 bg-[#C0F43C] rounded-full" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}