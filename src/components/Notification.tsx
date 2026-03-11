"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, AlertCircle, X } from "lucide-react";
import { useEffect } from "react";

interface NotificationProps {
  isVisible: boolean;
  message: string;
  type: "success" | "error";
  onClose: () => void;
}

export const Notification = ({ isVisible, message, type, onClose }: NotificationProps) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.9 }}
          className="fixed top-24 right-6 left-6 md:left-auto md:w-96 z-[100]"
        >
          <div className="relative group overflow-hidden rounded-2xl">
            {/* Glassmorphism Background */}
            <div className="absolute inset-0 bg-primary-navy/80 backdrop-blur-xl border border-white/10" />
            
            {/* Animated Progress Bar */}
            <motion.div 
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: 5, ease: "linear" }}
              className={`absolute bottom-0 left-0 h-1 ${type === "success" ? "bg-accent-goldBase" : "bg-red-500"}`}
            />

            <div className="relative p-5 flex items-start gap-4">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${type === "success" ? "bg-accent-goldBase/20 text-accent-goldBase" : "bg-red-500/20 text-red-500"}`}>
                {type === "success" ? <CheckCircle size={22} /> : <AlertCircle size={22} />}
              </div>
              
              <div className="flex-grow">
                <h4 className="text-sm font-black font-montserrat text-white uppercase tracking-widest mb-1">
                  {type === "success" ? "Success" : "Error"}
                </h4>
                <p className="text-xs text-white/60 font-inter leading-relaxed">
                  {message}
                </p>
              </div>

              <button 
                onClick={onClose}
                className="text-white/30 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
