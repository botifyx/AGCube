import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';

export function Hero() {
  const [isRequesting, setIsRequesting] = useState(false);
  const navigate = useNavigate();

  const handleRequestDemo = () => {
    setIsRequesting(true);
    // Simulate a small delay for the loading effect
    setTimeout(() => {
      navigate('/contact');
    }, 1200);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-500/10 blur-[120px] rounded-full" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-6">
              Strategic Advisory & Execution Intelligence
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground leading-[1.1]">
              Where Strategy Meets <br />
              <span className="text-gradient-blue">Execution Intelligence.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            AG Cube connects high-level strategy with ground-level execution across CX, AI, and Supply Chain.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Button 
              onClick={handleRequestDemo}
              loading={isRequesting}
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 h-14 text-base rounded-full group"
            >
              Request Demo
              {!isRequesting && <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />}
            </Button>
            <Button asChild variant="outline" size="lg" className="border-border hover:bg-muted text-foreground px-8 h-14 text-base rounded-full">
              <Link to="/advisory">
                Explore Advisory Services
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Decorative Cube */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl aspect-video opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
        <motion.div
          animate={{ 
            rotateY: [0, 360],
            rotateX: [0, 180, 0],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="w-64 h-64 border border-blue-500/30 mx-auto mt-20 relative"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="absolute inset-0 border border-blue-500/20 transform translate-z-32" />
          <div className="absolute inset-0 border border-blue-500/20 transform -translate-z-32" />
          <div className="absolute inset-0 border border-blue-500/20 transform rotate-y-90 translate-x-32" />
          <div className="absolute inset-0 border border-blue-500/20 transform rotate-y-90 -translate-x-32" />
        </motion.div>
      </div>
    </section>
  );
}
