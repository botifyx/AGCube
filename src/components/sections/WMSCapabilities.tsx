import { motion } from 'motion/react';

interface WMSCapabilityItem {
  id: string;
  num: string;
  title: string;
  description: string;
  accentBorder: string;
  accentGlow: string;
}

const capabilities: WMSCapabilityItem[] = [
  {
    id: 'unified-platform',
    num: '01',
    title: 'Unified Warehouse Management Platform',
    description:
      'Classic WMS provides a comprehensive platform to manage all warehouse processes such as inbound receipt, putaway, inventory control, order picking, packing, and shipment. The system supports multiple picking methodologies such as order-based, bin-based, and item-based picking, enabling faster and more accurate order fulfilment.',
    accentBorder: 'hover:border-orange-500/50 dark:hover:border-orange-500/40',
    accentGlow: 'from-orange-500/10 via-amber-500/5 to-transparent'
  },
  {
    id: 'real-time-visibility',
    num: '02',
    title: 'Real-Time Inventory Visibility',
    description:
      'The platform delivers real-time inventory tracking and visibility across locations, bins, and warehouses. Businesses can monitor stock levels, movement history, and location details instantly, helping reduce stock discrepancies and improve operational control.',
    accentBorder: 'hover:border-amber-500/50 dark:hover:border-amber-500/40',
    accentGlow: 'from-amber-500/10 via-orange-500/5 to-transparent'
  },
  {
    id: 'ai-ml-optimization',
    num: '03',
    title: 'AI and Machine Learning Enabled Optimization',
    description:
      'Classic WMS integrates AI and Machine Learning capabilities to optimize warehouse operations. Intelligent algorithms help recommend the best putaway and picking strategies based on product movement, demand patterns, and warehouse layout. Predictive analytics also helps in better inventory planning and resource management.',
    accentBorder: 'hover:border-orange-500/50 dark:hover:border-orange-500/40',
    accentGlow: 'from-orange-500/10 via-amber-500/5 to-transparent'
  },
  {
    id: 'iot-smart-warehouse',
    num: '04',
    title: 'IoT Enabled Smart Warehouse',
    description:
      'The system supports integration with IoT devices such as sensors, RFID tags, and beacons to automate warehouse activities and enable real-time tracking of goods and operational conditions. This improves warehouse visibility, reduces manual intervention, and enhances overall productivity.',
    accentBorder: 'hover:border-amber-500/50 dark:hover:border-amber-500/40',
    accentGlow: 'from-amber-500/10 via-orange-500/5 to-transparent'
  }
];

export function WMSCapabilities() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-background">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-orange-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 -right-48 w-96 h-96 bg-amber-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs font-mono font-bold tracking-wider uppercase mb-4 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
              <span>Capabilities of WMS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground font-heading leading-[1.15]">
              Capabilities of <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 dark:from-orange-400 dark:via-amber-400 dark:to-orange-500">
                Classic WMS
              </span>
            </h2>

            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mt-4 rounded-full shadow-[0_0_12px_rgba(249,115,22,0.4)]" />

            <p className="text-muted-foreground text-sm sm:text-base mt-4 max-w-2xl mx-auto font-sans leading-relaxed">
              Designed from the ground up to unify physical warehouse execution, real-time inventory precision, and intelligent machine automation.
            </p>
          </motion.div>
        </div>

        {/* 2x2 Capabilities Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {capabilities.map((item, index) => {
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative rounded-3xl p-8 sm:p-10 bg-card/70 dark:bg-zinc-950/60 border border-border/90 dark:border-zinc-800/80 backdrop-blur-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/5 ${item.accentBorder} flex flex-col justify-between overflow-hidden`}
              >
                {/* Background Subtle Gradient Reveal on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.accentGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div className="relative z-10 space-y-4">
                  {/* Card Top: Number */}
                  <div className="flex items-center justify-end">
                    <span className="text-3xl sm:text-4xl font-black font-mono text-muted-foreground/20 dark:text-zinc-800 select-none group-hover:text-orange-500/30 transition-colors">
                      {item.num}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-foreground pt-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
