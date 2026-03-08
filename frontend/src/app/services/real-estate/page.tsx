"use client";

import { ArrowRight, CheckCircle, Phone, Mail, Building2, TrendingUp, MapPin, Award, Target, Shield, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function RealEstatePage() {
  const services = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Commercial Development",
      description: "Strategic development of office buildings, retail centers, and mixed-use properties in prime locations with high growth potential."
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Residential Projects",
      description: "Luxury residential developments and housing communities designed for modern living with premium amenities and infrastructure."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Investment Management",
      description: "Comprehensive property portfolio management and investment advisory services for maximum returns and risk mitigation."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Market Analysis",
      description: "In-depth market research, feasibility studies, and investment analysis for informed real estate decision making."
    }
  ];

  const features = [
    "Prime location identification and acquisition",
    "Comprehensive feasibility studies and analysis",
    "Architectural design and planning coordination",
    "Construction project management and oversight",
    "Regulatory compliance and permit acquisition",
    "Marketing and sales strategy development",
    "Property management and maintenance services",
    "Investment portfolio optimization",
    "Market trend analysis and forecasting",
    "Risk assessment and mitigation strategies"
  ];

  const stats = [
    { number: "$2.5B+", label: "Projects Developed", icon: <Building2 className="w-6 h-6" /> },
    { number: "150+", label: "Properties Managed", icon: <MapPin className="w-6 h-6" /> },
    { number: "22", label: "Years Experience", icon: <Award className="w-6 h-6" /> },
    { number: "18%", label: "Average ROI", icon: <TrendingUp className="w-6 h-6" /> }
  ];

  const projectTypes = [
    "Luxury residential towers and communities",
    "Commercial office buildings and complexes",
    "Mixed-use developments with retail integration",
    "Industrial and logistics facilities",
    "Hospitality and resort properties",
    "Healthcare and educational facilities"
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-light mb-6">
              Strategic Real Estate Development
            </h1>
            <p className="text-xl font-light mb-8 text-indigo-100 leading-relaxed">
              Creating landmark properties and investment opportunities through strategic development, 
              expert market analysis, and comprehensive project management. We transform prime locations 
              into profitable real estate assets that deliver exceptional returns and lasting value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 text-lg">
                View Portfolio
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-4 text-lg">
                Investment Opportunities
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4 text-indigo-600">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-indigo-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">Real Estate Development Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From initial site selection to project completion and beyond, we provide comprehensive 
              real estate development services that maximize value and minimize risk.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-6 text-indigo-600">
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
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8">Real Estate Development Expertise</h2>
              <div className="prose prose-lg text-gray-600 mb-10">
                <p className="mb-6 text-lg leading-relaxed">
                  With over 22 years of excellence in real estate development, Jibran C. Ltd has successfully 
                  delivered $2.5+ billion worth of projects across diverse property types and markets. Our 
                  comprehensive approach combines market intelligence, strategic planning, and expert execution 
                  to create exceptional real estate assets.
                </p>
                <p className="mb-6 text-lg leading-relaxed">
                  We specialize in identifying prime development opportunities, conducting thorough feasibility 
                  studies, and managing complex projects from conception to completion. Our portfolio spans 
                  luxury residential developments, commercial office buildings, mixed-use complexes, and 
                  specialized facilities across key markets.
                </p>
                <p className="text-lg leading-relaxed">
                  Our commitment to quality, innovation, and sustainability has earned us recognition as a 
                  leading developer, with projects that consistently deliver superior returns while contributing 
                  positively to their communities and environments.
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
                  <Target className="w-7 h-7 text-indigo-500" />
                  <h3 className="text-xl font-semibold text-gray-900">Project Types</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Diverse portfolio of development projects across multiple property types 
                  and market segments with proven track record of success.
                </p>
                <div className="space-y-3">
                  {projectTypes.map((type, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="text-indigo-500 mt-1">•</span>
                      <span className="text-gray-600">{type}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-7 h-7 text-green-500" />
                  <h3 className="text-xl font-semibold text-gray-900">Risk Management</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Comprehensive risk assessment and mitigation strategies to protect investments 
                  and ensure project success throughout the development lifecycle.
                </p>
                <ul className="text-gray-600 space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Market analysis and demand forecasting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Financial modeling and stress testing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Regulatory compliance and legal review</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Construction and delivery risk mitigation</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <TrendingUp className="w-7 h-7 text-blue-500" />
                  <h3 className="text-xl font-semibold text-gray-900">Investment Returns</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Proven track record of delivering superior investment returns through strategic 
                  development and expert market positioning.
                </p>
                <ul className="text-gray-600 space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>18% average return on investment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>95% project completion rate on time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>98% client satisfaction rating</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Zero project failures in 22 years</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-indigo-600 text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">Invest in Prime Real Estate Opportunities</h2>
          <p className="text-xl font-light mb-10 text-indigo-100 leading-relaxed">
            Partner with us to access exclusive development opportunities and benefit from our proven expertise 
            in creating exceptional real estate assets that deliver superior returns.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-indigo-600 hover:bg-gray-100 px-10 py-4 text-lg flex items-center gap-3">
                <Phone className="w-5 h-5" />
                Discuss Opportunities
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-600 px-10 py-4 text-lg flex items-center gap-3">
                <Mail className="w-5 h-5" />
                Investment Inquiry
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}