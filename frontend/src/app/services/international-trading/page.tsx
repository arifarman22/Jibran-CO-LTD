"use client";

import { ArrowRight, CheckCircle, Phone, Mail, Globe, Ship, FileCheck, TrendingUp, Award, Shield, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function InternationalTradingPage() {
  const services = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Import & Export",
      description: "Comprehensive import and export services connecting businesses to international markets with seamless cross-border trade solutions."
    },
    {
      icon: <Ship className="w-6 h-6" />,
      title: "Logistics & Shipping",
      description: "End-to-end logistics management including freight forwarding, customs clearance, and multi-modal transportation coordination."
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "Trade Documentation",
      description: "Complete trade documentation services, regulatory compliance, and customs brokerage for smooth international transactions."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Market Intelligence",
      description: "Strategic market analysis, trade opportunity identification, and business development support for global expansion."
    }
  ];

  const features = [
    "Import/export operations in 60+ countries",
    "Customs brokerage and clearance services",
    "Multi-modal transportation solutions",
    "Trade finance and payment facilitation",
    "Regulatory compliance and documentation",
    "Market entry and expansion strategies",
    "Supply chain risk management",
    "Quality inspection and verification",
    "Warehousing and distribution networks",
    "24/7 shipment tracking and monitoring"
  ];

  const stats = [
    { number: "60+", label: "Trading Countries", icon: <Globe className="w-6 h-6" /> },
    { number: "$1.2B+", label: "Annual Trade Volume", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "30", label: "Years Experience", icon: <Award className="w-6 h-6" /> },
    { number: "99.5%", label: "Success Rate", icon: <Shield className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-light mb-6">
              International Trading Excellence
            </h1>
            <p className="text-xl font-light mb-8 text-blue-100 leading-relaxed">
              Connecting global markets through comprehensive import, export, and international trading solutions. 
              We facilitate seamless cross-border commerce with expert logistics, regulatory compliance, and 
              strategic market intelligence that drives business growth worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
                Explore Markets
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
                Trade Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4 text-blue-600">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">Global Trading Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive international trade solutions that connect your business to global opportunities 
              with expert guidance and seamless execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-blue-600">
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
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8">Three Decades of Trading Excellence</h2>
              <div className="prose prose-lg text-gray-600 mb-10">
                <p className="mb-6 text-lg leading-relaxed">
                  Since 1994, Jibran C. Ltd has been a trusted partner in international trade, facilitating 
                  over $1.2 billion in annual trade volume across 60+ countries. Our deep understanding of 
                  global markets, regulatory environments, and cultural nuances enables us to navigate 
                  complex international transactions with confidence and expertise.
                </p>
                <p className="mb-6 text-lg leading-relaxed">
                  We specialize in connecting businesses to new markets, optimizing supply chains, and 
                  managing the complexities of international commerce. Our comprehensive services span 
                  from initial market research and entry strategies to ongoing logistics management and 
                  trade finance solutions.
                </p>
                <p className="text-lg leading-relaxed">
                  Our success is built on strong relationships with customs authorities, shipping lines, 
                  financial institutions, and local partners worldwide, ensuring smooth and efficient 
                  trade operations that deliver results for our clients.
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
                  <Globe className="w-7 h-7 text-blue-500" />
                  <h3 className="text-xl font-semibold text-gray-900">Global Reach</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Extensive network spanning major trade routes and emerging markets with 
                  local expertise and established partnerships worldwide.
                </p>
                <ul className="text-gray-600 space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Asia-Pacific: China, Japan, Southeast Asia</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Europe: EU markets and Eastern Europe</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Americas: North and South America</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Middle East & Africa: Emerging markets</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-7 h-7 text-green-500" />
                  <h3 className="text-xl font-semibold text-gray-900">Risk Management</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Comprehensive risk assessment and mitigation strategies to protect your 
                  international trade investments and ensure successful outcomes.
                </p>
                <ul className="text-gray-600 space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Political and economic risk analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Currency hedging and financial protection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Trade credit insurance and guarantees</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Regulatory compliance monitoring</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">Expand Your Global Reach</h2>
          <p className="text-xl font-light mb-10 text-blue-100 leading-relaxed">
            Partner with us to unlock international opportunities and grow your business across global markets 
            with confidence, expertise, and proven results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-4 text-lg flex items-center gap-3">
                <Phone className="w-5 h-5" />
                Trade Consultation
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-10 py-4 text-lg flex items-center gap-3">
                <Mail className="w-5 h-5" />
                Market Analysis
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}