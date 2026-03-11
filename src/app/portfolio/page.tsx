"use client";

import { motion, AnimatePresence } from 'framer-motion';
import NextImage from 'next/image';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, TrendingUp, Users, PlayCircle, ExternalLink, Filter } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const cases = [
  {
    client: "Luxury Fitness Brand", service: "Video Ads + Meta Ads", category: "Performance",
    problem: "The client struggled to convert social media traffic into paying members at their high-end facilities.",
    strategy: "Produced highly cinematic workout video ads and launched targeted Meta advertising campaigns to high-net-worth demographics.",
    results: [{ label: "ROAS", value: "5.2X" }, { label: "Conversions", value: "+120%" }, { label: "Video Views", value: "2M+" }],
    image: "/port-fitness.png", icon: PlayCircle,
  },
  {
    client: "Boutique E-Commerce", service: "Content Strategy + Social Mgmt", category: "Social",
    problem: "Aesthetic skincare brand with incredible products but zero organic reach or brand authority.",
    strategy: "Meticulous aesthetic content planning, influencer unboxing strategy, and daily community management to build a massive cult following.",
    results: [{ label: "Organic Growth", value: "200%" }, { label: "Engagement", value: "+85%" }, { label: "Monthly Rev", value: "3X" }],
    image: "/port-ecommerce.png", icon: Users,
  },
  {
    client: "Luxury Real Estate", service: "Lead Generation + Paid Ads", category: "Performance",
    problem: "Selling $5M+ properties through traditional channels was yielding poor, unqualified leads.",
    strategy: "High-end architectural video tours distributed via hyper-targeted Meta and Google Search campaigns targeting high-income demographics.",
    results: [{ label: "Cost Per Lead", value: "-65%" }, { label: "Qualified Leads", value: "450+" }, { label: "Sales Closed", value: "$42M" }],
    image: "/port-realestate.png", icon: TrendingUp,
  },
  {
    client: "High-End Restaurant", service: "Social Growth + Content", category: "Social",
    problem: "A critically acclaimed restaurant struggling to fill tables on weekdays due to lack of digital presence.",
    strategy: "Vibrant lifestyle photography, behind-the-scenes chef videos, and a targeted local awareness campaign.",
    results: [{ label: "Followers", value: "+15k" }, { label: "Reservations", value: "+40%" }, { label: "Local Reach", value: "800k" }],
    image: "/port-restaurant.png", icon: Users,
  },
  {
    client: "Urban Fashion Label", service: "Video Ads + Influencer Marketing", category: "Video",
    problem: "Failing to break through the saturated streetwear market with standard image ads.",
    strategy: "Cinematic, edgy lookbook video campaigns paired with a strategic influencer seeding rollout.",
    results: [{ label: "ROAS", value: "4.8X" }, { label: "Site Traffic", value: "+300%" }, { label: "Inventory", value: "Sold Out" }],
    image: "/port-fashion.png", icon: PlayCircle,
  },
  {
    client: "Premium Dental Clinic", service: "Local Lead Generation", category: "Performance",
    problem: "Relying purely on referrals with an inconsistent flow of high-margin cosmetic dentistry patients.",
    strategy: "Trust-building video testimonials and Google Search campaigns targeting specific cosmetic procedures.",
    results: [{ label: "New Patients", value: "85/mo" }, { label: "Revenue", value: "+150%" }, { label: "Search Rank", value: "#1" }],
    image: "/port-localbiz.png", icon: TrendingUp,
  }
];

const categories = ["All", "Performance", "Social", "Video"];

const GridOverlay = () => (
  <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `linear-gradient(rgba(212,175,55,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.5) 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
);

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filtered = activeFilter === "All" ? cases : cases.filter(c => c.category === activeFilter);

  return (
    <main className="min-h-screen bg-white text-foreground overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <section className="relative pt-28 pb-12 md:pt-32 md:pb-20 bg-primary-navy overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-accent-goldBase/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px]" />
        </div>
        <GridOverlay />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none text-white/[0.025] overflow-hidden">
          <span className="text-[18rem] font-black uppercase leading-none">OsmanX</span>
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.span initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-goldBase/30 bg-accent-goldBase/10 backdrop-blur-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-accent-goldBase animate-pulse" />
              <span className="text-xs font-black font-montserrat uppercase tracking-[0.2em] text-accent-goldHighlight">Our Portfolio</span>
            </motion.span>
            <h1 className="text-4xl md:text-6xl font-black font-montserrat text-white mb-4 uppercase tracking-tighter leading-tight">
              Client <span className="text-transparent bg-clip-text bg-gold-gradient">Success Stories</span>
            </h1>
            <p className="text-lg md:text-xl text-white/50 font-inter leading-relaxed max-w-2xl mx-auto">
              Explore how our performance-driven strategies and cinematic content have helped brands grow and dominate their markets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[{ v: "$42M+", l: "Revenue Generated" }, { v: "50+", l: "Brands Scaled" }, { v: "5X", l: "Average ROAS" }, { v: "3M+", l: "Video Views" }].map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="text-3xl font-black font-montserrat text-transparent bg-clip-text bg-gold-gradient mb-1">{s.v}</div>
                <div className="text-[10px] font-black font-montserrat uppercase tracking-widest text-gray-400">{s.l}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-goldBase/4 rounded-full blur-[150px] pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12">
          {/* Filter */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center justify-center gap-3 mb-16 flex-wrap">
            <Filter className="w-4 h-4 text-gray-300" />
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 rounded-xl font-black font-montserrat text-xs uppercase tracking-widest transition-all duration-300 ${activeFilter === cat ? "bg-primary-navy text-white shadow-lg shadow-primary-navy/20" : "border border-gray-200 text-gray-400 hover:border-accent-goldBase/40 hover:text-accent-goldBase"}`}>
                {cat}
              </button>
            ))}
          </motion.div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-7xl mx-auto">
            <AnimatePresence mode="popLayout">
              {filtered.map((study, i) => {
                const Icon = study.icon;
                return (
                  <motion.div key={study.client} layout initial={{ opacity: 0, y: 40, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.5, delay: i * 0.05 }}
                    whileHover={{ y: -10, boxShadow: "0 40px 80px rgba(26,43,66,0.15)" }}
                    className="group flex flex-col bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:border-accent-goldBase/20 transition-all duration-500">
                    {/* Image */}
                    <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100">
                      <NextImage src={study.image} alt={`${study.client} Case Study`} fill className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" sizes="(max-width: 768px) 100vw, 50vw" />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/80 via-primary-navy/20 to-transparent" />
                      <div className="absolute top-5 left-5">
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 backdrop-blur-md bg-white/10 border border-white/20 text-[9px] font-black font-montserrat uppercase tracking-widest text-white/80 rounded-full">
                          <Icon className="w-3 h-3" />{study.service}
                        </span>
                      </div>
                      <div className="absolute top-5 right-5 w-9 h-9 rounded-full backdrop-blur-md bg-white/10 border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400">
                        <ExternalLink className="w-3.5 h-3.5 text-accent-goldBase" />
                      </div>
                    </div>
                    {/* Content */}
                    <div className="p-8 md:p-10 flex flex-col flex-grow">
                      <h2 className="text-2xl md:text-3xl font-black font-montserrat text-primary-navy mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gold-gradient transition-all duration-400 uppercase tracking-tight">
                        {study.client}
                      </h2>
                      <div className="space-y-4 mb-8 flex-grow">
                        <div>
                          <span className="text-[9px] font-black font-montserrat uppercase tracking-[0.2em] text-gray-300 block mb-1.5">The Challenge</span>
                          <p className="text-gray-500 font-inter leading-relaxed text-sm">{study.problem}</p>
                        </div>
                        <div>
                          <span className="text-[9px] font-black font-montserrat uppercase tracking-[0.2em] text-gray-300 block mb-1.5">The Strategy</span>
                          <p className="text-gray-500 font-inter leading-relaxed text-sm">{study.strategy}</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-3 p-5 rounded-2xl bg-gray-50 border border-gray-100 mb-6">
                        {study.results.map((res, j) => (
                          <div key={j} className="text-center">
                            <div className="text-xl font-black font-montserrat text-transparent bg-clip-text bg-gold-gradient">{res.value}</div>
                            <div className="text-[9px] font-bold font-montserrat uppercase tracking-wide text-gray-400 mt-0.5">{res.label}</div>
                          </div>
                        ))}
                      </div>
                      <Link href="/contact">
                        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                          className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl border-2 border-primary-navy/10 font-black font-montserrat text-xs uppercase tracking-widest text-primary-navy hover:bg-primary-navy hover:text-white hover:border-primary-navy transition-all duration-400">
                          Work With Us <ArrowRight className="w-3.5 h-3.5" />
                        </motion.button>
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-primary-navy relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent-goldBase/8 rounded-full blur-[200px]" />
        </div>
        <GridOverlay />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none text-white/[0.02] overflow-hidden">
          <span className="text-[15rem] font-black uppercase leading-none">OsmanX</span>
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl md:text-7xl font-black font-montserrat text-white mb-6 uppercase tracking-tighter leading-[1.05]">
              Ready to Become Our <span className="text-transparent bg-clip-text bg-gold-gradient">Next Success Story?</span>
            </h2>
            <p className="text-lg text-white/50 font-inter mb-12 max-w-2xl mx-auto leading-relaxed">
              Join 50+ brands that trust OsmanXMedia to engineer their growth. Let&apos;s build your success story together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <motion.button whileHover={{ scale: 1.05, boxShadow: "0 25px 80px rgba(212,175,55,0.4)" }} whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-3 bg-gold-gradient text-primary-navy font-black font-montserrat uppercase tracking-widest text-sm px-10 py-5 rounded-2xl shadow-2xl transition-all">
                  Book a Strategy Call <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }} whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl border border-white/20 bg-white/5 text-white font-black font-montserrat uppercase tracking-widest text-sm transition-all">
                  Contact Us
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
