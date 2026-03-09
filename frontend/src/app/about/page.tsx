"use client";

import { motion } from "framer-motion";
import { Shield, Target, Award, Users, Linkedin, Mail, Globe, TrendingUp, Package, Zap, Building2, Briefcase } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  const values = [
    { title: "Integrity", description: "Uncompromising honesty in every transaction, ensuring partner trust globally.", icon: <Shield className="w-6 h-6 text-amber-500" /> },
    { title: "Precision", description: "Flawless execution of complex logistics, reducing operational friction.", icon: <Target className="w-6 h-6 text-amber-500" /> },
    { title: "Excellence", description: "Setting the highest standards in quality assurance and procurement.", icon: <Award className="w-6 h-6 text-amber-500" /> },
    { title: "Partnership", description: "Building enduring relationships with clients, suppliers, and distributors.", icon: <Users className="w-6 h-6 text-amber-500" /> }
  ];

  const stats = [
    { value: "13+", label: "Business Sectors", icon: <Building2 className="w-8 h-8" /> },
    { value: "50+", label: "Countries Served", icon: <Globe className="w-8 h-8" /> },
    { value: "200+", label: "Global Partners", icon: <Briefcase className="w-8 h-8" /> },
    { value: "99.8%", label: "Client Satisfaction", icon: <Zap className="w-8 h-8" /> }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Header */}
      <section className="relative py-32 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-6 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
          >
            <span className="text-white font-semibold text-sm tracking-wider">DIVERSIFIED BUSINESS EXCELLENCE</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-6xl md:text-7xl font-light text-white mb-8 leading-tight"
          >
            About Jibran Co. Ltd
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-2xl text-white/90 font-light max-w-3xl mx-auto leading-relaxed"
          >
            A premier multi-sector conglomerate delivering excellence across Travel, Hospitality, Real Estate, Construction, and beyond.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="-mt-20 relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform">{stat.icon}</div>
              <div className="text-4xl font-black text-slate-900 mb-2">{stat.value}</div>
              <div className="text-slate-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Story & Mission */}
      <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6 px-4 py-1 bg-amber-100 rounded-full">
              <span className="text-amber-600 font-bold tracking-widest uppercase text-xs">Our Story</span>
            </div>
            <h3 className="text-5xl font-black text-slate-900 mb-8 leading-tight">Building Tomorrow's Business Landscape</h3>
            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
              <p className="text-xl">
                Jibran Co. Ltd was founded with a vision to create a diversified business empire that touches every aspect of modern life—from the places we stay to the food we eat, the homes we build, and the services we rely on.
              </p>
              <p>
                What started as a focused enterprise has evolved into a multi-sector conglomerate spanning 13 distinct business categories. We operate across Travel & Tourism, Hospitality, Food & Beverage, Agriculture, Real Estate, Construction, Garments, Trading, Digital Services, Consulting, Education, Media, and Corporate Social Responsibility.
              </p>
              <p>
                Today, we serve clients and partners across 50+ countries, delivering exceptional value, innovation, and reliability in every sector we operate.
              </p>
            </div>
            <div className="mt-10">
              <Link href="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold h-14 px-10 rounded-xl shadow-lg hover:shadow-xl transition-all">
                  Partner With Us
                </Button>
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-200/50 to-blue-200/50 rounded-3xl blur-2xl" />
            <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80" alt="Modern Business" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block mb-6 px-4 py-1 bg-amber-100 rounded-full"
            >
              <span className="text-amber-600 font-bold tracking-widest uppercase text-xs">What Drives Us</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl font-black text-slate-900 mb-6"
            >
              Our Core Values
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-600 max-w-2xl mx-auto text-xl"
            >
              The principles that drive our operations and define our corporate culture.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-slate-50 p-10 rounded-2xl border-2 border-slate-200 hover:border-amber-500 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="bg-gradient-to-br from-amber-100 to-amber-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h4 className="text-2xl font-black text-slate-900 mb-4">{value.title}</h4>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence CTA */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80" 
          alt="Global Network" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-blue-900/90" />
        <div className="relative z-10 text-center text-white max-w-5xl px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black mb-10 leading-tight"
          >
            Excellence Across Every Sector
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-2xl mb-12 text-white/90 font-light"
          >
            Join 200+ satisfied partners worldwide
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link href="/services">
              <Button size="lg" className="bg-white hover:bg-amber-500 text-blue-900 hover:text-white font-bold h-16 px-12 rounded-2xl text-lg shadow-2xl hover:shadow-3xl transition-all hover:scale-105">
                Explore Our Services
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
