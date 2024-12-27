"use client";

import { AboutContainer } from './about-container';
import { AboutHeading } from './about-heading';
import { AboutContent } from './about-content';
import { AboutImage } from './about-image';

export function AboutSection() {
  return (
    <section id="about" className="relative  pt-[6rem] border-[none]  bg-white">
      <AboutContainer>
        <AboutHeading />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-8">
            <AboutContent />
          </div>
          <AboutImage />
        </div>
      </AboutContainer>
    </section>
  );
}