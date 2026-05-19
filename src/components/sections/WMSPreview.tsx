import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, ArrowRight, Package, Truck, Boxes, BarChart } from 'lucide-react';

const features = [
  'Inbound receipt & Putaway',
  'Real-time inventory visibility',
  'AI-optimized picking routes',
  'IoT & RFID integration',
  'Multi-warehouse support',
  'ERP Ecosystem integration',
];

export function WMSPreview() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-500/5 blur-[120px]" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <Badge variant="outline" className="border-blue-500/30 text-blue-400 px-3 py-1">
                Product Spotlight
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
                Classic WMS: <br />
                <span className="text-blue-500">Modern Warehouse Ecosystem</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A scalable, AI-native warehouse management system that bridges the gap between physical inventory and digital intelligence. From Lite to Enterprise, we scale with your ambitions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 shrink-0">
                    <Check size={12} />
                  </div>
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8">
                <Link to="/contact">Schedule Live Demo</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-border hover:bg-muted text-foreground rounded-full px-8">
                <Link to="/classic-wms">Explore Product Features</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="glass-dark rounded-3xl border border-border p-8 relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-500">
                    <Package size={20} />
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold">Inventory Dashboard</h4>
                    <p className="text-xs text-muted-foreground">Real-time visibility</p>
                  </div>
                </div>
                <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">Live</Badge>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: 'Stock Level', value: '98.2%', icon: Boxes },
                    { label: 'Throughput', value: '1.2k/h', icon: Truck },
                    { label: 'Accuracy', value: '99.9%', icon: BarChart },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-muted/30 rounded-xl p-4 border border-border">
                      <stat.icon size={16} className="text-blue-500 mb-2" />
                      <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                      <p className="text-lg font-bold text-foreground">{stat.value}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-muted/30 rounded-xl p-6 border border-border space-y-4">
                  <div className="flex items-center justify-between">
                    <h5 className="text-sm font-medium text-foreground">AI Putaway Optimization</h5>
                    <span className="text-xs text-blue-500">+12% efficiency</span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '85%' }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-blue-500"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Predictive algorithms suggesting optimal bin locations based on velocity and affinity.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Background Glow */}
            <div className="absolute -inset-4 bg-blue-500/10 blur-2xl rounded-[40px] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
