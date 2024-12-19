"use client";

import { AboutContainer } from './about-container';
import { AboutHeading } from './about-heading';
import { AboutContent } from './about-content';
import { AboutImages } from './about-images';

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 bg-[#003B3D]">
      <AboutContainer>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <AboutHeading />
            <AboutContent />
          </div>
          <AboutImages />
        </div>
      </AboutContainer>
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-[#00A5A3]/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-[#00A5A3]/10 to-transparent blur-3xl" />
      </div>
    </section>
  );
}