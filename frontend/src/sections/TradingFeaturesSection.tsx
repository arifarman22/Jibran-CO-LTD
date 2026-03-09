"use client";

import { motion } from "framer-motion";
import { Ship, Globe2, TrendingUp, Shield, Clock, Award } from "lucide-react";

export default function TradingFeaturesSection() {
  const features = [
    {
      icon: <Ship className="w-8 h-8" />,
      title: "Global Shipping Network",
      description: "Seamless logistics across 60+ countries with reliable shipping partners",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Globe2 className="w-8 h-8" />,
      title: "International Trade",
      description: "Expert handling of import-export documentation and customs clearance",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Market Intelligence",
      description: "Real-time market insights and competitive pricing strategies",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Risk Management",
      description: "Comprehensive insurance and compliance solutions for secure trading",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Fast Processing",
      description: "Quick turnaround times with efficient supply chain management",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Assurance",
      description: "Rigorous quality control and product verification standards",
      color: "from-amber-500 to-yellow-500"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-4">
            Why Choose Our Trading Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive import-export solutions backed by decades of experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-blue-200">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
