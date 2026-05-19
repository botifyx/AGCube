import { motion } from 'motion/react';
import { useSEO } from '@/hooks/useSEO';
import { Badge } from '@/components/ui/badge';
import { ShoppingBag, Factory, Truck, Snowflake, Smartphone, Globe, Shield, Zap } from 'lucide-react';

const industries = [
  {
    name: 'Retail & FMCG',
    icon: ShoppingBag,
    description: 'Managing high-velocity inventory and omnichannel fulfillment for modern retail brands.',
    challenges: ['Omnichannel complexity', 'Inventory accuracy', 'Last-mile costs'],
  },
  {
    name: 'Manufacturing & Automotive',
    icon: Factory,
    description: 'Optimizing just-in-time logistics and complex component management for global manufacturers.',
    challenges: ['Supply chain visibility', 'Production synchronization', 'Supplier integration'],
  },
  {
    name: 'Logistics (3PL)',
    icon: Truck,
    description: 'Enabling third-party logistics providers to offer premium, tech-led execution services to their clients.',
    challenges: ['Multi-client management', 'Service level agreements', 'Technology scalability'],
  },
  {
    name: 'Food & Cold Storage',
    icon: Snowflake,
    description: 'Ensuring temperature-controlled integrity and traceability for perishable goods.',
    challenges: ['Cold chain monitoring', 'Shelf-life optimization', 'Regulatory compliance'],
  },
  {
    name: 'Telecommunications & Media',
    icon: Smartphone,
    description: 'Managing complex equipment lifecycles and high-value asset distribution.',
    challenges: ['Asset tracking', 'Reverse logistics', 'Service speed'],
  },
];

export default function Industries() {
  useSEO({
    title: 'Industries We Serve',
    description: 'We deliver execution intelligence to sectors where operational excellence is the primary driver of competitive advantage.',
    canonical: 'https://agcube.com/industries',
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
              Sector Expertise
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
              Industries <span className="text-blue-500">We Serve</span>
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground leading-relaxed"
          >
            We deliver execution intelligence to sectors where operational excellence is the primary driver of competitive advantage.
          </motion.p>
        </div>

        {/* Industry Cards */}
        <div className="space-y-12">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-dark border-border rounded-[32px] overflow-hidden group hover:border-blue-500/30 transition-all duration-500"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 md:p-12 items-center">
                <div className="lg:col-span-1 flex justify-center">
                  <div className="w-20 h-20 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                    <industry.icon size={40} strokeWidth={1.5} />
                  </div>
                </div>
                <div className="lg:col-span-7 space-y-4">
                  <h2 className="text-3xl font-bold text-foreground">{industry.name}</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {industry.description}
                  </p>
                </div>
                <div className="lg:col-span-4 bg-muted/30 rounded-2xl p-6 space-y-4">
                  <h4 className="text-xs font-bold text-blue-500 uppercase tracking-widest">Key Challenges Addressed</h4>
                  <ul className="space-y-2">
                    {industry.challenges.map((challenge) => (
                      <li key={challenge} className="flex items-center gap-2 text-sm text-foreground/80">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
