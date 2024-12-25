"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { advisoryMembers } from './advisory-data';

export function AdvisorySlider() {


  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <div className="relative aspect-[2/3] max-w-[300px] mx-auto">
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

   
      </div>
    </motion.div>
  );
}