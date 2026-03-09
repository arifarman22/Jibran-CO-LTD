"use client";

import { motion } from "framer-motion";
import { Ship, Globe2, TrendingUp, Shield, Clock, Award } from "lucide-react";

export default function TradingFeaturesSection() {
  const features = [
    {
      icon: <Ship className="w-8 h-8" />,
      title: "Global Shipping Network",
      description: "Seamless logistics across 60+ countries with reliable shipping partners and real-time tracking systems.",
      details: ["Air & Sea Freight", "Door-to-Door Delivery", "Express Shipping"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Globe2 className="w-8 h-8" />,
      title: "International Trade Expertise",
      description: "Expert handling of import-export documentation, customs clearance, and regulatory compliance.",
      details: ["Customs Brokerage", "Trade Documentation", "Compliance Support"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Market Intelligence",
      description: "Real-time market insights, competitive pricing strategies, and trend analysis for informed decisions.",
      details: ["Price Analytics", "Market Research", "Demand Forecasting"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Risk Management",
      description: "Comprehensive insurance coverage, secure payment methods, and compliance solutions for safe trading.",
      details: ["Cargo Insurance", "Payment Security", "Legal Protection"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Fast Processing",
      description: "Quick turnaround times with efficient supply chain management and automated order processing.",
      details: ["24/7 Operations", "Quick Response", "Automated Systems"],
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Assurance",
      description: "Rigorous quality control, product verification standards, and certified inspection processes.",
      details: ["Quality Inspection", "Product Testing", "ISO Certified"],
      color: "from-amber-500 to-yellow-500"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-blue-700 font-medium text-sm mb-4">
            ⚡ Our Advantages
          </div>
          <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-4">
            Why Choose Our Trading Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive import-export solutions backed by decades of experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-blue-200 h-full">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
                
                {/* Icon */}
                <div className="relative">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    {feature.icon}
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-slate-600 leading-relaxed mb-4">
                  {feature.description}
                </p>
                
                {/* Details List */}
                <ul className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-500">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${feature.color} mr-2`} />
                      {detail}
                    </li>
                  ))}
                </ul>

                {/* Shine Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
