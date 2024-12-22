"use client";

import { VisionContainer } from './vision-container';
import { VisionHeading } from './vision-heading';
import { VisionText } from './vision-text';

export function VisionSection() {
  return (
    <section className="relative py-16 md:py-24 bg-white">
      <VisionHeading />
      <VisionContainer>
        
       
        <div className="space-y-8 md:space-y-16">
          
          <VisionText />
        </div>
      </VisionContainer>
    </section>
  );
}