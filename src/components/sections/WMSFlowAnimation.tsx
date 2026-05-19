import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Package, Database, Hand, Box, Truck, Check } from 'lucide-react';

const steps = [
  { id: 'receiving', label: 'RECEIVING', icon: Package, x: 20, y: 15 },
  { id: 'storage', label: 'STORAGE', icon: Database, x: 80, y: 32.5 },
  { id: 'picking', label: 'PICKING', icon: Hand, x: 20, y: 50 },
  { id: 'packing', label: 'PACKING', icon: Box, x: 80, y: 67.5 },
  { id: 'dispatch', label: 'DISPATCH', icon: Truck, x: 20, y: 85 },
];

export function WMSFlowAnimation() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => {
        if (prev >= steps.length) return 0;
        return prev + 1;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const pathString = `M 20 15 C 50 15, 50 32.5, 80 32.5 C 50 32.5, 50 50, 20 50 C 50 50, 50 67.5, 80 67.5 C 50 67.5, 50 85, 20 85`;
  const currentPathLength = Math.min(activeStep / (steps.length - 1), 1);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="relative w-full aspect-square glass-dark rounded-3xl border border-border overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-10" />
      
      {/* Background Path */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
        <path 
          d={pathString} 
          fill="none" 
          stroke="currentColor" 
          className="text-blue-500/20"
          strokeWidth="0.5" 
          strokeDasharray="1 2"
        />
        <motion.path 
          d={pathString} 
          fill="none" 
          stroke="currentColor" 
          className="text-blue-500"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: currentPathLength }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{ filter: 'drop-shadow(0 0 6px rgba(59,130,246,0.6))' }}
        />
      </svg>

      {/* Nodes */}
      {steps.map((step, index) => {
        const isActive = activeStep >= index;
        const isCurrent = activeStep === index;
        
        return (
          <div 
            key={step.id}
            className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3 z-10"
            style={{ left: `${step.x}%`, top: `${step.y}%` }}
          >
            <motion.div 
              className={`relative w-14 h-14 md:w-16 md:h-16 rounded-2xl border flex items-center justify-center backdrop-blur-xl transition-all duration-700 ${isActive ? 'bg-blue-500/20 border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.4)]' : 'bg-card/80 border-border shadow-lg'}`}
              animate={{ 
                scale: isCurrent ? 1.15 : 1,
                y: isCurrent ? -5 : 0
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <step.icon size={24} className={`transition-colors duration-700 ${isActive ? 'text-blue-400' : 'text-muted-foreground'}`} />
              
              {/* Checkmark Badge */}
              {isActive && (
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                  className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-blue-500 border-2 border-background flex items-center justify-center text-white shadow-lg"
                >
                  <Check size={12} strokeWidth={3} />
                </motion.div>
              )}
            </motion.div>
            
            <div className={`text-[10px] md:text-xs font-bold tracking-widest uppercase transition-colors duration-700 bg-background/80 px-2 py-1 rounded-md backdrop-blur-sm ${isActive ? 'text-blue-400' : 'text-muted-foreground'}`}>
              {step.label}
            </div>
          </div>
        );
      })}
    </motion.div>
  );
}
