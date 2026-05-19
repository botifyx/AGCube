import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Calendar } from 'lucide-react';

const articles = [
  {
    title: 'AI-Driven Putaway & Warehouse Optimization',
    excerpt: 'How predictive algorithms are transforming traditional warehouse layouts and increasing throughput by 25%.',
    category: 'Logistics',
    date: 'Oct 12, 2025',
    image: 'https://picsum.photos/seed/warehouse/800/600',
  },
  {
    title: 'AI-Native Marketing Operations',
    excerpt: 'The shift from manual campaign management to automated, intelligence-led marketing ecosystems.',
    category: 'Marketing',
    date: 'Sep 28, 2025',
    image: 'https://picsum.photos/seed/marketing/800/600',
  },
  {
    title: 'Lite vs Enterprise WMS Comparison',
    excerpt: 'A comprehensive guide to choosing the right warehouse management scale for your current operations.',
    category: 'Product',
    date: 'Sep 15, 2025',
    image: 'https://picsum.photos/seed/tech/800/600',
  },
];

export function InsightsPreview() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold tracking-tight text-foreground"
            >
              Latest Insights
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground"
            >
              Thought leadership at the intersection of strategy and execution.
            </motion.p>
          </div>
          <Link to="/insights" className="text-blue-500 hover:text-blue-400 font-medium flex items-center gap-2 group">
            View all articles
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-card/50 border-border overflow-hidden group hover:border-blue-500/30 transition-all duration-300 h-full flex flex-col">
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-500/80 text-white backdrop-blur-md border-none">
                      {article.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <Calendar size={14} />
                    {article.date}
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-blue-400 transition-colors line-clamp-2">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </CardContent>
                <CardFooter className="pt-0">
                  <Link to="/insights" className="text-xs font-semibold text-foreground uppercase tracking-wider flex items-center gap-2 group/link">
                    Read Article
                    <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
