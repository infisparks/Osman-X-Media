"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Play, TrendingUp, Users, Video, Star } from 'lucide-react';
import Link from 'next/link';

const FloatingOrb = ({ className }: { className: string }) => (
  <motion.div
    className={`absolute rounded-full blur-[120px] pointer-events-none ${className}`}
    animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
  />
);

const stats = [
  { icon: <TrendingUp className="w-4 h-4 text-accent-goldBase" />, value: "200%", label: "Avg. ROI Growth" },
  { icon: <Video className="w-4 h-4 text-accent-goldBase" />, value: "3M+", label: "Video Views" },
  { icon: <Users className="w-4 h-4 text-accent-goldBase" />, value: "50+", label: "Brands Scaled" },
  { icon: <Star className="w-4 h-4 text-accent-goldBase" />, value: "5★", label: "Client Rating" },
];

export const Hero = () => {

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-primary-navy">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-navy via-primary-navy/95 to-primary-navy/80" />
      </div>

      {/* Floating Orbs */}
      <FloatingOrb className="w-[600px] h-[600px] bg-accent-goldBase top-[-10%] right-[-15%] opacity-20" />
      <FloatingOrb className="w-[400px] h-[400px] bg-accent-goldHighlight bottom-[-10%] left-[-5%] opacity-10" />
      <FloatingOrb className="w-[300px] h-[300px] bg-white bottom-[20%] right-[10%] opacity-5" />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(212,175,55,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.4) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* OsmanX Watermark */}
      <div className="absolute inset-0 z-0 text-white/[0.03] pointer-events-none select-none overflow-hidden flex items-center justify-end pr-[-5%]">
        <div className="text-[20rem] font-black uppercase leading-none">OsmanX</div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 md:px-12 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left Column — Copy */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            {/* Gold Pill Label */}
            <motion.div variants={itemVariants} className="mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-goldBase/30 bg-accent-goldBase/10 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-accent-goldBase animate-pulse" />
                <span className="text-xs font-black font-montserrat uppercase tracking-[0.25em] text-accent-goldHighlight">
                  Premium Digital Agency
                </span>
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-black font-montserrat text-white leading-[1.05] mb-8 uppercase tracking-tighter"
            >
              Where Creative Vision Meets{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gold-gradient">Performance</span>
                <motion.span
                  className="absolute -bottom-2 left-0 h-1 bg-gold-gradient rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
                />
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-white/60 font-inter mb-12 max-w-xl leading-relaxed"
            >
              We fuse cinematic content creation with data-driven advertising to architect exponential brand growth. Premium agency. Real results.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-16"
            >
              <Link href="/book">
                <motion.button
                  whileHover={{ scale: 1.04, boxShadow: "0 20px 60px rgba(212,175,55,0.35)" }}
                  whileTap={{ scale: 0.97 }}
                  className="group relative overflow-hidden bg-gold-gradient text-primary-navy font-black font-montserrat uppercase tracking-widest text-sm px-8 py-4 rounded-2xl flex items-center gap-3 transition-all"
                >
                  Book a Strategy Call
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              <Link href="/portfolio">
                <motion.button
                  whileHover={{ scale: 1.04, backgroundColor: "rgba(255,255,255,0.12)" }}
                  whileTap={{ scale: 0.97 }}
                  className="group flex items-center gap-3 px-8 py-4 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm text-white font-black font-montserrat uppercase tracking-widest text-sm transition-all"
                >
                  <span className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-accent-goldBase/20 transition-colors">
                    <Play className="w-3.5 h-3.5 text-accent-goldBase fill-accent-goldBase" />
                  </span>
                  View Our Work
                </motion.button>
              </Link>
            </motion.div>

            {/* Stat Row */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4, scale: 1.03 }}
                  className="relative group p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-accent-goldBase/30 transition-all duration-300 cursor-default"
                >
                  <div className="flex items-center gap-2 mb-1">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-black font-montserrat text-white">{stat.value}</div>
                  <div className="text-[10px] font-bold font-montserrat uppercase tracking-widest text-white/40">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column — Glassmorphism Card Stack */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative hidden lg:flex items-center justify-center"
          >
            {/* Main Card */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full max-w-md rounded-[2rem] overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.5)] border border-white/10"
            >
              <div className="h-[480px] bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80')] bg-cover bg-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/90 via-primary-navy/20 to-transparent" />
              {/* Card inner overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-accent-goldHighlight mb-2">Latest Case Study</p>
                  <h3 className="text-xl font-black font-montserrat text-white mb-1">Luxury Fitness Brand</h3>
                  <p className="text-sm text-white/60 font-inter">Video Production + Meta Ads</p>
                  <div className="flex items-center gap-3 mt-4">
                    <span className="text-3xl font-black font-montserrat text-transparent bg-clip-text bg-gold-gradient">5X ROAS</span>
                    <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gold-gradient rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "80%" }}
                        transition={{ delay: 1.5, duration: 1.2, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Badge — Top Right */}
            <motion.div
              animate={{ y: [0, -8, 0], rotate: [0, 1, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -top-8 -right-8 bg-gradient-to-br from-accent-goldBase to-accent-goldHighlight rounded-2xl p-5 shadow-2xl shadow-accent-goldBase/30"
            >
              <TrendingUp className="w-7 h-7 text-primary-navy" />
            </motion.div>

            {/* Floating Metric — Bottom Left */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-8 -left-8 backdrop-blur-xl bg-primary-navy/80 border border-white/10 rounded-2xl px-6 py-4 shadow-2xl"
            >
              <p className="text-[9px] font-black uppercase tracking-widest text-white/40 mb-0.5">Average Growth</p>
              <p className="text-2xl font-black font-montserrat text-transparent bg-clip-text bg-gold-gradient">+200% ROI</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/30">Scroll</p>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-accent-goldBase" />
        </motion.div>
      </motion.div>
    </section>
  );
};
