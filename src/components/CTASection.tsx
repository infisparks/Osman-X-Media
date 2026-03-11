"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Zap } from 'lucide-react';
import Link from 'next/link';

export const CTASection = () => {
  return (
    <section className="relative py-28 md:py-40 bg-white overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-accent-goldBase/8 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-primary-navy/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Main CTA Container */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative max-w-5xl mx-auto rounded-[3rem] bg-primary-navy overflow-hidden p-12 md:p-20 text-center shadow-[0_60px_150px_rgba(26,43,66,0.25)]"
        >
          {/* CTA internal background */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent-goldBase/10 rounded-full blur-[100px] -mr-20 -mt-20" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent-goldHighlight/10 rounded-full blur-[100px] -ml-20 -mb-20" />
          </div>
          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(rgba(212,175,55,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.6) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />
          {/* OsmanX watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none text-white/[0.02] overflow-hidden">
            <span className="text-[15rem] font-black uppercase leading-none">OsmanX</span>
          </div>

          <div className="relative z-10">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full border border-accent-goldBase/30 bg-accent-goldBase/10"
            >
              <Zap className="w-3.5 h-3.5 text-accent-goldBase" />
              <span className="text-[10px] font-black font-montserrat uppercase tracking-[0.25em] text-accent-goldHighlight">
                Limited Spots Available
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-4xl md:text-7xl font-black font-montserrat text-white mb-6 uppercase tracking-tighter leading-[1.05]"
            >
              Ready to{" "}
              <span className="text-transparent bg-clip-text bg-gold-gradient">Scale</span>{" "}
              Your Brand?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-white/50 font-inter mb-14 max-w-2xl mx-auto leading-relaxed"
            >
              Partner with OsmanXMedia to transform your creative vision into a high-performance revenue engine. Book your complimentary 30-minute strategy call today.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/book">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 25px 80px rgba(212,175,55,0.4)" }}
                  whileTap={{ scale: 0.97 }}
                  className="group inline-flex items-center gap-3 bg-gold-gradient text-primary-navy font-black font-montserrat uppercase tracking-widest text-sm px-10 py-5 rounded-2xl transition-all shadow-2xl shadow-accent-goldBase/30"
                >
                  <Calendar className="w-5 h-5" />
                  Book a Strategy Call
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              <Link href="/portfolio">
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.12)" }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl border border-white/20 bg-white/8 text-white font-black font-montserrat uppercase tracking-widest text-sm backdrop-blur-sm transition-all"
                >
                  See Our Work
                </motion.button>
              </Link>
            </motion.div>

            {/* Trust note */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="mt-10 text-[10px] font-bold font-inter uppercase tracking-widest text-white/20"
            >
              Free strategy session · No obligations · No contracts
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
