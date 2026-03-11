"use client";

import { motion } from 'framer-motion';
import NextImage from 'next/image';
import Link from 'next/link';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, Clock, Calendar, BookOpen } from 'lucide-react';

const posts = [
  {
    id: "blog-1",
    title: "Instagram Marketing Tips for High-End Brands",
    excerpt: "Learn how to curate a luxury aesthetic that attracts high-net-worth clients and builds absolute brand authority.",
    category: "Social Media",
    readTime: "5 min read",
    date: "Oct 12, 2023",
    image: "/blog-insta.png",
    featured: true,
  },
  {
    id: "blog-2",
    title: "How to Scale Meta Ads Past $10k/Month",
    excerpt: "A deep dive into advanced scaling techniques, horizontal testing, and creative-led growth for high-performance campaigns.",
    category: "Paid Advertising",
    readTime: "8 min read",
    date: "Oct 05, 2023",
    image: "/blog-meta.png",
    featured: true,
  },
  {
    id: "blog-3",
    title: "The Future of Video Marketing Trends",
    excerpt: "Why short-form vertical video is no longer optional and how to position your brand for the 2024 video-first landscape.",
    category: "Video Production",
    readTime: "6 min read",
    date: "Sep 28, 2023",
    image: "/service-video.png",
    featured: false,
  },
  {
    id: "blog-4",
    title: "How Cinematic Video Ads Increase Conversions",
    excerpt: "Stop the scroll with high-production value. Discover the psychology behind why premium visuals lead to higher ROAS.",
    category: "Creative Strategy",
    readTime: "7 min read",
    date: "Sep 21, 2023",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80",
    featured: false,
  },
  {
    id: "blog-5",
    title: "Social Media Growth Strategies for Brands",
    excerpt: "Moving beyond vanity metrics. How to build a community that actually impacts your bottom line and drives revenue.",
    category: "Social Growth",
    readTime: "6 min read",
    date: "Sep 14, 2023",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80",
    featured: false,
  },
  {
    id: "blog-6",
    title: "Building a High-Converting Marketing Funnel",
    excerpt: "The blueprint for a performance-driven acquisition system that turns strangers into high-paying customers on autopilot.",
    category: "Growth Systems",
    readTime: "10 min read",
    date: "Sep 07, 2023",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    featured: false,
  },
];

const categoryColors: Record<string, string> = {
  "Social Media": "bg-pink-50 text-pink-600 border-pink-100",
  "Paid Advertising": "bg-blue-50 text-blue-600 border-blue-100",
  "Video Production": "bg-purple-50 text-purple-600 border-purple-100",
  "Creative Strategy": "bg-amber-50 text-amber-600 border-amber-100",
  "Social Growth": "bg-rose-50 text-rose-600 border-rose-100",
  "Growth Systems": "bg-emerald-50 text-emerald-600 border-emerald-100",
};

const GridOverlay = () => (
  <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `linear-gradient(rgba(212,175,55,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.5) 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
);

export default function BlogPage() {
  const featured = posts.filter(p => p.featured);
  const regular = posts.filter(p => !p.featured);

  return (
    <main className="min-h-screen bg-white text-foreground overflow-x-hidden">
      <Navbar />

      {/* ═══ HERO ═══ */}
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
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.span initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-goldBase/30 bg-accent-goldBase/10 backdrop-blur-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-accent-goldBase animate-pulse" />
              <span className="text-xs font-black font-montserrat uppercase tracking-[0.2em] text-accent-goldHighlight">Knowledge Hub</span>
            </motion.span>
            <h1 className="text-4xl md:text-6xl font-black font-montserrat text-white mb-4 uppercase tracking-tighter leading-tight">
              Insights &amp; <span className="text-transparent bg-clip-text bg-gold-gradient">Strategies</span>
            </h1>
            <p className="text-lg md:text-xl text-white/50 font-inter leading-relaxed max-w-2xl mx-auto">
              Expert articles and tactical guides on scaling your brand&apos;s digital presence in a competitive market.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ FEATURED POSTS (2-col large) ═══ */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-goldBase/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center justify-between mb-12">
            <div>
              <p className="text-[10px] font-black font-montserrat uppercase tracking-[0.3em] text-accent-goldBase mb-2">Editor&apos;s Pick</p>
              <h2 className="text-3xl md:text-5xl font-black font-montserrat text-primary-navy uppercase tracking-tighter">
                Featured <span className="text-transparent bg-clip-text bg-gold-gradient">Articles</span>
              </h2>
            </div>
            <BookOpen className="w-10 h-10 text-gray-100" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {featured.map((post, i) => (
              <motion.div key={post.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -10, boxShadow: "0 40px 80px rgba(26,43,66,0.12)" }}
                className="group">
                <Link href={`/blog/${post.id}`} className="block bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:border-accent-goldBase/20 transition-all duration-500 h-full">
                  {/* Image */}
                  <div className="relative h-72 overflow-hidden bg-gray-100">
                    <NextImage src={post.image} alt={post.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out" sizes="(max-width: 768px) 100vw, 50vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/60 via-transparent to-transparent" />
                    {/* Category */}
                    <div className="absolute top-5 left-5">
                      <span className={`px-3 py-1.5 text-[9px] font-black font-montserrat uppercase tracking-widest rounded-full border ${categoryColors[post.category] || "bg-white/90 text-primary-navy border-white"}`}>
                        {post.category}
                      </span>
                    </div>
                    {/* Featured badge */}
                    <div className="absolute top-5 right-5">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 backdrop-blur-md bg-accent-goldBase/90 text-primary-navy text-[9px] font-black font-montserrat uppercase tracking-widest rounded-full">
                        ★ Featured
                      </span>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-8">
                    <div className="flex items-center gap-4 text-[10px] font-black font-montserrat uppercase tracking-widest text-gray-300 mb-4">
                      <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" />{post.date}</span>
                      <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" />{post.readTime}</span>
                    </div>
                    <h3 className="text-2xl font-black font-montserrat text-primary-navy mb-3 leading-tight uppercase tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gold-gradient transition-all duration-400">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 font-inter text-sm leading-relaxed mb-6">{post.excerpt}</p>
                    <span className="inline-flex items-center gap-2 font-black font-montserrat text-xs text-primary-navy group-hover:text-accent-goldBase transition-all duration-300 uppercase tracking-widest">
                      Read Article <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ REGULAR POSTS — GRID ═══ */}
      <section className="py-16 md:py-24 bg-primary-navy relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-accent-goldBase/5 rounded-full blur-[150px]" />
        </div>
        <GridOverlay />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
            <p className="text-[10px] font-black font-montserrat uppercase tracking-[0.3em] text-accent-goldBase mb-2">More Insights</p>
            <h2 className="text-3xl md:text-5xl font-black font-montserrat text-white uppercase tracking-tighter">
              All <span className="text-transparent bg-clip-text bg-gold-gradient">Articles</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {regular.map((post, i) => (
              <motion.div key={post.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.55, delay: i * 0.1 }}
                whileHover={{ y: -8 }}>
                <Link href={`/blog/${post.id}`} className="group flex flex-col h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-[1.75rem] overflow-hidden hover:bg-white/10 hover:border-accent-goldBase/30 transition-all duration-500 block">
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <NextImage src={post.image} alt={post.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/80 via-primary-navy/30 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 backdrop-blur-md bg-accent-goldBase/20 border border-accent-goldBase/30 text-[9px] font-black font-montserrat uppercase tracking-widest text-accent-goldHighlight rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-[9px] font-black font-montserrat uppercase tracking-widest text-white/30 mb-3">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-black font-montserrat text-white mb-3 leading-tight uppercase tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gold-gradient transition-all duration-400 flex-grow">
                      {post.title}
                    </h3>
                    <p className="text-white/40 font-inter text-sm leading-relaxed mb-5">{post.excerpt}</p>
                    <span className="inline-flex items-center gap-2 font-black font-montserrat text-xs text-white/50 group-hover:text-accent-goldBase transition-all duration-300 uppercase tracking-widest mt-auto">
                      Read Article <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA STRIP ═══ */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent-goldBase/8 rounded-full blur-[100px]" />
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30, scale: 0.97 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="relative max-w-4xl mx-auto rounded-[3rem] bg-primary-navy overflow-hidden p-12 md:p-16 text-center">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent-goldBase/10 rounded-full blur-[80px] -mr-10 -mt-10" />
              <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-accent-goldHighlight/10 rounded-full blur-[60px] -ml-10 -mb-10" />
            </div>
            <GridOverlay />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black font-montserrat text-white mb-4 uppercase tracking-tighter">
                Ready to Scale Your <span className="text-transparent bg-clip-text bg-gold-gradient">Brand?</span>
              </h2>
              <p className="text-white/50 font-inter mb-8 max-w-xl mx-auto">
                Let&apos;s build a high-performance growth engine for your brand together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/book">
                  <motion.button whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(212,175,55,0.4)" }} whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 bg-gold-gradient text-primary-navy font-black font-montserrat uppercase tracking-widest text-sm px-8 py-4 rounded-2xl shadow-2xl transition-all">
                    Book a Strategy Call <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>
                <Link href="/contact">
                  <motion.button whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }} whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl border border-white/20 bg-white/5 text-white font-black font-montserrat uppercase tracking-widest text-sm transition-all">
                    Contact Us
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
