"use client";

import { ArrowRight, CheckCircle, Phone, Mail, Briefcase, TrendingUp, Target, Users, Award, Shield, BarChart, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function BusinessConsultingPage() {
  const services = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Strategic Planning",
      description: "Comprehensive business strategy development, market analysis, and growth planning for sustainable success."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Operational Excellence",
      description: "Process optimization, efficiency improvement, and operational restructuring to maximize performance."
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Financial Advisory",
      description: "Financial planning, investment strategies, and risk management for optimal business performance."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation Consulting",
      description: "Digital transformation, technology adoption, and innovation strategies for competitive advantage."
    }
  ];

  const features = [
    "Strategic business planning and market analysis",
    "Operational efficiency and process optimization",
    "Financial planning and investment advisory",
    "Digital transformation and technology adoption",
    "Change management and organizational development",
    "Risk assessment and mitigation strategies",
    "Performance measurement and KPI development",
    "Market entry and expansion strategies",
    "Merger and acquisition advisory services",
    "Leadership development and training programs"
  ];

  const stats = [
    { number: "300+", label: "Clients Served", icon: <Users className="w-6 h-6" /> },
    { number: "85%", label: "Growth Achieved", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "18", label: "Years Experience", icon: <Award className="w-6 h-6" /> },
    { number: "95%", label: "Client Satisfaction", icon: <Shield className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-gray-700 to-gray-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-light mb-6">
              Strategic Business Consulting
            </h1>
            <p className="text-xl font-light mb-8 text-gray-200 leading-relaxed">
              Empowering businesses to achieve sustainable growth through strategic advisory, operational excellence, 
              and innovative solutions. We partner with organizations to unlock their potential and drive 
              transformational change that delivers measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-gray-800 hover:bg-gray-100 px-8 py-4 text-lg">
                Get Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 text-lg">
                Business Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4 text-gray-700">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-700 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-6 text-gray-700">
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
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8">Business Advisory Excellence</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With 18 years of consulting excellence, we have helped 300+ businesses achieve sustainable growth 
                and operational excellence. Our strategic approach combines industry expertise with proven methodologies 
                to deliver transformational results.
              </p>
              
              <div className="grid grid-cols-1 gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-medium text-gray-900 mb-6">Our Approach</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Strategic Analysis</h4>
                  <p className="text-gray-600 text-sm">Comprehensive business assessment and strategic planning</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Implementation Support</h4>
                  <p className="text-gray-600 text-sm">Hands-on guidance and change management</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Performance Monitoring</h4>
                  <p className="text-gray-600 text-sm">Ongoing measurement and optimization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-800 text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">Transform Your Business Strategy</h2>
          <p className="text-xl font-light mb-10 text-gray-300 leading-relaxed">
            Partner with our experienced consultants to unlock your business potential and achieve 
            sustainable growth through strategic planning and operational excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-gray-800 hover:bg-gray-100 px-10 py-4 text-lg flex items-center gap-3">
                <Phone className="w-5 h-5" />
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}