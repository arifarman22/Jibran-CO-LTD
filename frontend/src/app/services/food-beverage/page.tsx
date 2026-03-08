"use client";

import { ArrowRight, CheckCircle, Phone, Mail, Truck, Shield, Globe, Award, Factory, Users, Clock, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FoodBeveragePage() {
  const services = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Product Sourcing",
      description: "Strategic sourcing of premium food and beverage products from certified suppliers across 40+ countries with quality assurance."
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Cold Chain Logistics",
      description: "Temperature-controlled storage and transportation networks ensuring product integrity from origin to destination."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Quality Assurance & Safety",
      description: "Comprehensive HACCP-certified quality control systems and food safety protocols meeting international standards."
    },
    {
      icon: <Factory className="w-6 h-6" />,
      title: "Supply Chain Optimization",
      description: "End-to-end supply chain management with inventory optimization, demand forecasting, and distribution efficiency."
    }
  ];

  const features = [
    "HACCP and ISO 22000 certified quality systems",
    "Temperature-controlled warehousing facilities",
    "Real-time inventory tracking and management",
    "Regulatory compliance across all markets",
    "Supplier audit and certification programs",
    "Custom packaging and private labeling",
    "Multi-modal transportation networks",
    "24/7 cold chain monitoring systems",
    "Traceability from farm to fork",
    "Emergency response and contingency planning"
  ];

  const stats = [
    { number: "40+", label: "Source Countries", icon: <Globe className="w-6 h-6" /> },
    { number: "500+", label: "Product Lines", icon: <Factory className="w-6 h-6" /> },
    { number: "25", label: "Years Experience", icon: <Award className="w-6 h-6" /> },
    { number: "99.8%", label: "Quality Rating", icon: <Shield className="w-6 h-6" /> }
  ];

  const certifications = [
    "HACCP (Hazard Analysis Critical Control Points)",
    "ISO 22000 Food Safety Management",
    "BRC Global Standard for Food Safety",
    "FDA Registration and Compliance",
    "Halal and Kosher Certifications",
    "Organic Certification (USDA/EU)"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-light mb-6">
              Food & Beverage Distribution Excellence
            </h1>
            <p className="text-xl font-light mb-8 text-green-100 leading-relaxed">
              Leading international sourcing and distribution solutions for large-scale food and beverage operations. 
              We ensure the highest quality products reach global markets through our comprehensive supply chain 
              networks, advanced cold storage facilities, and rigorous quality control systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg">
                View Solutions
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg">
                Request Catalog
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4 text-green-600">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">Comprehensive F&B Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From farm to table, we manage every aspect of the food and beverage supply chain with precision, 
              ensuring quality, safety, and efficiency at every step of the process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6 text-green-600">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Content Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8">Industry-Leading F&B Expertise</h2>
              <div className="prose prose-lg text-gray-600 mb-10">
                <p className="mb-6 text-lg leading-relaxed">
                  With over 25 years of excellence in food and beverage distribution, Jibran C. Ltd has become 
                  the trusted partner for major retailers, restaurants, and food service companies worldwide. 
                  Our comprehensive understanding of global food markets, combined with state-of-the-art logistics 
                  infrastructure, ensures reliable supply chain solutions.
                </p>
                <p className="mb-6 text-lg leading-relaxed">
                  We specialize in sourcing premium products from certified suppliers across 40+ countries, 
                  maintaining the highest standards of quality and safety throughout the entire supply chain. 
                  Our advanced cold storage facilities and temperature-controlled transportation networks preserve 
                  product integrity from origin to final destination.
                </p>
                <p className="text-lg leading-relaxed">
                  From exotic tropical fruits to specialty gourmet ingredients, organic produce to processed foods, 
                  we handle diverse product categories with expertise in regulatory compliance, customs clearance, 
                  and market-specific requirements across different regions.
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
                  <Shield className="w-7 h-7 text-green-500" />
                  <h3 className="text-xl font-semibold text-gray-900">Food Safety Excellence</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our commitment to food safety is unwavering, with comprehensive certification programs 
                  and rigorous quality control measures at every stage of the supply chain.
                </p>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-600">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <Truck className="w-7 h-7 text-blue-500" />
                  <h3 className="text-xl font-semibold text-gray-900">Advanced Logistics Network</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  State-of-the-art cold chain infrastructure ensures product quality and extends shelf life 
                  throughout the distribution process.
                </p>
                <ul className="text-gray-600 space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Temperature-controlled warehouses in key locations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Real-time temperature monitoring and alerts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Specialized refrigerated transportation fleet</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>GPS tracking and delivery optimization</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <Target className="w-7 h-7 text-purple-500" />
                  <h3 className="text-xl font-semibold text-gray-900">Market Specialization</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Deep expertise across diverse food and beverage categories with specialized handling 
                  requirements and market knowledge.
                </p>
                <ul className="text-gray-600 space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>Fresh produce and exotic fruits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>Frozen and processed foods</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>Beverages and liquid products</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>Specialty and gourmet ingredients</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">Our Supply Chain Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A systematic approach ensuring quality, safety, and efficiency from source to destination 
              with full traceability and compliance at every step.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { 
                step: "01", 
                title: "Source & Audit", 
                desc: "Identify and certify suppliers with rigorous quality audits and compliance verification",
                icon: <Globe className="w-6 h-6" />
              },
              { 
                step: "02", 
                title: "Quality Control", 
                desc: "Comprehensive testing and inspection at origin with documentation and certification",
                icon: <Shield className="w-6 h-6" />
              },
              { 
                step: "03", 
                title: "Cold Chain Logistics", 
                desc: "Temperature-controlled storage and transportation with real-time monitoring",
                icon: <Truck className="w-6 h-6" />
              },
              { 
                step: "04", 
                title: "Delivery & Support", 
                desc: "Final delivery with quality verification and ongoing customer support services",
                icon: <Users className="w-6 h-6" />
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6 shadow-lg">
                  {process.step}
                </div>
                <div className="flex justify-center mb-4 text-green-600">
                  {process.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600 leading-relaxed">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-green-600 text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">Scale Your F&B Business with Confidence</h2>
          <p className="text-xl font-light mb-10 text-green-100 leading-relaxed">
            Partner with us for reliable, efficient, and safe food and beverage distribution solutions. 
            Our expertise ensures your products reach markets worldwide with quality and integrity intact.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-green-600 hover:bg-gray-100 px-10 py-4 text-lg flex items-center gap-3">
                <Phone className="w-5 h-5" />
                Discuss Your Needs
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 px-10 py-4 text-lg flex items-center gap-3">
                <Mail className="w-5 h-5" />
                Request Product Catalog
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}