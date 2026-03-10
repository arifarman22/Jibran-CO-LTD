"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, Star } from "lucide-react";
import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
          whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center perspective-1000"
        >
          {/* 3D Floating Icon */}
          <motion.div 
            animate={{ 
              y: [0, -20, 0],
              rotateY: [0, 360]
            }}
            transition={{ 
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              rotateY: { duration: 8, repeat: Infinity, ease: "linear" }
            }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm mb-8 border border-white/30 preserve-3d"
          >
            <Star className="h-10 w-10 text-white" />
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-light text-white mb-8 leading-tight">
            Ready to Build Your
            <span className="block font-normal bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Future Together?
            </span>
          </h2>
          
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Partner with Jibran C. Ltd for unparalleled excellence in global trading, logistics, 
            and multi-sector business solutions that drive sustainable growth and success.
          </p>

          {/* 3D Button Container */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/contact">
              <motion.button 
                whileHover={{ 
                  scale: 1.05, 
                  rotateX: 5,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-700 hover:text-blue-800 px-10 py-4 rounded-2xl font-semibold text-lg shadow-2xl transform transition-all duration-300 flex items-center gap-3 preserve-3d"
              >
                <Phone className="w-5 h-5" />
                Start Partnership
              </motion.button>
            </Link>
            
            <Link href="/services">
              <motion.button 
                whileHover={{ 
                  scale: 1.05, 
                  rotateX: 5,
                  boxShadow: "0 20px 40px rgba(255,255,255,0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white/50 text-white hover:bg-white/10 px-10 py-4 rounded-2xl font-semibold text-lg backdrop-blur-sm transition-all duration-300 flex items-center gap-3 preserve-3d"
              >
                <Mail className="w-5 h-5" />
                Explore Services
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </div>

          {/* 3D Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {[
              { number: "5+", label: "Years Excellence" },
              { number: "60+", label: "Global Markets" },
              { number: "500+", label: "Trusted Partners" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30, rotateY: 20 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -5, 
                  rotateY: 10,
                  transition: { duration: 0.3 }
                }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 preserve-3d transform-gpu"
              >
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-200 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}