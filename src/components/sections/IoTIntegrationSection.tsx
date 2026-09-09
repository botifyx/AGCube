import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Radio, 
  Cpu, 
  Wifi, 
  Activity, 
  Zap, 
  ShieldCheck, 
  Globe, 
  BarChart3, 
  Layers, 
  CheckCircle2, 
  ArrowUpRight,
  Sparkles,
  Server,
  Boxes
} from 'lucide-react';

interface Capability {
  id: string;
  title: string;
  shortTag: string;
  icon: React.ElementType;
  color: string;
  lightBg: string;
  darkBg: string;
  borderColor: string;
  desc: string;
  metric: string;
  metricLabel: string;
  telemetry: string;
}

const capabilities: Capability[] = [
  {
    id: 'putaway',
    title: 'AI-Driven Putaway & Bin Optimization',
    shortTag: 'Neural Slotting',
    icon: Cpu,
    color: 'text-blue-600 dark:text-blue-400',
    lightBg: 'bg-blue-50/80 hover:bg-blue-50',
    darkBg: 'dark:bg-blue-950/20 dark:hover:bg-blue-950/30',
    borderColor: 'border-blue-500/30 hover:border-blue-500/50',
    desc: 'Dynamic 3D volumetric slotting groups SKUs by order affinity and pick velocity, reducing picker travel distance by up to 40%.',
    metric: '40% Less Travel',
    metricLabel: 'Travel Path Compression',
    telemetry: 'Autonomous SKU Heatmap Active',
  },
  {
    id: 'iot',
    title: 'IoT Integration (RFID, Beacons, Sensors)',
    shortTag: 'Sub-Meter RTLS',
    icon: Wifi,
    color: 'text-cyan-600 dark:text-cyan-400',
    lightBg: 'bg-cyan-50/80 hover:bg-cyan-50',
    darkBg: 'dark:bg-cyan-950/20 dark:hover:bg-cyan-950/30',
    borderColor: 'border-cyan-500/30 hover:border-cyan-500/50',
    desc: 'Continuous real-time asset tracking via active BLE beacons, RFID dock portals, and inline smart weight calibration sensors.',
    metric: '<0.5s Latency',
    metricLabel: 'Portal Passage Detection',
    telemetry: 'Multi-Protocol Sensor Fusion Synced',
  },
  {
    id: 'maintenance',
    title: 'Predictive Maintenance for Equipment',
    shortTag: 'Zero Downtime',
    icon: Activity,
    color: 'text-indigo-600 dark:text-indigo-400',
    lightBg: 'bg-indigo-50/80 hover:bg-indigo-50',
    darkBg: 'dark:bg-indigo-950/20 dark:hover:bg-indigo-950/30',
    borderColor: 'border-indigo-500/30 hover:border-indigo-500/50',
    desc: 'Continuous vibration, acoustic, and thermal telemetry across conveyors, sorters, and ASRS cranes alerts technicians before failure.',
    metric: '99.8% Uptime',
    metricLabel: 'Conveyor & Crane Availability',
    telemetry: 'Anomaly Detection Engine Active',
  },
  {
    id: 'labor',
    title: 'Real-Time Labor Management & Tracking',
    shortTag: 'Dynamic Waves',
    icon: Zap,
    color: 'text-emerald-600 dark:text-emerald-400',
    lightBg: 'bg-emerald-50/80 hover:bg-emerald-50',
    darkBg: 'dark:bg-emerald-950/20 dark:hover:bg-emerald-950/30',
    borderColor: 'border-emerald-500/30 hover:border-emerald-500/50',
    desc: 'Algorithmic task interleaving balances pick zones on the fly, dissolving order bottlenecks before they congest staging bays.',
    metric: '+28% Units/Hr',
    metricLabel: 'Picker Wave Throughput',
    telemetry: 'Staging Congestion: 0%',
  },
];

export function IoTIntegrationSection() {
  const [activeCap, setActiveCap] = useState<string>('putaway');

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden rounded-3xl my-12 border border-border/70 bg-gradient-to-b from-blue-50/30 via-background to-indigo-50/20 dark:from-zinc-950/40 dark:via-background dark:to-zinc-950/60 shadow-xl shadow-blue-500/5">
      {/* Ambient Lighting Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Top Header Badge & Narrative */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-mono font-bold tracking-wider uppercase mb-4 shadow-sm">
            <Radio size={14} className="text-blue-500 animate-pulse" />
            <span>Autonomous Edge Intelligence</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground font-heading leading-[1.15]">
            AI + IoT Integration <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 dark:from-blue-400 dark:via-indigo-300 dark:to-cyan-400">
              Transforming Physical Warehouse Operations.
            </span>
          </h2>

          <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed font-sans">
            Classic WMS isn't just a database; it's an intelligent engine. We leverage IoT sensors and AI optimization to drive unprecedented efficiency, millisecond visibility, and robotic synchronicity across your entire warehouse footprint.
          </p>
        </div>

        {/* Main 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Interactive Capability Cards */}
          <div className="lg:col-span-6 space-y-3.5">
            <div className="flex items-center justify-between pb-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                <Sparkles size={14} className="text-blue-500" />
                Core Cognitive Capabilities
              </span>
              <span className="text-[11px] font-mono text-muted-foreground hidden sm:inline">
                Click to inspect telemetry
              </span>
            </div>

            {capabilities.map((cap) => {
              const Icon = cap.icon;
              const isSelected = activeCap === cap.id;

              return (
                <div
                  key={cap.id}
                  onClick={() => setActiveCap(cap.id)}
                  className={`cursor-pointer rounded-2xl p-4.5 sm:p-5 transition-all duration-300 border backdrop-blur-md relative overflow-hidden group ${
                    isSelected
                      ? 'bg-card dark:bg-zinc-900 border-blue-500 shadow-lg shadow-blue-500/10 ring-1 ring-blue-500/30'
                      : 'bg-card/70 dark:bg-zinc-900/50 border-border/80 hover:border-blue-500/40 hover:bg-card/90 shadow-sm'
                  }`}
                >
                  {/* Active Indicator Bar */}
                  {isSelected && (
                    <motion.div
                      layoutId="activePillIndicator"
                      className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-blue-500 via-indigo-500 to-cyan-500"
                    />
                  )}

                  <div className="flex items-start gap-4">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border transition-all ${
                      isSelected
                        ? 'bg-blue-500 text-white border-blue-400 shadow-md shadow-blue-500/30 scale-105'
                        : 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20 group-hover:scale-105'
                    }`}>
                      <Icon size={20} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h4 className="font-bold text-foreground font-heading text-sm sm:text-base group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {cap.title}
                        </h4>
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 shrink-0">
                          {cap.shortTag}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-muted-foreground font-sans leading-relaxed">
                        {cap.desc}
                      </p>

                      {/* Expandable Telemetry readout when selected */}
                      {isSelected && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-3 pt-3 border-t border-border/70 flex flex-wrap items-center justify-between gap-2 text-xs font-mono"
                        >
                          <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                            <span>{cap.telemetry}</span>
                          </div>
                          <div className="font-bold text-foreground bg-muted/60 px-2 py-0.5 rounded border border-border/60">
                            {cap.metric}
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: High-Tech Bento Telemetry Matrix (The 4 Key Metrics) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center justify-between pb-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                <BarChart3 size={14} className="text-cyan-500" />
                Live Operational Telemetry
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Continuous Feed
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Card 1: 15% Efficiency Gain */}
              <div className="p-6 rounded-3xl bg-card/90 dark:bg-zinc-900/80 border border-border/90 hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-xl group backdrop-blur-xl relative overflow-hidden flex flex-col justify-between min-h-[220px]">
                <div className="absolute top-0 right-0 w-36 h-36 bg-blue-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-blue-500/20 transition-all" />
                
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-11 h-11 rounded-2xl bg-blue-500/10 border border-blue-500/25 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform shadow-sm">
                      <Zap size={22} />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                      Throughput
                    </span>
                  </div>

                  <div className="text-3xl sm:text-4xl font-black text-foreground font-heading tracking-tight flex items-baseline gap-1">
                    <span>15%</span>
                    <span className="text-xs font-bold text-emerald-500 font-mono tracking-normal">▲ GAIN</span>
                  </div>
                  <div className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mt-0.5 font-mono">
                    Efficiency Gain
                  </div>
                </div>

                {/* Animated Mini Sparkline Visual */}
                <div className="my-2 pt-2">
                  <div className="flex items-end gap-1 h-8 px-1">
                    {[35, 45, 40, 60, 55, 75, 70, 88, 85, 100].map((val, idx) => (
                      <div 
                        key={idx} 
                        className="flex-1 bg-gradient-to-t from-blue-500/30 to-blue-500 rounded-t-sm transition-all duration-500 group-hover:brightness-125"
                        style={{ height: `${val}%` }}
                      />
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-border/60 flex items-center justify-between text-[11px] text-muted-foreground font-mono">
                  <span>Wave Path Compression</span>
                  <span className="text-emerald-500 font-semibold">Active</span>
                </div>
              </div>

              {/* Card 2: 99.9% Inventory Accuracy */}
              <div className="p-6 rounded-3xl bg-card/90 dark:bg-zinc-900/80 border border-border/90 hover:border-cyan-500/50 transition-all duration-300 shadow-lg hover:shadow-xl group backdrop-blur-xl relative overflow-hidden flex flex-col justify-between min-h-[220px]">
                <div className="absolute top-0 right-0 w-36 h-36 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-cyan-500/20 transition-all" />
                
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-11 h-11 rounded-2xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform shadow-sm">
                      <ShieldCheck size={22} />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                      Precision
                    </span>
                  </div>

                  <div className="text-3xl sm:text-4xl font-black text-foreground font-heading tracking-tight flex items-baseline gap-1">
                    <span>99.9%</span>
                    <span className="text-xs font-bold text-cyan-500 font-mono tracking-normal">VERIFIED</span>
                  </div>
                  <div className="text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mt-0.5 font-mono">
                    Inventory Accuracy
                  </div>
                </div>

                {/* Progress bar visual */}
                <div className="my-2 pt-2">
                  <div className="w-full bg-muted/60 h-2 rounded-full overflow-hidden p-0.5 border border-border/40">
                    <div className="bg-gradient-to-r from-cyan-500 to-emerald-500 h-full rounded-full w-[99.9%]" />
                  </div>
                  <div className="flex justify-between text-[10px] font-mono text-muted-foreground mt-1.5">
                    <span>Target: 99.5%</span>
                    <span className="text-emerald-500 font-bold">Delta: 0.01%</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-border/60 flex items-center justify-between text-[11px] text-muted-foreground font-mono">
                  <span>RFID Continuous Cycle</span>
                  <span className="text-cyan-500 font-semibold">Synced</span>
                </div>
              </div>

              {/* Card 3: Multi Warehouse Support */}
              <div className="p-6 rounded-3xl bg-card/90 dark:bg-zinc-900/80 border border-border/90 hover:border-indigo-500/50 transition-all duration-300 shadow-lg hover:shadow-xl group backdrop-blur-xl relative overflow-hidden flex flex-col justify-between min-h-[220px]">
                <div className="absolute top-0 right-0 w-36 h-36 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-indigo-500/20 transition-all" />
                
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-11 h-11 rounded-2xl bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform shadow-sm">
                      <Globe size={22} />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                      Global Mesh
                    </span>
                  </div>

                  <div className="text-3xl sm:text-4xl font-black text-foreground font-heading tracking-tight">
                    Multi
                  </div>
                  <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mt-0.5 font-mono">
                    Warehouse Support
                  </div>
                </div>

                {/* Node Status Pills */}
                <div className="my-2 pt-2 flex flex-wrap gap-1.5">
                  {[
                    { node: 'ORD-01', ping: '12ms' },
                    { node: 'FRA-02', ping: '18ms' },
                    { node: 'SIN-03', ping: '22ms' },
                  ].map((n) => (
                    <span key={n.node} className="text-[10px] font-mono px-2 py-1 rounded-md bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 flex items-center gap-1 font-semibold">
                      <span className="w-1 h-1 rounded-full bg-emerald-500" />
                      {n.node} <span className="opacity-60">{n.ping}</span>
                    </span>
                  ))}
                </div>

                <div className="pt-3 border-t border-border/60 flex items-center justify-between text-[11px] text-muted-foreground font-mono">
                  <span>Cross-Dock Mesh Sync</span>
                  <span className="text-indigo-500 font-semibold">&lt;20ms</span>
                </div>
              </div>

              {/* Card 4: Real Time Analytics */}
              <div className="p-6 rounded-3xl bg-card/90 dark:bg-zinc-900/80 border border-border/90 hover:border-amber-500/50 transition-all duration-300 shadow-lg hover:shadow-xl group backdrop-blur-xl relative overflow-hidden flex flex-col justify-between min-h-[220px]">
                <div className="absolute top-0 right-0 w-36 h-36 bg-amber-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-amber-500/20 transition-all" />
                
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-11 h-11 rounded-2xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform shadow-sm">
                      <BarChart3 size={22} />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                      Live Stream
                    </span>
                  </div>

                  <div className="text-3xl sm:text-4xl font-black text-foreground font-heading tracking-tight">
                    Real
                  </div>
                  <div className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider mt-0.5 font-mono">
                    Time Analytics
                  </div>
                </div>

                {/* Animated Waveform Visualizer */}
                <div className="my-2 pt-2">
                  <div className="flex items-center justify-between gap-1.5 h-6 px-1">
                    {[16, 24, 14, 28, 20, 32, 22, 18, 26, 30].map((h, i) => (
                      <span 
                        key={i} 
                        className="flex-1 bg-amber-500/80 rounded-full animate-pulse"
                        style={{ 
                          height: `${h}px`,
                          animationDelay: `${i * 120}ms`,
                          animationDuration: '1.2s'
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-border/60 flex items-center justify-between text-[11px] text-muted-foreground font-mono">
                  <span>25,400 Events / Sec</span>
                  <span className="text-amber-500 font-semibold">Active</span>
                </div>
              </div>

            </div>

            {/* Bottom Active IoT Hardware Gateway Ribbon */}
            <div className="p-4 rounded-2xl bg-card/80 dark:bg-zinc-900/60 border border-border/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-muted-foreground backdrop-blur-md shadow-sm">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span className="font-bold text-foreground">Edge Gateway:</span>
                <span>42 Industrial Nodes Connected</span>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                  AWS IoT Core
                </span>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  Zero Latency
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
