"use client";

import { motion } from 'framer-motion';
import NextImage from 'next/image';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProcessPreview } from "@/components/ProcessPreview";
import {
  Video, Share2, BarChart3, PenTool, ArrowRight,
  CheckCircle, TrendingUp, Zap, ShieldCheck, Target, Play
} from 'lucide-react';
import Link from 'next/link';

// ─────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────
const services = [
  {
    id: "video",
    number: "01",
    title: "Video Production",
    icon: Video,
    short: "Cinematic productions that capture attention and drive conversions.",
    desc: "Professional cinematic video content designed to capture attention and drive engagement. We handle everything from concept to final cut.",
    features: ['Brand Story Videos', 'Social Media Video Content', 'High-Converting Ad Creatives', 'Cinematic Production Quality', 'Video Editing & Motion Graphics'],
    image: "/service-video.png",
    stat: "5X", statLabel: "Avg. ROAS",
    layout: "normal" as const,
  },
  {
    id: "social",
    number: "02",
    title: "Social Media Management",
    icon: Share2,
    short: "Strategic community building and brand authority growth.",
    desc: "Strategic social media management designed to build brand authority and grow engaged communities that convert into loyal customers.",
    features: ['Content Planning & Scheduling', 'Social Media Calendar Creation', 'Audience Growth Strategy', 'Community Engagement', 'Performance Monitoring'],
    image: "/service-social.png",
    stat: "200%", statLabel: "Organic Growth",
    layout: "reverse" as const,
  },
  {
    id: "ads",
    number: "03",
    title: "Paid Advertising",
    icon: BarChart3,
    short: "Data-driven Meta ads designed for maximum ROI and scale.",
    desc: "Data-driven advertising campaigns designed to maximize ROI and scale your business efficiently across Meta, Google, and TikTok.",
    features: ['Meta Ads Campaign Management', 'Audience Targeting Strategy', 'Conversion Tracking Setup', 'Campaign Optimization', 'A/B Testing for Performance'],
    image: "/service-ads.png",
    stat: "3.2X", statLabel: "Revenue Growth",
    layout: "normal" as const,
  },
  {
    id: "strategy",
    number: "04",
    title: "Content Strategy",
    icon: PenTool,
    short: "Comprehensive marketing roadmaps for measurable performance.",
    desc: "Strategic content planning that aligns brand messaging with measurable marketing performance to establish absolute market dominance.",
    features: ['Brand Positioning Strategy', 'Content Planning Framework', 'Performance Analytics', 'Content Growth Roadmaps', 'Campaign Strategy Planning'],
    image: "/service-strategy.png",
    stat: "98%", statLabel: "Client Retention",
    layout: "reverse" as const,
  },
];

const edgePoints = [
  { title: "Data-Driven Marketing", desc: "Every creative decision is backed by rigorous analytics and performance data.", icon: TrendingUp, metric: "+200% ROI" },
  { title: "Scroll-Stopping Creative", desc: "We engineer cinematic visuals specifically designed to capture and hold user attention.", icon: Zap, metric: "3M+ Views" },
  { title: "Conversion-Focused", desc: "Vanity metrics don't matter. We only care about leads, sales, and return on ad spend.", icon: Target, metric: "5X ROAS" },
  { title: "Full-Service Partnership", desc: "From ideation to execution and scaling, we operate as your elite in-house growth team.", icon: ShieldCheck, metric: "98% Retention" },
];

// ─────────────────────────────────────────────────────────────
// BACKGROUND COMMON ELEMENTS
// ─────────────────────────────────────────────────────────────
const GridOverlay = () => (
  <div
    className="absolute inset-0 opacity-[0.03] pointer-events-none"
    style={{
      backgroundImage: `linear-gradient(rgba(212,175,55,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.5) 1px, transparent 1px)`,
      backgroundSize: "60px 60px",
    }}
  />
);

// ─────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────
export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-foreground overflow-x-hidden">
      <Navbar />

      {/* ═══════════════════════════════════════════════════
          SECTION 1 — HERO
      ═══════════════════════════════════════════════════ */}
      <section className="relative pt-28 pb-12 md:pt-32 md:pb-20 bg-primary-navy overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-goldBase/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px]" />
        </div>
        <GridOverlay />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none text-white/[0.025] overflow-hidden">
          <span className="text-[18rem] font-black uppercase leading-none">OsmanX</span>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-goldBase/30 bg-accent-goldBase/10 backdrop-blur-sm mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-accent-goldBase animate-pulse" />
              <span className="text-xs font-black font-montserrat uppercase tracking-[0.2em] text-accent-goldHighlight">Premium Agency Services</span>
            </motion.span>

            <h1 className="text-4xl md:text-6xl font-black font-montserrat text-white mb-4 uppercase tracking-tighter leading-tight">
              Our Digital Marketing <span className="text-transparent bg-clip-text bg-gold-gradient">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-white/50 font-inter mb-8 leading-relaxed max-w-3xl mx-auto">
              We combine cinematic content creation with data-driven advertising strategies to help brands grow, scale, and dominate their market.
            </p>

            {/* Quick nav pills */}
            <div className="flex flex-wrap justify-center gap-3">
              {services.map((s) => (
                <a key={s.id} href={`#${s.id}`} className="px-4 py-2 rounded-xl border border-white/15 bg-white/5 text-white/60 font-black font-montserrat text-xs uppercase tracking-widest hover:border-accent-goldBase/40 hover:text-accent-goldBase hover:bg-accent-goldBase/5 transition-all duration-300">
                  {s.title}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 2 — SERVICE CARDS OVERVIEW
      ═══════════════════════════════════════════════════ */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent-goldBase/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.a
                  key={i}
                  href={`#${service.id}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -8, boxShadow: "0 30px 60px rgba(26,43,66,0.12)" }}
                  className="group relative p-8 rounded-3xl border border-gray-100 bg-white shadow-sm hover:border-accent-goldBase/30 transition-all duration-500 overflow-hidden block"
                >
                  <div className="absolute top-0 left-0 h-1 w-0 group-hover:w-full bg-gold-gradient transition-all duration-700 rounded-t-3xl" />
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-goldBase/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />
                  <div className="relative z-10">
                    <div className="text-3xl font-black font-montserrat text-primary-navy/10 mb-4 select-none">{service.number}</div>
                    <div className="w-14 h-14 rounded-2xl bg-primary-navy/5 border border-primary-navy/10 flex items-center justify-center mb-6 group-hover:bg-primary-navy group-hover:border-primary-navy transition-all duration-300">
                      <Icon className="w-6 h-6 text-primary-navy group-hover:text-accent-goldBase transition-colors duration-300" />
                    </div>
                    <h3 className="text-lg font-black font-montserrat text-primary-navy mb-3 uppercase tracking-tight leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gold-gradient transition-all duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-500 font-inter leading-relaxed mb-4">{service.short}</p>
                    <div className="flex items-center gap-2 text-accent-goldBase font-black font-montserrat text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-400">
                      Explore <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 3 — DETAILED SERVICE SECTIONS
      ═══════════════════════════════════════════════════ */}
      {services.map((service, i) => {
        const Icon = service.icon;
        const isReverse = service.layout === "reverse";
        const isNavy = i % 2 === 0;

        return (
          <section
            key={service.id}
            id={service.id}
            className={`relative py-24 md:py-32 scroll-mt-20 overflow-hidden ${isNavy ? "bg-primary-navy" : "bg-white"}`}
          >
            {isNavy && <GridOverlay />}
            <div className={`absolute inset-0 pointer-events-none ${isNavy ? "" : ""}`}>
              <div className={`absolute ${isReverse ? "left-0 bottom-0" : "right-0 top-0"} w-[400px] h-[400px] ${isNavy ? "bg-accent-goldBase/8" : "bg-accent-goldBase/5"} rounded-full blur-[150px]`} />
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
              <div className={`flex flex-col ${isReverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-16 lg:gap-24`}>

                {/* Text Side */}
                <motion.div
                  className="lg:w-1/2"
                  initial={{ opacity: 0, x: isReverse ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                >
                  {/* Service Badge */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${isNavy ? "bg-accent-goldBase/15 border border-accent-goldBase/25" : "bg-primary-navy/5 border border-primary-navy/10"}`}>
                      <Icon className="w-6 h-6 text-accent-goldBase" />
                    </div>
                    <div>
                      <p className={`text-[9px] font-black font-montserrat uppercase tracking-[0.25em] ${isNavy ? "text-accent-goldBase/60" : "text-gray-400"}`}>Service {service.number}</p>
                      <p className={`text-xs font-black font-montserrat uppercase tracking-widest ${isNavy ? "text-accent-goldHighlight" : "text-accent-goldBase"}`}>{service.title}</p>
                    </div>
                  </div>

                  <h2 className={`text-4xl md:text-5xl font-black font-montserrat mb-6 uppercase tracking-tighter leading-[1.1] ${isNavy ? "text-white" : "text-primary-navy"}`}>
                    {service.title}
                  </h2>
                  <p className={`text-lg font-inter leading-relaxed mb-10 ${isNavy ? "text-white/50" : "text-gray-500"}`}>
                    {service.desc}
                  </p>

                  {/* Features list */}
                  <ul className="space-y-3 mb-10">
                    {service.features.map((feat, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + j * 0.08 }}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-accent-goldBase shrink-0" />
                        <span className={`font-inter font-medium ${isNavy ? "text-white/70" : "text-gray-700"}`}>{feat}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Stat pill + CTA */}
                  <div className="flex flex-wrap items-center gap-4">
                    <div className={`px-5 py-3 rounded-2xl ${isNavy ? "bg-white/5 border border-white/10" : "bg-primary-navy/5 border border-primary-navy/10"}`}>
                      <div className="text-2xl font-black font-montserrat text-transparent bg-clip-text bg-gold-gradient">{service.stat}</div>
                      <div className={`text-[9px] font-black font-montserrat uppercase tracking-widest ${isNavy ? "text-white/40" : "text-gray-400"}`}>{service.statLabel}</div>
                    </div>
                    <Link href="/book">
                      <motion.button
                        whileHover={{ scale: 1.04, boxShadow: "0 15px 40px rgba(212,175,55,0.3)" }}
                        whileTap={{ scale: 0.97 }}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gold-gradient text-primary-navy font-black font-montserrat uppercase tracking-widest text-xs shadow-lg transition-all"
                      >
                        Get Started <ArrowRight className="w-3.5 h-3.5" />
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>

                {/* Image Side */}
                <motion.div
                  className="lg:w-1/2 w-full"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.9 }}
                >
                  <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl shadow-primary-navy/30 group">
                    <NextImage
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/50 via-transparent to-transparent" />

                    {/* Play button for video service */}
                    {service.id === "video" && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center cursor-pointer"
                        >
                          <Play className="w-7 h-7 text-white fill-white ml-1" />
                        </motion.div>
                      </div>
                    )}

                    {/* Glassmorphism corner badge */}
                    <div className="absolute bottom-5 left-5 backdrop-blur-xl bg-primary-navy/70 border border-white/10 rounded-2xl px-4 py-3">
                      <div className="text-xl font-black font-montserrat text-transparent bg-clip-text bg-gold-gradient">{service.stat}</div>
                      <div className="text-[9px] font-black font-montserrat uppercase tracking-widest text-white/50">{service.statLabel}</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ═══════════════════════════════════════════════════
          SECTION 4 — OUR WORKFLOW
      ═══════════════════════════════════════════════════ */}
      <ProcessPreview />

      {/* ═══════════════════════════════════════════════════
          SECTION 5 — THE OSMANXMEDIA EDGE
      ═══════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-goldBase/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-navy/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-[10px] font-black font-montserrat uppercase tracking-[0.3em] text-accent-goldBase mb-4 px-4 py-2 rounded-full border border-accent-goldBase/20 bg-accent-goldBase/5">
              The OsmanXMedia Edge
            </span>
            <h2 className="text-4xl md:text-6xl font-black font-montserrat text-primary-navy uppercase tracking-tighter">
              Why Our Services <span className="text-transparent bg-clip-text bg-gold-gradient">Work</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {edgePoints.map((ep, i) => {
              const Icon = ep.icon;
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
                    <div className="w-14 h-14 rounded-2xl bg-primary-navy/5 border border-primary-navy/10 flex items-center justify-center mb-6 group-hover:bg-primary-navy group-hover:border-primary-navy transition-all duration-300">
                      <Icon className="w-6 h-6 text-primary-navy group-hover:text-accent-goldBase transition-colors duration-300" />
                    </div>
                    <h3 className="text-lg font-black font-montserrat text-primary-navy mb-3 uppercase tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gold-gradient transition-all duration-300">
                      {ep.title}
                    </h3>
                    <p className="text-sm text-gray-500 font-inter leading-relaxed mb-5">{ep.desc}</p>
                    <div className="text-[10px] font-black font-montserrat uppercase tracking-widest text-accent-goldBase">↗ {ep.metric}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 6 — FINAL CTA
      ═══════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-primary-navy relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent-goldBase/8 rounded-full blur-[200px]" />
        </div>
        <GridOverlay />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none text-white/[0.02] overflow-hidden">
          <span className="text-[15rem] font-black uppercase leading-none">OsmanX</span>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-7xl font-black font-montserrat text-white mb-6 uppercase tracking-tighter leading-[1.05]">
              Ready to <span className="text-transparent bg-clip-text bg-gold-gradient">Scale</span> Your Brand?
            </h2>
            <p className="text-lg text-white/50 font-inter mb-12 max-w-2xl mx-auto">
              Partner with us to transform your brand into a high-performance growth machine backed by stunning creative and data-driven strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 25px 80px rgba(212,175,55,0.4)" }}
                  whileTap={{ scale: 0.97 }}
                  className="group inline-flex items-center gap-3 bg-gold-gradient text-primary-navy font-black font-montserrat uppercase tracking-widest text-sm px-10 py-5 rounded-2xl shadow-2xl transition-all"
                >
                  Book a Strategy Call <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl border border-white/20 bg-white/5 text-white font-black font-montserrat uppercase tracking-widest text-sm transition-all"
                >
                  Contact Our Team
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
