"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, MapPin, Calendar, Send, ArrowRight } from 'lucide-react';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { Notification } from "@/components/Notification";
import { db } from "@/lib/firebase";
import { ref, push, set } from "firebase/database";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Notification state
  const [notification, setNotification] = useState<{ isVisible: boolean; message: string; type: "success" | "error" }>({
    isVisible: false,
    message: "",
    type: "success"
  });

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: "hello@osmanxmedia.com",
      link: "mailto:hello@osmanxmedia.com",
      label: "Send an email"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Our Studio",
      details: "Los Angeles, CA",
      link: "#map",
      label: "View on map"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Strategy Call",
      details: "Book a 1:1 discovery session",
      link: "/book",
      label: "Schedule now"
    }
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      businessName: formData.get("businessName"),
      projectDetails: formData.get("projectDetails"),
      submittedAt: new Date().toISOString(),
      timestamp: Date.now()
    };

    try {
      const contactRef = ref(db, "contact-form");
      const newContactRef = push(contactRef);
      await set(newContactRef, data);
      
      setNotification({
        isVisible: true,
        message: "Your message has been sent successfully! We'll get back to you within 24 hours.",
        type: "success"
      });
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error("Contact form error:", error);
      setNotification({
        isVisible: true,
        message: "Failed to send your message. Please try again or contact us directly.",
        type: "error"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      <Notification 
        isVisible={notification.isVisible}
        message={notification.message}
        type={notification.type}
        onClose={() => setNotification({ ...notification, isVisible: false })}
      />

      {/* SECTION 1 — CONTACT HERO */}
      <section className="relative pt-28 pb-12 md:pt-32 md:pb-20 bg-primary-navy overflow-hidden">
        {/* Floating Orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-goldBase/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px]" />
        </div>
        {/* Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `linear-gradient(rgba(212,175,55,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.5) 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
        {/* Centered OsmanX Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none text-white/[0.025] overflow-hidden">
          <span className="text-[18rem] font-black uppercase leading-none">OsmanX</span>
        </div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block py-2 px-4 bg-white/5 border border-white/10 rounded-full mb-6 backdrop-blur-sm"
            >
              <span className="text-xs font-bold font-montserrat uppercase tracking-[0.2em] text-accent-goldHighlight">
                Get In Touch
              </span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-black font-montserrat text-white mb-6 leading-tight uppercase tracking-tighter">
              Let&apos;s Build <span className="text-transparent bg-clip-text bg-gold-gradient">Something Great</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 font-inter mb-0 leading-relaxed max-w-2xl mx-auto">
              Ready to scale your brand? Reach out to us and our strategy team will respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 & 3: INFO & FORM */}
      <section className="pt-24 pb-20 md:pt-32 md:pb-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Contact Details (col-4) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-6">
                {contactInfo.map((info, i) => (
                  <motion.a
                    key={i}
                    href={info.link}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ 
                      y: -8, 
                      scale: 1.02,
                      transition: { duration: 0.3, ease: "easeOut" } 
                    }}
                    className="group block p-8 rounded-[2.5rem] bg-primary-navy/[0.02] border border-transparent hover:border-accent-goldBase/30 hover:bg-white hover:shadow-2xl hover:shadow-accent-goldBase/10 transition-all duration-500"
                  >
                    <div className="flex items-start gap-6">
                      <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center text-accent-goldBase group-hover:bg-accent-goldBase group-hover:text-white transition-all duration-500">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-black font-montserrat uppercase tracking-wider text-primary-navy/40 mb-1">
                          {info.title}
                        </h3>
                        <p className="text-xl font-bold font-montserrat text-primary-navy mb-3 group-hover:text-accent-goldBase transition-colors">
                          {info.details}
                        </p>
                        <span className="inline-flex items-center gap-2 text-sm font-bold text-accent-goldBase uppercase tracking-widest">
                          {info.label} <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

            </div>

            {/* Contact Form (col-7) */}
            <div className="lg:col-span-7">
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                className="bg-white p-8 md:p-14 rounded-[3rem] border border-primary-navy/5 shadow-2xl shadow-primary-navy/[0.03] relative overflow-hidden group/form transition-shadow hover:shadow-accent-goldBase/[0.05]"
              >
                {/* Visual Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-goldBase/5 rounded-full -mr-16 -mt-16 blur-2xl" />

                <h2 className="text-3xl font-black font-montserrat text-primary-navy mb-10 uppercase tracking-tighter">
                  Send Us a <span className="text-accent-goldBase">Message</span>
                </h2>

                <form className="space-y-8" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative group">
                      <label className="block text-xs font-black font-montserrat text-primary-navy/40 uppercase tracking-widest mb-3 transition-colors group-focus-within:text-accent-goldBase">
                        Full Name
                      </label>
                      <input 
                        name="fullName"
                        required
                        type="text" 
                        className="w-full bg-primary-navy/[0.02] border-b-2 border-primary-navy/10 px-0 py-3 font-montserrat font-bold text-primary-navy placeholder:text-primary-navy/20 focus:outline-none focus:border-accent-goldBase transition-all"
                        placeholder="e.g. Sebastian Gomez"
                      />
                    </div>
                    <div className="relative group">
                      <label className="block text-xs font-black font-montserrat text-primary-navy/40 uppercase tracking-widest mb-3 transition-colors group-focus-within:text-accent-goldBase">
                        Email Address
                      </label>
                      <input 
                        name="email"
                        required
                        type="email" 
                        className="w-full bg-primary-navy/[0.02] border-b-2 border-[#1A2B42] px-0 py-3 font-montserrat font-bold text-primary-navy placeholder:text-primary-navy/20 focus:outline-none focus:border-accent-goldBase transition-all"
                        placeholder="hello@company.com"
                      />
                    </div>
                  </div>

                  <div className="relative group text-left">
                    <label className="block text-xs font-black font-montserrat text-primary-navy/40 uppercase tracking-widest mb-3 transition-colors group-focus-within:text-accent-goldBase">
                      Business Name
                    </label>
                    <input 
                      name="businessName"
                      required
                      type="text" 
                      className="w-full bg-primary-navy/[0.02] border-b-2 border-[#1A2B42] px-0 py-3 font-montserrat font-bold text-primary-navy placeholder:text-primary-navy/20 focus:outline-none focus:border-accent-goldBase transition-all"
                      placeholder="Your Agency Name"
                    />
                  </div>

                  <div className="relative group text-left">
                    <label className="block text-xs font-black font-montserrat text-primary-navy/40 uppercase tracking-widest mb-3 transition-colors group-focus-within:text-accent-goldBase">
                      Tell us about your project
                    </label>
                    <textarea 
                      name="projectDetails"
                      required
                      rows={4}
                      className="w-full bg-primary-navy/[0.02] border-b-2 border-[#1A2B42] px-0 py-3 font-montserrat font-bold text-primary-navy placeholder:text-primary-navy/20 focus:outline-none focus:border-accent-goldBase transition-all resize-none"
                      placeholder="What are your goals and vision?"
                    ></textarea>
                  </div>

                  <div className="pt-6">
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative w-full overflow-hidden bg-primary-navy rounded-2xl py-6 transition-all active:scale-95 shadow-xl shadow-primary-navy/20 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <div className="absolute inset-0 bg-gold-gradient translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-circOut" />
                      <span className="relative z-10 flex items-center justify-center gap-3 text-lg font-black font-montserrat text-white group-hover:text-primary-navy transition-colors">
                        {isSubmitting ? "SENDING..." : "SEND MESSAGE"} <Send className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </span>
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: GOOGLE MAP */}
      <section id="map" className="py-20 bg-primary-navy/[0.01]">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border border-white"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.274057703!2d-118.69192047465257!3d34.0201613063548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75dd41d5441%3A0x529d9a75d5b9997!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1709400000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale contrast-125 opacity-80"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: FINAL CTA */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="bg-primary-navy p-12 md:p-24 rounded-[4rem] text-center relative overflow-hidden shadow-3xl">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent-goldBase opacity-10 blur-[100px] -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-goldBase opacity-10 blur-[100px] -ml-48 -mb-48" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-black font-montserrat text-white mb-8 uppercase tracking-tighter"
              >
                Prefer a <span className="text-transparent bg-clip-text bg-gold-gradient">Live Strategy Call?</span>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-xl text-white/70 font-inter mb-12"
              >
                Skip the form and jump straight on a call with our founders to discuss your business vision.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-6"
              >
                <Button variant="primary" href="/book" className="w-full sm:w-auto px-10 py-5 text-lg shadow-2xl shadow-accent-goldBase/20 hover:scale-110">
                  Book a Strategy Call
                </Button>
                <Button variant="outline" href="#contact" className="w-full sm:w-auto px-10 py-5 text-lg !border-white !text-white hover:!bg-white hover:!text-primary-navy">
                  Contact Our Team
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
