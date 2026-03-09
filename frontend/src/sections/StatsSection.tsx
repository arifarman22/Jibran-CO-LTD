"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function StatsSection() {
  const stats = [
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2769/2769339.png",
      value: "50K+",
      label: "Annual Shipments",
      description: "Containers delivered worldwide",
      image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?q=80&w=800&auto=format&fit=crop",
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      value: "60+",
      label: "Countries Served",
      description: "Global market coverage",
      image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=800&auto=format&fit=crop",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/681/681494.png",
      value: "200+",
      label: "Global Partners",
      description: "Trusted business network",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop",
      gradient: "from-green-600 to-emerald-600"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/3135/3135706.png",
      value: "$100M+",
      label: "Trade Volume",
      description: "Annual transaction value",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
      gradient: "from-orange-600 to-red-600"
    }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.05),transparent_50%)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-100 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse" />
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Global Impact
            </span>
          </motion.div>
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Trading by
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Numbers
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Delivering measurable results through strategic partnerships and innovative trade solutions
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-blue-200">
                {/* Background Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={stat.image}
                    alt={stat.label}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-80 group-hover:opacity-70 transition-opacity`} />
                  
                  {/* Icon */}
                  <div className="absolute top-6 left-6">
                    <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md p-3 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <Image
                        src={stat.icon}
                        alt={stat.label}
                        width={64}
                        height={64}
                        className="w-full h-full object-contain filter brightness-0 invert"
                      />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 bg-white">
                  {/* Value */}
                  <div className={`text-5xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform`}>
                    {stat.value}
                  </div>
                  
                  {/* Label */}
                  <div className="text-slate-900 font-bold text-lg mb-2">
                    {stat.label}
                  </div>
                  
                  {/* Description */}
                  <div className="text-slate-600 text-sm">
                    {stat.description}
                  </div>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-slate-600 mb-6">
            Join hundreds of businesses worldwide who trust us with their international trade
          </p>
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
            <div className="text-sm text-slate-500 font-medium">Trusted by leading companies</div>
            <div className="flex gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-24 h-8 bg-slate-200 rounded animate-pulse" />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
