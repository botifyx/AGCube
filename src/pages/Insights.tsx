import { motion } from 'motion/react';
import { useSEO } from '@/hooks/useSEO';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ArrowRight, Calendar, Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

import { articles } from '@/data/articles';

const categories = ['All', 'Strategy', 'Logistics', 'AI & Data', 'Marketing', 'Case Studies'];

export default function Insights() {
  useSEO({
    title: 'Knowledge Hub & Insights',
    description: 'Deep dives into the technology and strategy driving the next generation of execution intelligence.',
    canonical: 'https://agcube.com/insights',
  });

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Badge variant="outline" className="border-blue-500/30 text-blue-400 mb-4">
              Knowledge Hub
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
              Insights & <span className="text-blue-500">Intelligence</span>
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground leading-relaxed"
          >
            Deep dives into the technology and strategy driving the next generation of execution intelligence.
          </motion.p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-12">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={cat === 'All' ? 'default' : 'outline'}
                className={cat === 'All' ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'border-border hover:bg-muted text-foreground'}
                size="sm"
              >
                {cat}
              </Button>
            ))}
          </div>
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search articles..."
              className="bg-card/50 border-border pl-10 focus-visible:ring-blue-500"
            />
          </div>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
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
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      {article.date}
                    </div>
                    <span>{article.readTime}</span>
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
                  <Link to={`/insights/${article.id}`} className="inline-flex items-center text-xs font-bold text-foreground uppercase tracking-wider p-0 h-auto group/link hover:text-blue-400 transition-colors">
                    Read Article
                    <ArrowRight size={14} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Pagination Fallback */}
        <div className="mt-16 flex justify-center">
          <Button variant="outline" className="border-border hover:bg-muted text-foreground px-8 rounded-full">
            Load More Articles
          </Button>
        </div>
      </div>
    </div>
  );
}

function Button({ children, variant = 'default', className = '', size = 'md', ...props }: any) {
  const variants: any = {
    default: 'bg-primary text-primary-foreground hover:bg-primary/90',
    outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
    link: 'text-primary underline-offset-4 hover:underline',
  };
  const sizes: any = {
    sm: 'h-9 px-3 text-xs',
    md: 'h-10 px-4 py-2',
    lg: 'h-11 px-8',
  };
  return (
    <button
      className={`inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
