import { motion } from 'motion/react';
import { useSEO } from '@/hooks/useSEO';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, MessageSquare, Database, Megaphone, ArrowRight } from 'lucide-react';

const sections = [
  {
    id: 'cx',
    title: 'Digital Customer Experience',
    icon: MessageSquare,
    items: [
      { title: 'CX Maturity Assessment', description: 'Evaluating your current capabilities against industry benchmarks.' },
      { title: 'Journey Architecture', description: 'Designing seamless end-to-end customer lifecycles.' },
      { title: 'Personalisation Strategy', description: 'Leveraging data to deliver relevant experiences at scale.' },
      { title: 'Governance & Measurement', description: 'Establishing the frameworks to track and optimize CX performance.' },
    ],
  },
  {
    id: 'ai',
    title: 'Data & AI Strategy',
    icon: Database,
    items: [
      { title: 'AI Readiness Assessment', description: 'Determining your technical and organizational preparedness for AI.' },
      { title: 'Data Strategy', description: 'Building the foundation for reliable, actionable business intelligence.' },
      { title: 'Use Case Prioritisation', description: 'Identifying and ranking AI applications by ROI and feasibility.' },
      { title: 'Marketing Measurement', description: 'Advanced attribution and performance modeling.' },
    ],
  },
  {
    id: 'ops',
    title: 'Marketing Operations',
    icon: Megaphone,
    items: [
      { title: 'MarTech Assessment', description: 'Auditing and optimizing your marketing technology stack.' },
      { title: 'Operating Model Design', description: 'Structuring teams and processes for maximum efficiency.' },
      { title: 'AI-Native Marketing Roadmap', description: 'A phased plan for integrating AI into daily operations.' },
      { title: 'Campaign Performance Framework', description: 'Standardizing measurement across all channels.' },
    ],
  },
];

export default function Advisory() {
  useSEO({
    title: 'Strategic Advisory & Consulting',
    description: 'Transforming how your organization interacts with customers and data through integrated intelligence.',
    canonical: 'https://agcube.com/advisory',
  });

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Hero */}
        <div className="max-w-3xl mb-20 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Badge variant="outline" className="border-blue-500/30 text-blue-400 mb-4">
              Premium Advisory
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
              Strategic Advisory <br />
              <span className="text-blue-500">& Consulting</span>
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground leading-relaxed"
          >
            We bridge the gap between high-level leadership strategy and ground-level operational execution. Our advisory services are built on practitioner depth and outcome-led engagements.
          </motion.p>
        </div>

        {/* Major Sections */}
        <div className="space-y-32">
          {sections.map((section, sIndex) => (
            <div key={section.id} className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-1 space-y-6"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                  <section.icon size={32} />
                </div>
                <h2 className="text-3xl font-bold text-foreground">{section.title}</h2>
                <p className="text-muted-foreground">
                  Transforming how your organization interacts with customers and data through integrated intelligence.
                </p>
                <div className="pt-4">
                  <div className="flex items-center gap-2 text-sm text-blue-500 font-semibold uppercase tracking-wider">
                    <CheckCircle2 size={16} />
                    Integrated Advisory
                  </div>
                </div>
              </motion.div>

              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                {section.items.map((item, iIndex) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: iIndex * 0.1 }}
                  >
                    <Card className="bg-card/50 border-border h-full hover:border-blue-500/30 transition-colors group">
                      <CardHeader>
                        <CardTitle className="text-lg text-foreground group-hover:text-blue-400 transition-colors">
                          {item.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Expertise & Industry Depth */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-12 glass-dark rounded-[40px] border border-border text-center space-y-8"
        >
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Experience & Expertise</h2>
            <p className="text-muted-foreground">
              Our consultants are practitioners first. We bring decades of real-world experience across Retail, Manufacturing, Logistics, and more.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Years Experience', value: '20+' },
              { label: 'Projects Delivered', value: '500+' },
              { label: 'Industries Served', value: '12+' },
              { label: 'Global Reach', value: '24/7' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-blue-500">{stat.value}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-widest mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
