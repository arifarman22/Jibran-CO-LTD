"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CategoriesSection() {
  const categories = [
    { name: "Strategic Raw Materials", image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1500&auto=format&fit=crop" },
    { name: "Agri-Commodities", image: "https://images.unsplash.com/photo-1590682680695-43b964a3ae17?q=80&w=1500&auto=format&fit=crop" },
    { name: "Energy Solutions", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1500&auto=format&fit=crop" },
    { name: "Precision Machinery", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1500&auto=format&fit=crop" },
    { name: "Global Electronics", image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1500&auto=format&fit=crop" },
    { name: "Premium Textiles", image: "https://images.unsplash.com/photo-1596422846543-74c6fc0e163b?q=80&w=1500&auto=format&fit=crop" }
  ];

  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="text-secondary font-black tracking-[0.3em] uppercase text-xs mb-4 block">Portfolio Architecture</span>
            <h2 className="text-5xl font-black text-primary mb-6 tracking-tight">World-Class <br /> Trading Portfolios</h2>
            <p className="text-xl text-slate-500 font-sans leading-relaxed">
              Curating an elite selection of globally sourced goods, verified for uncompromising quality and international compliance.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button variant="outline" className="font-bold border-slate-200 text-primary hover:bg-white rounded-2xl px-10 h-16 transition-all shadow-sm">
              Explore Full Catalog <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative h-[450px] rounded-[2.5rem] overflow-hidden cursor-pointer shadow-3d hover:-translate-y-2 transition-all duration-700"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] group-hover:scale-110"
                style={{ backgroundImage: `url(${category.image})` }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary via-primary/20 to-transparent" />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="absolute inset-0 p-12 flex flex-col justify-end">
                <span className="text-secondary font-black text-[10px] uppercase tracking-[0.4em] mb-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  Global Sector
                </span>
                <h4 className="text-3xl font-black text-white mb-6 group-hover:mb-2 transition-all duration-500">
                  {category.name}
                </h4>
                <div className="h-0.5 w-0 group-hover:w-full bg-secondary transition-all duration-700 mb-6" />
                <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  <span className="inline-flex items-center text-white/80 font-bold text-sm">
                    Inquire Specification <ArrowRight className="ml-2 w-4 h-4 text-secondary" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

