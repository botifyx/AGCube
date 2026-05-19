import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, ClipboardCheck, HelpCircle } from 'lucide-react';

export function CTA() {
  const [isRequesting, setIsRequesting] = useState(false);
  const navigate = useNavigate();

  const handleGetStarted = () => {
    setIsRequesting(true);
    setTimeout(() => {
      navigate('/contact');
    }, 1200);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-square bg-blue-500/10 blur-[120px] rounded-full -z-10" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="glass-dark border-border rounded-[40px] p-8 md:p-16 text-center space-y-12 relative overflow-hidden">
          {/* Decorative Grid */}
          <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
          
          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold tracking-tight text-foreground"
            >
              Build the Intelligence <br />
              <span className="text-gradient-blue">That Compounds.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-muted-foreground"
            >
              Ready to bridge the gap between strategy and execution? Let's build your execution intelligence roadmap together.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {[
              {
                title: 'AI Readiness Checklist',
                description: 'Assess your organization\'s preparedness for AI integration.',
                icon: Download,
                action: 'Download PDF',
              },
              {
                title: 'CX Maturity Mini-Quiz',
                description: 'Discover where you stand in the customer experience landscape.',
                icon: ClipboardCheck,
                action: 'Take Quiz',
              },
              {
                title: 'Personalized Walkthrough',
                description: 'Get a custom demo of our advisory and product capabilities.',
                icon: HelpCircle,
                action: 'Request Demo',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-muted/30 border border-border p-8 rounded-3xl text-left space-y-4 hover:bg-muted/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                  <item.icon size={24} />
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-foreground">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <Button variant="link" className="text-blue-500 p-0 h-auto font-semibold group/btn">
                  {item.action}
                  <ArrowRight size={14} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="pt-8 relative z-10"
          >
            <Button 
              onClick={handleGetStarted}
              loading={isRequesting}
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-12 h-16 text-lg font-semibold shadow-xl shadow-blue-500/20"
            >
              Get Started Today
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
