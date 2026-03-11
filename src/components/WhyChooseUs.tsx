"use client";

import { motion } from 'framer-motion';
import { Target, Film, TrendingUp, Handshake, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    title: "Data-Driven Strategy",
    desc: "Every creative decision is backed by deep analytics, ensuring maximum ROI and conversion optimization for your specific audience.",
    icon: Target,
    metric: "3.2X avg. improvement",
  },
  {
    title: "Cinematic Production",
    desc: "High-definition, professionally color-graded visuals that stop the scroll and build massive brand authority at scale.",
    icon: Film,
    metric: "4K quality output",
  },
  {
    title: "Conversion-First Ads",
    desc: "We build campaigns engineered to scale revenue, not just views. Every dollar spent is tracked, optimized, and multiplied.",
    icon: TrendingUp,
    metric: "5X average ROAS",
  },
  {
    title: "Full-Service Partnership",
    desc: "A fully managed experience from strategy to execution. We become an extension of your elite marketing arm.",
    icon: Handshake,
    metric: "98% client retention",
  },
];

const checkpoints = [
  "Transparent reporting every week",
  "Dedicated account manager",
  "No long-term lock-in contracts",
  "Unlimited creative revisions",
];

export const WhyChooseUs = () => {
  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-goldBase/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-navy/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: Header + Checkpoints + CTA */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-[10px] font-black font-montserrat uppercase tracking-[0.3em] text-accent-goldBase mb-4 px-4 py-2 rounded-full border border-accent-goldBase/20 bg-accent-goldBase/5">
              The Advantage
            </span>
            <h2 className="text-4xl md:text-6xl font-black font-montserrat text-primary-navy mb-8 uppercase tracking-tighter leading-[1.1]">
              Why Brands Partner with{" "}
              <span className="text-transparent bg-clip-text bg-gold-gradient">OsmanXMedia</span>
            </h2>
            <p className="text-lg text-gray-500 font-inter mb-10 leading-relaxed">
              Aesthetics matter, but ROI matters more. We blend stunning creative content with data-driven performance to drive measurable, exponential growth you can actually see.
            </p>

            {/* Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12">
              {checkpoints.map((cp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-accent-goldBase shrink-0" />
                  <span className="text-sm font-bold font-inter text-gray-600">{cp}</span>
                </motion.div>
              ))}
            </div>

            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: "0 20px 60px rgba(212,175,55,0.35)" }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-primary-navy text-white font-black font-montserrat uppercase tracking-widest text-sm hover:bg-primary-navy/90 transition-all shadow-xl shadow-primary-navy/20"
              >
                Start Your Partnership
                <span className="w-8 h-8 rounded-xl bg-accent-goldBase/20 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-accent-goldBase" />
                </span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Right: Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  whileHover={{ y: -8, boxShadow: "0 30px 60px rgba(26,43,66,0.12)" }}
                  className="group relative p-7 rounded-3xl border border-gray-100 bg-white shadow-sm hover:border-accent-goldBase/30 transition-all duration-500 overflow-hidden cursor-default"
                >
                  {/* Top accent bar */}
                  <div className="absolute top-0 left-0 h-1 w-0 group-hover:w-full bg-gold-gradient transition-all duration-700 rounded-t-3xl" />
                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-goldBase/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />

                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-primary-navy/5 border border-primary-navy/10 flex items-center justify-center mb-6 group-hover:bg-primary-navy group-hover:border-primary-navy transition-all duration-300">
                      <Icon className="w-6 h-6 text-primary-navy group-hover:text-accent-goldBase transition-colors duration-300" />
                    </div>
                    <h3 className="text-lg font-black font-montserrat text-primary-navy mb-3 uppercase tracking-tight leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-500 font-inter leading-relaxed mb-5">
                      {feature.desc}
                    </p>
                    <div className="text-[10px] font-black font-montserrat uppercase tracking-widest text-accent-goldBase">
                      ↗ {feature.metric}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
