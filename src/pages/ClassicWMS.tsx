import { motion } from 'motion/react';
import { useSEO } from '@/hooks/useSEO';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Check, Package, Truck, Boxes, BarChart, Zap, Shield, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { WMSFlowAnimation } from '@/components/sections/WMSFlowAnimation';
import { CognitiveCapabilities } from '@/components/sections/CognitiveCapabilities';
import { OperationsROI } from '@/components/sections/OperationsROI';
import { IoTIntegrationSection } from '@/components/sections/IoTIntegrationSection';

const features = [
  {
    title: 'Inbound & Putaway',
    description: 'Streamlined receipt processing with intelligent bin allocation.',
    icon: Package,
  },
  {
    title: 'Inventory Control',
    description: 'Real-time visibility across multiple locations and zones.',
    icon: Boxes,
  },
  {
    title: 'Picking & Packing',
    description: 'Optimized methodologies: order-based, bin-based, and item-based.',
    icon: Truck,
  },
  {
    title: 'Dispatch Management',
    description: 'Automated carrier selection and label generation.',
    icon: Zap,
  },
];

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-28">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs font-semibold uppercase tracking-wider font-mono">
                  <span>Flagship Execution Engine</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/40 bg-amber-500/10 text-amber-700 dark:text-amber-300 text-xs font-semibold font-mono">
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                  <span>AWS Certified Solution</span>
                </div>
              </div>

              <div className="mb-6 flex items-center gap-4">
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
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mt-4 font-sans max-w-xl">
                A modern, AI-native warehouse management system engineered for high-throughput fulfillment. Officially AWS Certified and built for 99.9% inventory precision.
              </p>
            </motion.div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white rounded-full px-8 shadow-lg shadow-orange-500/25 font-bold">
                <Link to="/contact">Request Demo</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-border hover:bg-muted text-foreground rounded-full px-8 cursor-pointer font-semibold">
                <a href="#pricing">View Pricing</a>
              </Button>
            </div>
          </div>
          <WMSFlowAnimation />
        </div>

        {/* Core Operations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-card/60 border-border/80 h-full hover:border-orange-500/40 transition-all group backdrop-blur-md shadow-sm hover:shadow-lg hover:shadow-orange-500/5">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400 mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon size={24} />
                  </div>
                  <CardTitle className="text-xl text-foreground font-heading group-hover:text-orange-400 transition-colors">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
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

        {/* AI & IoT Architecture Section */}
        <IoTIntegrationSection />

        {/* Pricing/Comparison */}
        <div id="pricing" className="max-w-4xl mx-auto scroll-mt-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">Choose Your Scale</h2>
            <p className="text-muted-foreground mt-2">Flexible plans that grow with your business.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-card/50 border-border p-8 space-y-8">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-foreground">Lite</h3>
                <p className="text-muted-foreground text-sm">Perfect for growing brands and single-warehouse operations.</p>
              </div>
              <ul className="space-y-4">
                {['Core Inventory Mgmt', 'Standard Picking', 'Basic Reporting', 'Email Support'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-foreground/80">
                    <Check size={14} className="text-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full bg-muted/30 hover:bg-muted/50 text-foreground border border-border">
                <Link to="/contact">Get Started</Link>
              </Button>
            </Card>
            <Card className="bg-blue-500/5 border-blue-500/30 p-8 space-y-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-blue-500 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-bl-lg">Recommended</div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-foreground">Enterprise</h3>
                <p className="text-muted-foreground text-sm">Full-scale execution intelligence for complex global supply chains.</p>
              </div>
              <ul className="space-y-4">
                {['AI Optimization', 'IoT Integration', 'Multi-Warehouse', '24/7 Priority Support', 'ERP Integration'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-foreground/80">
                    <Check size={14} className="text-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
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
