"use client";

import { useState } from 'react';

import { motion } from 'framer-motion';
import NextImage from 'next/image';
import Link from 'next/link';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { Clock, Calendar, User, Share2, Facebook, Twitter, Linkedin, ArrowLeft, CheckCircle, ChevronDown } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

export default function Blog1Page() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    { q: "How often should a luxury brand post?", a: "Quality over frequency is paramount. For luxury brands, 3-4 high-production posts per week are often more effective than daily low-quality content." },
    { q: "Is a large follower count necessary?", a: "No. For luxury brands, an engaged audience of high-net-worth individuals is far more valuable than a generic mass following." },
    { q: "Should we use hashtags on posts?", a: "Use them sparingly and strategically. Stick to 3-5 branded or highly specific industry tags to maintain a clean, uncluttered aesthetic." }
  ];
  const relatedPosts = [
    { title: "The Future of Video Marketing Trends", id: "blog-3" },
    { title: "Social Media Growth Strategies", id: "blog-5" }
  ];

  return (
    <main className="min-h-screen bg-white text-foreground overflow-x-hidden">
      <Navbar />

      {/* BLOG HERO SECTION */}
      <section className="relative pt-32 pb-16 md:pt-36 md:pb-24 bg-primary-navy overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none select-none overflow-hidden">
          <div className="absolute -top-24 -left-20 text-[20rem] font-black uppercase text-white">Blog</div>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/blog" className="inline-flex items-center gap-2 text-accent-goldHighlight font-black font-montserrat uppercase tracking-widest text-xs mb-8 hover:gap-3 transition-all">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-gray-300 mb-6 font-inter uppercase tracking-widest bg-white/5 w-fit mx-auto px-6 py-3 rounded-full border border-white/10">
              <span className="text-accent-goldBase font-black">Social Media</span>
              <span className="w-1 h-1 bg-white/40 rounded-full"></span>
              <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" /> Osman Shaikh</span>
              <span className="w-1 h-1 bg-white/40 rounded-full"></span>
              <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> Oct 12, 2023</span>
              <span className="w-1 h-1 bg-white/40 rounded-full"></span>
              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> 5 Min Read</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black font-montserrat text-white mb-10 leading-tight uppercase tracking-tighter">
              Instagram Marketing Tips for <span className="text-transparent bg-clip-text bg-gold-gradient">High-End Brands</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ARTICLE CONTENT & SIDEBAR */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16 max-w-7xl mx-auto">
            
            {/* MAIN CONTENT */}
            <div className="lg:w-2/3">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative aspect-video rounded-3xl overflow-hidden mb-12 shadow-2xl"
              >
                <NextImage 
                  src="/blog-insta.png"
                  alt="Instagram Marketing Tips"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>

              <article className="prose prose-lg prose-slate max-w-none font-inter text-gray-600 leading-relaxed">
                <p className="text-xl text-primary-navy font-bold mb-8 leading-relaxed">
                  In the world of high-end branding, Instagram is no longer just a social platform—it&apos;s a digital storefront, a mood board, and a vital touchpoint for your most valuable customers.
                </p>

                <h2 className="text-3xl font-black font-montserrat text-primary-navy mt-12 mb-6 uppercase tracking-tighter border-l-4 border-accent-goldBase pl-6">
                  Understanding the Strategy
                </h2>
                <p>
                  For premium brands, the goal isn&apos;t mass reach; it&apos;s resonance. You aren&apos;t just selling a product; you are selling an aspiration, a lifestyle, and a standard of excellence. Your Instagram grid must reflect this from the very first glance.
                </p>

                <h2 className="text-3xl font-black font-montserrat text-primary-navy mt-12 mb-6 uppercase tracking-tighter border-l-4 border-accent-goldBase pl-6">
                  Why It Works for Modern Brands
                </h2>
                <p>
                  High-net-worth individuals value time and quality. If your content looks amateurish or cluttered, you&apos;ve lost them. A clean, curated, and cinematic approach builds instant trust and positions your brand as a leader in its space.
                </p>

                <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100 my-12 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent-goldBase/5 rounded-full -mr-16 -mt-16"></div>
                  <blockquote className="text-2xl italic font-montserrat text-primary-navy font-bold leading-relaxed relative z-10">
                    &quot;Style is a way to say who you are without having to speak. On Instagram, your visuals are your voice.&quot;
                  </blockquote>
                </div>

                <h2 className="text-3xl font-black font-montserrat text-primary-navy mt-12 mb-6 uppercase tracking-tighter border-l-4 border-accent-goldBase pl-6">
                  Key Implementation Techniques
                </h2>
                <ul className="space-y-4 mb-8">
                  {[
                    "Maintain a consistent high-end color palette.",
                    "Use professional-grade cinematic photography only.",
                    "Focus on storytelling through Reels and video content.",
                    "Engage authentically with your community—quality over quantity.",
                    "Leverage influencers who align with luxury values."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-accent-goldBase shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <h2 className="text-3xl font-black font-montserrat text-primary-navy mt-12 mb-6 uppercase tracking-tighter border-l-4 border-accent-goldBase pl-6">
                  Common Mistakes to Avoid
                </h2>
                <p>
                  Avoid over-posting. In luxury marketing, scarcity creates value. Don&apos;t follow every viral trend if it doesn&apos;t fit your brand&apos;s core identity. Stick to what makes you unique.
                </p>
              </article>

              {/* STRATEGIC FAQ SECTION */}
              <div className="mt-20">
                <h2 className="text-3xl font-black font-montserrat text-primary-navy mb-10 uppercase tracking-tighter">
                  Commonly Asked Questions
                </h2>
                <div className="space-y-4">
                  {faqs.map((faq, i) => (
                    <div 
                      key={i} 
                      className={`group rounded-[2rem] border transition-all duration-500 overflow-hidden ${
                        openFaq === i 
                          ? 'border-accent-goldBase bg-white shadow-xl shadow-accent-goldBase/5' 
                          : 'border-gray-100 bg-gray-50/50 hover:border-gray-200'
                      }`}
                    >
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="w-full px-8 py-7 flex items-center justify-between text-left"
                      >
                        <div className="flex items-center gap-6">
                          <span className={`text-xl font-black font-montserrat transition-colors duration-300 ${
                            openFaq === i ? 'text-accent-goldBase' : 'text-gray-400'
                          }`}>
                            0{i + 1}.
                          </span>
                          <h4 className="text-lg md:text-xl font-bold font-montserrat text-primary-navy leading-tight">
                            {faq.q}
                          </h4>
                        </div>
                        <div className={`p-2 rounded-full transition-all duration-500 ${
                          openFaq === i ? 'bg-accent-goldBase text-white rotate-180' : 'bg-white text-primary-navy border border-gray-100'
                        }`}>
                          <ChevronDown className="w-5 h-5" />
                        </div>
                      </button>
                      
                      <AnimatePresence>
                        {openFaq === i && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: "circOut" }}
                          >
                            <div className="px-8 pb-8 pt-0 ml-14">
                              <p className="text-gray-600 font-inter leading-relaxed text-sm md:text-base border-t border-gray-100 pt-6">
                                {faq.a}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>

              {/* ARTICLE CTA */}
              <div className="mt-20 p-10 md:p-14 bg-primary-navy rounded-[3rem] text-center relative overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-navy via-primary-navy to-black/80 opacity-50 z-0"></div>
                <div className="relative z-10">
                  <h3 className="text-3xl md:text-4xl font-black font-montserrat text-white mb-8 uppercase tracking-tighter">
                    Want Help <span className="text-transparent bg-clip-text bg-gold-gradient">Scaling Your Brand?</span>
                  </h3>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Button variant="primary" href="/book" className="w-full sm:w-auto px-8 py-4">
                      Book a Strategy Call
                    </Button>
                    <Button variant="outline" href="/contact" className="w-full sm:w-auto px-8 py-4 !border-white !text-white hover:!bg-white hover:!text-primary-navy font-bold">
                      Contact Our Team
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* SIDEBAR */}
            <aside className="lg:w-1/3 space-y-12">
              {/* Share Buttons */}
              <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                <h4 className="text-lg font-black font-montserrat text-primary-navy mb-6 uppercase tracking-widest text-sm text-center">Share This Article</h4>
                <div className="flex items-center justify-center gap-4">
                  <button className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-primary-navy hover:bg-primary-navy hover:text-white transition-all duration-300 shadow-sm">
                    <Facebook className="w-5 h-5" />
                  </button>
                  <button className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-primary-navy hover:bg-primary-navy hover:text-white transition-all duration-300 shadow-sm">
                    <Twitter className="w-5 h-5" />
                  </button>
                  <button className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-primary-navy hover:bg-primary-navy hover:text-white transition-all duration-300 shadow-sm">
                    <Linkedin className="w-5 h-5" />
                  </button>
                  <button className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-primary-navy hover:bg-primary-navy hover:text-white transition-all duration-300 shadow-sm">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Related Articles */}
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                <h4 className="text-lg font-black font-montserrat text-primary-navy mb-8 uppercase tracking-widest text-sm border-b border-gray-100 pb-4">Related articles</h4>
                <div className="space-y-8">
                  {relatedPosts.map((post, i) => (
                    <Link key={i} href={`/blog/${post.id}`} className="block group">
                      <h5 className="text-md font-bold font-montserrat text-primary-navy group-hover:text-accent-goldHighlight transition-colors duration-300 leading-snug">
                        {post.title}
                      </h5>
                      <span className="mt-2 inline-flex items-center gap-1 text-[10px] font-black font-inter uppercase tracking-widest text-accent-goldBase group-hover:gap-2 transition-all">
                        Read Now <ArrowLeft className="w-3 h-3 rotate-180" />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                <h4 className="text-lg font-black font-montserrat text-primary-navy mb-6 uppercase tracking-widest text-sm border-b border-gray-200 pb-4">Categories</h4>
                <div className="flex flex-wrap gap-2">
                  {['Social Media', 'Paid Ads', 'Video', 'Content Strategy'].map((cat, i) => (
                    <span key={i} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-xs font-bold font-inter text-gray-500 hover:border-accent-goldBase hover:text-primary-navy cursor-pointer transition-all">
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            </aside>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
