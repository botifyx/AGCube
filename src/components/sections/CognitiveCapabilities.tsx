import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Network, 
  Activity, 
  Bot, 
  LayoutDashboard, 
  RefreshCw, 
  Crosshair, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Radio,
  SlidersHorizontal,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface CognitiveItem {
  id: string;
  num: string;
  title: string;
  bullets: string[];
  icon: typeof Network;
  statusTag: string;
  liveMetric: string;
}

const cognitiveCapabilities: CognitiveItem[] = [
  {
    id: 'digital-twin',
    num: '01',
    title: 'AI Business Digital Twin',
    bullets: [
      'Mirrors inventory, flow and resources in real time',
      'Tests decisions before operational change'
    ],
    icon: Network,
    statusTag: 'Dynamic Emulation',
    liveMetric: 'Sub-second sync across 500k+ SKUs'
  },
  {
    id: 'zone-efficiency',
    num: '02',
    title: 'AI Zone Efficiency Engine',
    bullets: [
      'Optimizes slotting, labor and travel by zone',
      'Detects congestion and rebalances work'
    ],
    icon: Activity,
    statusTag: 'Autonomous Slotting',
    liveMetric: '42% reduced picker transit distance'
  },
  {
    id: 'ai-assistant',
    num: '03',
    title: 'AI Assistant',
    bullets: [
      'Natural-language guidance for tasks and exceptions',
      'Turns live data into faster decisions'
    ],
    icon: Bot,
    statusTag: 'Conversational Ops',
    liveMetric: 'Hands-free voice & RF terminal queries'
  },
  {
    id: 'command-center',
    num: '04',
    title: 'Command Center',
    bullets: [
      'Unifies orders, resources, exceptions and KPIs',
      'Real-time alerts with drill-down action'
    ],
    icon: LayoutDashboard,
    statusTag: 'Unified Telemetry',
    liveMetric: '360° global multi-node visibility'
  },
  {
    id: 'self-healing',
    num: '05',
    title: 'Automated Self-Healing',
    bullets: [
      'Detects workflow and integration disruption',
      'Guides recovery and reduces downtime'
    ],
    icon: RefreshCw,
    statusTag: 'Fault Tolerance',
    liveMetric: '99.99% automated exception resolution'
  },
  {
    id: 'asset-visibility',
    num: '06',
    title: 'Indoor Asset Visibility',
    bullets: [
      'Locates people, equipment and inventory indoors',
      'Improves routing, safety and utilization'
    ],
    icon: Crosshair,
    statusTag: 'RTLS & BLE Beacons',
    liveMetric: '±0.5m indoor positioning accuracy'
  }
];

export function CognitiveCapabilities() {
  const [activeItem, setActiveItem] = useState<string>('digital-twin');

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-background via-muted/30 to-background dark:bg-[#070b12] border-y border-border dark:border-cyan-500/20 text-foreground">
      {/* High-tech Ambient Background Grids and Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(#00f0ff_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] dark:opacity-[0.07] pointer-events-none" />
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-blue-600/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-64 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Stylized Title Matching Global Standards */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/30 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider mb-6 shadow-[0_0_15px_rgba(6,182,212,0.15)] font-mono">
                Next-Gen Warehouse Intelligence
              </Badge>

              {/* Title using Title Case matching AG Cube typography standard */}
              <h2 className="text-3xl sm:text-4xl xl:text-5xl font-black tracking-tight text-foreground font-heading leading-[1.1]">
                Key Cognitive <br />
                Capabilities of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600 dark:from-cyan-400 dark:via-sky-300 dark:to-blue-500 drop-shadow-sm">
                  Classic WMS
                </span>
              </h2>

              {/* Glowing Cyan Accent Bar */}
              <div className="w-20 h-1.5 bg-cyan-500 dark:bg-cyan-400 rounded-full mt-6 shadow-[0_0_15px_rgba(34,211,238,0.7)]" />

              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mt-6 font-sans">
                Classic WMS transcends basic inventory recording. It functions as an autonomous operational mind that anticipates bottlenecks, synchronizes labor, and continuously self-heals warehouse execution.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <Button 
                  asChild
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold rounded-xl shadow-lg shadow-cyan-500/25 h-12 px-6 group"
                >
                  <Link to="/contact">
                    Request System Demo
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>

              {/* Live Telemetry Ping Box */}
              <div className="mt-8 p-4 rounded-2xl bg-card/80 dark:bg-zinc-900/60 border border-border dark:border-cyan-500/20 backdrop-blur-md shadow-sm">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 mb-1">
                  <span className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-ping" />
                  <span>Cognitive Core Status: Online</span>
                </div>
                <div className="text-[11px] text-muted-foreground">
                  All 6 cognitive modules active with sub-second execution feedback.
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: 6 Cognitive Capability Cards (01 to 06) */}
          <div className="lg:col-span-8 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cognitiveCapabilities.map((item, index) => {
                const Icon = item.icon;
                const isSelected = activeItem === item.id;

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    onClick={() => setActiveItem(item.id)}
                    className={`relative rounded-2xl p-6 transition-all duration-300 cursor-pointer overflow-hidden border backdrop-blur-xl group ${
                      isSelected
                        ? 'bg-card dark:bg-gradient-to-br dark:from-cyan-950/40 dark:via-zinc-900/90 dark:to-blue-950/30 border-cyan-500/60 shadow-[0_0_30px_rgba(6,182,212,0.15)] ring-1 ring-cyan-500/30'
                        : 'bg-card/70 dark:bg-zinc-950/60 border-border dark:border-zinc-800/80 hover:border-cyan-500/40 hover:bg-card dark:hover:bg-zinc-900/70 shadow-sm'
                    }`}
                  >
                    {/* Top Status Bar with Module Tag */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-bold font-mono tracking-wider uppercase px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                        {item.statusTag}
                      </span>
                      <div className={`p-2 rounded-xl transition-all ${
                        isSelected 
                          ? 'bg-cyan-500/20 text-cyan-600 dark:text-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.4)]' 
                          : 'bg-muted dark:bg-zinc-900 text-muted-foreground dark:text-zinc-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 group-hover:scale-110'
                      }`}>
                        <Icon size={18} />
                      </div>
                    </div>

                    {/* Number and Content Layout */}
                    <div className="flex items-start gap-4 sm:gap-5">
                      {/* Bold Glowing Cyan Number (01, 02, etc.) */}
                      <div className="text-4xl sm:text-5xl font-black text-cyan-600 dark:text-cyan-400 tracking-tighter select-none font-mono drop-shadow-sm flex-shrink-0 w-16">
                        {item.num}
                      </div>

                      {/* Content with Left Divider Line */}
                      <div className="border-l border-cyan-500/30 pl-4 sm:pl-5 space-y-2 flex-grow">
                        <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors leading-snug font-heading">
                          {item.title}
                        </h3>

                        {/* Bullet Points */}
                        <ul className="space-y-1.5 pt-1">
                          {item.bullets.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground dark:text-zinc-300 leading-relaxed font-sans">
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400 mt-1.5 flex-shrink-0 shadow-[0_0_6px_rgba(34,211,238,0.8)]" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Interactive Live Metric Callout */}
                    <div className="mt-5 pt-3 border-t border-border/80 dark:border-zinc-800/80 flex items-center justify-between text-xs">
                      <span className="text-muted-foreground font-mono text-[11px]">
                        KPI: <span className="text-cyan-600 dark:text-cyan-400 font-semibold">{item.liveMetric}</span>
                      </span>
                      <span className="text-cyan-600 dark:text-cyan-400 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                        Inspect
                        <ChevronRight size={12} />
                      </span>
                    </div>

                    {/* Subtle corner glow accent */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-cyan-500/10 transition-colors" />
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Enterprise CTA Banner */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-card/80 dark:bg-gradient-to-r dark:from-cyan-950/30 dark:via-zinc-900/60 dark:to-blue-950/30 border border-border dark:border-cyan-500/30 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4 mt-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 flex-shrink-0">
                  <Sparkles size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground font-heading">Need a customized cognitive architecture for your fulfillment network?</h4>
                  <p className="text-xs text-muted-foreground font-sans">Our engineers evaluate facility layouts, RF telemetry, and throughput models.</p>
                </div>
              </div>
              <Button asChild variant="outline" className="border-cyan-500/40 hover:bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 rounded-xl whitespace-nowrap font-semibold">
                <Link to="/contact">Schedule Architecture Call</Link>
              </Button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
