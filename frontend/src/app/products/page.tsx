"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProductsPage() {
  const categories = [
    { name: "Garments and Textile", image: "https://images.unsplash.com/photo-1596422846543-74c6fc0e163b?q=80&w=1500&auto=format&fit=crop" },
    { name: "Agricultural Products", image: "https://images.unsplash.com/photo-1590682680695-43b964a3ae17?q=80&w=1500&auto=format&fit=crop" },
    { name: "Food Products", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1500&auto=format&fit=crop" },
    { name: "Construction Materials", image: "https://images.unsplash.com/photo-1502014822147-1aaeca2da471?q=80&w=1500&auto=format&fit=crop" },
    { name: "Industrial Equipment", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1500&auto=format&fit=crop" },
    { name: "Consumer Goods", image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1500&auto=format&fit=crop" }
  ];

  return (
    <div className="bg-background min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-outfit font-bold text-foreground mb-6"
          >
            Export Products Catalog
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground font-inter"
          >
            A diverse range of premium exportable commodities, rigorously vetted for international standards.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer shadow-3d hover:-translate-y-2 transition-all duration-500"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                style={{ backgroundImage: `url(${category.image})` }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary/95 via-primary/40 to-transparent" />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <span className="inline-block w-fit px-3 py-1 bg-secondary/20 text-secondary text-[10px] font-black uppercase tracking-widest rounded-full mb-4 glass">
                  Elite Category
                </span>
                <h2 className="text-3xl font-outfit font-black text-white mb-2 transform -translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  {category.name}
                </h2>
                <div className="h-0.5 w-0 group-hover:w-full bg-secondary transition-all duration-500 mb-4" />
                <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  <span className="inline-flex items-center text-white/80 font-inter font-bold text-sm">
                    Explore Inventory <ArrowRight className="ml-2 w-4 h-4 text-secondary" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
