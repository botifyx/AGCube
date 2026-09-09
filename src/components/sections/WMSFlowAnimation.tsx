import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ScanBarcode, 
  Boxes, 
  Zap, 
  PackageCheck, 
  Truck, 
  Activity, 
  Cpu, 
  ShieldCheck, 
  Check, 
  ArrowRight,
  Radio,
  Play,
  Pause,
  RotateCcw
} from 'lucide-react';

interface WorkflowNode {
  id: string;
  stepNumber: string;
  title: string;
  subtitle: string;
  kpi: string;
  kpiLabel: string;
  telemetry: string;
  hardware: string;
  icon: typeof ScanBarcode;
  color: string;
  glowColor: string;
  x: number; // percentage in canvas
  y: number; // percentage in canvas
}

const workflowNodes: WorkflowNode[] = [
  {
    id: 'receiving',
    stepNumber: '01',
    title: 'Inbound Dock & AI Scan',
    subtitle: 'Sub-second RFID & barcode ASN decode',
    kpi: '0.04s',
    kpiLabel: 'Decode Latency',
    telemetry: 'ASN #9842 Verified • Pallet Tag Scanned',
    hardware: 'RFID Portal • Optical Camera Array',
    icon: ScanBarcode,
    color: 'from-blue-500 to-cyan-500',
    glowColor: 'rgba(59, 130, 246, 0.4)',
    x: 18,
    y: 18,
  },
  {
    id: 'storage',
    stepNumber: '02',
    title: 'Dynamic ASRS Slotting',
    subtitle: 'Heuristic high-bay bin placement',
    kpi: '99.9%',
    kpiLabel: 'Cube Utilization',
    telemetry: 'Aisle C-12 • High-Velocity Bay Slotting',
    hardware: 'Automated Cranes • Gravity Flow Racks',
    icon: Boxes,
    color: 'from-cyan-500 to-teal-500',
    glowColor: 'rgba(6, 182, 212, 0.4)',
    x: 82,
    y: 34,
  },
  {
    id: 'picking',
    stepNumber: '03',
    title: 'AI Wave & Batch Picking',
    subtitle: 'Autonomous AMR & picker route routing',
    kpi: '+38%',
    kpiLabel: 'Speed Boost',
    telemetry: 'Wave #401 Active • Shortest Path Calibrated',
    hardware: 'AMR Fleet • Pick-to-Light • Voice RF',
    icon: Zap,
    color: 'from-amber-500 to-orange-500',
    glowColor: 'rgba(245, 158, 11, 0.4)',
    x: 20,
    y: 52,
  },
  {
    id: 'packing',
    stepNumber: '04',
    title: 'Automated QA & Pack',
    subtitle: '3D volumetric scan & weigh verification',
    kpi: '100%',
    kpiLabel: 'Accuracy',
    telemetry: 'Weight: 2.38kg • Box Dimension 32x22x14cm',
    hardware: 'Inline Checkweigher • Auto-Taper',
    icon: PackageCheck,
    color: 'from-emerald-500 to-teal-500',
    glowColor: 'rgba(16, 185, 129, 0.4)',
    x: 80,
    y: 70,
  },
  {
    id: 'dispatch',
    stepNumber: '05',
    title: 'Multi-Carrier Dispatch',
    subtitle: 'Dynamic rate shopping & trailer manifest',
    kpi: 'Instant',
    kpiLabel: 'EDI Dispatch',
    telemetry: 'Carrier Assigned: Priority Next-Day Air',
    hardware: 'Cross-Dock Sorter • Telescopic Conveyor',
    icon: Truck,
    color: 'from-orange-500 to-red-500',
    glowColor: 'rgba(239, 68, 68, 0.4)',
    x: 22,
    y: 86,
  },
];

export function WMSFlowAnimation() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [pulseKey, setPulseKey] = useState(0);

  // Auto-cycle through execution nodes
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % workflowNodes.length);
      setPulseKey((k) => k + 1);
    }, 2800);

    return () => clearInterval(interval);
  }, [isPaused]);

  const currentNode = workflowNodes[activeStep];
  const progressPercent = ((activeStep + 1) / workflowNodes.length) * 100;

  return (
    <div 
      className="relative w-full rounded-3xl bg-card/90 dark:bg-zinc-950/90 border border-border dark:border-white/10 shadow-2xl backdrop-blur-2xl overflow-hidden p-5 sm:p-7 flex flex-col justify-between"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Digital Grid & Ambient Warehouse Telemetry Glows */}
      <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />
      <div 
        className="absolute w-72 h-72 rounded-full blur-[100px] pointer-events-none transition-all duration-1000 -z-10"
        style={{
          backgroundColor: currentNode.glowColor,
          left: `${currentNode.x}%`,
          top: `${currentNode.y}%`,
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Top Telemetry Header Bar */}
      <div className="relative z-10 flex items-center justify-between pb-4 border-b border-border/80">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
            <Activity size={16} className="animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-bold font-heading text-foreground">
                Autonomous WMS Execution Flow
              </span>
              <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                Live Stream
              </span>
            </div>
            <p className="text-[11px] text-muted-foreground font-mono">
              Real-Time Conveyor, Robotics & Sorting Telemetry
            </p>
          </div>
        </div>

        {/* Play / Pause Toggle Button */}
        <button
          onClick={() => setIsPaused(!isPaused)}
          className="p-1.5 sm:p-2 rounded-xl bg-muted/60 hover:bg-muted border border-border text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5 text-xs font-mono"
          title={isPaused ? "Resume Auto Flow" : "Pause to Inspect"}
        >
          {isPaused ? (
            <>
              <Play size={13} className="text-emerald-500 fill-emerald-500" />
              <span className="hidden sm:inline">Resume</span>
            </>
          ) : (
            <>
              <Pause size={13} className="text-amber-500" />
              <span className="hidden sm:inline">Inspect</span>
            </>
          )}
        </button>
      </div>

      {/* Interactive Circuit Canvas Area */}
      <div className="relative w-full h-[360px] sm:h-[420px] my-4">
        
        {/* SVG High-Tech Dual Conveyor Rails */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="25%" stopColor="#06b6d4" />
              <stop offset="50%" stopColor="#f59e0b" />
              <stop offset="75%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#f97316" />
            </linearGradient>
            
            {/* Filter for glowing laser beam */}
            <filter id="laserGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* S-Curve Conveyor Guide Track Line */}
          <path
            d="M 18 18 C 50 18, 50 34, 82 34 C 50 34, 50 52, 20 52 C 50 52, 50 70, 80 70 C 50 70, 50 86, 22 86"
            fill="none"
            stroke="currentColor"
            className="text-border dark:text-zinc-800"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Conveyor Rail Roller Dashes */}
          <path
            d="M 18 18 C 50 18, 50 34, 82 34 C 50 34, 50 52, 20 52 C 50 52, 50 70, 80 70 C 50 70, 50 86, 22 86"
            fill="none"
            stroke="currentColor"
            className="text-blue-500/20 dark:text-blue-400/25"
            strokeWidth="2"
            strokeDasharray="2 3"
            strokeLinecap="round"
          />

          {/* Animated Active Glowing Laser Pipeline */}
          <motion.path
            d="M 18 18 C 50 18, 50 34, 82 34 C 50 34, 50 52, 20 52 C 50 52, 50 70, 80 70 C 50 70, 50 86, 22 86"
            fill="none"
            stroke="url(#flowGradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: progressPercent / 100 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            filter="url(#laserGlow)"
          />
        </svg>

        {/* Animated Moving Freight Packets Travelling between nodes */}
        {workflowNodes.map((node, index) => {
          const isPassed = activeStep >= index;
          const isCurrent = activeStep === index;
          const Icon = node.icon;

          return (
            <div
              key={node.id}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer group"
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              onClick={() => {
                setActiveStep(index);
                setIsPaused(true);
              }}
            >
              {/* Outer Radial Pulse on Active Node */}
              {isCurrent && (
                <motion.div
                  key={pulseKey}
                  initial={{ scale: 0.8, opacity: 0.8 }}
                  animate={{ scale: 2.1, opacity: 0 }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{ backgroundColor: node.glowColor }}
                />
              )}

              {/* Main Node Card Pill */}
              <motion.div
                animate={{
                  scale: isCurrent ? 1.08 : 1,
                  y: isCurrent ? -4 : 0,
                }}
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                className={`relative flex items-center gap-3 px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-2xl backdrop-blur-xl border transition-all duration-300 shadow-lg ${
                  isCurrent
                    ? 'bg-background dark:bg-zinc-900 border-blue-500 dark:border-cyan-400 shadow-[0_0_25px_rgba(59,130,246,0.3)] ring-2 ring-blue-500/20'
                    : isPassed
                    ? 'bg-background/90 dark:bg-zinc-900/80 border-border hover:border-blue-500/50 shadow-md'
                    : 'bg-background/70 dark:bg-zinc-950/70 border-border/60 opacity-60 hover:opacity-90'
                }`}
              >
                {/* Node Icon with Vibrant Gradient Accent */}
                <div className={`relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 shadow-sm ${
                  isCurrent 
                    ? `bg-gradient-to-br ${node.color} text-white shadow-md`
                    : isPassed
                    ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20'
                    : 'bg-muted text-muted-foreground'
                }`}>
                  <Icon size={18} />

                  {/* Step Completed Check Badge */}
                  {isPassed && !isCurrent && (
                    <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-sm">
                      <Check size={10} strokeWidth={3} />
                    </div>
                  )}
                </div>

                {/* Node Label Text */}
                <div className="text-left select-none">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-mono font-bold text-muted-foreground">
                      {node.stepNumber}
                    </span>
                    <span className={`text-xs sm:text-sm font-bold font-heading transition-colors ${
                      isCurrent ? 'text-foreground' : 'text-foreground/90'
                    }`}>
                      {node.title}
                    </span>
                  </div>
                  <div className="text-[10px] font-mono font-semibold text-blue-600 dark:text-cyan-400 flex items-center gap-1 mt-0.5">
                    <span>{node.kpi}</span>
                    <span className="text-muted-foreground font-normal">• {node.kpiLabel}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}

        {/* Live Traveling Package Capsule on Conveyor Path */}
        <motion.div
          animate={{
            left: `${currentNode.x}%`,
            top: `${currentNode.y}%`,
          }}
          transition={{ duration: 0.9, ease: [0.34, 1.56, 0.64, 1] }}
          className="absolute -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none"
        >
          <div className="relative">
            <div className="w-4 h-4 rounded-md bg-gradient-to-br from-amber-400 to-orange-500 shadow-[0_0_15px_rgba(245,158,11,0.9)] border border-white flex items-center justify-center animate-spin-slow">
              <div className="w-1.5 h-1.5 rounded-sm bg-white" />
            </div>
          </div>
        </motion.div>

      </div>

      {/* Bottom Live Telemetry Station Flyout Panel */}
      <div className="relative z-10 mt-2 p-4 rounded-2xl bg-muted/40 dark:bg-zinc-900/60 border border-border backdrop-blur-md">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentNode.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-3"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold border border-blue-500/25">
                  Phase {currentNode.stepNumber} Active
                </span>
                <h4 className="text-xs sm:text-sm font-bold font-heading text-foreground">
                  {currentNode.title}
                </h4>
              </div>
              <p className="text-xs text-muted-foreground font-sans">
                {currentNode.subtitle} • <span className="font-mono text-foreground font-medium">{currentNode.telemetry}</span>
              </p>
            </div>

            <div className="flex items-center gap-4 shrink-0 pt-1 sm:pt-0 border-t sm:border-t-0 border-border/50">
              <div className="text-right">
                <div className="text-sm sm:text-base font-black font-heading text-blue-600 dark:text-cyan-400">
                  {currentNode.kpi}
                </div>
                <div className="text-[10px] text-muted-foreground font-mono">
                  {currentNode.kpiLabel}
                </div>
              </div>
              <div className="hidden md:block w-px h-8 bg-border" />
              <div className="hidden md:block text-left text-[11px] text-muted-foreground">
                <div className="font-semibold text-foreground">Hardware Pipeline:</div>
                <div className="font-mono text-[10px]">{currentNode.hardware}</div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Scrubbable Progress Timeline */}
        <div className="mt-3 pt-3 border-t border-border/60 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5">
            {workflowNodes.map((n, idx) => (
              <button
                key={n.id}
                onClick={() => {
                  setActiveStep(idx);
                  setIsPaused(true);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeStep === idx 
                    ? 'w-8 bg-gradient-to-r from-blue-500 to-cyan-500 shadow-sm'
                    : activeStep > idx
                    ? 'w-3.5 bg-blue-500/50'
                    : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/60'
                }`}
                title={`Jump to ${n.title}`}
              />
            ))}
          </div>
          <span className="text-[10px] font-mono text-muted-foreground">
            Click any node or hover to pause & inspect
          </span>
        </div>
      </div>
    </div>
  );
}
