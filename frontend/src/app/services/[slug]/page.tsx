"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, Box, Anchor, Globe, Briefcase, FileCheck, Truck, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const servicesData = {
  "global-sourcing": {
    title: "Global Sourcing",
    description: "Identifying and procuring high-quality products from reliable international manufacturers.",
    longDescription: "Our global sourcing team operates at the intersection of quality and cost-efficiency. We leverage a vast network of certified manufacturers across Asia, Europe, and the Americas to find the exact products your business requires. From raw materials to finished consumer goods, we handle the entire procurement lifecycle.",
    icon: <Globe className="w-12 h-12 text-secondary" />,
    image: "https://images.unsplash.com/photo-1586528116311-ad8ed7c83a7f?q=80&w=2670&auto=format&fit=crop",
    benefits: ["Supplier Audits & Verification", "Price Negotiation", "Quality Assurance", "Contract Manufacturing"],
    stats: { clients: "200+", regions: "15+", success: "99%" }
  },
  "export-operations": {
    title: "Export Operations",
    description: "Comprehensive administration of cross-border trade, customs clearance, and global distribution.",
    longDescription: "Navigating international trade regulations can be complex. Our export operations team simplifies the process, ensuring your goods reach their destination safely and on time. We manage documentation, customs compliance, and international freight forwarding with precision and transparency.",
    icon: <Anchor className="w-12 h-12 text-secondary" />,
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2670&auto=format&fit=crop",
    benefits: ["Customs Documentation", "Freight Forwarding", "Trade Compliance", "Export Financing"],
    stats: { clients: "150+", regions: "20+", success: "100%" }
  },
  "supply-chain": {
    title: "Supply Chain",
    description: "Optimizing end-to-end logistics with intelligent routing and warehousing solutions.",
    longDescription: "In today's fast-paced market, a robust supply chain is a competitive advantage. We provide end-to-end supply chain management services, including inventory optimization, warehousing, and multi-modal transportation. Our goal is to reduce lead times and operational costs while increasing reliability.",
    icon: <Truck className="w-12 h-12 text-secondary" />,
    image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaad21?q=80&w=2670&auto=format&fit=crop",
    benefits: ["Inventory Management", "Warehousing Solutions", "Logistics Optimization", "Last-Mile Delivery"],
    stats: { clients: "300+", regions: "10+", success: "98%" }
  },
  "quality-inspection": {
    title: "Quality Inspection",
    description: "On-site verification and compliance checks to maintain strict international standards.",
    longDescription: "Quality is non-negotiable. Our inspection services provide peace of mind by verifying that products meet your exact specifications before they leave the factory. We perform pre-shipment inspections, laboratory testing, and factory audits to ensure absolute compliance with international standards.",
    icon: <FileCheck className="w-12 h-12 text-secondary" />,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop",
    benefits: ["Pre-Shipment Inspection", "Lab Testing", "Factory Audits", "Compliance Certification"],
    stats: { clients: "180+", regions: "12+", success: "99.5%" }
  },
  "trade-consulting": {
    title: "Trade Consulting",
    description: "Strategic advisory on market entry, tariffs, and international trade regulations.",
    longDescription: "Unlock new markets with expert guidance. Our trade consultants provide strategic advice on market entry strategies, tariff optimization, and regulatory compliance. We help you navigate the complexities of global trade to minimize risk and maximize profitability.",
    icon: <Briefcase className="w-12 h-12 text-secondary" />,
    image: "https://images.unsplash.com/photo-1454165833767-1306d54c1471?q=80&w=2670&auto=format&fit=crop",
    benefits: ["Market Entry Strategy", "Tariff Optimization", "Regulatory Analysis", "Risk Management"],
    stats: { clients: "120+", regions: "25+", success: "100%" }
  },
  "import-trading": {
    title: "Import & Trading",
    description: "Direct procurement and distribution of high-demand global commodities and finished goods.",
    longDescription: "We facilitate the import and trading of high-demand commodities and finished goods across diverse industries. By managing the complete loop from sourcing to final distribution, we ensure a seamless flow of goods into your target markets.",
    icon: <Box className="w-12 h-12 text-secondary" />,
    image: "https://images.unsplash.com/photo-1574635648815-325251aff90f?q=80&w=2670&auto=format&fit=crop",
    benefits: ["Commodity Sourcing", "Distribution Networks", "Market Intelligence", "Import Licensing"],
    stats: { clients: "250+", regions: "18+", success: "99%" }
  }
};

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = servicesData[slug as keyof typeof servicesData];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <h1 className="text-2xl font-sans font-bold">Service Not Found</h1>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/60 backdrop-blur-[2px]" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center space-x-2 mb-6 px-4 py-2 rounded-full bg-white/10 border border-white/20 glass text-white text-xs font-bold uppercase tracking-widest">
              {service.icon}
              <span className="ml-2">Our Expertise</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-sans font-black text-white mb-6 leading-tight">
              {service.title}
            </h1>
            <p className="text-xl text-white/80 font-sans max-w-2xl leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-sans font-black text-primary mb-8 underline decoration-secondary decoration-4 underline-offset-8">
                Comprehensive Solutions
              </h2>
              <p className="text-slate-600 font-sans text-lg mb-12 leading-relaxed whitespace-pre-line">
                {service.longDescription}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start space-x-3 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <CheckCircle2 className="w-6 h-6 text-secondary shrink-0" />
                    <span className="font-sans font-bold text-slate-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-card rounded-[3rem] p-12 shadow-3d border border-border sticky top-32">
                <h3 className="text-2xl font-sans font-black text-primary mb-8">Service Metrics</h3>
                <div className="grid grid-cols-1 gap-8">
                  <div className="flex items-center justify-between p-6 rounded-2xl bg-primary/5">
                    <div>
                      <p className="text-slate-500 text-xs font-black uppercase tracking-widest mb-1">Global Reach</p>
                      <p className="text-3xl font-sans font-black text-primary">{service.stats.regions}</p>
                    </div>
                    <Globe className="w-10 h-10 text-secondary opacity-50" />
                  </div>
                  <div className="flex items-center justify-between p-6 rounded-2xl bg-primary/5">
                    <div>
                      <p className="text-slate-500 text-xs font-black uppercase tracking-widest mb-1">Active Partners</p>
                      <p className="text-3xl font-sans font-black text-primary">{service.stats.clients}</p>
                    </div>
                    <Briefcase className="w-10 h-10 text-secondary opacity-50" />
                  </div>
                  <div className="flex items-center justify-between p-6 rounded-2xl bg-primary/5">
                    <div>
                      <p className="text-slate-500 text-xs font-black uppercase tracking-widest mb-1">Fulfillment Rate</p>
                      <p className="text-3xl font-sans font-black text-primary">{service.stats.success}</p>
                    </div>
                    <CheckCircle2 className="w-10 h-10 text-secondary opacity-50" />
                  </div>
                </div>
                
                <Button className="w-full mt-12 bg-primary hover:bg-primary/90 text-white font-sans font-bold h-16 rounded-2xl shadow-lg">
                  Request Service Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* High Impact Visual Section */}
      <section className="py-24 bg-primary text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="relative z-10 flex flex-col items-center text-center">
            <h2 className="text-4xl md:text-6xl font-sans font-black mb-8 max-w-4xl">
              Empowering Your Global Commercial Strategy
            </h2>
            <p className="text-xl text-white/70 font-sans max-w-2xl mb-12">
              Our {service.title} expertise is designed to minimize risk and maximize operational efficiency across all touchpoints.
            </p>
            <div className="w-full max-w-5xl aspect-video rounded-[3rem] overflow-hidden shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=2670&auto=format&fit=crop" 
                alt="Logistics background" 
                className="w-full h-full object-cover opacity-50"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="glass p-8 rounded-full border border-white/20">
                  <div className="p-4 rounded-full bg-secondary">
                    <ArrowRight className="w-10 h-10 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary-foreground/10 rounded-full blur-[120px] pointer-events-none" />
        </div>
      </section>
    </div>
  );
}
