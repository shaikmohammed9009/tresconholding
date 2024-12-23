import { HeroSection } from '@/components/sections/hero';
import { VisionSection } from '@/components/sections/vision';
import { AboutSection } from '@/components/sections/about';
import { StrengthSection } from '@/components/sections/strength';
import { VenturesSection } from '@/components/sections/ventures';
import { ImpactNewSection } from '@/components/sections/impact-new';
import { MessageSection } from '@/components/sections/message';
import { GlobalFootprintSection } from '@/components/sections/global-footprint';
import { AdvisorySection } from '@/components/sections/advisory';
import { NewsSection } from '@/components/sections/news';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#003B3D] text-white">
      <HeroSection />
      <VisionSection />
      <AboutSection />
      <StrengthSection />
      <VenturesSection />
      <ImpactNewSection />
      <GlobalFootprintSection />
      <MessageSection />
      <AdvisorySection />
      <NewsSection />
    </main>
  );
}