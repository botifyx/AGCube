import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useSEO } from '@/hooks/useSEO';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { articles } from '@/data/articles';

export default function ArticleDetail() {
  const { id } = useParams<{ id: string }>();
  const article = articles.find((a) => a.id === id);

  useSEO({
    title: article ? article.title : 'Article Not Found',
    description: article ? article.excerpt : 'The article you are looking for does not exist.',
    canonical: article ? `https://agcube.com/insights/${article.id}` : 'https://agcube.com/insights',
    ogImage: article ? article.image : undefined,
  });

  if (!article) {
    return (
      <div className="pt-32 pb-24 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
        <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist or has been moved.</p>
        <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
          <Link to="/insights">Return to Insights</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <Link 
          to="/insights" 
          className="inline-flex items-center text-sm font-semibold text-muted-foreground hover:text-blue-500 mb-8 transition-colors group"
        >
          <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Insights
        </Link>

        <motion.article 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          {/* Header */}
          <header className="space-y-6">
            <div className="flex items-center gap-4">
              <Badge className="bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 border-none">
                {article.category}
              </Badge>
              <div className="flex items-center gap-4 text-sm font-medium text-muted-foreground">
                <span className="flex items-center gap-1.5"><Calendar size={14} /> {article.date}</span>
                <span className="flex items-center gap-1.5"><Clock size={14} /> {article.readTime}</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
              {article.title}
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
              {article.excerpt}
            </p>
          </header>

          {/* Featured Image */}
          <div className="aspect-[21/9] w-full overflow-hidden rounded-3xl bg-muted relative border border-border/50">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
          </div>

          {/* Content & Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Article Body */}
            <div 
              className="article-body lg:col-span-8 max-w-none" 
              dangerouslySetInnerHTML={{ __html: article.content }} 
            />
            
            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="p-8 rounded-3xl bg-card/50 border border-border sticky top-32 glass-dark">
                <h3 className="font-bold text-lg mb-4 text-foreground">Share this article</h3>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon" className="rounded-full bg-transparent border-border hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all text-muted-foreground">
                    <Share2 size={18} />
                  </Button>
                </div>
                
                <hr className="my-8 border-border" />
                
                <h3 className="font-bold text-lg mb-3 text-foreground">Ready to execute?</h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">Discuss how these insights apply to your specific operational challenges and scale your intelligence.</p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 rounded-xl text-sm font-bold" asChild>
                  <Link to="/contact">Request a Demo</Link>
                </Button>
              </div>
            </aside>
          </div>
        </motion.article>
      </div>
    </div>
  );
}
