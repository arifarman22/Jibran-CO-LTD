"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function StatsSection() {
  const stats = [
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2769/2769339.png",
      value: "50K+",
      label: "Shipments Annually",
      description: "Reliable delivery worldwide",
      gradient: "from-blue-500 via-blue-600 to-cyan-600"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      value: "60+",
      label: "Countries Served",
      description: "Global market presence",
      gradient: "from-purple-500 via-purple-600 to-pink-600"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/681/681494.png",
      value: "500+",
      label: "Global Partners",
      description: "Trusted business network",
      gradient: "from-green-500 via-emerald-600 to-teal-600"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/3135/3135706.png",
      value: "$100M+",
      label: "Annual Trade Volume",
      description: "Growing year over year",
      gradient: "from-orange-500 via-red-600 to-pink-600"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/10 to-pink-500/10 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:100px_100px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full border border-white/10 text-white font-medium text-sm mb-6"
          >
            ✨ Our Impact in Numbers
          </motion.div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Trading by
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Numbers
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Proven excellence in international trade and logistics
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, type: "spring" }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 overflow-hidden">
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${stat.gradient} p-4 mx-auto shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <Image
                      src={stat.icon}
                      alt={stat.label}
                      width={80}
                      height={80}
                      className="w-full h-full object-contain filter brightness-0 invert"
                    />
                  </div>
                </div>
                
                {/* Value */}
                <div className={`text-6xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-3 text-center group-hover:scale-110 transition-transform duration-300`}>
                  {stat.value}
                </div>
                
                {/* Label */}
                <div className="text-white font-bold text-lg mb-2 text-center">
                  {stat.label}
                </div>
                
                {/* Description */}
                <div className="text-slate-400 text-sm text-center">
                  {stat.description}
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
