"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Building, Calendar } from "lucide-react";
import Link from "next/link";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Sustainable Industrial Hub",
      client: "Global Logistics Group",
      region: "Singapore",
      category: "Logistics Infrastructure",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
      value: "$50M"
    },
    {
      title: "Commercial Skyline Plaza",
      client: "Metropolitan Development",
      region: "Dubai, UAE",
      category: "Real Estate Development",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      value: "$120M"
    },
    {
      title: "Agri-Tech Sourcing Network",
      client: "Continental Commodities",
      region: "Brazil",
      category: "Supply Chain",
      image: "https://images.unsplash.com/photo-1590682680695-43b964a3ae17?w=800&q=80",
      value: "$35M"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background 3D Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-100/30 to-purple-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-green-100/20 to-blue-100/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Showcasing our global excellence across diverse industries and markets 
              with transformative projects that drive growth and innovation.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 40, rotateY: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ 
                y: -15, 
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="group perspective-1000"
            >
              <div className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden preserve-3d transform-gpu">
                {/* Image Container with 3D Effect */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Floating Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-gray-900">
                    {project.value}
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute bottom-4 left-4 bg-blue-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-gray-600">
                      <Building className="w-4 h-4 text-blue-500" />
                      <span className="text-sm">{project.client}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <MapPin className="w-4 h-4 text-green-500" />
                      <span className="text-sm">{project.region}</span>
                    </div>
                  </div>
                  
                  <Link 
                    href="/projects"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group-hover:translate-x-2 transition-all duration-300"
                  >
                    View Details 
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>

                {/* 3D Depth Shadow */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-200/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 transform translate-x-2 translate-y-2" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Link href="/projects">
            <button className="bg-gray-900 hover:bg-black text-white px-8 py-4 rounded-xl font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              View All Projects
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}