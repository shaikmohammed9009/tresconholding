"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { differentiators } from './differentiators-data';

export function StrengthDifferentiators() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 
          className="font-['Manrope'] text-[24px] font-[700] leading-[32.78px] text-left text-[#00A5A366] pb-4 border-b border-[#00A5A366] mb-8"
          style={{ 
            textUnderlinePosition: 'from-font',
            textDecorationSkipInk: 'none'
          }}
        >
          KEY DIFFERENTIATORS
        </h3>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-2 sm:grid-cols-2 gap-8"
      >
        {differentiators.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col md:flex  md:items-start items-center space-x-4"
          >
            <div className="w-10 h-10 relative flex-shrink-0">
              <Image
                src={item.icon}
                alt={item.title}
                width={48}
                height={48}
                className="object-contain mb-20"
              />
            </div>
            <div>
              <h3 
                id={item.id}
                className="font-['Anek_Devanagari'] text-[16px] mt-3 font-[500] leading-[28.6px] text-center sm:text-left text-[#01373D] mb-2"
                style={{ 
                  textUnderlinePosition: 'from-font',
                  textDecorationSkipInk: 'none'
                }}
              >
                {item.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}