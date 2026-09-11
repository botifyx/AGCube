import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useTheme } from '@/components/theme-provider';

const navLinks = [
  { name: 'Advisory', href: '/advisory' },
  { name: 'WMS', href: '/classic-wms' },
  { name: 'Supply Chain', href: '/supply-chain' },
  { name: 'Industries', href: '/industries' },
  { name: 'Insights', href: '/insights' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
        scrolled
          ? 'bg-background/80 backdrop-blur-md border-border py-3'
          : 'bg-transparent border-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <img
            src="/agcube-icon.png"
            alt="AG Cube Icon"
            className="h-7 md:h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <img
            src="/agcube-logo.png"
            alt="AG Cube"
            className="h-6 md:h-7 w-auto object-contain transition-all duration-300 dark:brightness-125 dark:contrast-110"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            const isWMS = link.name === 'WMS';
            const isActive = location.pathname === link.href;

            if (isWMS) {
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    'text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border transition-all duration-300 flex items-center gap-1.5 shadow-sm',
                    isActive
                      ? 'border-orange-500/60 bg-orange-500/20 text-orange-600 dark:text-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.3)]'
                      : 'border-orange-500/30 bg-orange-500/10 text-orange-600 dark:text-orange-400 hover:border-orange-500/60 hover:text-orange-500 hover:shadow-[0_0_12px_rgba(249,115,22,0.2)]'
                  )}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                  <span>WMS</span>
                </Link>
              );
            }

            return (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  'text-sm font-semibold transition-colors duration-200',
                  isActive ? 'text-blue-600 dark:text-blue-400 font-bold' : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {link.name}
              </Link>
            );
          })}
          
          <div className="flex items-center gap-4 pl-2">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-xl hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            
            <Button asChild className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl px-5 h-10 shadow-lg shadow-blue-500/20">
              <Link to="/contact">Request Demo</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            className="text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => {
                const isWMS = link.name === 'WMS';
                const isActive = location.pathname === link.href;

                if (isWMS) {
                  return (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="text-base font-bold py-2.5 px-4 rounded-xl border border-orange-500/40 bg-orange-500/10 text-orange-400 flex items-center justify-between"
                    >
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
                        <span>WMS</span>
                      </span>
                    </Link>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={cn(
                      'text-base font-medium py-2 transition-colors',
                      isActive ? 'text-blue-600 dark:text-blue-400 font-bold' : 'text-muted-foreground hover:text-foreground'
                    )}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Button asChild className="mt-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold h-12 rounded-xl shadow-lg shadow-blue-500/25">
                <Link to="/contact">Request Demo</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
