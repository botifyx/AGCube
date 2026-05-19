import { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const Home = lazy(() => import('@/pages/Home'));
const Advisory = lazy(() => import('@/pages/Advisory'));
const ClassicWMS = lazy(() => import('@/pages/ClassicWMS'));
const SupplyChain = lazy(() => import('@/pages/SupplyChain'));
const Industries = lazy(() => import('@/pages/Industries'));
const Insights = lazy(() => import('@/pages/Insights'));
const ArticleDetail = lazy(() => import('@/pages/ArticleDetail'));
const Contact = lazy(() => import('@/pages/Contact'));
const PrivacyPolicy = lazy(() => import('@/pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('@/pages/TermsOfService'));
const CookiePolicy = lazy(() => import('@/pages/CookiePolicy'));
import { ScrollToTop } from '@/components/layout/ScrollToTop';
import { BootLoader } from '@/components/layout/BootLoader';

import { ThemeProvider } from '@/components/theme-provider';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user has already seen the boot loader in this session
    const hasSeenLoader = sessionStorage.getItem('ag-cube-loader-seen');
    if (hasSeenLoader) {
      setIsLoading(false);
    }
  }, []);

  const handleLoaderComplete = () => {
    setIsLoading(false);
    sessionStorage.setItem('ag-cube-loader-seen', 'true');
  };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="ag-cube-theme">
      <Router>
        <ScrollToTop />
        <AnimatePresence mode="wait">
          {isLoading ? (
            <BootLoader key="loader" onComplete={handleLoaderComplete} />
          ) : (
            <div key="content" className="min-h-screen bg-background text-foreground flex flex-col selection:bg-blue-500/30 selection:text-blue-200">
              <Navbar />
              <main className="flex-grow">
                <Suspense fallback={<div className="h-screen w-full flex items-center justify-center"><div className="w-8 h-8 border-t-2 border-blue-500 border-solid rounded-full animate-spin"></div></div>}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/advisory" element={<Advisory />} />
                    <Route path="/classic-wms" element={<ClassicWMS />} />
                    <Route path="/supply-chain" element={<SupplyChain />} />
                    <Route path="/industries" element={<Industries />} />
                    <Route path="/insights" element={<Insights />} />
                    <Route path="/insights/:id" element={<ArticleDetail />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/terms-of-service" element={<TermsOfService />} />
                    <Route path="/cookie-policy" element={<CookiePolicy />} />
                  </Routes>
                </Suspense>
              </main>
              <Footer />
            </div>
          )}
        </AnimatePresence>
      </Router>
    </ThemeProvider>
  );
}
