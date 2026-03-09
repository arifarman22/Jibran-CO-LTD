"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProductsShowcaseSection() {
  const categories = [
    {
      title: "Industrial Machinery",
      description: "Heavy equipment and manufacturing machinery",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1500&auto=format&fit=crop",
      items: "500+ Products"
    },
    {
      title: "Textiles & Garments",
      description: "Premium fabrics and ready-made garments",
      image: "https://images.unsplash.com/photo-1558769132-cb1aea1f1d58?q=80&w=1500&auto=format&fit=crop",
      items: "1000+ Products"
    },
    {
      title: "Electronics & Technology",
      description: "Consumer electronics and tech components",
      image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=1500&auto=format&fit=crop",
      items: "800+ Products"
    },
    {
      title: "Agricultural Products",
      description: "Fresh produce and agricultural commodities",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1500&auto=format&fit=crop",
      items: "300+ Products"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-4">
            Our Trading Categories
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Diverse product portfolio spanning multiple industries and markets
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl h-80"
            >
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm mb-3 w-fit">
                  {category.items}
                </div>
                <h3 className="text-white font-semibold text-2xl mb-2">{category.title}</h3>
                <p className="text-white/90 mb-4">{category.description}</p>
                <Link href="/products" className="flex items-center text-white font-medium group-hover:translate-x-2 transition-transform w-fit">
                  Explore Products <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/products">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">
              View All Products
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
