import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Check, 
  ArrowRight, 
  Package, 
  Truck, 
  Boxes, 
  BarChart, 
  ShieldCheck, 
  Activity, 
  Scan, 
  Cpu, 
  Zap,
  Radio
} from 'lucide-react';

const features = [
  'AI-Driven Dynamic Putaway & Slotting',
  'Sub-Second Barcode & RFID Scanning',
  '360° Real-Time Multi-Node Inventory',
  'Dynamic Cluster, Zone & Wave Picking',
  'Automated Carrier Rate Shopping & Dispatch',
  'AWS Certified Enterprise Cloud Architecture',
];

export function WMSPreview() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden bg-gradient-to-b from-background via-muted/30 to-background dark:via-zinc-950/60 border-y border-border">
      {/* Ambient Warehouse Telemetry Glows */}
      <div className="absolute top-1/2 -right-48 -translate-y-1/2 w-96 h-96 bg-orange-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Product Value Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-8"
          >
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs font-mono font-bold tracking-wider uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                  Flagship Partner Solution
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-mono font-bold">
                  <ShieldCheck size={13} className="text-amber-500 dark:text-amber-400" />
                  <span>AWS Certified Solution</span>
                </span>
              </div>

              {/* Logo Card */}
              <div className="pt-2">
                <div className="inline-flex items-center px-5 py-2.5 rounded-2xl bg-white shadow-xl shadow-orange-500/10 border border-orange-500/25">
                  <img src="/classic-wms-logo.png" alt="Classic WMS" className="h-7 w-auto object-contain" />
                </div>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground font-heading leading-[1.15]">
                Warehouse Management <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 dark:from-orange-400 dark:via-amber-400 dark:to-orange-500">
                  Engineered for Maximum Throughput.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-sans">
                A cognitive, AI-native warehouse execution system built with Robust Chained Automation. Eliminates stockouts, cuts dock-to-stock latency by 45%, and scales from single facilities to global multi-node distribution networks.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3 group">
                  <div className="w-5 h-5 rounded-md bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-500 shrink-0 group-hover:scale-110 transition-transform">
                    <Check size={12} />
                  </div>
                  <span className="text-xs sm:text-sm text-foreground font-sans font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <Button asChild size="lg" className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold px-8 h-13 rounded-full shadow-lg shadow-orange-500/25">
                <Link to="/contact">Schedule Live Demo</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto border-border hover:border-orange-500/40 hover:bg-muted text-foreground font-semibold px-8 h-13 rounded-full">
                <Link to="/classic-wms">Explore All Capabilities</Link>
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Live Warehouse Command Center HUD Preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative"
          >
            <div className="rounded-3xl border border-zinc-800 dark:border-white/15 bg-zinc-950/95 dark:bg-zinc-950/85 backdrop-blur-2xl p-6 sm:p-8 shadow-2xl relative z-10 space-y-6 text-white">
              
              {/* HUD Header Bar */}
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400">
                    <Activity size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold font-heading text-base flex items-center gap-2">
                      <span>Warehouse Control Tower</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/15 text-cyan-400 border border-cyan-500/30">NODE-01</span>
                    </h4>
                    <p className="text-xs text-zinc-400 font-mono">Live Telemetry • Multi-Aisle Grid</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Live Stream</span>
                </div>
              </div>

              {/* Real-time KPI Metric Blocks */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                {[
                  { label: 'Inventory Precision', value: '99.9%', icon: Boxes, sub: 'Zero discrepancies' },
                  { label: 'Picker Velocity', value: '+35%', icon: Zap, sub: 'Optimized wave paths' },
                  { label: 'Dock-To-Stock', value: '-45%', icon: Truck, sub: 'Instant ASN putaway' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-zinc-900/80 rounded-2xl p-3.5 sm:p-4 border border-zinc-800 hover:border-orange-500/40 transition-colors">
                    <stat.icon size={16} className="text-orange-400 mb-2" />
                    <p className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-wider">{stat.label}</p>
                    <p className="text-lg sm:text-xl font-black text-white font-heading mt-0.5">{stat.value}</p>
                    <p className="text-[9px] text-zinc-400 hidden sm:block mt-1">{stat.sub}</p>
                  </div>
                ))}
              </div>

              {/* Dynamic Zone Optimization Simulation Bar */}
              <div className="bg-zinc-900/80 rounded-2xl p-5 border border-zinc-800 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-white font-heading flex items-center gap-2">
                    <Cpu size={14} className="text-cyan-400" />
                    <span>AI Zone Optimization & Path Routing</span>
                  </span>
                  <span className="font-mono text-cyan-400 font-bold">98.4% Efficiency</span>
                </div>
                <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '92%' }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                    className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-orange-500 rounded-full"
                  />
                </div>
                <div className="flex justify-between items-center text-[10px] font-mono text-zinc-400 pt-1">
                  <span>Aisles A1-F12: Flow Balanced</span>
                  <span>Congestion: Minimal</span>
                </div>
              </div>

              {/* AWS Certified Compliance Tag */}
              <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src="/aws-qualified-software.png" alt="AWS" className="h-6 w-auto object-contain flex-shrink-0" />
                  <span className="text-xs text-amber-300 font-sans font-medium">
                    AWS Certified Architecture • Enterprise SOC2 Compliance
                  </span>
                </div>
                <Link to="/classic-wms" className="text-amber-400 hover:text-amber-300 text-xs font-bold inline-flex items-center gap-1 group">
                  <span>Specs</span>
                  <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>

            </div>
            
            {/* Background Multi-Layered Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/10 via-blue-500/10 to-transparent blur-3xl rounded-[40px] -z-10 pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
