"use client";

import { motion } from "framer-motion";
import { ArrowRight, Ship, Plane, Hotel, UtensilsCrossed, Building2, HardHat } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ServicesSection() {
  const services = [
    {
      title: "Import Export & Trading",
      description: "Global trade solutions connecting businesses worldwide with seamless import-export operations.",
      icon: <Ship className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1500&auto=format&fit=crop",
      color: "from-blue-500 to-cyan-600",
      href: "/services/international-trading",
      size: "large"
    },
    {
      title: "Travel & Tourism",
      description: "Comprehensive tour operations and travel solutions worldwide.",
      icon: <Plane className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1500&auto=format&fit=crop",
      color: "from-amber-500 to-orange-600",
      href: "/services/travel-tourism",
      size: "small"
    },
    {
      title: "Hotel & Hospitality",
      description: "Premium resort management and hospitality services.",
      icon: <Hotel className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1500&auto=format&fit=crop",
      color: "from-purple-500 to-pink-600",
      href: "/services/hospitality",
      size: "small"
    },
    {
      title: "Food & Beverage",
      description: "International sourcing and distribution for F&B operations.",
      icon: <UtensilsCrossed className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1500&auto=format&fit=crop",
      color: "from-green-500 to-emerald-600",
      href: "/services/food-beverage",
      size: "small"
    },
    {
      title: "Real Estate",
      description: "Strategic investment and development across global markets.",
      icon: <Building2 className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1500&auto=format&fit=crop",
      color: "from-indigo-500 to-blue-600",
      href: "/services/real-estate",
      size: "medium"
    },
    {
      title: "Construction",
      description: "Engineering and infrastructure development solutions.",
      icon: <HardHat className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1500&auto=format&fit=crop",
      color: "from-orange-500 to-red-600",
      href: "/services/construction",
      size: "medium"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-4">Our Services</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive solutions across multiple industries and global markets
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[280px]">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl ${
                service.size === 'large' ? 'md:col-span-2 md:row-span-2' :
                service.size === 'medium' ? 'md:col-span-2' : ''
              }`}
            >
              <Link href={service.href} className="block h-full">
                <div className="relative h-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-3 shadow-lg transform group-hover:scale-110 transition-transform`}>
                      {service.icon}
                    </div>
                    <h3 className="text-white font-semibold text-xl mb-2">{service.title}</h3>
                    <p className="text-white/90 text-sm mb-3">{service.description}</p>
                    <div className="flex items-center text-white font-medium group-hover:translate-x-2 transition-transform">
                      Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/services">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">
              View All Services
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}