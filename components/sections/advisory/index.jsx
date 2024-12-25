"use client";

import { AdvisoryContainer } from './advisory-container';
import { AdvisoryHeader } from './advisory-header';
import { AdvisoryContent } from './advisory-content';
import { AdvisorySlider } from './advisory-slider';

export function AdvisorySection() {
  return (
    <section className="bg-white py-24">
      <AdvisoryContainer>
        <AdvisoryHeader />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-16">
          <div className="space-y-8">
            <AdvisoryContent />
          </div>
          <AdvisorySlider />
        </div>
      </AdvisoryContainer>
    </section>
  );
}