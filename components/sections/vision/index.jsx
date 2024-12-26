"use client";

import { VisionContainer } from "./vision-container";
import { VisionHeading } from "./vision-heading";
import { VisionText } from "./vision-text";

export function VisionSection() {
  return (
    <section className="relative py-16 md:py-14 bg-white">
      
      <VisionContainer>
      <VisionHeading />
        <div className="space-y-9 md:space-y-18 md:w-[52rem] md:mx-auto">
          <VisionText />
        </div>
      </VisionContainer>
    </section>
  );
}
