import { motion } from 'motion/react';
import { useSEO } from '@/hooks/useSEO';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { WMSCapabilities } from '@/components/sections/WMSCapabilities';
import { CognitiveCapabilities } from '@/components/sections/CognitiveCapabilities';
import { OperationsROI } from '@/components/sections/OperationsROI';

export default function ClassicWMS() {
  useSEO({
    title: 'Classic WMS | Scalable Warehouse Ecosystem',
    description: 'A modern, AI-native warehouse management system designed for the complexities of modern commerce.',
    canonical: 'https://agcube.com/classic-wms',
  });

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs font-semibold uppercase tracking-wider font-mono">
                  <span>Flagship Execution Engine</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/40 bg-amber-500/10 text-amber-700 dark:text-amber-300 text-xs font-semibold font-mono">
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                  <span>AWS Certified Solution</span>
                </div>
              </div>

              <div className="mb-6 flex items-center justify-center gap-4">
                <div className="inline-flex items-center px-6 py-3.5 rounded-2xl bg-white shadow-xl shadow-orange-500/10 border border-orange-500/25">
                  <img src="/classic-wms-logo.png" alt="Classic WMS" className="h-8 sm:h-9 w-auto object-contain" />
                </div>
                <img 
                  src="/aws-qualified-software.png" 
                  alt="AWS Qualified Software" 
                  className="hidden sm:inline-block h-11 md:h-12 w-auto object-contain" 
                />
              </div>

              <h1 className="text-4xl md:text-6xl font-black tracking-tight text-foreground font-heading leading-[1.1]">
                Classic <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 dark:from-orange-400 dark:to-amber-500">WMS</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mt-4 font-sans max-w-2xl mx-auto">
                A modern, AI-native warehouse management system engineered for high-throughput fulfillment. Officially AWS Certified and built for 99.9% inventory precision.
              </p>
            </motion.div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white rounded-full px-8 shadow-lg shadow-orange-500/25 font-bold">
                <Link to="/contact">Request Demo</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-border hover:bg-muted text-foreground rounded-full px-8 cursor-pointer font-semibold">
                <a href="#pricing">View Pricing</a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Capabilities of WMS Section */}
      <div className="mb-8">
        <WMSCapabilities />
      </div>

      {/* Full-width Key Cognitive Capabilities Section (01 to 06) */}
      <div className="mb-12">
        <CognitiveCapabilities />
      </div>

      {/* Smarter Operations. Measurable ROI Section with AWS Certified Badge */}
      <div className="mb-24">
        <OperationsROI />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        {/* Pricing/Comparison */}
        <div id="pricing" className="max-w-4xl mx-auto scroll-mt-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">Choose Your Scale</h2>
            <p className="text-muted-foreground mt-2">Flexible plans that grow with your business.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-card/50 border-border p-8 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Lite</h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  A plug-and-play solution designed for small and medium businesses.
                </p>
              </div>
              <Button asChild className="w-full bg-muted/30 hover:bg-muted/50 text-foreground border border-border">
                <Link to="/contact">Get Started</Link>
              </Button>
            </Card>
            <Card className="bg-blue-500/5 border-blue-500/30 p-8 space-y-6 flex flex-col justify-between relative overflow-hidden">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Enterprise</h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  Suitable for large enterprises and complex warehouse environments.
                </p>
              </div>
              <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                <Link to="/contact">Contact Sales</Link>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
