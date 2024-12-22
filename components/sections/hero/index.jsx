"use client";

import { HeroContent } from './hero-content';
import { HeroCards } from './hero-cards';
import { HeroMedia } from './hero-media';

export function HeroSection() {
  return (
    <section className="relative pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <HeroContent />
            <div className="hidden lg:block">
              <HeroCards />
            </div>
          </div>
          <div className="relative">
            <HeroMedia />
          </div>
        </div>
      </div>
    </section>
  );
}