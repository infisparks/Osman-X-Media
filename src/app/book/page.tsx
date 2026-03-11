"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { Notification } from "@/components/Notification";
import { db } from "@/lib/firebase";
import { ref, push, set } from "firebase/database";
import { 
  CheckCircle2, 
  Calendar, 
  Target, 
  Users, 
  TrendingUp, 
  ArrowRight,
  ChevronDown,
  Clock,
  ShieldCheck
} from 'lucide-react';


export default function BookPage() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // Notification state
  const [notification, setNotification] = useState<{ isVisible: boolean; message: string; type: "success" | "error" }>({
    isVisible: false,
    message: "",
    type: "success"
  });

  const trustIndicators = [
    { icon: <CheckCircle2 className="w-5 h-5 text-accent-goldHighlight" />, text: "30-minute strategy session" },
    { icon: <CheckCircle2 className="w-5 h-5 text-accent-goldHighlight" />, text: "Free marketing insights" },
    { icon: <CheckCircle2 className="w-5 h-5 text-accent-goldHighlight" />, text: "No obligation consultation" },
  ];

  const timeSlots = [
    { label: "Morning", slots: ["09:00 AM", "10:30 AM", "11:00 AM"] },
    { label: "Afternoon", slots: ["01:30 PM", "03:00 PM", "04:30 PM"] },
    { label: "Evening", slots: ["06:00 PM", "07:30 PM"] }
  ];

  const steps = [
    {
      icon: <Calendar className="w-8 h-8 text-white" />,
      title: "Book your call",
      description: "Select a time that works best for your schedule."
    },
    {
      icon: <Target className="w-8 h-8 text-white" />,
      title: "We review goals",
      description: "Our team analyzes your business before we meet."
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Strategize",
      description: "Join a 30-minute Zoom with our senior experts."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      title: "Receive Roadmap",
      description: "Get a custom growth strategy to scale your brand."
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
      website: formData.get("website") || "N/A",
      businessType: formData.get("businessType"),
      budget: formData.get("budget"),
      serviceInterests: Array.from(formData.getAll("serviceInterest")),
      challenge: formData.get("challenge") || "N/A",
      selectedDate,
      selectedTime,
      submittedAt: new Date().toISOString(),
      timestamp: Date.now()
    };

    try {
      const bookRef = ref(db, "book-call");
      const newBookRef = push(bookRef);
      await set(newBookRef, data);
      
      setIsSuccess(true);
      setNotification({
        isVisible: true,
        message: "Your strategy session has been booked successfully!",
        type: "success"
      });
    } catch (error) {
      console.error("Booking error:", error);
      setNotification({
        isVisible: true,
        message: "Failed to book your session. Please try again or contact us directly.",
        type: "error"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white text-primary-navy overflow-x-hidden">
      <Navbar />

      <Notification 
        isVisible={notification.isVisible}
        message={notification.message}
        type={notification.type}
        onClose={() => setNotification({ ...notification, isVisible: false })}
      />

      {/* SECTION 1 — BOOKING HERO (Standardized with Blog) */}
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
              className="inline-block py-2 px-4 bg-white/5 border border-white/10 rounded-full mb-4 backdrop-blur-sm"
            >
              <span className="text-xs font-bold font-montserrat uppercase tracking-[0.2em] text-accent-goldHighlight">
                Strategy Session
              </span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-black font-montserrat text-white mb-4 leading-tight uppercase tracking-tighter">
              Schedule Your <span className="text-transparent bg-clip-text bg-gold-gradient">Strategy Call</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 font-inter mb-8 leading-relaxed max-w-2xl mx-auto">
              Book a free strategy call with our marketing experts and discover how we can scale your brand using high-impact content and performance-driven advertising.
            </p>

            <div className="flex flex-wrap justify-center gap-6 md:gap-x-10 md:gap-y-2">
              {trustIndicators.map((indicator, i) => (
                <div key={i} className="flex items-center gap-3">
                  {indicator.icon}
                  <span className="text-[10px] md:text-xs font-bold font-montserrat uppercase tracking-widest text-white/70">
                    {indicator.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: INTEGRATED QUALIFICATION & BOOKING FORM */}
      <section className="py-24 px-6 relative bg-white">
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white border border-primary-navy/5 shadow-3xl p-8 md:p-14 rounded-[3rem] relative overflow-hidden group">
              {/* Premium Decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent-goldBase/5 rounded-full -mr-32 -mt-32 blur-[80px]" />
              
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.div
                    key="booking-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="flex items-center gap-4 mb-10">
                      <div className="w-12 h-12 rounded-2xl bg-primary-navy flex items-center justify-center text-white">
                        <ShieldCheck className="w-6 h-6" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-black font-montserrat uppercase tracking-tighter">
                          Tell Us About <span className="text-accent-goldBase">Your Brand</span>
                        </h2>
                        <p className="text-sm text-primary-navy/40 font-bold uppercase tracking-widest mt-1">Briefly qualify your business below</p>
                      </div>
                    </div>

                    <form className="space-y-12" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Name & Email Group */}
                        <div className="space-y-10">
                          <div className="relative group">
                            <label className="block text-[10px] font-black font-montserrat text-primary-navy/40 uppercase tracking-[0.2em] mb-3">Full Name</label>
                            <input name="fullName" required type="text" className="w-full bg-primary-navy/[0.02] border-b-2 border-[#1A2B42] px-0 py-3 font-montserrat font-bold text-primary-navy focus:outline-none focus:border-accent-goldBase transition-all" placeholder="Sebastian Gomez" />
                          </div>
                          <div className="relative group">
                            <label className="block text-[10px] font-black font-montserrat text-primary-navy/40 uppercase tracking-[0.2em] mb-3">Email Address</label>
                            <input name="email" required type="email" className="w-full bg-primary-navy/[0.02] border-b-2 border-[#1A2B42] px-0 py-3 font-montserrat font-bold text-primary-navy focus:outline-none focus:border-accent-goldBase transition-all" placeholder="hello@brand.com" />
                          </div>
                        </div>

                        {/* Business & Website Group */}
                        <div className="space-y-10">
                          <div className="relative group">
                            <label className="block text-[10px] font-black font-montserrat text-primary-navy/40 uppercase tracking-[0.2em] mb-3">Business Name</label>
                            <input name="businessName" required type="text" className="w-full bg-primary-navy/[0.02] border-b-2 border-[#1A2B42] px-0 py-3 font-montserrat font-bold text-primary-navy focus:outline-none focus:border-accent-goldBase transition-all" placeholder="Your Agency" />
                          </div>
                          <div className="relative group">
                            <label className="block text-[10px] font-black font-montserrat text-primary-navy/40 uppercase tracking-[0.2em] mb-3">Website URL <span className="text-[8px] opacity-50 px-2">(Optional)</span></label>
                            <input name="website" type="url" className="w-full bg-primary-navy/[0.02] border-b-2 border-[#1A2B42] px-0 py-3 font-montserrat font-bold text-primary-navy focus:outline-none focus:border-accent-goldBase transition-all" placeholder="www.yoursite.com" />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="relative group">
                          <label className="block text-[10px] font-black font-montserrat text-primary-navy/40 uppercase tracking-[0.2em] mb-3">Business Type</label>
                          <div className="relative">
                            <select name="businessType" required className="w-full appearance-none bg-primary-navy/[0.02] border-b-2 border-[#1A2B42] px-0 py-3 font-montserrat font-bold text-primary-navy focus:outline-none focus:border-accent-goldBase transition-all cursor-pointer">
                              <option value="" disabled selected>Select option</option>
                              <option value="E-commerce">E-commerce</option>
                              <option value="Local Business">Local Business</option>
                              <option value="Startup">Startup</option>
                              <option value="Personal Brand">Personal Brand</option>
                            </select>
                            <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-primary-navy/40 pointer-events-none" />
                          </div>
                        </div>
                        <div className="relative group">
                          <label className="block text-[10px] font-black font-montserrat text-primary-navy/40 uppercase tracking-[0.2em] mb-3">Marketing Budget</label>
                          <div className="relative">
                            <select name="budget" required className="w-full appearance-none bg-primary-navy/[0.02] border-b-2 border-[#1A2B42] px-0 py-3 font-montserrat font-bold text-primary-navy focus:outline-none focus:border-accent-goldBase transition-all cursor-pointer">
                              <option value="" disabled selected>Select range</option>
                              <option value="$1k – $5k">$1k – $5k</option>
                              <option value="$5k – $10k">$5k – $10k</option>
                              <option value="$10k+">$10k+</option>
                            </select>
                            <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-primary-navy/40 pointer-events-none" />
                          </div>
                        </div>
                      </div>

                      {/* --- SERVICE INTERESTS & CHALLENGE --- */}
                      <div className="pt-10 border-t-2 border-primary-navy/10 space-y-10">
                        <div className="space-y-6">
                          <label className="block text-[10px] font-black font-montserrat text-primary-navy/40 uppercase tracking-[0.2em]">Service Interest</label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {["Video Production", "Social Media Management", "Paid Advertising", "Content Strategy", "Full Marketing Package"].map((service) => (
                              <label key={service} className="flex items-center gap-4 cursor-pointer group/item">
                                <div className="relative w-6 h-6 border-2 border-[#1A2B42] rounded-lg group-hover/item:border-accent-goldBase transition-all">
                                  <input name="serviceInterest" value={service} type="checkbox" className="peer absolute inset-0 opacity-0 cursor-pointer" />
                                  <div className="absolute inset-1 rounded-sm bg-gold-gradient opacity-0 peer-checked:opacity-100 transition-opacity" />
                                </div>
                                <span className="text-sm font-bold font-montserrat text-primary-navy/70 group-hover/item:text-primary-navy transition-colors">{service}</span>
                              </label>
                            ))}
                          </div>
                        </div>

                        <div className="relative group">
                          <label className="block text-[10px] font-black font-montserrat text-primary-navy/40 uppercase tracking-[0.2em] mb-3">
                            What is your biggest marketing challenge? <span className="text-[8px] opacity-50 px-2">(Optional)</span>
                          </label>
                          <textarea 
                            name="challenge"
                            rows={3}
                            className="w-full bg-primary-navy/[0.02] border-b-2 border-[#1A2B42] px-0 py-3 font-montserrat font-bold text-primary-navy placeholder:text-primary-navy/20 focus:outline-none focus:border-accent-goldBase transition-all resize-none"
                            placeholder="e.g. Scaling ad spend while maintaining ROI..."
                          ></textarea>
                        </div>
                      </div>

                      {/* --- PROFESSIONAL TIME SLOT SECTION --- */}
                      <div className="pt-10 border-t-2 border-primary-navy/10">
                        <div className="flex items-center gap-4 mb-8">
                          <div className="w-10 h-10 rounded-xl bg-accent-goldBase/10 flex items-center justify-center text-accent-goldBase">
                            <Clock className="w-5 h-5" />
                          </div>
                          <h3 className="text-xl font-black font-montserrat uppercase tracking-tight">Select <span className="text-accent-goldBase">Time Slot</span></h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                          {/* Date Selector */}
                          <div className="md:col-span-1">
                            <label className="block text-[10px] font-black font-montserrat text-primary-navy/40 uppercase tracking-[0.2em] mb-3">Pick Date</label>
                            <input 
                              required
                              type="date" 
                              value={selectedDate}
                              onChange={(e) => setSelectedDate(e.target.value)}
                              className="w-full bg-primary-navy/[0.02] border-b-2 border-primary-navy/10 px-0 py-3 font-montserrat font-bold text-primary-navy focus:outline-none focus:border-accent-goldBase transition-all cursor-pointer"
                            />
                          </div>

                          {/* Professional Time Grid */}
                          <div className="md:col-span-2 space-y-6">
                            {timeSlots.map((group) => (
                              <div key={group.label}>
                                <span className="text-[10px] font-black font-montserrat text-primary-navy/30 uppercase tracking-widest block mb-3">{group.label}</span>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                  {group.slots.map((time) => (
                                    <button
                                      key={time}
                                      type="button"
                                      onClick={() => setSelectedTime(time)}
                                      className={`py-3 px-4 rounded-xl font-montserrat font-bold text-xs transition-all duration-300 border ${
                                        selectedTime === time 
                                          ? "bg-primary-navy text-white border-primary-navy shadow-lg scale-105" 
                                          : "bg-white text-primary-navy/60 border-primary-navy/10 hover:border-accent-goldBase hover:text-accent-goldBase"
                                      }`}
                                    >
                                      {time}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="pt-10">
                        <button 
                          type="submit" 
                          disabled={!selectedTime || !selectedDate || isSubmitting}
                          className="group relative w-full overflow-hidden bg-primary-navy rounded-2xl py-6 transition-all active:scale-95 shadow-xl shadow-primary-navy/20 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <div className="absolute inset-0 bg-gold-gradient translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-circOut" />
                          <span className="relative z-10 flex items-center justify-center gap-3 text-lg font-black font-montserrat text-white group-hover:text-primary-navy transition-colors">
                            {isSubmitting ? "PROCESSING..." : isSuccess ? "BOOKED SUCCESSFULLY" : "CONFIRM STRATEGY CALL"} 
                            {!isSubmitting && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                          </span>
                        </button>
                        <p className="text-center text-[10px] font-bold text-primary-navy/30 uppercase tracking-[0.2em] mt-6">Secure 256-bit encrypted booking system</p>
                      </div>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-20"
                  >
                    <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white mx-auto mb-8 shadow-2xl shadow-green-500/20">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h2 className="text-4xl font-black font-montserrat uppercase tracking-tighter mb-4">Confirmed!</h2>
                    <p className="text-lg text-primary-navy/60 font-inter max-w-md mx-auto mb-10">
                      Your strategy call has been scheduled. Check your email for the Zoom link and calendar invite.
                    </p>
                    <Button variant="primary" href="/" className="px-10 py-4">Return Home</Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: WHAT HAPPENS NEXT */}
      <section className="py-24 bg-primary-navy/[0.02] relative overflow-hidden">
        {/* Background watermark */}
        <div className="absolute inset-0 z-0 text-primary-navy/5 opacity-40 pointer-events-none select-none flex items-center justify-center">
          <div className="text-[15rem] font-black uppercase tracking-tighter">Process</div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-black font-montserrat mb-6 uppercase tracking-tighter">
              What <span className="text-accent-goldBase">Happens Next?</span>
            </h2>
            <p className="text-lg text-primary-navy/60 font-inter">
              We follow a proven framework to ensure our strategy call provides immediate value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="p-10 rounded-[2.5rem] bg-white border border-primary-navy/5 shadow-lg shadow-primary-navy/[0.02] group transition-all duration-500 hover:shadow-2xl"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary-navy flex items-center justify-center mb-8 shadow-xl shadow-primary-navy/20 group-hover:bg-gold-gradient transition-all duration-500">
                  {step.icon}
                </div>
                <h3 className="text-xl font-black font-montserrat mb-4 uppercase tracking-tight text-primary-navy">
                  <span className="text-accent-goldBase mr-3">{i + 1}.</span> {step.title}
                </h3>
                <p className="text-sm text-primary-navy/60 font-inter leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
