"use client";

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

function AnimatedNumber({ value, suffix = "", duration = 2 }: { value: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const start = 0;
    const end = value;
    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setDisplay(Math.round(start + (end - start) * eased));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, value, duration]);

  return <span ref={ref}>{display}{suffix}</span>;
}

const stats = [
  { value: 200, suffix: "%", label: "Average ROI Growth", subtext: "Across all client campaigns" },
  { value: 3, suffix: "M+", label: "Video Views Generated", subtext: "Organic & paid combined" },
  { value: 50, suffix: "+", label: "Brands Scaled", subtext: "From startup to enterprise" },
  { value: 98, suffix: "%", label: "Client Retention Rate", subtext: "Long-term partnerships" },
];

const brands = ["Meta", "Google Ads", "TikTok", "YouTube", "Instagram", "Shopify", "HubSpot", "Klaviyo"];

export const TrustSection = () => {
  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/80 to-white pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[10px] font-black font-montserrat uppercase tracking-[0.3em] text-accent-goldBase mb-3">By The Numbers</p>
          <h2 className="text-3xl md:text-5xl font-black font-montserrat text-primary-navy uppercase tracking-tighter">
            Results That <span className="text-transparent bg-clip-text bg-gold-gradient">Speak</span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02, boxShadow: "0 30px 60px rgba(26,43,66,0.12)" }}
              className="group relative p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:border-accent-goldBase/25 transition-all duration-500 cursor-default overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-goldBase/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

              {/* Gold accent bar */}
              <div className="absolute top-0 left-0 h-1 w-0 group-hover:w-full bg-gold-gradient transition-all duration-700 rounded-t-3xl" />

              <div className="relative z-10">
                <div className="text-5xl md:text-6xl font-black font-montserrat text-transparent bg-clip-text bg-gold-gradient mb-3">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} duration={2.5} />
                </div>
                <p className="text-sm font-black font-montserrat text-primary-navy uppercase tracking-wider mb-1">{stat.label}</p>
                <p className="text-xs font-inter text-gray-400">{stat.subtext}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Platform Trust Marquee */}
        <div className="relative overflow-hidden">
          <p className="text-center text-[10px] font-black font-montserrat uppercase tracking-[0.3em] text-gray-300 mb-8">
            Platforms We Master
          </p>
          <div className="flex items-center gap-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            <motion.div
              animate={{ x: [0, -50 * brands.length] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="flex items-center gap-8 shrink-0"
            >
              {[...brands, ...brands].map((brand, i) => (
                <span
                  key={i}
                  className="text-sm font-black font-montserrat uppercase tracking-widest text-gray-200 hover:text-accent-goldBase transition-colors whitespace-nowrap px-4 py-2 rounded-xl border border-gray-100 bg-gray-50/50"
                >
                  {brand}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
