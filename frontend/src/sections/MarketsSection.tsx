"use client";

import { motion } from "framer-motion";
import { MapPin, Globe2 } from "lucide-react";

export default function MarketsSection() {
  const markets = [
    { name: "North America", description: "Strategic hubs bridging the fastest-growing markets.", percent: 35 },
    { name: "European Union", description: "Premium distribution channels across the EU.", percent: 25 },
    { name: "Middle East & GCC", description: "Dynamic trade corridors connecting continents.", percent: 15 },
    { name: "Southeast Asia", description: "Rapidly expanding sourcing and export partnerships.", percent: 15 },
    { name: "Emerging Markets", description: "Emerging gateways for industrial and agricultural trade.", percent: 10 }
  ];

  return (
    <section className="py-32 bg-white border-t border-slate-100 relative overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0870b8_1px,transparent_1px)] [background-size:40px_40px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-secondary font-black tracking-[0.3em] uppercase text-xs mb-4 block">Global Footprint</span>
            <h2 className="text-5xl md:text-6xl font-black text-primary mb-8 leading-tight tracking-tight">Navigating <br /> Sovereign Markets</h2>
            <p className="text-xl text-slate-500 font-sans mb-12 leading-relaxed">
              JIBRAN CO LTD operates a robust global trading infrastructure, ensuring seamless market entry and distribution across the world&apos;s most dynamic economic zones.
            </p>
            
            <div className="space-y-8">
              {markets.map((market, index) => (
                <div key={market.name} className="relative group">
                  <div className="flex justify-between items-end mb-3">
                    <span className="font-bold text-primary flex items-center group-hover:translate-x-1 transition-transform">
                      <MapPin className="w-4 h-4 text-secondary mr-2" />
                      {market.name}
                    </span>
                    <span className="text-xs font-black text-slate-400 uppercase tracking-widest">{market.percent}% Market Share</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${market.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 + (index * 0.1) }}
                      className="h-full bg-linear-to-r from-primary to-secondary rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative perspective-1000"
          >
            <div className="relative h-[650px] w-full bg-slate-50 rounded-[4rem] overflow-hidden border border-slate-100 flex items-center justify-center p-12 shadow-3d preserve-3d">
              {/* World Map Background Visual */}
              <div className="absolute inset-0 opacity-[0.07] bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-contain bg-center bg-no-repeat grayscale" />
              
              <div className="relative z-10 glass p-12 rounded-[2.5rem] border-white/50 shadow-2xl max-w-sm text-center transform hover:rotate-y-12 transition-transform duration-700">
                <div className="w-24 h-24 bg-primary text-white rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-3d animate-bounce-slow">
                  <Globe2 className="w-12 h-12" />
                </div>
                <h3 className="text-3xl font-black text-primary mb-4">Borderless Trade</h3>
                <div className="h-1 w-12 bg-secondary mx-auto mb-6 rounded-full" />
                <p className="text-slate-500 font-sans leading-relaxed">Executing high-precision logistics powered by an elite international network of partners and suppliers across all continents.</p>
              </div>

              {/* Decorative Floating Dots */}
              <div className="absolute top-20 right-20 w-4 h-4 bg-secondary rounded-full animate-ping" />
              <div className="absolute bottom-40 left-20 w-3 h-3 bg-primary rounded-full animate-ping" style={{ animationDelay: '1s' }} />
              <div className="absolute top-1/2 left-10 w-2 h-2 bg-slate-300 rounded-full" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

