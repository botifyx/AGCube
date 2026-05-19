import { motion } from 'motion/react';
import { useSEO } from '@/hooks/useSEO';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, RefreshCcw, LayoutGrid, Zap, Shield, ArrowRight } from 'lucide-react';

const capabilities = [
  {
    title: 'Integrated Business Planning (IBP)',
    description: 'Aligning demand, supply, and financial goals into one unified execution roadmap.',
    icon: LayoutGrid,
  },
  {
    title: 'ERP & Ecosystem Integration',
    description: 'Seamlessly connecting your core systems with modern execution platforms.',
    icon: RefreshCcw,
  },
  {
    title: 'Omnichannel Fulfillment',
    description: 'Managing inventory across DTC, retail, and marketplace channels from a single source of truth.',
    icon: Globe,
  },
  {
    title: 'Last-Mile Intelligence',
    description: 'Optimizing the final leg of the journey with real-time tracking and predictive delivery.',
    icon: Zap,
  },
  {
    title: 'Sustainability & Traceability',
    description: 'Building transparent supply chains that meet modern ESG and regulatory standards.',
    icon: Shield,
  },
];

export default function SupplyChain() {
  useSEO({
    title: 'Supply Chain Technology Integration',
    description: 'We connect the entire value chain, from planning to execution to delivery.',
    canonical: 'https://agcube.com/supply-chain',
  });

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Hero */}
        <div className="max-w-3xl mb-20 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Badge variant="outline" className="border-blue-500/30 text-blue-400 mb-4">
              Value Chain Integration
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
              Supply Chain <br />
              <span className="text-blue-500">Technology Integration</span>
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground leading-relaxed"
          >
            We connect the entire value chain, from planning to execution to delivery. Our technology integration services ensure your systems work in harmony to deliver a superior customer experience.
          </motion.p>
        </div>

        {/* Value Chain Visual */}
        <div className="mb-32 relative">
          <div className="absolute inset-0 bg-blue-500/5 blur-[120px] rounded-full" />
          <div className="relative glass-dark border-border rounded-[40px] p-8 md:p-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div className="space-y-4">
                <div className="text-blue-500 font-bold text-sm uppercase tracking-widest">Phase 01</div>
                <h3 className="text-2xl font-bold text-foreground">Planning</h3>
                <p className="text-muted-foreground text-sm">Demand forecasting, IBP, and strategic inventory positioning.</p>
              </div>
              <div className="space-y-4 relative">
                <div className="hidden md:block absolute top-1/2 -left-6 w-12 h-0.5 bg-blue-500/20" />
                <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-0.5 bg-blue-500/20" />
                <div className="text-blue-500 font-bold text-sm uppercase tracking-widest">Phase 02</div>
                <h3 className="text-2xl font-bold text-foreground">Execution</h3>
                <p className="text-muted-foreground text-sm">Warehouse management, order orchestration, and fulfillment.</p>
              </div>
              <div className="space-y-4">
                <div className="text-blue-500 font-bold text-sm uppercase tracking-widest">Phase 03</div>
                <h3 className="text-2xl font-bold text-foreground">Experience</h3>
                <p className="text-muted-foreground text-sm">Last-mile delivery, tracking, and post-purchase engagement.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-card/50 border-border h-full hover:border-blue-500/30 transition-all group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-4 group-hover:scale-110 transition-transform">
                    <item.icon size={24} />
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-blue-400 transition-colors">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
