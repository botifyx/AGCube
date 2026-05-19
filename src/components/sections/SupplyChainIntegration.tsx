import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Globe, Shield, RefreshCcw, LayoutGrid, Zap } from 'lucide-react';

const steps = [
  {
    title: 'Integrated Business Planning',
    description: 'Aligning demand, supply, and financial goals into one unified execution roadmap.',
    icon: LayoutGrid,
  },
  {
    title: 'Omnichannel Fulfillment',
    description: 'Seamlessly managing inventory across direct-to-consumer, retail, and marketplace channels.',
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

export function SupplyChainIntegration() {
  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-foreground"
          >
            End-to-End Supply Chain <br />
            <span className="text-blue-500">Technology Integration</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            We connect the entire value chain, from planning to the final customer experience.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="glass-dark border-border p-8 rounded-2xl h-full flex flex-col items-center text-center space-y-6 hover:border-blue-500/30 transition-all duration-500 group-hover:-translate-y-2">
                  <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform relative">
                    <step.icon size={28} />
                    <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-foreground group-hover:text-blue-400 transition-colors">{step.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Button asChild variant="link" className="text-blue-500 hover:text-blue-400 group">
            <Link to="/supply-chain">
              Learn more about our integration capabilities
              <RefreshCcw className="ml-2 w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
