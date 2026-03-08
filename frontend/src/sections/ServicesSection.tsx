"use client";

import { motion } from "framer-motion";
import { ArrowRight, Plane, Hotel, UtensilsCrossed, Building2, HardHat, Shirt } from "lucide-react";
import Link from "next/link";

export default function ServicesSection() {
  const services = [
    {
      title: "Travel & Tourism",
      description: "Comprehensive tour operations and travel solutions connecting you to remarkable destinations worldwide.",
      icon: <Plane className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600",
      href: "/services/travel-tourism"
    },
    {
      title: "Hotel & Hospitality",
      description: "Premium resort management and high-end hospitality services delivering exceptional guest experiences.",
      icon: <Hotel className="w-8 h-8" />,
      color: "from-amber-500 to-amber-600",
      href: "/services/hospitality"
    },
    {
      title: "Food & Beverage",
      description: "International sourcing and distribution for large-scale food and beverage operations worldwide.",
      icon: <UtensilsCrossed className="w-8 h-8" />,
      color: "from-green-500 to-green-600",
      href: "/services/food-beverage"
    },
    {
      title: "Real Estate",
      description: "Strategic investment and development of commercial and residential landmarks across global markets.",
      icon: <Building2 className="w-8 h-8" />,
      color: "from-indigo-500 to-indigo-600",
      href: "/services/real-estate"
    },
    {
      title: "Construction",
      description: "Comprehensive engineering and heavy construction for industrial growth and infrastructure development.",
      icon: <HardHat className="w-8 h-8" />,
      color: "from-orange-500 to-orange-600",
      href: "/services/construction"
    },
    {
      title: "Garments & Textile",
      description: "Precision manufacturing and global export of high-quality textile products and garments.",
      icon: <Shirt className="w-8 h-8" />,
      color: "from-purple-500 to-purple-600",
      href: "/services/garments-textile"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background 3D Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-100/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive solutions across multiple industries and global markets, 
              delivering excellence through innovation and expertise.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -10, 
                rotateX: 5,
                transition: { duration: 0.3 }
              }}
              className="group perspective-1000"
            >
              <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 preserve-3d transform-gpu">
                {/* 3D Icon Container */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <Link 
                  href={service.href}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group-hover:translate-x-2 transition-all duration-300"
                >
                  Learn More 
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>

                {/* 3D Depth Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-100/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link href="/services">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              View All Services
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}