"use client";

import { ArrowRight, CheckCircle, Phone, Mail, Shirt, Scissors, Package, Award, Globe, Shield, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function GarmentsTextilePage() {
  const services = [
    {
      icon: <Shirt className="w-6 h-6" />,
      title: "Garment Manufacturing",
      description: "High-quality garment production with advanced manufacturing techniques, quality control, and ethical labor practices."
    },
    {
      icon: <Scissors className="w-6 h-6" />,
      title: "Textile Production",
      description: "Premium textile manufacturing from raw materials to finished fabrics with sustainable and innovative processes."
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Private Label Services",
      description: "Complete private label solutions including design, manufacturing, packaging, and branding for global retailers."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Export",
      description: "Worldwide export services with logistics management, quality assurance, and compliance with international standards."
    }
  ];

  const features = [
    "ISO 9001 certified manufacturing facilities",
    "Sustainable and eco-friendly production methods",
    "Advanced quality control and testing systems",
    "Ethical labor practices and fair trade compliance",
    "Custom design and pattern development services",
    "Fast fashion and quick turnaround capabilities",
    "Global supply chain and logistics management",
    "Compliance with international safety standards",
    "Private labeling and branding solutions",
    "Competitive pricing and bulk order discounts"
  ];

  const stats = [
    { number: "5M+", label: "Garments Produced", icon: <Shirt className="w-6 h-6" /> },
    { number: "200+", label: "Global Clients", icon: <Users className="w-6 h-6" /> },
    { number: "25", label: "Years Excellence", icon: <Award className="w-6 h-6" /> },
    { number: "40+", label: "Export Countries", icon: <Globe className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-light mb-6">
              Premium Garments & Textile Manufacturing
            </h1>
            <p className="text-xl font-light mb-8 text-purple-100 leading-relaxed">
              Leading manufacturer of high-quality garments and textiles with 25 years of excellence in 
              precision manufacturing, sustainable practices, and global export. We deliver premium products 
              that meet international standards while maintaining competitive pricing and ethical production.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg">
                View Products
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg">
                Manufacturing Inquiry
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4 text-purple-600">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">Manufacturing Excellence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive garment and textile manufacturing services with focus on quality, 
              sustainability, and global market compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6 text-purple-600">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8">Textile Manufacturing Leadership</h2>
              <div className="prose prose-lg text-gray-600 mb-10">
                <p className="mb-6 text-lg leading-relaxed">
                  For 25 years, Jibran C. Ltd has been at the forefront of garment and textile manufacturing, 
                  producing over 5 million garments annually for 200+ global clients. Our state-of-the-art 
                  facilities combine traditional craftsmanship with modern technology to deliver exceptional 
                  quality products that meet international standards.
                </p>
                <p className="mb-6 text-lg leading-relaxed">
                  We specialize in sustainable manufacturing practices, ethical labor standards, and innovative 
                  production techniques that minimize environmental impact while maximizing quality and efficiency. 
                  Our comprehensive services span from raw material sourcing to finished product delivery.
                </p>
                <p className="text-lg leading-relaxed">
                  Our commitment to excellence has earned us ISO 9001 certification and recognition as a 
                  trusted partner for major fashion brands, retailers, and private label manufacturers worldwide.
                </p>
              </div>
              
              <div className="grid grid-cols-1 gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-7 h-7 text-purple-500" />
                  <h3 className="text-xl font-semibold text-gray-900">Quality Assurance</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Rigorous quality control processes and international certifications ensure 
                  every product meets the highest standards of excellence.
                </p>
                <ul className="text-gray-600 space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>ISO 9001:2015 Quality Management System</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>OEKO-TEX Standard 100 certification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>GOTS (Global Organic Textile Standard)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>WRAP (Worldwide Responsible Accredited Production)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <TrendingUp className="w-7 h-7 text-green-500" />
                  <h3 className="text-xl font-semibold text-gray-900">Production Capabilities</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Advanced manufacturing facilities with capacity to handle large-scale orders 
                  while maintaining flexibility for custom requirements.
                </p>
                <ul className="text-gray-600 space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>500,000+ garments monthly capacity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>15-30 day production turnaround</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Custom design and pattern development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Small to large batch production flexibility</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-purple-600 text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">Partner with Manufacturing Excellence</h2>
          <p className="text-xl font-light mb-10 text-purple-100 leading-relaxed">
            Join our network of satisfied clients and experience the quality, reliability, and innovation 
            that has made us a leader in garment and textile manufacturing for over two decades.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-purple-600 hover:bg-gray-100 px-10 py-4 text-lg flex items-center gap-3">
                <Phone className="w-5 h-5" />
                Manufacturing Quote
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 px-10 py-4 text-lg flex items-center gap-3">
                <Mail className="w-5 h-5" />
                Product Catalog
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}