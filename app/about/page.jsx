"use client";

import { AboutHero } from '@/components/about/hero';
import Ourstory from '@/components/about/ourstory';

export default function AboutPage() {
  return (
    <main className="min-h-screen ">
      <AboutHero />
      <Ourstory />
    </main>
  );
}