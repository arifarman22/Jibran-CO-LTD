"use client";

import { motion, useMotionValue } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function ProductsShowcaseSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = [
    {
      title: "Industrial Machinery",
      description: "Heavy equipment and manufacturing machinery",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1500&auto=format&fit=crop",
      items: "500+ Products",
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      title: "Textiles & Garments",
      description: "Premium fabrics and ready-made garments",
      image: "https://images.unsplash.com/photo-1558769132-cb1aea1f1d58?q=80&w=1500&auto=format&fit=crop",
      items: "1000+ Products",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      title: "Electronics & Technology",
      description: "Consumer electronics and tech components",
      image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=1500&auto=format&fit=crop",
      items: "800+ Products",
      gradient: "from-orange-600 to-red-600"
    },
    {
      title: "Agricultural Products",
      description: "Fresh produce and agricultural commodities",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1500&auto=format&fit=crop",
      items: "300+ Products",
      gradient: "from-green-600 to-emerald-600"
    },
    {
      title: "Construction Materials",
      description: "Building supplies and construction equipment",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1500&auto=format&fit=crop",
      items: "400+ Products",
      gradient: "from-amber-600 to-yellow-600"
    },
    {
      title: "Automotive Parts",
      description: "Vehicle components and accessories",
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=1500&auto=format&fit=crop",
      items: "600+ Products",
      gradient: "from-indigo-600 to-blue-600"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % categories.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + categories.length) % categories.length);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-blue-700 font-medium text-sm mb-4">
            📦 Product Portfolio
          </div>
          <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-4">
            Our Trading Categories
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Diverse product portfolio spanning multiple industries and markets
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl">
            <motion.div
              className="flex"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {categories.map((category, index) => (
                <div key={category.title} className="min-w-full px-2">
                  <div className="relative h-[500px] rounded-3xl overflow-hidden group">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient} opacity-60`} />
                    
                    <div className="absolute inset-0 p-12 flex flex-col justify-end">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-medium mb-4">
                          {category.items}
                        </div>
                        <h3 className="text-white font-bold text-5xl mb-4">{category.title}</h3>
                        <p className="text-white/90 text-xl mb-6 max-w-2xl">{category.description}</p>
                        <Link href="/products" className="inline-flex items-center px-6 py-3 bg-white text-slate-900 rounded-xl font-semibold hover:bg-slate-100 transition-all group-hover:translate-x-2">
                          Explore Products <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-xl flex items-center justify-center hover:bg-white transition-all hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-slate-900" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-xl flex items-center justify-center hover:bg-white transition-all hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-slate-900" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {categories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? 'w-8 bg-blue-600' : 'w-2 bg-slate-300'
                }`}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/products">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">
              View All Products
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
