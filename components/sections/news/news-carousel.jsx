"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { NewsCard } from './news-card';
import { useWindowSize } from '../../../hooks/useWindowSize';

export function NewsCarousel({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { width } = useWindowSize();
  
  // Determine items per page based on screen size
  const getItemsPerPage = () => {
    if (width >= 1024) return 3; // desktop
    if (width >= 768) return 2;  // tablet
    return 1; // mobile
  };

  const itemsPerPage = getItemsPerPage();
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentItems = items.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <div className="space-y-8">
      {totalPages > 1 && (
        <div className="flex justify-end space-x-4 mb-6">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full border bg-[#C0F43C] border-[#C0F43C] hover:bg-[#C0F43C] hover:text-white transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full border bg-[#C0F43C] border-[#C0F43C] hover:bg-[#C0F43C] hover:text-white transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {currentItems.map((item, index) => (
            <NewsCard key={item.id} item={item} index={index} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}