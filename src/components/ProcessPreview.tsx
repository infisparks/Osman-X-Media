"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionLayout } from './SectionLayout';
import { Button } from './Button';

export const ProcessPreview = () => {
  const [showFullProcess, setShowFullProcess] = useState(false);

  const previewSteps = [
    { num: "01", title: "Discovery Call" },
    { num: "02", title: "Strategy & Research" },
    { num: "03", title: "Content Creation" },
    { num: "04", title: "Campaign Launch" },
    { num: "05", title: "Optimization & Scaling" },
  ];

  const fullSteps = [
    { num: "01", title: "Discovery Call", desc: "We learn about your brand, current challenges, and growth goals to ensure we're a perfect fit." },
    { num: "02", title: "Strategy & Research", desc: "Our team audits your active channels, researches competitor strategies, and builds a comprehensive action plan." },
    { num: "03", title: "Content Creation", desc: "We execute cinematic video shoots, premium graphic design, and copywriting that aligns with your brand voice." },
    { num: "04", title: "Campaign Launch", desc: "We deploy the assets across optimized Meta Ad campaigns and social media channels to start generating traction." },
    { num: "05", title: "Optimization & Scaling", desc: "We monitor performance, A/B test creatives, and scale the top-performing ads to maximize your ROI." },
  ];

  return (
    <SectionLayout bg="white" id="process">
      <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
        <div className="md:w-1/3">
          <h2 className="text-sm font-bold font-montserrat tracking-widest text-accent-goldBase uppercase mb-3">Our Workflow</h2>
          <h3 className="text-3xl md:text-5xl font-bold font-montserrat text-primary-navy mb-6 leading-tight">
            How We Scale Your Brand
          </h3>
          <p className="text-gray-600 font-inter text-lg mb-8">
            A proven, seamless five-step process designed to take your brand from concept to measurable growth.
          </p>
          <Button 
            variant="outline" 
            onClick={() => setShowFullProcess(!showFullProcess)}
          >
            {showFullProcess ? 'Hide Full Process' : 'View Full Process'}
          </Button>
        </div>

        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {previewSteps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex items-center gap-6 hover:shadow-lg hover:border-accent-goldBase/30 hover:-translate-y-1 transition-all duration-300 group cursor-default"
            >
              <div className="text-4xl font-bold font-montserrat text-accent-goldBase/30 group-hover:text-accent-goldBase transition-colors duration-300">
                {step.num}
              </div>
              <h4 className="text-xl font-bold font-montserrat text-primary-navy group-hover:text-accent-goldHighlight transition-colors duration-300">
                {step.title}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {showFullProcess && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-12 border-t border-gray-100 max-w-5xl mx-auto">
              {fullSteps.map((step, i) => (
                <div key={i} className="flex flex-col sm:flex-row gap-8 items-start mb-12 last:mb-0 relative py-8 sm:pl-12 group">
                  {/* Timeline Background Line (Desktop only) */}
                  <div className="hidden sm:block absolute left-[39px] top-0 bottom-0 w-px bg-gray-200 z-0 group-hover:bg-accent-goldBase/50 transition-colors duration-500"></div>
                  {/* Timeline Dot (Desktop only) */}
                  <div className="hidden sm:block absolute left-8 top-16 w-6 h-6 rounded-full bg-gray-200 group-hover:bg-accent-goldBase z-10 border-4 border-white transition-colors duration-500 shadow-sm group-hover:shadow-md group-hover:scale-125"></div>
                  
                  <div className="hidden sm:block text-7xl font-black font-montserrat text-gray-100 pr-8 group-hover:text-accent-goldBase/20 transition-colors duration-500 mt-2">
                    {step.num}
                  </div>

                  <div className="flex-1 bg-white p-8 md:p-10 rounded-3xl border border-gray-100 group-hover:border-accent-goldBase/30 group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent-goldBase/5 rounded-bl-full group-hover:bg-accent-goldBase/10 transition-colors duration-500"></div>
                    
                    <div className="sm:hidden text-4xl font-black font-montserrat text-accent-goldBase/30 mb-4">
                      {step.num}
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold font-montserrat text-primary-navy mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gold-gradient transition-all duration-500 relative z-10">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 font-inter text-lg leading-relaxed group-hover:text-gray-800 transition-colors duration-500 relative z-10">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionLayout>
  );
};
