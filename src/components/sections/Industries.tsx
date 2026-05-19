import { motion } from 'motion/react';
import { ShoppingBag, Factory, Truck, Snowflake, Smartphone } from 'lucide-react';

const industries = [
  { name: 'Retail & FMCG', icon: ShoppingBag },
  { name: 'Manufacturing & Automotive', icon: Factory },
  { name: 'Logistics (3PL)', icon: Truck },
  { name: 'Food & Cold Storage', icon: Snowflake },
  { name: 'Telecommunications & Media', icon: Smartphone },
];

export function Industries() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold tracking-tight text-foreground"
            >
              Industry Expertise
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground"
            >
              Tailored solutions for sectors where execution intelligence is a competitive necessity.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-40 glass-dark border-border rounded-2xl flex flex-col items-center justify-center gap-4 hover:border-blue-500/30 transition-all duration-300 hover:bg-blue-500/5">
                <div className="text-muted-foreground group-hover:text-blue-500 transition-colors">
                  <industry.icon size={32} strokeWidth={1.5} />
                </div>
                <span className="text-sm font-medium text-center px-4 text-muted-foreground group-hover:text-foreground transition-colors">
                  {industry.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
