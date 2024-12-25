"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { advisoryMembers } from './advisory-data';

export function AdvisorySlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % advisoryMembers.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + advisoryMembers.length) % advisoryMembers.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <div className="relative aspect-square max-w-[300px] mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <Image
              src={advisoryMembers[currentIndex].image}
              alt={advisoryMembers[currentIndex].name}
              fill
              className="object-cover rounded-lg"
              priority
            />
            
            {/* Member info overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <h4 className="text-white text-xl font-semibold">
                {advisoryMembers[currentIndex].name}
              </h4>
              <p className="text-white/80 text-sm">
                {advisoryMembers[currentIndex].title}
              </p>
              <p className="text-white/60 text-sm">
                {advisoryMembers[currentIndex].organization}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation buttons */}
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex space-x-4">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full bg-[#C0F43C] hover:bg-[#C0F43C]/90 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="p-3 rounded-full bg-[#C0F43C] hover:bg-[#C0F43C]/90 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}