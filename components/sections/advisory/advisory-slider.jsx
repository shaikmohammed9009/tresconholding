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

  // Calculate visible cards based on screen size
  const getVisibleCards = () => {
    const cards = [];
    const cardsToShow = {
      base: 1, // mobile
      md: 2,  // tablet
      lg: 3   // desktop
    };

    // Get window width using client-side check
    const isClient = typeof window !== 'undefined';
    const width = isClient ? window.innerWidth : 0;
    
    let numCards = cardsToShow.base;
    if (width >= 1024) numCards = cardsToShow.lg;
    else if (width >= 768) numCards = cardsToShow.md;

    for (let i = 0; i < numCards; i++) {
      const index = (currentIndex + i) % advisoryMembers.length;
      cards.push(advisoryMembers[index]);
    }

    return cards;
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="wait">
          {getVisibleCards().map((member, index) => (
            <motion.div
              key={`${member.id}-${index}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="relative aspect-square"
            >
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover rounded-lg"
                priority
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <h4 className="text-white text-xl font-semibold">
                  {member.name}
                </h4>
                <p className="text-white/80 text-sm">
                  {member.title}
                </p>
                <p className="text-white/60 text-sm">
                  {member.organization}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

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
    </motion.div>
  );
}