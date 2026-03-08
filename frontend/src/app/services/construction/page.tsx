"use client";

import { ArrowRight, CheckCircle, Phone, Mail, HardHat, Building, Wrench, Award, Shield, Users, Clock, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ConstructionPage() {
  const services = [
    {
      icon: <Building className="w-6 h-6" />,
      title: "Infrastructure Development",
      description: "Large-scale infrastructure projects including roads, bridges, utilities, and public facilities with advanced engineering solutions."
    },
    {
      icon: <HardHat className="w-6 h-6" />,
      title: "Industrial Construction",
      description: "Manufacturing facilities, warehouses, and industrial complexes designed for operational efficiency and safety compliance."
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Engineering Services",
      description: "Comprehensive engineering design, structural analysis, and technical consulting for complex construction projects."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Project Management",
      description: "End-to-end construction project management with focus on quality, timeline adherence, and budget optimization."
    }
  ];

  const features = [
    "Advanced construction methodologies and techniques",
    "Safety-first approach with zero-accident record",
    "Sustainable construction and green building practices",
    "Quality assurance and control systems",
    "Experienced project management teams",
    "State-of-the-art equipment and machinery",
    "Regulatory compliance and permit management",
    "Cost optimization and value engineering",
    "Timeline management and delivery assurance",
    "Post-construction support and maintenance"
  ];

  const stats = [
    { number: "$5B+", label: "Projects Completed", icon: <Building className="w-6 h-6" /> },
    { number: "300+", label: "Successful Projects", icon: <HardHat className="w-6 h-6" /> },
    { number: "28", label: "Years Excellence", icon: <Award className="w-6 h-6" /> },
    { number: "100%", label: "Safety Record", icon: <Shield className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-light mb-6">
              Infrastructure & Construction Excellence
            </h1>
            <p className="text-xl font-light mb-8 text-orange-100 leading-relaxed">
              Building the foundation for tomorrow through advanced engineering and construction expertise. 
              We deliver complex infrastructure projects and industrial facilities that drive economic growth 
              and community development with uncompromising quality and safety standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg">
                View Projects
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg">
                Project Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4 text-orange-600">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">Construction & Engineering Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive construction solutions from initial design through project completion, 
              delivering infrastructure that stands the test of time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6 text-orange-600">
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
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8">Construction Excellence Since 1996</h2>
              <div className="prose prose-lg text-gray-600 mb-10">
                <p className="mb-6 text-lg leading-relaxed">
                  For nearly three decades, Jibran C. Ltd has been at the forefront of construction and 
                  infrastructure development, delivering over $5 billion worth of projects across diverse 
                  sectors. Our expertise spans from complex industrial facilities to critical infrastructure 
                  that supports economic growth and community development.
                </p>
                <p className="mb-6 text-lg leading-relaxed">
                  We pride ourselves on our perfect safety record, innovative construction methodologies, 
                  and commitment to sustainable building practices. Our experienced teams combine traditional 
                  craftsmanship with cutting-edge technology to deliver projects that exceed expectations 
                  in quality, durability, and performance.
                </p>
                <p className="text-lg leading-relaxed">
                  From concept to completion, we manage every aspect of the construction process with 
                  meticulous attention to detail, ensuring projects are delivered on time, within budget, 
                  and to the highest standards of quality and safety.
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
                  <Shield className="w-7 h-7 text-orange-500" />
                  <h3 className="text-xl font-semibold text-gray-900">Safety Excellence</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Uncompromising commitment to safety with comprehensive protocols and training programs 
                  that have resulted in zero accidents across all projects.
                </p>
                <ul className="text-gray-600 space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>OSHA-compliant safety management systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Regular safety training and certification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Advanced safety equipment and monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Emergency response and incident prevention</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-7 h-7 text-blue-500" />
                  <h3 className="text-xl font-semibold text-gray-900">Project Delivery</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Proven track record of on-time project delivery through effective planning, 
                  resource management, and proactive problem-solving.
                </p>
                <ul className="text-gray-600 space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>98% on-time completion rate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Advanced project scheduling and tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Resource optimization and logistics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Quality control and milestone management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-orange-600 text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">Build Your Vision with Confidence</h2>
          <p className="text-xl font-light mb-10 text-orange-100 leading-relaxed">
            Partner with us for your next construction project and benefit from our decades of experience, 
            proven methodologies, and unwavering commitment to excellence and safety.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-orange-600 hover:bg-gray-100 px-10 py-4 text-lg flex items-center gap-3">
                <Phone className="w-5 h-5" />
                Project Consultation
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 px-10 py-4 text-lg flex items-center gap-3">
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