"use client";

import { motion } from 'framer-motion';
import { Video, Share2, BarChart3, PenTool, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    title: "Video Production",
    icon: Video,
    desc: "Cinematic brand videos, social media content, and high-converting ad creatives that stop the scroll and command attention.",
    href: "/services#video",
    gradient: "from-purple-500/10 to-blue-500/10",
    glowColor: "rgba(139,92,246,0.15)",
    accentBg: "bg-purple-500/10",
    accentText: "text-purple-400"
  },
  {
    title: "Social Media Management",
    icon: Share2,
    desc: "Strategic content planning, audience growth, and community management that transforms followers into brand advocates.",
    href: "/services#social",
    gradient: "from-pink-500/10 to-rose-500/10",
    glowColor: "rgba(236,72,153,0.15)",
    accentBg: "bg-pink-500/10",
    accentText: "text-pink-400"
  },
  {
    title: "Meta & Paid Ads",
    icon: BarChart3,
    desc: "Data-driven campaign optimization, precision targeting, and relentless conversion tracking for maximum ROI at scale.",
    href: "/services#ads",
    gradient: "from-blue-500/10 to-cyan-500/10",
    glowColor: "rgba(59,130,246,0.15)",
    accentBg: "bg-blue-500/10",
    accentText: "text-blue-400"
  },
  {
    title: "Content Strategy",
    icon: PenTool,
    desc: "Premium brand positioning, audience psychology, and scalable growth tactics engineered to dominate your market.",
    href: "/services#strategy",
    gradient: "from-amber-500/10 to-orange-500/10",
    glowColor: "rgba(245,158,11,0.15)",
    accentBg: "bg-amber-500/10",
    accentText: "text-amber-400"
  },
];

export const ServicesOverview = () => {
  return (
    <section className="relative py-24 md:py-32 bg-primary-navy overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-goldBase/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-goldHighlight/5 rounded-full blur-[150px]" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(212,175,55,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.5) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <span className="inline-block text-[10px] font-black font-montserrat uppercase tracking-[0.3em] text-accent-goldBase mb-4 px-4 py-2 rounded-full border border-accent-goldBase/20 bg-accent-goldBase/5">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-6xl font-black font-montserrat text-white mb-6 uppercase tracking-tighter leading-[1.1]">
            Premium Digital{" "}
            <span className="text-transparent bg-clip-text bg-gold-gradient">Marketing</span>{" "}
            Solutions
          </h2>
          <p className="text-lg text-white/50 font-inter leading-relaxed">
            We bring order to the chaos of the digital landscape through creative excellence and performance-driven strategies that genuinely scale brands.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                <Link href={service.href} className="block h-full">
                  <div
                    className="relative h-full p-8 md:p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-accent-goldBase/30 hover:bg-white/8 transition-all duration-500 overflow-hidden"
                    style={{ boxShadow: `0 0 0 0 ${service.glowColor}` }}
                  >
                    {/* Hover gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />

                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent-goldBase/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10">
                      {/* Icon Container */}
                      <div className="flex items-start justify-between mb-8">
                        <motion.div
                          whileHover={{ rotate: -8, scale: 1.1 }}
                          className={`w-16 h-16 rounded-2xl ${service.accentBg} border border-white/10 flex items-center justify-center group-hover:border-accent-goldBase/30 transition-all duration-300`}
                        >
                          <Icon className="w-7 h-7 text-accent-goldBase" />
                        </motion.div>

                        <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-400">
                          <ArrowRight className="w-4 h-4 text-accent-goldBase" />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl md:text-3xl font-black font-montserrat text-white mb-4 uppercase tracking-tight leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gold-gradient transition-all duration-300">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-white/50 font-inter leading-relaxed group-hover:text-white/70 transition-colors duration-300">
                        {service.desc}
                      </p>

                      {/* CTA link */}
                      <div className="mt-8 flex items-center gap-2 text-accent-goldBase font-black font-montserrat text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-400 -translate-y-1 group-hover:translate-y-0">
                        Explore Service
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <Link href="/services">
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: "0 20px 50px rgba(212,175,55,0.25)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl border border-accent-goldBase/40 bg-accent-goldBase/10 text-accent-goldBase font-black font-montserrat uppercase tracking-widest text-sm hover:bg-accent-goldBase/20 transition-all duration-300"
            >
              Explore All Services <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
