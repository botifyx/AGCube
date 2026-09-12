import { motion } from 'motion/react';
import {
  Truck,
  ArrowLeftRight,
  ScanBarcode,
  ClipboardCheck,
  Cpu,
  ArrowRight,
  CheckCircle2,
  Boxes,
  Layers,
  Sparkles,
} from 'lucide-react';

interface StageColumn {
  id: string;
  step: string;
  title: string;
  icon: any;
  color: {
    badge: string;
    border: string;
    hoverBorder: string;
    bgGlow: string;
    iconBg: string;
    iconColor: string;
    accentBar: string;
    bulletDot: string;
    subcardBg: string;
  };
  items: Array<
    | string
    | {
        heading: string;
        subItems: string[];
      }
  >;
}

const stages: StageColumn[] = [
  {
    id: 'inbound',
    step: 'STAGE 01',
    title: 'INBOUND',
    icon: Truck,
    color: {
      badge: 'border-amber-500/40 text-amber-600 dark:text-amber-400 bg-amber-500/10',
      border: 'border-amber-500/25 dark:border-amber-500/20',
      hoverBorder: 'hover:border-amber-500/60 dark:hover:border-amber-400/50',
      bgGlow: 'from-amber-500/[0.08] via-amber-500/[0.02] to-transparent',
      iconBg: 'bg-amber-500/15 dark:bg-amber-500/20 border-amber-500/30',
      iconColor: 'text-amber-600 dark:text-amber-400',
      accentBar: 'bg-gradient-to-r from-amber-500 to-orange-500',
      bulletDot: 'bg-amber-500 dark:bg-amber-400',
      subcardBg: 'bg-amber-500/5 border-amber-500/20',
    },
    items: [
      'Smart Putaway Strategies',
      'Optimization of Goods Receipt',
      'Internal Routing',
      'Cross-Docking',
      "Palletization of SKU's",
      'HHT based on Receiving and Binning',
      'Seamless tracking of SKUs/MHE',
      'Batch/Serial/Variant management',
      'Back Order Processing',
      'Configurable Barcode Generation Process',
    ],
  },
  {
    id: 'transfers',
    step: 'STAGE 02',
    title: 'TRANSFERS',
    icon: ArrowLeftRight,
    color: {
      badge: 'border-sky-500/40 text-sky-600 dark:text-sky-400 bg-sky-500/10',
      border: 'border-sky-500/25 dark:border-sky-500/20',
      hoverBorder: 'hover:border-sky-500/60 dark:hover:border-sky-400/50',
      bgGlow: 'from-sky-500/[0.08] via-sky-500/[0.02] to-transparent',
      iconBg: 'bg-sky-500/15 dark:bg-sky-500/20 border-sky-500/30',
      iconColor: 'text-sky-600 dark:text-sky-400',
      accentBar: 'bg-gradient-to-r from-sky-500 to-blue-500',
      bulletDot: 'bg-sky-500 dark:bg-sky-400',
      subcardBg: 'bg-sky-500/5 border-sky-500/20',
    },
    items: [
      {
        heading: 'Supports Multiple Transfer Methods',
        subItems: [
          'I. Inhouse',
          'II. Warehouse to Warehouse',
          'III. Stock Type to Stock Type',
          'IV. SKU to SKU',
        ],
      },
      'HHT based Bin to Bin Transfers',
      'One Step and Two Step Transfers',
      'Supports both individual and Mass transfer Process',
      'Ability to Schedule the transfers',
    ],
  },
  {
    id: 'outbound',
    step: 'STAGE 03',
    title: 'OUTBOUND',
    icon: ScanBarcode,
    color: {
      badge: 'border-violet-500/40 text-violet-600 dark:text-violet-400 bg-violet-500/10',
      border: 'border-violet-500/25 dark:border-violet-500/20',
      hoverBorder: 'hover:border-violet-500/60 dark:hover:border-violet-400/50',
      bgGlow: 'from-violet-500/[0.08] via-violet-500/[0.02] to-transparent',
      iconBg: 'bg-violet-500/15 dark:bg-violet-500/20 border-violet-500/30',
      iconColor: 'text-violet-600 dark:text-violet-400',
      accentBar: 'bg-gradient-to-r from-violet-500 to-indigo-500',
      bulletDot: 'bg-violet-500 dark:bg-violet-400',
      subcardBg: 'bg-violet-500/5 border-violet-500/20',
    },
    items: [
      'Smart Picking strategies',
      'Splitting / Kitting',
      'HHT enabled Picking and Quality',
      'Resource Utilization',
      'Picking Order Optimization',
      'Reverse Logistics',
      'Delivery Management',
    ],
  },
  {
    id: 'stock-count',
    step: 'STAGE 04',
    title: 'STOCK COUNT',
    icon: ClipboardCheck,
    color: {
      badge: 'border-emerald-500/40 text-emerald-600 dark:text-emerald-400 bg-emerald-500/10',
      border: 'border-emerald-500/25 dark:border-emerald-500/20',
      hoverBorder: 'hover:border-emerald-500/60 dark:hover:border-emerald-400/50',
      bgGlow: 'from-emerald-500/[0.08] via-emerald-500/[0.02] to-transparent',
      iconBg: 'bg-emerald-500/15 dark:bg-emerald-500/20 border-emerald-500/30',
      iconColor: 'text-emerald-600 dark:text-emerald-400',
      accentBar: 'bg-gradient-to-r from-emerald-500 to-teal-500',
      bulletDot: 'bg-emerald-500 dark:bg-emerald-400',
      subcardBg: 'bg-emerald-500/5 border-emerald-500/20',
    },
    items: [
      {
        heading: 'Support Multiple Stock Count Methods',
        subItems: ['Perpetual', 'Periodic', 'ABC'],
      },
      'HHT aided Stock Count Process',
      'Workflow mechanism for Write Off',
      'Allows Recount, Skip process',
    ],
  },
  {
    id: 'key-features',
    step: 'STAGE 05',
    title: 'KEY FEATURES',
    icon: Cpu,
    color: {
      badge: 'border-cyan-500/40 text-cyan-600 dark:text-cyan-400 bg-cyan-500/10',
      border: 'border-cyan-500/25 dark:border-cyan-500/20',
      hoverBorder: 'hover:border-cyan-500/60 dark:hover:border-cyan-400/50',
      bgGlow: 'from-cyan-500/[0.08] via-cyan-500/[0.02] to-transparent',
      iconBg: 'bg-cyan-500/15 dark:bg-cyan-500/20 border-cyan-500/30',
      iconColor: 'text-cyan-600 dark:text-cyan-400',
      accentBar: 'bg-gradient-to-r from-cyan-500 to-blue-500',
      bulletDot: 'bg-cyan-500 dark:bg-cyan-400',
      subcardBg: 'bg-cyan-500/5 border-cyan-500/20',
    },
    items: [
      "Ready built API's for ERP, LMD, OMS etc.,",
      'Smart Sensor - IoT integration compatibility',
      'ML based Putaway and Picking Strategies',
      'AI/ML aided inventory, space, maintenance projections',
      "API's to aid IoT, XR/VR, 3rd parties",
      "Custom Add-on's to support key business areas",
    ],
  },
];

export function WMSSnapshot() {
  return (
    <section className="relative overflow-hidden py-8">
      {/* Ambient background subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        {/* Section Header matching the slide identity */}
        <div className="mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4"
          >
            {/* Slide mark: Cyan & Gray vertical badge */}
            <div className="flex flex-col w-2 h-10 sm:h-12 rounded-full overflow-hidden shadow-sm shadow-cyan-500/30 shrink-0">
              <div className="h-1/2 w-full bg-cyan-500 dark:bg-cyan-400" />
              <div className="h-1/2 w-full bg-muted-foreground/60" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-foreground font-heading">
                  CLASSIC WMS <span className="text-muted-foreground font-light">–</span>{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 dark:from-orange-400 dark:via-amber-400 dark:to-orange-500">
                    SNAPSHOT
                  </span>
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground font-mono mt-1 tracking-wide">
                END-TO-END OPERATIONAL LIFECYCLE & CORE FUNCTIONAL ARCHITECTURE
              </p>
            </div>
          </motion.div>
        </div>

        {/* Tabular 5-Column Connected Pipeline */}
        <div className="relative">
          {/* Connecting Track on Desktop */}
          <div className="hidden lg:block absolute top-20 left-12 right-12 h-0.5 bg-gradient-to-r from-amber-500/30 via-violet-500/30 to-cyan-500/30 -z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-4 xl:gap-5 items-stretch relative z-10">
            {stages.map((col, idx) => {
              const IconComponent = col.icon;
              return (
                <motion.div
                  key={col.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className={`group relative flex flex-col rounded-2xl border ${col.color.border} ${col.color.hoverBorder} bg-gradient-to-b ${col.color.bgGlow} bg-card/75 dark:bg-zinc-950/70 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5`}
                >
                  {/* Top glowing accent stripe */}
                  <div className={`h-1.5 w-full rounded-t-2xl ${col.color.accentBar}`} />

                  {/* Card Header */}
                  <div className="p-5 pb-4 border-b border-border/60 dark:border-white/10 flex flex-col items-center text-center relative">
                    {/* Stage number pill */}
                    <span className="text-[10px] font-mono font-bold tracking-widest text-muted-foreground uppercase mb-2">
                      {col.step}
                    </span>

                    {/* Icon container */}
                    <div
                      className={`w-14 h-14 rounded-2xl ${col.color.iconBg} border flex items-center justify-center ${col.color.iconColor} shadow-md group-hover:scale-110 transition-transform duration-300 mb-3`}
                    >
                      <IconComponent className="w-7 h-7" />
                    </div>

                    {/* Dashed Title Badge matching slide header */}
                    <div
                      className={`px-3.5 py-1 rounded-lg border-2 border-dashed ${col.color.badge} font-mono font-bold text-xs sm:text-sm tracking-wider uppercase shadow-xs`}
                    >
                      {col.title}
                    </div>

                    {/* Right-pointing Flow Indicator for desktop */}
                    {idx < stages.length - 1 && (
                      <div className="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-background border border-border dark:border-white/20 items-center justify-center text-muted-foreground/70 shadow-sm">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </div>

                  {/* Card Body - Content List */}
                  <div className="p-5 flex-1 flex flex-col justify-between text-left space-y-3">
                    <ul className="space-y-2.5">
                      {col.items.map((item, itemIdx) => {
                        if (typeof item === 'string') {
                          return (
                            <li
                              key={itemIdx}
                              className="flex items-start gap-2.5 text-xs sm:text-[13px] leading-snug text-foreground/90 font-medium group/item"
                            >
                              <span
                                className={`w-1.5 h-1.5 rounded-full ${col.color.bulletDot} shrink-0 mt-1.5 shadow-[0_0_6px_currentColor]`}
                              />
                              <span className="group-hover/item:text-foreground transition-colors">
                                {item}
                              </span>
                            </li>
                          );
                        }

                        // Structured Subsection (e.g., Transfer Methods, Count Methods)
                        return (
                          <li
                            key={itemIdx}
                            className={`p-3 rounded-xl border ${col.color.subcardBg} space-y-2 my-1 shadow-xs`}
                          >
                            <div className="flex items-center gap-2">
                              <Layers className={`w-3.5 h-3.5 ${col.color.iconColor}`} />
                              <span className="text-xs font-bold text-foreground font-heading">
                                {item.heading}
                              </span>
                            </div>
                            <ul className="pl-2 space-y-1.5 border-l-2 border-border/70 dark:border-white/10 ml-1.5">
                              {item.subItems.map((sub, sIdx) => (
                                <li
                                  key={sIdx}
                                  className="text-[11px] sm:text-xs text-muted-foreground font-sans pl-2 flex items-center gap-1.5"
                                >
                                  <span className="w-1 h-1 rounded-full bg-muted-foreground/60" />
                                  <span>{sub}</span>
                                </li>
                              ))}
                            </ul>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* Bottom micro-indicator */}
                  <div className="px-5 py-2.5 border-t border-border/40 dark:border-white/5 bg-muted/20 rounded-b-2xl flex items-center justify-between text-[11px] text-muted-foreground font-mono">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-muted-foreground/60" /> Verified
                    </span>
                    <span className="opacity-60">P-{idx + 1}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Continuous Workflow Directional Rail matching the slide */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 relative"
          >
            <div className="relative w-full h-11 rounded-xl bg-gradient-to-r from-cyan-600/15 via-blue-600/20 to-cyan-600/15 dark:from-cyan-500/15 dark:via-blue-500/20 dark:to-cyan-500/15 border border-cyan-500/30 dark:border-cyan-500/25 flex items-center justify-between px-4 sm:px-8 shadow-md shadow-cyan-500/5">
              {/* Left Arrow */}
              <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-mono text-xs font-bold">
                <span className="text-base sm:text-lg">◀</span>
                <span className="hidden sm:inline uppercase tracking-widest text-[11px]">
                  Continuous Inflow
                </span>
              </div>

              {/* Center Banner Text */}
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide text-foreground/90 font-sans">
                <Sparkles className="w-4 h-4 text-cyan-500 dark:text-cyan-400 shrink-0 animate-pulse" />
                <span className="text-center truncate">
                  Synchronized Real-Time Execution • Autonomous Governance • Complete Lifecycle
                </span>
              </div>

              {/* Right Arrow */}
              <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-mono text-xs font-bold">
                <span className="hidden sm:inline uppercase tracking-widest text-[11px]">
                  Outbound & Intelligence
                </span>
                <span className="text-base sm:text-lg">▶</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
