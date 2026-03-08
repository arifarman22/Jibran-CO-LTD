"use client";

import { ArrowRight, CheckCircle, Phone, Mail, Sprout, Leaf, Sun, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AgriculturePage() {
  const features = [
    "Sustainable farming practices and techniques",
    "Modern irrigation and water management systems",
    "Organic certification and compliance programs",
    "Crop yield optimization and soil health management",
    "Agricultural technology integration and automation",
    "Supply chain management from farm to market",
    "Quality control and food safety protocols",
    "Environmental conservation and biodiversity protection"
  ];

  const stats = [
    { number: "10,000+", label: "Acres Managed", icon: <Sprout className="w-6 h-6" /> },
    { number: "50+", label: "Crop Varieties", icon: <Leaf className="w-6 h-6" /> },
    { number: "15", label: "Years Experience", icon: <Sun className="w-6 h-6" /> },
    { number: "95%", label: "Organic Certified", icon: <Droplets className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-light mb-6">
              Sustainable Agriculture Solutions
            </h1>
            <p className="text-xl font-light mb-8 text-green-100 leading-relaxed">
              Leading sustainable agriculture practices that promote environmental stewardship while maximizing 
              crop yields and profitability. We combine traditional farming wisdom with modern technology 
              to create resilient agricultural systems for the future.
            </p>
            <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg">
              Learn More
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

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

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8">Agricultural Excellence</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our agricultural operations focus on sustainable practices that protect the environment 
                while delivering high-quality produce. We manage over 10,000 acres of farmland using 
                innovative techniques and organic methods.
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

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-medium text-gray-900 mb-6">Our Approach</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Sustainable Practices</h4>
                  <p className="text-gray-600 text-sm">Environmentally responsible farming methods</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Technology Integration</h4>
                  <p className="text-gray-600 text-sm">Modern agricultural technology and automation</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Quality Assurance</h4>
                  <p className="text-gray-600 text-sm">Rigorous quality control and certification</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-600 text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">Partner with Sustainable Agriculture</h2>
          <p className="text-xl font-light mb-10 text-green-100 leading-relaxed">
            Join us in creating a sustainable future through innovative agricultural practices and 
            environmental stewardship that benefits communities and ecosystems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-green-600 hover:bg-gray-100 px-10 py-4 text-lg flex items-center gap-3">
                <Phone className="w-5 h-5" />
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}