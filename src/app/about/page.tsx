"use client";

import { motion, AnimatePresence } from 'framer-motion';
import NextImage from 'next/image';
import { Target, Eye, Star, TrendingUp, Award, Zap, Camera, ShieldCheck, ArrowRight, Quote } from 'lucide-react';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from 'next/link';
import { useState } from 'react';

// ─────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────
const values = [
  {
    icon: Camera,
    title: "Creative Excellence",
    desc: "We craft high-impact videos and cinematic visuals that command attention and stop the scroll in a crowded digital landscape.",
    number: "01",
  },
  {
    icon: TrendingUp,
    title: "Performance Driven",
    desc: "Every campaign is backed by deep analytics, strategic foresight, and relentless optimization for maximum measurable ROI.",
    number: "02",
  },
  {
    icon: Star,
    title: "Premium Partnership",
    desc: "We provide a fully managed, high-end experience so our clients can focus strictly on scaling what matters most — their business.",
    number: "03",
  },
];

const advantages = [
  {
    icon: Zap,
    title: "Data-Driven Strategy",
    desc: "We don't guess. We analyze data rigorously to architect marketing campaigns that guarantee ROI.",
    stat: "3.2X",
    statLabel: "Avg. Improvement",
  },
  {
    icon: Award,
    title: "Cinematic Production",
    desc: "Our in-house production team shoots commercial-grade video content tailored for social media performance.",
    stat: "4K",
    statLabel: "Quality Output",
  },
  {
    icon: Target,
    title: "Conversion-Focused Ads",
    desc: "Every ad is systematically tested and scaled to turn views into high-quality leads and paying customers.",
    stat: "5X",
    statLabel: "Average ROAS",
  },
  {
    icon: ShieldCheck,
    title: "Full-Service Pipeline",
    desc: "From creative conception and filming to ad deployment and scaling, we handle the entire growth pipeline.",
    stat: "98%",
    statLabel: "Client Retention",
  },
];

const timeline = [
  { year: "2020", title: "Agency Founded", desc: "OsmanXMedia was born from a vision to bridge premium creative with performance marketing." },
  { year: "2021", title: "First 10 Brands Scaled", desc: "Grew from startup to trusted partner for e-commerce and personal brands across the UK." },
  { year: "2022", title: "3M+ Views Generated", desc: "Our video content surpassed 3 million combined views across all client accounts." },
  { year: "2023", title: "50+ Brands Scaled", desc: "Expanded services and team, becoming a full-stack agency for elite growth-stage brands." },
  { year: "2024", title: "Premium Agency Status", desc: "Recognized as one of the region's leading boutique digital agencies for ROI-driven results." },
];

// ─────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────
export default function AboutPage() {
  const [activeTimeline, setActiveTimeline] = useState(0);

  return (
    <main className="min-h-screen bg-white text-foreground overflow-x-hidden">
      <Navbar />

      {/* ═══════════════════════════════════════════════════
          SECTION 1 — HERO
      ═══════════════════════════════════════════════════ */}
      <section className="relative pt-28 pb-12 md:pt-32 md:pb-20 bg-primary-navy overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-accent-goldBase/10 blur-[150px]" />
          <div className="absolute bottom-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-white/5 blur-[100px]" />
        </div>
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(212,175,55,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        {/* OsmanX watermark */}
        <div className="absolute inset-0 z-0 text-white/[0.03] pointer-events-none select-none overflow-hidden flex items-center justify-center">
          <span className="text-[20rem] font-black uppercase leading-none">OsmanX</span>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-goldBase/30 bg-accent-goldBase/10 backdrop-blur-sm mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-accent-goldBase animate-pulse" />
              <span className="text-xs font-black font-montserrat uppercase tracking-[0.2em] text-accent-goldHighlight">
                Our Story
              </span>
            </motion.span>

            <h1 className="text-4xl md:text-6xl font-black font-montserrat text-white mb-4 leading-tight uppercase tracking-tighter">
              Architecting Digital Growth Through{" "}
              <span className="text-transparent bg-clip-text bg-gold-gradient">Creative Excellence</span>
            </h1>
            <p className="text-lg md:text-xl text-white/50 font-inter mb-8 leading-relaxed max-w-3xl mx-auto">
              OsmanXMedia is a premium digital agency that fuses cinematic content creation with data-driven advertising to architect exponential growth for modern brands.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {[{ v: "50+", l: "Brands Scaled" }, { v: "3M+", l: "Video Views" }, { v: "200%", l: "Avg. ROI" }].map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl font-black font-montserrat text-transparent bg-clip-text bg-gold-gradient">{s.v}</div>
                  <div className="text-[10px] font-bold font-montserrat uppercase tracking-widest text-white/30">{s.l}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 2 — OUR STORY (split layout)
      ═══════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-goldBase/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* Text */}
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block text-[10px] font-black font-montserrat uppercase tracking-[0.3em] text-accent-goldBase mb-4 px-4 py-2 rounded-full border border-accent-goldBase/20 bg-accent-goldBase/5">
                The Journey
              </span>
              <h2 className="text-4xl md:text-5xl font-black font-montserrat text-primary-navy mb-8 uppercase tracking-tighter leading-[1.1]">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-500 font-inter text-lg leading-relaxed">
                <p>
                  OsmanXMedia was founded out of a critical realization: the digital landscape was incredibly fragmented. Brands either hired brilliant creatives who lacked performance expertise, or data analysts who produced uninspiring content. We stepped in to bridge that exact gap.
                </p>
                <p>
                  Born from a passion for cinematic storytelling and an obsession with measurable performance, our agency exists to elevate brands above the noise. Our ethos is simple: a beautiful video means nothing if it doesn&apos;t drive revenue.
                </p>
                <p>
                  Today, we partner with industry-leading businesses to act as their elite, full-stack growth engine—engineering high-converting visual assets and deploying them intelligently through performance marketing to scale their bottom line.
                </p>
              </div>

              {/* Quote */}
              <div className="mt-10 p-6 rounded-2xl bg-primary-navy/5 border border-primary-navy/10 relative">
                <Quote className="absolute top-4 right-4 w-8 h-8 text-accent-goldBase/20" />
                <p className="text-primary-navy font-black font-montserrat text-lg italic leading-relaxed mb-3">
                  &quot;Our mission is to make premium marketing accessible and scalable for ambitious brands.&quot;
                </p>
                <p className="text-sm font-bold font-montserrat uppercase tracking-widest text-accent-goldBase">
                  — Osman, Founder
                </p>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              className="lg:w-1/2 relative w-full"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary-navy/20">
                <NextImage
                  src="/agency-studio.png"
                  alt="OsmanXMedia Studio"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/60 via-transparent to-transparent" />
              </div>

              {/* Floating stat card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 backdrop-blur-xl bg-white border border-gray-100 rounded-2xl p-5 shadow-2xl shadow-primary-navy/15"
              >
                <p className="text-[9px] font-black font-montserrat uppercase tracking-widest text-gray-400 mb-1">Founded</p>
                <p className="text-2xl font-black font-montserrat text-primary-navy">2020</p>
                <div className="mt-2 h-1 w-12 bg-gold-gradient rounded-full" />
              </motion.div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -top-6 -right-6 bg-gold-gradient rounded-2xl p-5 shadow-2xl shadow-accent-goldBase/30"
              >
                <Award className="w-7 h-7 text-primary-navy" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 3 — TIMELINE
      ═══════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-primary-navy relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-0 top-1/2 w-[500px] h-[500px] bg-accent-goldBase/5 rounded-full blur-[150px]" />
        </div>
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(212,175,55,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-[10px] font-black font-montserrat uppercase tracking-[0.3em] text-accent-goldBase mb-4 px-4 py-2 rounded-full border border-accent-goldBase/20 bg-accent-goldBase/5">
              Our Growth
            </span>
            <h2 className="text-4xl md:text-6xl font-black font-montserrat text-white uppercase tracking-tighter">
              Built to <span className="text-transparent bg-clip-text bg-gold-gradient">Scale</span>
            </h2>
          </motion.div>

          {/* Timeline Tabs */}
          <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
            {timeline.map((t, i) => (
              <button
                key={i}
                onClick={() => setActiveTimeline(i)}
                className={`px-5 py-2.5 rounded-xl font-black font-montserrat text-xs uppercase tracking-widest transition-all duration-300 ${
                  activeTimeline === i
                    ? "bg-gold-gradient text-primary-navy shadow-lg shadow-accent-goldBase/25"
                    : "border border-white/15 text-white/40 hover:border-accent-goldBase/30 hover:text-white/70"
                }`}
              >
                {t.year}
              </button>
            ))}
          </div>

          {/* Active Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTimeline}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="max-w-2xl mx-auto text-center p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <div className="text-4xl font-black font-montserrat text-transparent bg-clip-text bg-gold-gradient mb-4">
                {timeline[activeTimeline].year}
              </div>
              <h3 className="text-2xl font-black font-montserrat text-white mb-4 uppercase tracking-tight">
                {timeline[activeTimeline].title}
              </h3>
              <p className="text-white/50 font-inter leading-relaxed text-lg">
                {timeline[activeTimeline].desc}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 4 — MISSION & VISION
      ═══════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-0 top-1/2 w-[400px] h-[400px] bg-accent-goldBase/5 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-[10px] font-black font-montserrat uppercase tracking-[0.3em] text-accent-goldBase mb-4 px-4 py-2 rounded-full border border-accent-goldBase/20 bg-accent-goldBase/5">
              What Drives Us
            </span>
            <h2 className="text-4xl md:text-6xl font-black font-montserrat text-primary-navy uppercase tracking-tighter">
              Mission &amp; <span className="text-transparent bg-clip-text bg-gold-gradient">Vision</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Target,
                title: "Our Mission",
                text: "To deliver high-impact digital marketing solutions where breathtaking creative content seamlessly meets rigorous data-driven performance.",
              },
              {
                icon: Eye,
                title: "Our Vision",
                text: "To become a globally recognized digital marketing agency, renowned for producing exceptional video content and engineering predictable, massive growth.",
              },
            ].map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  whileHover={{ y: -8, boxShadow: "0 30px 60px rgba(26,43,66,0.12)" }}
                  className="group relative p-10 md:p-12 rounded-3xl bg-white border border-gray-100 shadow-sm hover:border-accent-goldBase/30 transition-all duration-500 overflow-hidden cursor-default"
                >
                  <div className="absolute top-0 left-0 h-1 w-0 group-hover:w-full bg-gold-gradient transition-all duration-700 rounded-t-3xl" />
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-goldBase/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl" />
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-accent-goldBase/10 border border-accent-goldBase/20 flex items-center justify-center mb-8 group-hover:bg-primary-navy group-hover:border-primary-navy transition-all duration-400">
                      <Icon className="w-8 h-8 text-accent-goldBase group-hover:text-accent-goldBase transition-colors" />
                    </div>
                    <h3 className="text-2xl font-black font-montserrat text-primary-navy mb-4 uppercase tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gold-gradient transition-all duration-300">
                      {card.title}
                    </h3>
                    <p className="text-xl text-gray-500 font-inter leading-relaxed">
                      &quot;{card.text}&quot;
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 5 — CORE VALUES
      ═══════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-primary-navy relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent-goldBase/5 rounded-full blur-[200px]" />
        </div>
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(212,175,55,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-[10px] font-black font-montserrat uppercase tracking-[0.3em] text-accent-goldBase mb-4 px-4 py-2 rounded-full border border-accent-goldBase/20 bg-accent-goldBase/5">
              Our Principles
            </span>
            <h2 className="text-4xl md:text-6xl font-black font-montserrat text-white uppercase tracking-tighter">
              Core <span className="text-transparent bg-clip-text bg-gold-gradient">Values</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, i) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  whileHover={{ y: -12, scale: 1.02 }}
                  className="group relative p-10 rounded-3xl bg-white/5 border border-white/10 hover:border-accent-goldBase/40 hover:bg-white/10 transition-all duration-500 overflow-hidden cursor-default"
                >
                  {/* Number */}
                  <div className="absolute top-8 right-8 text-6xl font-black font-montserrat text-white/5 select-none leading-none">
                    {val.number}
                  </div>
                  {/* Hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-goldBase/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />
                  {/* Top bar */}
                  <div className="absolute top-0 left-0 h-1 w-0 group-hover:w-full bg-gold-gradient transition-all duration-700 rounded-t-3xl" />

                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ rotate: -8, scale: 1.1 }}
                      className="w-16 h-16 rounded-2xl bg-accent-goldBase/10 border border-accent-goldBase/20 flex items-center justify-center mb-8 group-hover:bg-accent-goldBase/20 transition-all"
                    >
                      <Icon className="w-8 h-8 text-accent-goldBase" />
                    </motion.div>
                    <h3 className="text-2xl font-black font-montserrat text-white mb-4 uppercase tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gold-gradient transition-all duration-300">
                      {val.title}
                    </h3>
                    <p className="text-white/50 font-inter leading-relaxed group-hover:text-white/70 transition-colors duration-300">
                      {val.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 6 — WHY PARTNER WITH US
      ═══════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-goldBase/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-navy/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            {/* Left label + headline */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/3 lg:sticky lg:top-32"
            >
              <span className="inline-block text-[10px] font-black font-montserrat uppercase tracking-[0.3em] text-accent-goldBase mb-4 px-4 py-2 rounded-full border border-accent-goldBase/20 bg-accent-goldBase/5">
                The Advantage
              </span>
              <h2 className="text-4xl md:text-5xl font-black font-montserrat text-primary-navy mb-6 uppercase tracking-tighter leading-[1.1]">
                Why Brands Partner With{" "}
                <span className="text-transparent bg-clip-text bg-gold-gradient">OsmanXMedia</span>
              </h2>
              <p className="text-gray-500 font-inter text-lg mb-10 leading-relaxed">
                We are more than an agency. We are growth architects acting as an extension of your elite internal marketing force.
              </p>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.04, boxShadow: "0 20px 60px rgba(212,175,55,0.35)" }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-3 bg-gold-gradient text-primary-navy font-black font-montserrat uppercase tracking-widest text-sm px-8 py-4 rounded-2xl transition-all shadow-xl shadow-accent-goldBase/20"
                >
                  Start Partnership <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </motion.div>

            {/* Right grid */}
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {advantages.map((adv, i) => {
                const Icon = adv.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    whileHover={{ y: -8, boxShadow: "0 30px 60px rgba(26,43,66,0.12)" }}
                    className="group relative p-8 rounded-3xl border border-gray-100 bg-white shadow-sm hover:border-accent-goldBase/30 transition-all duration-500 overflow-hidden cursor-default"
                  >
                    <div className="absolute top-0 left-0 h-1 w-0 group-hover:w-full bg-gold-gradient transition-all duration-700 rounded-t-3xl" />
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-goldBase/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />

                    <div className="relative z-10">
                      {/* Stat */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-primary-navy/5 border border-primary-navy/10 flex items-center justify-center group-hover:bg-primary-navy group-hover:border-primary-navy transition-all duration-300">
                          <Icon className="w-6 h-6 text-primary-navy group-hover:text-accent-goldBase transition-colors duration-300" />
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-black font-montserrat text-transparent bg-clip-text bg-gold-gradient">{adv.stat}</div>
                          <div className="text-[9px] font-bold font-montserrat uppercase tracking-widest text-gray-400">{adv.statLabel}</div>
                        </div>
                      </div>
                      <h3 className="text-xl font-black font-montserrat text-primary-navy mb-3 uppercase tracking-tight">
                        {adv.title}
                      </h3>
                      <p className="text-gray-500 font-inter leading-relaxed text-sm">
                        {adv.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 7 — CTA
      ═══════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-primary-navy relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-goldBase/8 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-goldHighlight/5 rounded-full blur-[120px]" />
        </div>
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(212,175,55,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none text-white/[0.02] overflow-hidden">
          <span className="text-[15rem] font-black uppercase leading-none">OsmanX</span>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full border border-accent-goldBase/30 bg-accent-goldBase/10">
              <Zap className="w-3.5 h-3.5 text-accent-goldBase" />
              <span className="text-[10px] font-black font-montserrat uppercase tracking-[0.25em] text-accent-goldHighlight">
                Ready to Grow?
              </span>
            </span>

            <h2 className="text-4xl md:text-7xl font-black font-montserrat text-white mb-6 uppercase tracking-tighter leading-[1.05]">
              Work With <span className="text-transparent bg-clip-text bg-gold-gradient">OsmanXMedia</span>
            </h2>
            <p className="text-lg md:text-xl text-white/50 font-inter mb-12 max-w-2xl mx-auto leading-relaxed">
              Partner with us to transform your brand into a high-performance growth machine backed by stunning creative and relentless data-driven execution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 25px 80px rgba(212,175,55,0.4)" }}
                  whileTap={{ scale: 0.97 }}
                  className="group inline-flex items-center gap-3 bg-gold-gradient text-primary-navy font-black font-montserrat uppercase tracking-widest text-sm px-10 py-5 rounded-2xl shadow-2xl shadow-accent-goldBase/30"
                >
                  Get in Touch <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              <Link href="/book">
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.12)" }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl border border-white/20 bg-white/8 text-white font-black font-montserrat uppercase tracking-widest text-sm backdrop-blur-sm transition-all"
                >
                  Book Strategy Call
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
