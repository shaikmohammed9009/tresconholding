"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ventures } from './ventures-data';

export function VenturesSlider({ currentIndex, setCurrentIndex }) {
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % ventures.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + ventures.length) % ventures.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative mt-8"
    >
      <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
        <Image
          src={ventures[currentIndex].image}
          alt={ventures[currentIndex].title}
          fill
          className="object-cover transition-opacity duration-300"
        />
        
        <div className="absolute bottom-8 right-8 flex space-x-4">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full bg-[#C0F43C] hover:bg-[#C0F43C]/90 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-[#1E2124]" />
          </button>
          <button
            onClick={nextSlide}
            className="p-3 rounded-full bg-[#C0F43C] hover:bg-[#C0F43C]/90 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-[#1E2124]" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}