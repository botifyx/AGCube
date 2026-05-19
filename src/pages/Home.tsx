import { motion } from 'motion/react';
import { useSEO } from '@/hooks/useSEO';
import { Hero } from '@/components/sections/Hero';
import { WhyAGCube } from '@/components/sections/WhyAGCube';
import { PracticeAreas } from '@/components/sections/PracticeAreas';
import { WMSPreview } from '@/components/sections/WMSPreview';
import { SupplyChainIntegration } from '@/components/sections/SupplyChainIntegration';
import { Industries } from '@/components/sections/Industries';
import { InsightsPreview } from '@/components/sections/InsightsPreview';
import { CTA } from '@/components/sections/CTA';

export default function Home() {
  useSEO({
    title: 'Strategy Meets Execution Intelligence',
    description: 'AG Cube bridges CX, AI, and Supply Chain advisory with scalable tech solutions.',
    canonical: 'https://agcube.com',
  });

  return (
    <div className="flex flex-col w-full">
      <Hero />
      <WhyAGCube />
      <PracticeAreas />
      <WMSPreview />
      <SupplyChainIntegration />
      <Industries />
      <InsightsPreview />
      <CTA />
    </div>
  );
}
