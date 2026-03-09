"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, User, Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  id: string;
  title: string;
  description: string;
  productCategory?: string;
  client?: string;
  tradeRegion?: string;
  completionDate?: string;
  images: string[];
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: "1",
      title: "Global Electronics Export",
      description: "Successfully exported 50,000+ units of consumer electronics to European markets with full compliance and quality assurance.",
      productCategory: "Trading",
      client: "TechGlobal Inc.",
      tradeRegion: "Europe",
      completionDate: "2024-01-15",
      images: ["https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=1500&auto=format&fit=crop"]
    },
    {
      id: "2",
      title: "Textile Manufacturing Partnership",
      description: "Established long-term partnership for premium textile export to North American fashion brands.",
      productCategory: "Garments & Textile",
      client: "Fashion Forward Ltd.",
      tradeRegion: "North America",
      completionDate: "2023-11-20",
      images: ["https://images.unsplash.com/photo-1558769132-cb1aea1f1d58?q=80&w=1500&auto=format&fit=crop"]
    },
    {
      id: "3",
      title: "Agricultural Products Distribution",
      description: "Managed end-to-end logistics for organic agricultural products from Asia to Middle East markets.",
      productCategory: "Agriculture",
      client: "Green Harvest Co.",
      tradeRegion: "Middle East",
      completionDate: "2023-12-10",
      images: ["https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1500&auto=format&fit=crop"]
    },
    {
      id: "4",
      title: "Industrial Machinery Import",
      description: "Facilitated import of heavy industrial machinery for manufacturing sector with customs clearance.",
      productCategory: "Trading",
      client: "Industrial Solutions",
      tradeRegion: "Asia Pacific",
      completionDate: "2024-02-05",
      images: ["https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1500&auto=format&fit=crop"]
    },
    {
      id: "5",
      title: "Construction Materials Supply",
      description: "Supplied premium construction materials for major infrastructure projects across Southeast Asia.",
      productCategory: "Construction",
      client: "BuildTech Corp.",
      tradeRegion: "Southeast Asia",
      completionDate: "2023-10-30",
      images: ["https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1500&auto=format&fit=crop"]
    },
    {
      id: "6",
      title: "Automotive Parts Trading",
      description: "Established supply chain for automotive components with major manufacturers in Europe and Asia.",
      productCategory: "Trading",
      client: "AutoParts Global",
      tradeRegion: "Europe & Asia",
      completionDate: "2024-01-25",
      images: ["https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=1500&auto=format&fit=crop"]
    }
  ]);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Hospitality", "Travel & Tourism", "Food & Beverage", "Agriculture", "Real Estate", "Construction", "Garments & Textile", "Trading", "Digital & IT", "Business Consulting", "Education & Training", "Media & Broadcasting", "CSR & Community"];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.productCategory === selectedCategory);

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-blue-600 via-blue-700 to-amber-500 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-6 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
          >
            <span className="text-white font-inter font-semibold text-sm tracking-wider">OUR PORTFOLIO</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-6xl md:text-7xl font-light text-white mb-8 leading-tight"
          >
            Featured Projects
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-2xl text-white/90 font-light max-w-3xl mx-auto leading-relaxed"
          >
            Showcasing excellence across diverse industries and markets worldwide.
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 border-b border-border bg-white dark:bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <span className="font-outfit font-bold text-foreground">Filter by Category:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl font-inter font-medium text-sm transition-all ${
                    selectedCategory === category
                      ? "bg-secondary text-white shadow-lg"
                      : "bg-gray-100 dark:bg-gray-800 text-muted-foreground hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-secondary"></div>
            <p className="mt-4 text-muted-foreground">Loading projects...</p>
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="text-center py-12">
            <X className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">No projects found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white dark:bg-card rounded-2xl shadow-sm border border-border hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  {project.images && project.images.length > 0 ? (
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <span className="text-white text-6xl font-outfit font-black opacity-20">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {project.productCategory && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-secondary text-white text-xs font-bold rounded-full">
                        {project.productCategory}
                      </span>
                    </div>
                  )}
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-outfit font-black text-foreground mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground font-inter leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Meta Info */}
                  <div className="space-y-2 text-sm text-muted-foreground">
                    {project.client && (
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span className="font-medium">{project.client}</span>
                      </div>
                    )}
                    {project.tradeRegion && (
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{project.tradeRegion}</span>
                      </div>
                    )}
                    {project.completionDate && (
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(project.completionDate).toLocaleDateString()}</span>
                      </div>
                    )}
                  </div>

                  {/* View Details Button */}
                  <Button
                    className="w-full mt-6 bg-primary hover:bg-primary/90 text-white font-outfit font-bold"
                  >
                    View Details
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-outfit font-black text-white mb-6"
          >
            Have a Project in Mind?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 font-inter mb-10"
          >
            Let's collaborate and bring your vision to life.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <a
              href="/contact"
              className="inline-block bg-white hover:bg-gray-100 text-primary font-outfit font-bold px-10 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              Start a Project
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
