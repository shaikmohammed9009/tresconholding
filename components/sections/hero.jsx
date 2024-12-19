"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Dialog } from '@/components/ui/dialog';
import { X } from 'lucide-react';

export function HeroSection() {
  const [openImage, setOpenImage] = useState(null);

  return (
    <section id="hero" className="relative pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-['Anek_Devanagari'] text-[65px] font-bold leading-[70px] tracking-[-0.02em] mb-4">
              <span className="block">Building</span>
              <span className="font-normal">
                Tomorrow&apos;s<br />
                Business Ecosystem
              </span>
            </h1>
            <p className="text-lg mb-8">
              A global enterprise nurturing innovative ventures across technology,
              digital transformation, and sustainability
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                id="card_hero"
                onClick={() => setOpenImage('/hero_card1.jpg')}
                className="inline-flex items-center px-6 py-3 bg-white text-[#003B3D] rounded hover:bg-opacity-90 transition-colors"
              >
                Discover Our Ventures
              </button>
              <button
                id="card_hero2"
                onClick={() => setOpenImage('/hero_card2.jpg')}
                className="inline-flex items-center px-6 py-3 border border-white rounded hover:bg-white hover:text-[#003B3D] transition-colors"
              >
                Our Global Impact
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-full overflow-hidden">
              <Image
                src="/hero_right_image.png"
                alt="Technology visualization"
                width={800}
                height={800}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-full h-full">
        <div className="w-full h-full bg-[url('/dots-pattern.png')] opacity-20" />
      </div>

      {openImage && (
        <Dialog open={true} onOpenChange={() => setOpenImage(null)}>
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
            <div className="relative max-w-3xl w-full aspect-video">
              <Image
                src={openImage}
                alt="Card detail"
                fill
                className="object-cover rounded-lg"
              />
              <button
                onClick={() => setOpenImage(null)}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
          </div>
        </Dialog>
      )}
    </section>
  );
}