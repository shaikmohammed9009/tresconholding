"use client";

import { VisionContainer } from './vision-container';
import { VisionHeading } from './vision-heading';
import { VisionContent } from './vision-content';

export function VisionSection() {
  return (
    <section className="relative py-20 overflow-hidden bg-white">
      <VisionContainer>
        <VisionHeading />
        <VisionContent />
      </VisionContainer>
    </section>
  );
}