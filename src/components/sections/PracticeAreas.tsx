import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, Database, Megaphone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const practices = [
  {
    title: 'Digital Customer Experience',
    description: 'Architecting end-to-end journeys that drive loyalty and lifetime value.',
    icon: MessageSquare,
    href: '/advisory',
    color: 'blue',
  },
  {
    title: 'Data & AI Strategy',
    description: 'Transforming raw data into predictive intelligence and automated workflows.',
    icon: Database,
    href: '/advisory',
    color: 'blue',
  },
  {
    title: 'Marketing Operations',
    description: 'Optimizing the stack and operating models for high-performance marketing.',
    icon: Megaphone,
    href: '/advisory',
    color: 'amber',
  },
];

export function PracticeAreas() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-foreground"
          >
            Core Practice Areas
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Deep expertise across the three pillars of modern business intelligence.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {practices.map((practice, index) => (
            <motion.div
              key={practice.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={practice.href} className="group block h-full">
                <Card className="h-full bg-card/50 border-border hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden relative">
                  <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="text-blue-500" />
                  </div>
                  <CardHeader className="pt-8">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-4 group-hover:scale-110 transition-transform">
                      <practice.icon size={24} />
                    </div>
                    <CardTitle className="text-xl text-foreground group-hover:text-blue-400 transition-colors">
                      {practice.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground text-sm leading-relaxed pt-2">
                      {practice.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {['Maturity Assessment', 'Strategy Roadmap', 'Execution Framework'].map((item) => (
                        <li key={item} className="flex items-center gap-2 text-xs text-muted-foreground/60">
                          <div className="w-1 h-1 rounded-full bg-blue-500/40" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
