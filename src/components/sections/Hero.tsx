import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  Boxes, 
  Truck, 
  ScanLine, 
  PackageCheck, 
  Cpu, 
  Layers, 
  BarChart3, 
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Zap
} from 'lucide-react';
import { ClassicWMSLogo } from '@/components/common/ClassicWMSLogo';

const SLIDE_DURATION = 6500; // 6.5 seconds auto-advance

interface WMSCapability {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  categoryColor: string;
  description: string;
  icon: typeof Boxes;
}

const wmsCapabilities: WMSCapability[] = [
  {
    id: 'inventory-control',
    title: '360° Inventory Control',
    subtitle: 'Zero Stock Discrepancy',
    category: 'VISIBILITY',
    categoryColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    description: 'Multi-location real-time tracking, lot & expiry monitoring, serial number tracing, and automated cycle counts.',
    icon: Boxes,
  },
  {
    id: 'wave-picking',
    title: 'AI Wave & Batch Picking',
    subtitle: 'Optimized Path Routing',
    category: 'FULFILLMENT',
    categoryColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    description: 'Dynamic cluster, zone, and batch picking algorithms reducing picker transit distance by up to 42%.',
    icon: Zap,
  },
  {
    id: 'packing-qa',
    title: 'High-Speed Packing & QA',
    subtitle: 'Error-Free Shipments',
    category: 'QUALITY',
    categoryColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    description: 'Scan-to-verify item checks, carton dimension optimization, automated scale weight validation, and packing slips.',
    icon: PackageCheck,
  },
  {
    id: 'carrier-dispatch',
    title: 'Automated Carrier Dispatch',
    subtitle: 'Instant Rate Shopping',
    category: 'LOGISTICS',
    categoryColor: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    description: 'Multi-carrier label generation, electronic manifests, automated courier assignment, and live tracking hooks.',
    icon: Truck,
  },
  {
    id: 'iot-hardware',
    title: 'IoT & Hardware Integration',
    subtitle: 'Plug & Play Hardware',
    category: 'AUTOMATION',
    categoryColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    description: 'Native plug-and-play with Zebra/Honeywell RF guns, Bluetooth ring scanners, automated conveyor sorters, and AMRs.',
    icon: Cpu,
  },
];

export function Hero() {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setActiveSlide((prev) => (prev === 0 ? 1 : 0));
    setProgress(0);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setActiveSlide((prev) => (prev === 0 ? 1 : 0));
    setProgress(0);
  }, []);

  const goToSlide = (index: number) => {
    setDirection(index > activeSlide ? 1 : -1);
    setActiveSlide(index);
    setProgress(0);
  };

  // Progress timer for auto slide
  useEffect(() => {
    if (isPaused) return;

    const interval = 50; // update every 50ms
    const step = (interval / SLIDE_DURATION) * 100;

    const timer = setInterval(() => {
      setProgress((old) => {
        if (old >= 100) {
          nextSlide();
          return 0;
        }
        return old + step;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  return (
    <section 
      className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden pt-28 pb-16 transition-colors duration-1000"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Dynamic Background Glow according to active slide */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      
      {activeSlide === 0 ? (
        <>
          <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-500/10 blur-[130px] rounded-full pointer-events-none transition-opacity duration-1000" />
          <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none transition-opacity duration-1000" />
        </>
      ) : (
        <>
          <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-orange-500/10 blur-[140px] rounded-full pointer-events-none transition-opacity duration-1000" />
          <div className="absolute top-1/3 -right-1/4 w-1/2 h-1/2 bg-amber-500/10 blur-[140px] rounded-full pointer-events-none transition-opacity duration-1000" />
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-orange-600/5 blur-[100px] rounded-full pointer-events-none" />
        </>
      )}

      {/* Top Segmented Slide Switcher Pill (Matching Reference Sample) */}
      <div className="relative z-30 container mx-auto px-4 flex justify-center mb-8">
        <div className="inline-flex items-center p-1.5 rounded-full bg-background/80 backdrop-blur-xl border border-border/70 shadow-2xl">
          <button
            onClick={() => goToSlide(0)}
            className={`relative px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
              activeSlide === 0 
                ? 'text-white bg-blue-600 shadow-md shadow-blue-500/20' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <span>01. Strategy & Advisory</span>
            {activeSlide === 0 && (
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            )}
          </button>

          <button
            onClick={() => goToSlide(1)}
            className={`relative px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
              activeSlide === 1 
                ? 'text-white bg-gradient-to-r from-orange-500 to-amber-500 shadow-md shadow-orange-500/30' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Sparkles size={14} className={activeSlide === 1 ? 'text-amber-200' : 'text-orange-400'} />
            <span>02. Classic WMS</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded-md font-bold tracking-wider uppercase bg-black/20 text-white/90">
              Flagship
            </span>
          </button>
        </div>
      </div>

      {/* Main Slide Carousel Area */}
      <div className="relative z-20 container mx-auto px-4 md:px-6 flex-grow flex items-center">
        <AnimatePresence mode="wait" custom={direction}>
          {activeSlide === 0 ? (
            /* SLIDE 0: EXISTING STRATEGY & ADVISORY HERO */
            <motion.div
              key="slide-0"
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-5xl mx-auto text-center space-y-8"
            >
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-semibold tracking-wider uppercase mb-6 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
                    Strategic Advisory & Execution Intelligence
                  </span>
                  <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-foreground leading-[1.1]">
                    Where Strategy Meets <br />
                    <span className="text-gradient-blue">Execution Intelligence.</span>
                  </h1>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mt-6"
                >
                  AG Cube bridges executive strategy with tactical ground-level execution across Customer Experience, AI Architectures, and Supply Chain Networks.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
                >
                  <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 h-13 text-base rounded-full shadow-lg shadow-blue-600/25 group">
                    <Link to="/industries">
                      See It In Action
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-border hover:bg-muted text-foreground px-8 h-13 text-base rounded-full">
                    <Link to="/advisory">
                      Explore Advisory Services
                    </Link>
                  </Button>
                </motion.div>

                {/* 3 Core Pillars Preview */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-12 max-w-3xl mx-auto text-left"
                >
                  <div className="p-4 rounded-2xl bg-card/40 border border-border/60 hover:border-blue-500/30 transition-all backdrop-blur-sm">
                    <div className="text-blue-600 dark:text-blue-400 font-bold text-sm mb-1 flex items-center justify-between">
                      <span>CX Orchestration</span>
                      <ArrowUpRight size={14} className="text-muted-foreground" />
                    </div>
                    <p className="text-xs text-muted-foreground leading-normal">
                      Predictive personalization & multi-channel operational delivery.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-card/40 border border-border/60 hover:border-blue-500/30 transition-all backdrop-blur-sm">
                    <div className="text-blue-600 dark:text-blue-400 font-bold text-sm mb-1 flex items-center justify-between">
                      <span>AI & Data Systems</span>
                      <ArrowUpRight size={14} className="text-muted-foreground" />
                    </div>
                    <p className="text-xs text-muted-foreground leading-normal">
                      Production AI workflows, digital twins & data cloud intelligence.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-card/40 border border-border/60 hover:border-blue-500/30 transition-all backdrop-blur-sm">
                    <div className="text-blue-600 dark:text-blue-400 font-bold text-sm mb-1 flex items-center justify-between">
                      <span>Supply Chain</span>
                      <ArrowUpRight size={14} className="text-muted-foreground" />
                    </div>
                    <p className="text-xs text-muted-foreground leading-normal">
                      Resilient logistics grids and turnkey fulfillment software.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Decorative 3D Wireframe Cube */}
              <div className="relative w-full max-w-3xl h-32 mx-auto opacity-30 pointer-events-none">
                <motion.div
                  animate={{ 
                    rotateY: [0, 360],
                    rotateX: [0, 180, 0],
                  }}
                  transition={{ 
                    duration: 25, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                  className="w-24 h-24 border border-blue-500/30 mx-auto relative mt-2"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="absolute inset-0 border border-blue-500/30 transform translate-z-12" />
                  <div className="absolute inset-0 border border-blue-500/30 transform -translate-z-12" />
                  <div className="absolute inset-0 border border-blue-500/30 transform rotate-y-90 translate-x-12" />
                  <div className="absolute inset-0 border border-blue-500/30 transform rotate-y-90 -translate-x-12" />
                </motion.div>
              </div>
            </motion.div>
          ) : (
            /* SLIDE 1: CLASSIC WMS FLAGSHIP PARTNER SOLUTION (TARGETING WAREHOUSE CUSTOMERS) */
            <motion.div
              key="slide-1"
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-6xl mx-auto space-y-8"
            >
              {/* Header Hero Branding Block */}
              <div className="text-center max-w-4xl mx-auto space-y-4">
                {/* Launch Banner Pill */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2 rounded-full border border-orange-500/40 bg-orange-500/10 backdrop-blur-xl shadow-[0_0_25px_rgba(249,115,22,0.2)]"
                >
                  <Sparkles size={14} className="text-amber-500 dark:text-amber-400 animate-spin-slow flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400">
                    Launching Our Flagship Partner Solution
                  </span>
                </motion.div>

                {/* Classic WMS Logo in Dedicated Floating Card (As per user sample 2 & 3) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="pt-2 pb-1 flex justify-center"
                >
                  <div className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-white shadow-2xl shadow-orange-500/15 border border-orange-500/30 backdrop-blur-xl hover:scale-105 transition-transform duration-300">
                    <img
                      src="/classic-wms-logo.png"
                      alt="Classic WMS"
                      className="h-7 sm:h-9 w-auto object-contain"
                    />
                  </div>
                </motion.div>

                {/* Sub-badge: ROBUST CHAINED AUTOMATION • WMS ECOSYSTEM + AWS Certified */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                  className="pt-1 flex flex-wrap items-center justify-center gap-2.5"
                >
                  <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-orange-600 dark:text-orange-400 border border-orange-500/25 px-3 py-1 rounded-full bg-orange-500/10 font-mono">
                    Robust Chained Automation • WMS Ecosystem
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-300 border border-amber-500/35 px-3 py-1 rounded-full bg-amber-500/10 font-mono shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                    <span>AWS Certified Solution</span>
                  </span>
                </motion.div>

                {/* Main Heading (Matching Sample: Warehouse Management System for every Business.) */}
                <motion.h1
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-foreground leading-[1.1] pt-2"
                >
                  Warehouse Management System <br className="hidden sm:inline" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 dark:from-orange-400 dark:via-amber-400 dark:to-orange-500">
                    for every Business.
                  </span>
                </motion.h1>

                {/* Subtitle targeted to warehouse operations */}
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
                >
                  A modern, AI-native warehouse management system engineered with Robust Chained Automation. From single facilities to distributed multi-national fulfillment grids, scale with 99.9% inventory precision.
                </motion.p>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
                >
                  <Button
                    asChild
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white px-8 h-13 text-base rounded-full shadow-lg shadow-orange-500/30 group cursor-pointer"
                  >
                    <Link to="/classic-wms">
                      Click to Explore
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto border-orange-500/30 hover:border-orange-500/60 hover:bg-orange-500/5 text-foreground px-8 h-13 text-base rounded-full backdrop-blur-md"
                  >
                    <Link to="/contact">
                      Schedule Live Demo
                    </Link>
                  </Button>
                </motion.div>
              </div>

              {/* Key Warehouse Metrics Bar (Matching Reference Sample 3) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto pt-2"
              >
                <div className="p-4 rounded-2xl bg-card/60 border border-orange-500/20 backdrop-blur-md text-center hover:border-orange-500/40 transition-colors shadow-sm">
                  <div className="text-2xl sm:text-3xl font-black text-orange-600 dark:text-orange-400">99.9%</div>
                  <div className="text-[10px] sm:text-xs font-bold text-foreground uppercase tracking-wider mt-1">Inventory Accuracy</div>
                  <div className="text-[10px] text-muted-foreground">Zero Stock Discrepancy</div>
                </div>
                <div className="p-4 rounded-2xl bg-card/60 border border-orange-500/20 backdrop-blur-md text-center hover:border-orange-500/40 transition-colors shadow-sm">
                  <div className="text-2xl sm:text-3xl font-black text-amber-600 dark:text-amber-400">+35%</div>
                  <div className="text-[10px] sm:text-xs font-bold text-foreground uppercase tracking-wider mt-1">Picking Speed Boost</div>
                  <div className="text-[10px] text-muted-foreground">Path & Wave Optimization</div>
                </div>
                <div className="p-4 rounded-2xl bg-card/60 border border-orange-500/20 backdrop-blur-md text-center hover:border-orange-500/40 transition-colors shadow-sm">
                  <div className="text-2xl sm:text-3xl font-black text-orange-600 dark:text-orange-400">-45%</div>
                  <div className="text-[10px] sm:text-xs font-bold text-foreground uppercase tracking-wider mt-1">Dock-To-Stock Time</div>
                  <div className="text-[10px] text-muted-foreground">Intelligent ASN Putaway</div>
                </div>
                <div className="p-4 rounded-2xl bg-card/60 border border-orange-500/20 backdrop-blur-md text-center hover:border-orange-500/40 transition-colors shadow-sm">
                  <div className="text-2xl sm:text-3xl font-black text-amber-600 dark:text-amber-400">Unlimited</div>
                  <div className="text-[10px] sm:text-xs font-bold text-foreground uppercase tracking-wider mt-1">Multi-Facility Scale</div>
                  <div className="text-[10px] text-muted-foreground">Multi-Tenant Cloud Grid</div>
                </div>
              </motion.div>

              {/* Capabilities Stream Header & Stream Cards (Matching Reference Sample 3) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="space-y-4 pt-2"
              >
                <div className="flex items-center justify-between text-xs text-muted-foreground px-1">
                  <div className="flex items-center gap-2 font-medium">
                    <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                    <span>Auto-Scrolling Capabilities Stream</span>
                    <span className="hidden sm:inline text-zinc-500">(Hover to pause card stream)</span>
                  </div>
                  <Link 
                    to="/classic-wms" 
                    className="text-orange-600 dark:text-orange-400 hover:text-orange-500 font-bold inline-flex items-center gap-1 group"
                  >
                    All Modules
                    <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>

                {/* Horizontal Capabilities Carousel */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {wmsCapabilities.slice(0, 4).map((cap) => {
                    const Icon = cap.icon;
                    return (
                      <div
                        key={cap.id}
                        className="p-5 rounded-2xl bg-card/50 border border-border/80 hover:border-orange-500/40 transition-all duration-300 group flex flex-col justify-between backdrop-blur-md shadow-sm hover:shadow-lg hover:shadow-orange-500/5"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                              <Icon size={20} />
                            </div>
                            <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full border ${cap.categoryColor}`}>
                              {cap.category}
                            </span>
                          </div>
                          <h3 className="font-bold text-foreground group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors text-base mb-1">
                            {cap.title}
                          </h3>
                          <div className="text-xs font-semibold text-orange-600/90 dark:text-orange-400/90 mb-2">
                            {cap.subtitle}
                          </div>
                          <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                            {cap.description}
                          </p>
                        </div>
                        <div className="pt-4 mt-2 border-t border-border/40">
                          <Link 
                            to="/classic-wms" 
                            className="inline-flex items-center text-xs font-bold text-muted-foreground group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors"
                          >
                            Explore Module
                            <ArrowRight size={12} className="ml-1.5 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Integration Sublink */}
                <div className="text-center pt-2">
                  <Link 
                    to="/classic-wms" 
                    className="inline-flex items-center text-xs sm:text-sm font-semibold text-orange-600/90 dark:text-orange-400/90 hover:text-orange-500 transition-colors group"
                  >
                    Learn how Classic WMS integrates with your existing ERP & warehouse hardware
                    <ArrowRight size={14} className="ml-1.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Floating Carousel Navigation Arrows (Left & Right as in reference samples) */}
      <div className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-30 pointer-events-auto">
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background/60 hover:bg-background/90 text-foreground border border-border/80 hover:border-blue-500/40 flex items-center justify-center backdrop-blur-md shadow-lg transition-all hover:scale-105 active:scale-95 group cursor-pointer"
        >
          <ChevronLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
        </button>
      </div>

      <div className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-30 pointer-events-auto">
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background/60 hover:bg-background/90 text-foreground border border-border/80 hover:border-orange-500/40 flex items-center justify-center backdrop-blur-md shadow-lg transition-all hover:scale-105 active:scale-95 group cursor-pointer"
        >
          <ChevronRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* Bottom Progress Bar & Slide Indicators */}
      <div className="relative z-30 container mx-auto px-4 mt-8">
        <div className="flex flex-col items-center gap-3">
          {/* Progress track */}
          <div className="w-48 sm:w-64 h-1 bg-border/40 rounded-full overflow-hidden">
            <div 
              className={`h-full transition-all duration-75 ${
                activeSlide === 0 ? 'bg-blue-500' : 'bg-gradient-to-r from-orange-500 to-amber-500'
              }`}
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Dots / Selectors */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => goToSlide(0)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeSlide === 0 ? 'w-8 bg-blue-500' : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/60'
              }`}
              aria-label="Go to Strategy Slide"
            />
            <button
              onClick={() => goToSlide(1)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeSlide === 1 ? 'w-8 bg-orange-500' : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/60'
              }`}
              aria-label="Go to Classic WMS Slide"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
