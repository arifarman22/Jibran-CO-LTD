"use client";

import { ArrowRight, CheckCircle, Phone, Mail, Hotel, Star, Users, Award, Crown, Shield, Clock, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HospitalityPage() {
  const services = [
    {
      icon: <Hotel className="w-6 h-6" />,
      title: "Luxury Resort Management",
      description: "Complete operational management of premium resorts and luxury properties with focus on guest satisfaction and revenue optimization."
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Guest Experience Excellence",
      description: "Personalized service programs and guest journey optimization to create memorable experiences that exceed expectations."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Staff Training & Development",
      description: "Comprehensive hospitality training programs and professional development initiatives for service excellence."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Revenue Management",
      description: "Strategic pricing, yield management, and revenue optimization through data-driven insights and market analysis."
    }
  ];

  const features = [
    "5-star luxury property management expertise",
    "Guest satisfaction scores above 95%",
    "Revenue optimization and yield management",
    "Multilingual concierge services",
    "Staff training and certification programs",
    "Brand standards compliance and auditing",
    "Digital guest experience platforms",
    "Sustainable hospitality practices",
    "Event and conference management",
    "Food & beverage operations excellence"
  ];

  const stats = [
    { number: "50+", label: "Properties Managed", icon: <Hotel className="w-6 h-6" /> },
    { number: "2M+", label: "Guest Experiences", icon: <Users className="w-6 h-6" /> },
    { number: "20", label: "Years Excellence", icon: <Award className="w-6 h-6" /> },
    { number: "96.8%", label: "Guest Satisfaction", icon: <Star className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-amber-600 to-amber-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-light mb-6">
              Luxury Hospitality Management
            </h1>
            <p className="text-xl font-light mb-8 text-amber-100 leading-relaxed">
              Elevating hospitality standards through premium resort management and exceptional guest experiences. 
              We deliver world-class hospitality services that create lasting memories while maximizing operational 
              efficiency and revenue performance for luxury properties worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 text-lg">
                View Properties
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-amber-600 px-8 py-4 text-lg">
                Partnership Inquiry
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4 text-amber-600">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-amber-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">Hospitality Excellence Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive hospitality management solutions designed to enhance guest experiences 
              while optimizing operational performance and profitability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6 text-amber-600">
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
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8">Hospitality Management Expertise</h2>
              <div className="prose prose-lg text-gray-600 mb-10">
                <p className="mb-6 text-lg leading-relaxed">
                  With two decades of excellence in luxury hospitality management, Jibran C. Ltd has established 
                  itself as the premier choice for discerning property owners seeking exceptional operational results. 
                  Our comprehensive approach combines traditional hospitality values with modern operational efficiency.
                </p>
                <p className="mb-6 text-lg leading-relaxed">
                  We specialize in managing luxury resorts, boutique hotels, and premium hospitality properties 
                  across diverse markets. Our expertise spans all aspects of hospitality operations, from guest 
                  services and revenue management to staff development and brand compliance.
                </p>
                <p className="text-lg leading-relaxed">
                  Our commitment to excellence is reflected in consistently high guest satisfaction scores, 
                  optimal revenue performance, and industry recognition for service quality and operational innovation.
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
                  <Crown className="w-7 h-7 text-amber-500" />
                  <h3 className="text-xl font-semibold text-gray-900">Luxury Standards</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Maintaining the highest standards of luxury hospitality with attention to every detail 
                  that creates exceptional guest experiences.
                </p>
                <ul className="text-gray-600 space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">•</span>
                    <span>Personalized guest recognition programs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">•</span>
                    <span>Exclusive amenities and services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">•</span>
                    <span>Premium dining and spa experiences</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">•</span>
                    <span>Concierge and lifestyle services</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <TrendingUp className="w-7 h-7 text-green-500" />
                  <h3 className="text-xl font-semibold text-gray-900">Revenue Optimization</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Strategic revenue management and operational efficiency programs that maximize 
                  profitability while maintaining service excellence.
                </p>
                <ul className="text-gray-600 space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Dynamic pricing and yield management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Cost optimization and efficiency programs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Revenue diversification strategies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Performance analytics and reporting</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-amber-600 text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">Elevate Your Hospitality Business</h2>
          <p className="text-xl font-light mb-10 text-amber-100 leading-relaxed">
            Partner with us to transform your property into a world-class hospitality destination 
            that delivers exceptional guest experiences and optimal financial performance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-amber-600 hover:bg-gray-100 px-10 py-4 text-lg flex items-center gap-3">
                <Phone className="w-5 h-5" />
                Discuss Partnership
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-amber-600 px-10 py-4 text-lg flex items-center gap-3">
                <Mail className="w-5 h-5" />
                Request Proposal
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}