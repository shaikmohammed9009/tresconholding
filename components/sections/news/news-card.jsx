"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function NewsCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white rounded-lg overflow-hidden shadow-lg"
    >
      <div className="relative h-48 sm:h-64">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 px-3 py-1 bg-[#E4FF40] rounded-full">
          <span className="text-sm font-semibold text-[#003B3D]">{item.category}</span>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-sm text-gray-600 mb-2">{item.date}</p>
        <h3 className="text-xl font-semibold text-gray-900 mb-4 line-clamp-2">
          {item.title}
        </h3>
        <p className="text-sm text-gray-600 mb-4">{item.author}</p>
        
        <button className="inline-flex items-center text-[#00A5A3] hover:text-[#00A5A3]/80 transition-colors">
          Read More
          <ArrowRight className="ml-2 w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
}