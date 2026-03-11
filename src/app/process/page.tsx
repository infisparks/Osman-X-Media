"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionLayout } from "@/components/SectionLayout";

export default function ProcessPage() {
  const steps = [
    { num: "01", title: "Discovery Call", desc: "We learn about your brand, current challenges, and growth goals to ensure we're a perfect fit." },
    { num: "02", title: "Strategy & Research", desc: "Our team audits your active channels, researches competitor strategies, and builds a comprehensive action plan." },
    { num: "03", title: "Content Creation", desc: "We execute cinematic video shoots, premium graphic design, and copywriting that aligns with your brand voice." },
    { num: "04", title: "Campaign Launch", desc: "We deploy the assets across optimized Meta Ad campaigns and social media channels to start generating traction." },
    { num: "05", title: "Optimization & Scaling", desc: "We monitor performance, A/B test creatives, and scale the top-performing ads to maximize your ROI." },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <SectionLayout bg="white" className="pt-32">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-montserrat text-primary-navy mb-6">Our Process</h1>
          <p className="text-lg text-gray-600 font-inter">
            A seamless, five-step workflow designed to take your brand from concept to measurable growth.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-8 items-start mb-12 last:mb-0 relative py-8 pl-12">
              <div className="absolute left-[39px] top-0 bottom-0 w-px bg-gray-200 z-0"></div>
              <div className="absolute left-8 top-10 w-6 h-6 rounded-full bg-accent-goldBase z-10 border-4 border-white"></div>
              
              <div className="text-6xl font-black font-montserrat text-gray-100 pr-8">
                {step.num}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold font-montserrat text-primary-navy mb-3 mt-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 font-inter text-lg">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionLayout>
      <Footer />
    </main>
  );
}
