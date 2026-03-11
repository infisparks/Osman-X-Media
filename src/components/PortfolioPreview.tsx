"use client";

import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const cases = [
  {
    client: "Luxury Fitness Brand",
    service: "Video Ads + Meta Ads",
    result: "5X ROAS",
    tag: "Performance Marketing",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80",
  },
  {
    client: "Boutique E-Commerce",
    service: "Content Strategy + Social",
    result: "+200% Growth",
    tag: "Organic Growth",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80",
  },
  {
    client: "Real Estate Agency",
    service: "Brand Video + Paid Ads",
    result: "12X Lead Volume",
    tag: "Lead Generation",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80",
  },
];

export const PortfolioPreview = () => {
  return (
    <section className="relative py-24 md:py-32 bg-primary-navy overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent-goldBase/5 rounded-full blur-[200px]" />
      </div>
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(212,175,55,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.5) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-[10px] font-black font-montserrat uppercase tracking-[0.3em] text-accent-goldBase mb-4 px-4 py-2 rounded-full border border-accent-goldBase/20 bg-accent-goldBase/5">
              Featured Work
            </span>
            <h2 className="text-4xl md:text-6xl font-black font-montserrat text-white uppercase tracking-tighter leading-[1.1]">
              Proven Client{" "}
              <span className="text-transparent bg-clip-text bg-gold-gradient">Results</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="/portfolio">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl border border-white/15 bg-white/5 text-white/70 font-black font-montserrat uppercase tracking-widest text-xs hover:border-accent-goldBase/40 hover:text-accent-goldBase hover:bg-accent-goldBase/5 transition-all duration-300"
              >
                All Case Studies <ArrowRight className="w-3.5 h-3.5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Portfolio Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -12 }}
              className="group relative overflow-hidden rounded-3xl cursor-pointer aspect-[3/4] md:aspect-auto md:h-[500px] shadow-xl"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${item.image})` }}
              />

              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-navy via-primary-navy/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Glassmorphism top tag */}
              <div className="absolute top-5 left-5">
                <span className="inline-block px-3 py-1.5 backdrop-blur-md bg-white/10 border border-white/20 text-[9px] font-black font-montserrat uppercase tracking-widest text-white/80 rounded-full">
                  {item.tag}
                </span>
              </div>

              {/* Hover icon */}
              <div className="absolute top-5 right-5 w-10 h-10 rounded-full backdrop-blur-md bg-white/10 border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                <ExternalLink className="w-4 h-4 text-accent-goldBase" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-7 translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-[9px] font-black font-montserrat uppercase tracking-[0.2em] text-accent-goldHighlight mb-2">{item.service}</p>
                <h3 className="text-2xl font-black font-montserrat text-white mb-4 uppercase tracking-tight leading-tight">
                  {item.client}
                </h3>

                {/* Result Badge */}
                <div className="flex items-center gap-3">
                  <div className="h-px flex-1 bg-white/10 group-hover:bg-accent-goldBase/30 transition-colors duration-500" />
                  <div className="flex-shrink-0 backdrop-blur-md bg-accent-goldBase/20 border border-accent-goldBase/30 rounded-xl px-4 py-2">
                    <span className="text-lg font-black font-montserrat text-transparent bg-clip-text bg-gold-gradient">
                      {item.result}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
