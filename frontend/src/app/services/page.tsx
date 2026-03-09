"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Plane, Hotel, UtensilsCrossed, Sprout, Building2, HardHat, 
  Shirt, Ship, Laptop, Briefcase, GraduationCap, Tv, Heart, ArrowRight,
  CheckCircle, Globe, Shield, Users, TrendingUp, Award
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    { 
      title: "Import, Export & Trading", 
      description: "Global import-export and international trading services with comprehensive logistics coordination across 60+ countries.", 
      icon: <Ship className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      slug: "international-trading"
    },
    { 
      title: "Travel & Tourism", 
      description: "Comprehensive travel solutions including tour operations, airline ticketing, hotel reservations, and visa assistance.", 
      icon: <Plane className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      slug: "travel-tourism"
    },
    { 
      title: "Hotel & Hospitality", 
      description: "Premium hospitality services including hotel management, resort operations, and event management solutions.", 
      icon: <Hotel className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      slug: "hospitality"
    },
    { 
      title: "Food & Beverage", 
      description: "Complete F&B solutions from restaurants to catering, cloud kitchens, and food distribution services.", 
      icon: <UtensilsCrossed className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      slug: "food-beverage"
    },
    { 
      title: "Agricultural Projects", 
      description: "Comprehensive agricultural solutions including farming, cultivation, processing, and agro-based product trading.", 
      icon: <Sprout className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      slug: "agriculture"
    },
    { 
      title: "Real Estate & Property", 
      description: "Full-spectrum real estate services including development, investment, property management, and consultancy.", 
      icon: <Building2 className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
      slug: "real-estate"
    },
    { 
      title: "Construction & Engineering", 
      description: "Complete construction services from planning to execution of residential, commercial, and infrastructure projects.", 
      icon: <HardHat className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      slug: "construction"
    },
    { 
      title: "Garments & Textile", 
      description: "End-to-end garments and textile solutions including manufacturing, sourcing, and international trading.", 
      icon: <Shirt className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      slug: "garments-textile"
    },
    { 
      title: "Digital & IT Services", 
      description: "Comprehensive digital solutions including marketing, IT support, software development, and e-commerce.", 
      icon: <Laptop className="w-8 h-8" />,
      color: "from-violet-500 to-purple-500",
      slug: "digital-it"
    },
    { 
      title: "Business Consulting", 
      description: "Professional business consulting and advisory services for market development and operational excellence.", 
      icon: <Briefcase className="w-8 h-8" />,
      color: "from-slate-500 to-gray-500",
      slug: "business-consulting"
    },
    { 
      title: "Education & Training", 
      description: "Educational institutions, training centers, and skill development programs for professional growth.", 
      icon: <GraduationCap className="w-8 h-8" />,
      color: "from-amber-500 to-yellow-500",
      slug: "education-training"
    },
    { 
      title: "Media & Broadcasting", 
      description: "Media production, broadcasting, publishing, and digital content creation services.", 
      icon: <Tv className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      slug: "media-broadcasting"
    },
    { 
      title: "CSR & Community Development", 
      description: "Corporate social responsibility initiatives and community development programs.", 
      icon: <Heart className="w-8 h-8" />,
      color: "from-rose-500 to-red-500",
      slug: "csr-community"
    },
  ];

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
            <span className="text-white font-inter font-semibold text-sm tracking-wider">COMPREHENSIVE BUSINESS SOLUTIONS</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-6xl md:text-7xl font-outfit font-black text-white mb-8 leading-tight"
          >
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-2xl text-white/90 font-inter font-light max-w-3xl mx-auto leading-relaxed"
          >
            Diversified business portfolio spanning multiple industries with excellence and innovation at every touchpoint.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative bg-white dark:bg-card rounded-2xl shadow-sm border border-border hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="relative p-8">
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-outfit font-black text-foreground mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground font-inter leading-relaxed mb-6">
                  {service.description}
                </p>
                
                {/* Link */}
                <Link 
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center text-sm font-inter font-bold text-primary hover:text-secondary transition-colors group-hover:translate-x-2 transform duration-300"
                >
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-outfit font-black text-foreground mb-6">Our Approach</h2>
          <p className="text-xl text-muted-foreground font-inter max-w-3xl mx-auto">A proven methodology that ensures success at every stage of your project.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { step: "01", title: "Discovery", desc: "Understanding your business needs and objectives", icon: <Users className="w-6 h-6" /> },
            { step: "02", title: "Strategy", desc: "Developing customized solutions and action plans", icon: <TrendingUp className="w-6 h-6" /> },
            { step: "03", title: "Execution", desc: "Implementing solutions with precision and expertise", icon: <CheckCircle className="w-6 h-6" /> },
            { step: "04", title: "Support", desc: "Ongoing assistance and continuous improvement", icon: <Shield className="w-6 h-6" /> }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative bg-white dark:bg-card p-8 rounded-2xl shadow-lg border border-border"
            >
              <div className="text-6xl font-outfit font-black text-primary/20 mb-4">{item.step}</div>
              <div className="bg-gradient-to-br from-primary to-secondary text-white p-3 rounded-xl inline-flex mb-4">{item.icon}</div>
              <h3 className="text-2xl font-outfit font-black text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground font-inter">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Industry Standards */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-outfit font-black text-foreground mb-6">Industry Standards</h2>
            <p className="text-xl text-muted-foreground font-inter max-w-3xl mx-auto">Committed to excellence through international certifications and quality standards.</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { title: "ISO Certified", desc: "Quality Management" },
              { title: "Global Trade", desc: "Compliance Standards" },
              { title: "Industry Leader", desc: "Best Practices" },
              { title: "Trusted Partner", desc: "200+ Clients" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="bg-white dark:bg-card p-6 rounded-2xl shadow-lg border border-border mb-4 inline-flex">
                  <Award className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl font-outfit font-black text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-inter">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Benefits */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-outfit font-black text-foreground mb-6">What Sets Us Apart</h2>
            <p className="text-xl text-muted-foreground font-inter mb-8">We combine global expertise with local knowledge to deliver unmatched value to our clients.</p>
            <div className="space-y-4">
              {[
                "End-to-end solutions across multiple industries",
                "Dedicated account management and support",
                "Proven track record of successful projects",
                "Competitive pricing with transparent billing",
                "24/7 customer support and assistance",
                "Cutting-edge technology and innovation"
              ].map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-lg font-inter text-foreground">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80" 
                alt="Team collaboration" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-3xl font-outfit font-black text-white mb-2">Global Excellence</h3>
                <p className="text-white/90 font-inter">Delivering world-class solutions across continents</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-outfit font-black text-foreground mb-6">Why Choose Us</h2>
            <p className="text-xl text-muted-foreground font-inter max-w-3xl mx-auto">We deliver exceptional value through our commitment to quality, innovation, and customer satisfaction.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Global Reach", desc: "Operating in 60+ countries with 200+ trusted partners worldwide", stat: "60+" },
              { title: "Experience", desc: "Over 5 years of proven excellence across diverse industries", stat: "5+" },
              { title: "Expertise", desc: "Specialized teams delivering world-class solutions in every sector", stat: "13+" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-card p-8 rounded-2xl shadow-lg border border-border text-center"
              >
                <div className="text-6xl font-outfit font-black text-primary mb-4">{item.stat}</div>
                <h3 className="text-2xl font-outfit font-black text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground font-inter">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
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
            Ready to Start Your Project?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 font-inter mb-10"
          >
            Let's discuss how we can help your business grow and succeed.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="inline-block bg-white hover:bg-gray-100 text-primary font-outfit font-bold px-10 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
