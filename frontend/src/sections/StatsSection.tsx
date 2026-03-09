"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Package, Globe } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      icon: <Package className="w-10 h-10" />,
      value: "50K+",
      label: "Shipments Annually",
      description: "Reliable delivery worldwide"
    },
    {
      icon: <Globe className="w-10 h-10" />,
      value: "60+",
      label: "Countries Served",
      description: "Global market presence"
    },
    {
      icon: <Users className="w-10 h-10" />,
      value: "500+",
      label: "Global Partners",
      description: "Trusted business network"
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      value: "$100M+",
      label: "Annual Trade Volume",
      description: "Growing year over year"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(168,85,247,0.05),transparent_50%)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-medium text-sm mb-4">
            Our Impact
          </div>
          <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-4">
            Trusted by Businesses Worldwide
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Numbers that reflect our commitment to excellence in global trade
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-gradient-to-br from-white to-slate-50 rounded-3xl p-8 border-2 border-slate-100 hover:border-blue-200 transition-all duration-300 hover:shadow-xl">
                {/* Icon */}
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white mb-6 mx-auto shadow-lg group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                
                {/* Value */}
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 text-center">
                  {stat.value}
                </div>
                
                {/* Label */}
                <div className="text-slate-900 font-semibold text-lg mb-2 text-center">
                  {stat.label}
                </div>
                
                {/* Description */}
                <div className="text-slate-600 text-sm text-center">
                  {stat.description}
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
