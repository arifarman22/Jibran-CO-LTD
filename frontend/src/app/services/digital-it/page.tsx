"use client";

import { ArrowRight, CheckCircle, Phone, Mail, Monitor, Code, Cloud, Shield, Smartphone, Database, Cpu, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DigitalITPage() {
  const services = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Software Development",
      description: "Custom software solutions, web applications, and mobile apps built with cutting-edge technologies and best practices."
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud Solutions",
      description: "Cloud migration, infrastructure management, and scalable cloud-native applications for modern businesses."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Cybersecurity",
      description: "Comprehensive cybersecurity solutions including threat assessment, security implementation, and ongoing monitoring."
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Analytics",
      description: "Business intelligence, data visualization, and advanced analytics to drive informed decision-making and growth."
    }
  ];

  const features = [
    "Full-stack web and mobile application development",
    "Cloud infrastructure design and migration services",
    "Enterprise software integration and automation",
    "Cybersecurity assessment and implementation",
    "Data analytics and business intelligence solutions",
    "Digital transformation consulting and strategy",
    "24/7 technical support and maintenance services",
    "Agile development methodologies and DevOps practices",
    "API development and third-party integrations",
    "Quality assurance and automated testing frameworks"
  ];

  const stats = [
    { number: "500+", label: "Projects Delivered", icon: <Monitor className="w-6 h-6" /> },
    { number: "150+", label: "Enterprise Clients", icon: <Cpu className="w-6 h-6" /> },
    { number: "12", label: "Years Innovation", icon: <Zap className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime Guarantee", icon: <Shield className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-cyan-600 to-cyan-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-light mb-6">
              Digital Technology & IT Solutions
            </h1>
            <p className="text-xl font-light mb-8 text-cyan-100 leading-relaxed">
              Empowering businesses through innovative technology solutions and digital transformation. 
              We deliver cutting-edge software development, cloud infrastructure, cybersecurity, and 
              data analytics services that drive growth and operational excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 text-lg">
                View Solutions
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-4 text-lg">
                Technology Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4 text-cyan-600">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-cyan-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">Technology Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive IT solutions designed to accelerate digital transformation and 
              drive business innovation through technology excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-cyan-100 rounded-xl flex items-center justify-center mb-6 text-cyan-600">
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
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8">Technology Innovation Excellence</h2>
              <div className="prose prose-lg text-gray-600 mb-10">
                <p className="mb-6 text-lg leading-relaxed">
                  With 12 years of innovation in digital technology, Jibran C. Ltd has delivered 500+ successful 
                  projects for 150+ enterprise clients worldwide. Our expertise spans modern software development, 
                  cloud infrastructure, cybersecurity, and data analytics solutions that transform businesses 
                  and drive competitive advantage.
                </p>
                <p className="mb-6 text-lg leading-relaxed">
                  We specialize in end-to-end digital transformation, helping organizations modernize their 
                  technology infrastructure, streamline operations, and unlock new opportunities through 
                  innovative solutions. Our agile development approach ensures rapid delivery while 
                  maintaining the highest standards of quality and security.
                </p>
                <p className="text-lg leading-relaxed">
                  Our commitment to excellence is reflected in our 99.9% uptime guarantee, comprehensive 
                  support services, and long-term partnerships with clients who trust us to power their 
                  digital future with reliable, scalable, and secure technology solutions.
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
                  <Code className="w-7 h-7 text-cyan-500" />
                  <h3 className="text-xl font-semibold text-gray-900">Development Expertise</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Cutting-edge development technologies and frameworks for building 
                  scalable, secure, and high-performance applications.
                </p>
                <ul className="text-gray-600 space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>React, Angular, Vue.js frontend frameworks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>Node.js, Python, Java backend development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>iOS and Android mobile app development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>Microservices and API-first architecture</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <Cloud className="w-7 h-7 text-blue-500" />
                  <h3 className="text-xl font-semibold text-gray-900">Cloud Infrastructure</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Enterprise-grade cloud solutions with focus on scalability, 
                  security, and cost optimization across major cloud platforms.
                </p>
                <ul className="text-gray-600 space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>AWS, Azure, Google Cloud Platform expertise</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Kubernetes and Docker containerization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Infrastructure as Code (IaC) implementation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>DevOps and CI/CD pipeline automation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cyan-600 text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">Transform Your Business with Technology</h2>
          <p className="text-xl font-light mb-10 text-cyan-100 leading-relaxed">
            Partner with us to accelerate your digital transformation journey and unlock new opportunities 
            through innovative technology solutions that drive growth and competitive advantage.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-cyan-600 hover:bg-gray-100 px-10 py-4 text-lg flex items-center gap-3">
                <Phone className="w-5 h-5" />
                Technology Consultation
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-cyan-600 px-10 py-4 text-lg flex items-center gap-3">
                <Mail className="w-5 h-5" />
                Project Discussion
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}