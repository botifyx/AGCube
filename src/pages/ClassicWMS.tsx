import { motion } from 'motion/react';
import { useSEO } from '@/hooks/useSEO';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Check, Package, Truck, Boxes, BarChart, Zap, Shield, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { WMSFlowAnimation } from '@/components/sections/WMSFlowAnimation';

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Badge variant="outline" className="border-blue-500/30 text-blue-400 mb-4">
                Scalable Warehouse Ecosystem
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
                Classic <span className="text-blue-500">WMS</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mt-6">
                A modern, AI-native warehouse management system designed for the complexities of modern commerce. From Lite to Enterprise, Classic WMS scales as you grow.
              </p>
            </motion.div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8">
                <Link to="/contact">Request Demo</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-border hover:bg-muted text-foreground rounded-full px-8 cursor-pointer">
                <a href="#pricing">View Pricing</a>
              </Button>
            </div>
          </div>
          <WMSFlowAnimation />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-card/50 border-border h-full hover:border-blue-500/30 transition-all group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon size={24} />
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-blue-400 transition-colors">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* AI & IoT Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">AI + IoT Integration</h2>
            <p className="text-muted-foreground leading-relaxed">
              Classic WMS isn't just a database; it's an intelligent engine. We leverage IoT sensors and AI optimization to drive unprecedented efficiency in your warehouse.
            </p>
            <ul className="space-y-4">
              {[
                'AI-Driven Putaway & Bin Optimization',
                'IoT Integration (RFID, Beacons, Sensors)',
                'Predictive Maintenance for Equipment',
                'Real-time Labor Management & Tracking',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
                    <Check size={12} />
                  </div>
                  <span className="text-foreground font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="h-48 glass-dark border-border rounded-2xl p-6 flex flex-col justify-between">
                <Zap size={24} className="text-blue-500" />
                <div>
                  <p className="text-2xl font-bold text-foreground">15%</p>
                  <p className="text-xs text-muted-foreground uppercase">Efficiency Gain</p>
                </div>
              </div>
              <div className="h-64 glass-dark border-border rounded-2xl p-6 flex flex-col justify-between">
                <Shield size={24} className="text-blue-500" />
                <div>
                  <p className="text-2xl font-bold text-foreground">99.9%</p>
                  <p className="text-xs text-muted-foreground uppercase">Inventory Accuracy</p>
                </div>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="h-64 glass-dark border-border rounded-2xl p-6 flex flex-col justify-between">
                <Globe size={24} className="text-blue-500" />
                <div>
                  <p className="text-2xl font-bold text-foreground">Multi</p>
                  <p className="text-xs text-muted-foreground uppercase">Warehouse Support</p>
                </div>
              </div>
              <div className="h-48 glass-dark border-border rounded-2xl p-6 flex flex-col justify-between">
                <BarChart size={24} className="text-blue-500" />
                <div>
                  <p className="text-2xl font-bold text-foreground">Real</p>
                  <p className="text-xs text-muted-foreground uppercase">Time Analytics</p>
                </div>
              </div>
            </div>
          </div>
        </div>

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
