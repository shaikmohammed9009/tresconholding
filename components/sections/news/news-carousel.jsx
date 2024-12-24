"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight ,ArrowLeft, ArrowRight } from 'lucide-react';
import { NewsCard } from './news-card';

export function NewsCarousel({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
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
            className="p-2 rounded-full border border-[#C0F43C] hover:bg-[#A0D12D] bg-[#C0F43C] hover:text-white transition-colors"
            aria-label="Previous slide"
          >
            <ArrowLeft className="w-5 h-5 text-black" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full border border-[#C0F43C] hover:bg-[#A0D12D] bg-[#C0F43C] hover:text-white transition-colors"
            aria-label="Next slide"
          >
            <ArrowRight className="w-5 h-5 text-black" />
          </button>
        </div>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
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