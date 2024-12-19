"use client";

import { useState } from 'react';
import { VenturesContainer } from './ventures-container';
import { VenturesHeader } from './ventures-header';
import { VenturesContent } from './ventures-content';
import { VenturesSlider } from './ventures-slider';
import { VenturesList } from './ventures-list';

export function VenturesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="relative py-24 bg-[#1E2124]">
      <VenturesContainer>
        <VenturesHeader />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mt-16">
          <div className="lg:col-span-5 space-y-8">
            <h3 
              className="font-['Anek_Devanagari'] text-[60px] font-[500] leading-[78px] text-white"
              style={{ 
                textUnderlinePosition: 'from-font',
                textDecorationSkipInk: 'none'
              }}
            >
              Driving Innovation, Empowering Industries
            </h3>
            <VenturesList currentIndex={currentIndex} />
          </div>
          <div className="lg:col-span-7">
            <VenturesContent />
            <VenturesSlider currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
          </div>
        </div>
      </VenturesContainer>
    </section>
  );
}