"use client";

import Image from 'next/image';
import { ArrowDown } from 'lucide-react';

const cards = [
  {
    id: 'ventures',
    title: 'Discover Our Ventures',
    image: '/blank_img.png',
    section: 'ventures'
  },
  {
    id: 'impact',
    title: 'Our Global Impact',
    image: '/card_image.png',
    section: 'our-impact'
  }
];

export function HeroCards() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
      {cards.map((card) => (
        <div key={card.id} className="relative bg-white overflow-hidden group">
          {/* Header */}
          <div className="relative px-6 py-4 bg-white">
            <h3 className="text-[#003B3D] text-xl font-semibold">
              {card.title}
            </h3>
          </div>

          {/* Image Container */}
          <div className="relative aspect-[18/2]">
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Action Button */}
          <button
            onClick={() => scrollToSection(card.section)}
            className="absolute top-7 right-4 p-3 rounded-full bg-[#C0F43C] hover:bg-[#C0F43C]/90 transition-colors"
            aria-label={`Go to ${card.title}`}
          >
            <ArrowDown className="w-5 h-5 text-[#003B3D]" />
          </button>
        </div>
      ))}
    </div>
  );
}