"use client";

import { ImpactHeader } from './impact-header';
import { ImpactContent } from './impact-content';
import { ImpactImage } from './impact-image';
import { ImpactCards } from './impact-cards';

export function ImpactNewSection() {
  return (
    <section id="our-impact" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-8">
            <ImpactHeader />
            <ImpactContent />
          </div>
          <ImpactImage />
        </div>
        <ImpactCards />
      </div>
    </section>
  );
}