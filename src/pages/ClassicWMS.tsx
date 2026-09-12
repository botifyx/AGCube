import { motion } from 'motion/react';
import { useSEO } from '@/hooks/useSEO';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Rocket, Building2, CheckCircle2, ArrowRight } from 'lucide-react';
import { WMSCapabilities } from '@/components/sections/WMSCapabilities';
import { WMSSnapshot } from '@/components/sections/WMSSnapshot';
import { CognitiveCapabilities } from '@/components/sections/CognitiveCapabilities';
import { OperationsROI } from '@/components/sections/OperationsROI';

export default function ClassicWMS() {
  useSEO({
    title: 'Classic WMS | Scalable Warehouse Ecosystem',
    description: 'A modern, AI-native warehouse management system designed for the complexities of modern commerce.',
    canonical: 'https://agcube.com/classic-wms',
  });

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="sr-only">Classic WMS</h1>
              <div className="mb-8 flex items-center justify-center">
                <div className="inline-flex items-center justify-center px-8 py-5 rounded-2xl bg-white shadow-xl shadow-orange-500/10 border border-orange-500/25">
                  <img
                    src="/classic-wms-logo-full.png"
                    alt="Classic WMS"
                    className="h-16 sm:h-20 w-auto object-contain"
                  />
                </div>
              </div>
              {/* Refined Typographic Statement */}
              <div className="mt-8 space-y-6 max-w-3xl mx-auto font-sans">
                {/* Lead Headline Statement */}
                <p className="text-xl sm:text-2xl md:text-[25px] font-medium tracking-tight text-foreground/90 leading-snug sm:leading-relaxed font-heading">
                  <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 dark:from-orange-400 dark:via-amber-400 dark:to-orange-400">
                    Classic WMS
                  </span>{' '}
                  is a modern and scalable{' '}
                  <span className="font-semibold text-foreground">
                    Warehouse Management System (WMS)
                  </span>{' '}
                  designed to optimize{' '}
                  <span className="font-semibold text-foreground">warehouse operations</span>, improve{' '}
                  <span className="font-semibold text-foreground">inventory visibility</span>, and enhance{' '}
                  <span className="font-semibold text-foreground">overall supply chain efficiency</span>.
                </p>

                {/* Subtle Amber Gradient Accent Line */}
                <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full opacity-80 shadow-[0_0_10px_rgba(249,115,22,0.4)]" />

                {/* Supporting Body Typography */}
                <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  <p>
                    The platform helps organizations manage the complete lifecycle of warehouse operations including{' '}
                    <span className="font-semibold text-foreground/95 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-orange-500/10 dark:bg-orange-500/15 border border-orange-500/25 text-orange-700 dark:text-orange-300 text-xs sm:text-sm font-mono my-0.5">
                      receiving, storage, picking, packing, and dispatch
                    </span>{' '}
                    with high accuracy and automation.
                  </p>
                  <p>
                    Built with{' '}
                    <span className="font-semibold text-foreground">
                      advanced technologies and industry best practices
                    </span>
                    , Classic WMS enables businesses to{' '}
                    <span className="font-semibold text-foreground">streamline operations</span>,{' '}
                    <span className="font-semibold text-foreground">reduce manual errors</span>, and gain{' '}
                    <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500 dark:from-orange-400 dark:to-amber-400">
                      real-time control
                    </span>{' '}
                    over inventory and warehouse workflows.
                  </p>
                </div>
              </div>
            </motion.div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white rounded-full px-8 shadow-lg shadow-orange-500/25 font-bold">
                <Link to="/contact">Request Demo</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-border hover:bg-muted text-foreground rounded-full px-8 cursor-pointer font-semibold">
                <a href="#pricing">View Pricing</a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Classic WMS Snapshot - Operational Flow Architecture */}
      <div className="mb-24">
        <WMSSnapshot />
      </div>

      {/* Full-width Key Cognitive Capabilities Section (01 to 06) */}
      <div className="mb-24">
        <CognitiveCapabilities />
      </div>

      <div className="container mx-auto px-4 md:px-6 mb-24">
        {/* Pricing/Comparison */}
        <div id="pricing" className="max-w-4xl mx-auto scroll-mt-32">
          <div className="text-center mb-12 max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground font-heading">
              Choose Your Scale
            </h2>

            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-mono font-bold tracking-wider uppercase shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              <span>Flexible Commercial Model</span>
            </div>

            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-sans">
              <span className="font-semibold text-foreground">Classic WMS</span> offers flexible commercial options with{' '}
              <span className="font-semibold text-foreground">user-based subscription pricing models</span>, enabling businesses to adopt warehouse automation without heavy upfront investments.
            </p>

            <div className="pt-1">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-muted/60 dark:bg-white/5 border border-border/70 dark:border-white/10 text-xs sm:text-sm font-medium text-foreground/90 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 shrink-0" />
                <span>
                  A{' '}
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-300">
                    pay-as-you-grow approach
                  </span>{' '}
                  ensures that the solution scales alongside business growth.
                </span>
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Lite Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative rounded-3xl p-8 sm:p-10 flex flex-col justify-between border border-border/80 dark:border-white/10 bg-card/60 dark:bg-card/40 backdrop-blur-xl hover:border-amber-500/50 dark:hover:border-amber-500/40 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300"
            >
              <div className="space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 dark:bg-amber-500/15 border border-amber-500/25 flex items-center justify-center text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  <Rocket className="w-7 h-7" />
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground font-heading tracking-tight">Lite</h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mt-2">
                    A plug-and-play solution designed for small and medium businesses.
                  </p>
                </div>

                <div className="pt-4 border-t border-border/60 dark:border-white/10">
                  <ul className="space-y-3">
                    {[
                      'Essential Features',
                      'Cost-Effective',
                      'Quick Implementation'
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm sm:text-base text-foreground/90 font-medium">
                        <div className="w-5 h-5 rounded-full bg-amber-500/15 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8 mt-6">
                <Button asChild className="w-full bg-muted/50 hover:bg-amber-500 hover:text-white text-foreground border border-border/80 dark:border-white/10 rounded-xl h-12 text-base font-semibold transition-all duration-300 group/btn shadow-sm">
                  <Link to="/contact" className="flex items-center justify-center gap-2">
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Enterprise Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group relative rounded-3xl p-8 sm:p-10 flex flex-col justify-between border-2 border-blue-500/40 dark:border-blue-500/30 bg-gradient-to-b from-blue-500/[0.07] via-card/80 to-card/60 dark:from-blue-500/[0.12] dark:via-card/60 dark:to-card/40 backdrop-blur-xl hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
            >
              {/* top accent highlight */}
              <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-80" />

              <div className="space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/15 dark:bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300 shadow-sm shadow-blue-500/10">
                  <Building2 className="w-7 h-7" />
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground font-heading tracking-tight">Enterprise</h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mt-2">
                    Suitable for large enterprises and complex warehouse environments.
                  </p>
                </div>

                <div className="pt-4 border-t border-blue-500/20 dark:border-blue-500/15">
                  <ul className="space-y-3">
                    {[
                      'Advanced Capabilities',
                      'Scalability',
                      'Customized Fit-Gap Approach'
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm sm:text-base text-foreground/90 font-medium">
                        <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8 mt-6">
                <Button asChild className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-xl h-12 text-base font-semibold shadow-lg shadow-blue-500/25 transition-all duration-300 group/btn">
                  <Link to="/contact" className="flex items-center justify-center gap-2">
                    <span>Contact Sales</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Smarter Operations. Measurable ROI Section */}
      <div className="mb-24">
        <OperationsROI />
      </div>

      {/* Classic WMS: Built for Speed, Accuracy, and Visibility Section */}
      <div>
        <WMSCapabilities />
      </div>
    </div>
  );
}
