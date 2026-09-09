import { motion } from 'motion/react';
import { 
  Scan, 
  Zap, 
  Cpu, 
  Layers, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight,
  Cloud,
  Award
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export function OperationsROI() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background dark:bg-[#07090e] border-y border-border dark:border-cyan-500/10">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-600/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header with Glowing Cyan Accent */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground font-heading">
              Smarter Operations, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-500">Measurable ROI</span>
            </h2>
            <div className="w-24 h-1 bg-cyan-500 dark:bg-cyan-400 mx-auto mt-4 rounded-full shadow-[0_0_12px_rgba(34,211,238,0.6)]" />
            <p className="text-muted-foreground text-base sm:text-lg mt-4 max-w-2xl mx-auto font-sans leading-relaxed">
              Purpose-built for operational speed and zero margin of error. Classic WMS delivers concrete financial returns from day 30.
            </p>
          </motion.div>
        </div>

        {/* Angled Dual-Panel Operational ROI Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden border border-border dark:border-white/10 shadow-xl dark:shadow-[0_0_50px_rgba(0,0,0,0.5)] backdrop-blur-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 relative">
            
            {/* Left Panel: (Traceability & Throughput) */}
            <div className="md:col-span-6 bg-card/90 dark:bg-gradient-to-br dark:from-zinc-900/95 dark:via-zinc-950/95 dark:to-black/95 p-8 sm:p-10 space-y-8 relative z-10 border-b md:border-b-0 md:border-r border-border dark:border-white/10">
              {/* Traceability */}
              <div className="space-y-3 group">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                    <Scan size={18} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-cyan-600 dark:text-cyan-400 font-heading">
                    Traceability
                  </h3>
                </div>
                <ul className="space-y-2 pl-2">
                  <li className="flex items-start gap-2 text-sm text-foreground font-sans">
                    <span className="text-cyan-600 dark:text-cyan-400 font-bold select-none">-</span>
                    <span>End-to-end inventory and order visibility</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-foreground font-sans">
                    <span className="text-cyan-600 dark:text-cyan-400 font-bold select-none">-</span>
                    <span>Fewer errors, faster recalls and stronger compliance</span>
                  </li>
                </ul>
              </div>

              <div className="w-full h-px bg-border dark:bg-white/10" />

              {/* Throughput */}
              <div className="space-y-3 group">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                    <Zap size={18} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-cyan-600 dark:text-cyan-400 font-heading">
                    Throughput
                  </h3>
                </div>
                <ul className="space-y-2 pl-2">
                  <li className="flex items-start gap-2 text-sm text-foreground font-sans">
                    <span className="text-cyan-600 dark:text-cyan-400 font-bold select-none">-</span>
                    <span>Faster picking, packing and dispatch</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-foreground font-sans">
                    <span className="text-cyan-600 dark:text-cyan-400 font-bold select-none">-</span>
                    <span>Process more orders with the same resources</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Panel: (Integration & Multi-Warehouse Dashboard) */}
            <div className="md:col-span-6 bg-blue-50/50 dark:bg-gradient-to-br dark:from-blue-950/80 dark:via-blue-900/60 dark:to-indigo-950/90 p-8 sm:p-10 space-y-8 relative z-10">
              {/* Decorative background gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 dark:from-blue-600/10 to-transparent pointer-events-none" />

              {/* Integration */}
              <div className="space-y-3 group relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 dark:bg-white/10 dark:border-white/20 flex items-center justify-center text-blue-600 dark:text-sky-300">
                    <Cpu size={18} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-blue-600 dark:text-sky-300 font-heading">
                    Integration
                  </h3>
                </div>
                <ul className="space-y-2 pl-2">
                  <li className="flex items-start gap-2 text-sm text-foreground font-sans">
                    <span className="text-blue-600 dark:text-sky-400 font-bold select-none">-</span>
                    <span>Connect ERP, e-commerce, carriers and automation</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-foreground font-sans">
                    <span className="text-blue-600 dark:text-sky-400 font-bold select-none">-</span>
                    <span>Reduce manual work and data-entry errors</span>
                  </li>
                </ul>
              </div>

              <div className="w-full h-px bg-border dark:bg-white/15" />

              {/* Multi-Warehouse Dashboard */}
              <div className="space-y-3 group relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 dark:bg-white/10 dark:border-white/20 flex items-center justify-center text-blue-600 dark:text-sky-300">
                    <Layers size={18} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-blue-600 dark:text-sky-300 font-heading">
                    Multi-Warehouse Dashboard
                  </h3>
                </div>
                <ul className="space-y-2 pl-2">
                  <li className="flex items-start gap-2 text-sm text-foreground font-sans">
                    <span className="text-blue-600 dark:text-sky-400 font-bold select-none">-</span>
                    <span>One unified view across all warehouse operations</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-foreground font-sans">
                    <span className="text-blue-600 dark:text-sky-400 font-bold select-none">-</span>
                    <span>Optimize inventory, capacity and decision-making</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </motion.div>

        {/* AWS Certified & AWS Qualified Software Partner Trust Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto mt-8 p-6 sm:p-8 rounded-3xl bg-card/90 dark:bg-gradient-to-r dark:from-zinc-950/90 dark:via-zinc-900/80 dark:to-amber-950/20 border border-border dark:border-amber-500/30 backdrop-blur-xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
            {/* Official AWS Qualified Software Badge Image - No white backdrop or border */}
            <img
              src="/aws-qualified-software.png"
              alt="AWS Qualified Software"
              className="h-16 sm:h-20 w-auto object-contain flex-shrink-0"
            />
            
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30 text-xs font-mono font-bold tracking-wider uppercase mb-1">
                <ShieldCheck size={13} className="text-amber-500 dark:text-amber-400" />
                <span>AWS Certified & Qualified Software</span>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-foreground font-heading">
                Classic WMS is an Officially AWS Certified Solution
              </h4>
              <p className="text-xs sm:text-sm text-muted-foreground max-w-xl font-sans leading-relaxed">
                Audited against Amazon Web Services' stringent architectural and security pillars. Guarantees 99.99% uptime, SOC2-ready data isolation, and global low-latency replication.
              </p>
            </div>
          </div>

          <Button asChild className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold px-6 h-12 rounded-xl shadow-lg shadow-amber-500/20 whitespace-nowrap group">
            <Link to="/contact">
              Explore AWS Deployment
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
