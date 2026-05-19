import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const TOTAL_MS = 16000; // Total bootloader duration (16 seconds)
const PILLAR_COUNT = 4;

const pillars = [
  {
    title: "Integrated Advisory",
    description: "Interconnected CX, Data, AI, and Marketing Operations."
  },
  {
    title: "Outcome-Led",
    description: "Actionable strategies delivering measurable value."
  },
  {
    title: "Practitioner Depth",
    description: "Decades of real-world enterprise and startup experience."
  },
  {
    title: "Scalable Tech",
    description: "Execution systems that grow with your business."
  }
];

export function BootLoader({ onComplete }: { onComplete: () => void; key?: string }) {
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showSkip, setShowSkip] = useState(false);
  const startTimeRef = useRef(Date.now());
  const rafRef = useRef<number | null>(null);



  // Show skip button after 2 seconds
  useEffect(() => {
    const t = setTimeout(() => setShowSkip(true), 2000);
    return () => clearTimeout(t);
  }, []);

  // Smooth rAF-based progress (synced to TOTAL_MS exactly)
  useEffect(() => {
    startTimeRef.current = Date.now();

    const tick = () => {
      const elapsed = Date.now() - startTimeRef.current;
      const pct = Math.min(Math.round((elapsed / TOTAL_MS) * 100), 100);
      setProgress(pct);

      // Drive pillar steps off progress
      // step 0 → 0-24%, step 1 → 25-49%, step 2 → 50-74%, step 3 → 75-99%, step 4 → 100%
      const newStep = pct < 100
        ? Math.floor((pct / 100) * PILLAR_COUNT)
        : PILLAR_COUNT;
      setStep(newStep);

      if (elapsed < TOTAL_MS) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setProgress(100);
        setStep(PILLAR_COUNT);
        setTimeout(onComplete, 400); // brief pause at 100% before exit
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [onComplete]);

  const handleSkip = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    onComplete();
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center p-6 overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />

      <div className="max-w-2xl w-full space-y-12 relative z-10">
        {/* Logo Section */}
        <div className="flex flex-col items-center space-y-8">
          <div className="relative flex items-center justify-center w-32 h-32">
            <AnimatePresence mode="wait">
              {progress <= 85 ? (
                <motion.div
                  key="cube"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.5, opacity: 0, rotateZ: 45 }}
                  transition={{ duration: 0.6 }}
                  className="loader-cube-container absolute inset-0 flex items-center justify-center"
                >
                  <motion.div
                    animate={{ rotateX: [0, 360], rotateY: [0, 360] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                    className="loader-cube"
                  >
                    <div className="loader-cube-face loader-cube-front">A</div>
                    <div className="loader-cube-face loader-cube-back">G</div>
                    <div className="loader-cube-face loader-cube-right">C</div>
                    <div className="loader-cube-face loader-cube-left">U</div>
                    <div className="loader-cube-face loader-cube-top">B</div>
                    <div className="loader-cube-face loader-cube-bottom">E</div>
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div
                  key="icon"
                  initial={{ scale: 0.5, opacity: 0, rotate: -180 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <img
                    src="/agcube-icon.png"
                    alt="AG Cube Icon"
                    className="h-28 w-auto object-contain"
                  />
                </motion.div>
              )}
            </AnimatePresence>
            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full pointer-events-none" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-center"
          >
            <p className="text-xs text-blue-500/60 font-mono tracking-[0.3em] uppercase mt-1">
              Intelligence Initialization
            </p>
          </motion.div>
        </div>

        {/* Vision / Pillar Section */}
        <div className="min-h-[120px] flex flex-col items-center text-center space-y-6">
          <AnimatePresence mode="wait">
            {step === 0 ? (
              <motion.div
                key="vision"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-3"
              >
                <p className="text-sm text-muted-foreground leading-relaxed max-w-lg mx-auto italic">
                  "Bridging strategy and execution for compounding intelligence."
                </p>
              </motion.div>
            ) : step <= pillars.length ? (
              <motion.div
                key={pillars[step - 1].title}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-2"
              >
                <h2 className="text-lg font-semibold text-blue-400 uppercase tracking-wider">
                  {pillars[step - 1].title}
                </h2>
                <p className="text-sm text-muted-foreground max-w-md mx-auto">
                  {pillars[step - 1].description}
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="complete"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-blue-500 font-mono text-xs uppercase tracking-widest"
              >
                System Ready
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Progress Bar */}
        <div className="w-full max-w-xs mx-auto space-y-2">
          <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-blue-500"
              style={{ width: `${progress}%` }}
              transition={{ ease: "linear" }}
            />
          </div>
          <div className="flex justify-between text-[10px] font-mono text-muted-foreground uppercase tracking-tighter">
            <span>Strategy &amp; Execution</span>
            <span>{progress}%</span>
          </div>
        </div>
      </div>

      {/* Skip Button */}
      <AnimatePresence>
        {showSkip && (
          <motion.button
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={handleSkip}
            className="absolute bottom-8 right-8 text-[11px] font-mono uppercase tracking-widest text-muted-foreground/40 hover:text-muted-foreground transition-colors cursor-pointer border border-white/5 hover:border-white/15 px-3 py-1.5 rounded-md"
          >
            Skip →
          </motion.button>
        )}
      </AnimatePresence>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-10 text-[10px] font-mono text-muted-foreground/20 space-y-1 hidden md:block">
        <div>CORE_VISION_LOAD: TRUE</div>
        <div>BRIDGE_GAP_STRATEGY_EXECUTION: ACTIVE</div>
        <div>INTELLIGENCE_COMPOUND: INITIALIZING</div>
      </div>
    </motion.div>
  );
}
