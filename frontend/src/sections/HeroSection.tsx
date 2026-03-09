"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-width Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2000&auto=format&fit=crop"
          alt="Global Trading"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900/80" />
      </div>

      {/* Animated Overlay Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:100px_100px] z-0" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-white font-medium text-sm border border-white/20"
          >
            <Globe className="w-4 h-4 mr-2" />
            Global Business Excellence Since 1994
          </motion.div>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
            Global Import Export
            <span className="block mt-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Trading Excellence
            </span>
          </h1>

          <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            Leading international trading company connecting businesses worldwide. Specializing in 
            seamless import-export operations, supply chain management, and global trade solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/services">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg shadow-2xl hover:shadow-blue-500/50 transition-all transform hover:-translate-y-1 rounded-xl">
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-2 border-white/30 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 px-8 py-6 text-lg rounded-xl">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-8 lg:gap-12 pt-12"
          >
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">30+</div>
              <div className="text-sm text-white/80">Years Excellence</div>
            </div>
            <div className="h-12 w-px bg-white/20" />
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">60+</div>
              <div className="text-sm text-white/80">Countries</div>
            </div>
            <div className="h-12 w-px bg-white/20" />
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">500+</div>
              <div className="text-sm text-white/80">Global Partners</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}