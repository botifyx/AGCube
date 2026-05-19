import { motion } from 'motion/react';
import { CheckCircle2, Zap, Users, BarChart3 } from 'lucide-react';

const reasons = [
  {
    title: 'Integrated Advisory',
    description: 'CX, Data & AI, and Marketing Operations treated as one interconnected discipline.',
    icon: Zap,
  },
  {
    title: 'Outcome-Led Engagements',
    description: 'Actionable strategies, roadmaps, frameworks, and operating models that deliver real value.',
    icon: BarChart3,
  },
  {
    title: 'Practitioner Depth',
    description: 'Decades of real-world experience across global enterprises and high-growth startups.',
    icon: Users,
  },
  {
    title: 'Scalable Tech',
    description: 'Solutions like Classic WMS that scale from Lite to Enterprise as your business grows.',
    icon: CheckCircle2,
  },
];

export function WhyAGCube() {
  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
                Why Organizations <br />
                <span className="text-blue-500">Choose AG Cube</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We don't just deliver consulting or software — we build intelligence that compounds across your business. Our approach bridges the gap between high-level strategy and ground-level execution.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="space-y-3"
                >
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: index * 0.1 + 0.3
                    }}
                    className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500"
                  >
                    <reason.icon size={20} />
                  </motion.div>
                  <h4 className="text-lg font-semibold text-foreground">{reason.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square w-full max-w-[500px] mx-auto lg:max-w-none"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-3xl blur-3xl" />
            <div className="relative h-full w-full glass-dark rounded-3xl border border-border overflow-hidden flex items-center justify-center p-4 sm:p-8">
              
              {/* Central Glow */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
              </div>

              {/* Orbital Rings container */}
              <div className="relative w-full aspect-square max-w-[400px] flex items-center justify-center">
                
                {/* Ring 1 (Inner) */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[15%] border border-dashed border-blue-500/20 rounded-full"
                />
                
                {/* Ring 2 (Middle) */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[5%] border border-dashed border-blue-500/15 rounded-full"
                />

                {/* Ring 3 (Outer - Orbit Path) */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[-5%] sm:inset-[-10%] border border-blue-500/10 rounded-full"
                >
                  {/* Orbiting Elements */}
                  {[
                    { label: "Integrated Advisory", angle: 0 },
                    { label: "Outcome-Led Engagements", angle: 90 },
                    { label: "Practitioner Depth", angle: 180 },
                    { label: "Scalable Tech", angle: 270 }
                  ].map((item, i) => (
                    <div 
                      key={i}
                      className="absolute top-1/2 left-1/2 w-0 h-0"
                      style={{ 
                        transform: `rotate(${item.angle}deg) translateX(190px) sm:translateX(220px)` 
                        // Using fixed translate in css might be tricky with responsiveness inside transform,
                        // so we'll use standard percentages for positioning instead.
                      }}
                    ></div>
                  ))}
                </motion.div>
                
                {/* Responsive Orbit implementation using absolute positioning without transform-origin tricks for better stability */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="absolute w-full h-full"
                >
                  {/* Integrated Advisory */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <motion.div animate={{ rotate: -360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }}>
                      <div className="bg-background/80 backdrop-blur-md border border-blue-500/30 px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-semibold text-blue-400 whitespace-nowrap shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                        Integrated Advisory
                      </div>
                    </motion.div>
                  </div>

                  {/* Outcome-Led Engagements */}
                  <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2">
                    <motion.div animate={{ rotate: -360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }}>
                      <div className="bg-background/80 backdrop-blur-md border border-blue-500/30 px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-semibold text-blue-400 whitespace-nowrap shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                        Outcome-Led Engagements
                      </div>
                    </motion.div>
                  </div>

                  {/* Practitioner Depth */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                    <motion.div animate={{ rotate: -360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }}>
                      <div className="bg-background/80 backdrop-blur-md border border-blue-500/30 px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-semibold text-blue-400 whitespace-nowrap shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                        Practitioner Depth
                      </div>
                    </motion.div>
                  </div>

                  {/* Scalable Tech */}
                  <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2">
                    <motion.div animate={{ rotate: -360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }}>
                      <div className="bg-background/80 backdrop-blur-md border border-blue-500/30 px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-semibold text-blue-400 whitespace-nowrap shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                        Scalable Tech
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Glowing orbital dots */}
                  <div className="absolute top-[15%] left-[15%] w-1.5 h-1.5 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(96,165,250,0.8)]" />
                  <div className="absolute bottom-[20%] right-[10%] w-2 h-2 bg-indigo-400 rounded-full shadow-[0_0_10px_rgba(129,140,248,0.8)]" />
                </motion.div>

                {/* Central Logo */}
                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                  <img
                    src="/agcube-logo.png"
                    alt="AG Cube"
                    className="relative w-1/2 max-w-[200px] h-auto object-contain dark:brightness-110 dark:contrast-125 drop-shadow-2xl"
                    style={{ mixBlendMode: 'normal' }}
                  />
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
