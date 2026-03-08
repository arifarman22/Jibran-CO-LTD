"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, CheckCircle, Star, Users, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-100/10 to-purple-100/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-medium text-sm">
              <Globe className="w-4 h-4 mr-2" />
              Global Business Excellence Since 1994
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-light text-gray-900 leading-tight">
              Building Tomorrow's
              <span className="block font-normal bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Business Success
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              Jibran C. Ltd is a premier multi-sector conglomerate delivering excellence across 
              international trade, hospitality, construction, and innovative business solutions 
              that drive growth in global markets.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg">
                <Play className="mr-2 w-5 h-5" />
                Watch Our Story
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">30+</div>
                <div className="text-sm text-gray-600">Years Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">60+</div>
                <div className="text-sm text-gray-600">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Global Partners</div>
              </div>
            </div>
          </motion.div>

          {/* 3D Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative perspective-1000"
          >
            <div className="relative preserve-3d">
              {/* Main 3D Card */}
              <div className="relative w-full max-w-lg mx-auto">
                <div className="bg-white rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <img 
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80" 
                    alt="Business Excellence" 
                    className="w-full h-64 object-cover rounded-2xl mb-6"
                  />
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-yellow-500" />
                      <span className="font-semibold text-gray-900">Industry Leadership</span>
                    </div>
                    <p className="text-gray-600">Delivering exceptional results across multiple sectors with proven expertise and innovation.</p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div 
                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-xl p-4 max-w-48"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Trusted Partner</div>
                    <div className="text-sm text-gray-600">Global Excellence</div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 15, 0], rotate: [0, -3, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -right-4 bg-blue-600 text-white rounded-2xl shadow-xl p-4 max-w-48"
              >
                <div className="flex items-center gap-3">
                  <Users className="w-8 h-8" />
                  <div>
                    <div className="font-semibold">500+ Partners</div>
                    <div className="text-sm text-blue-200">Worldwide Network</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}