"use client";

import { ArrowRight, CheckCircle, Phone, Mail, Heart, Users, Leaf, GraduationCap, Award, Shield, Globe, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CSRCommunityPage() {
  const services = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Community Development",
      description: "Sustainable community development programs that improve quality of life and create lasting positive impact."
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Education Initiatives",
      description: "Educational programs and scholarship opportunities that empower individuals and strengthen communities."
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Environmental Conservation",
      description: "Environmental protection and sustainability initiatives that preserve natural resources for future generations."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Social Welfare Programs",
      description: "Comprehensive social welfare initiatives addressing healthcare, poverty alleviation, and social justice."
    }
  ];

  const features = [
    "Community-driven development programs",
    "Educational scholarships and skill development",
    "Environmental conservation and sustainability projects",
    "Healthcare and wellness initiatives",
    "Poverty alleviation and economic empowerment",
    "Disaster relief and emergency response",
    "Youth development and mentorship programs",
    "Women's empowerment and gender equality",
    "Infrastructure development for underserved areas",
    "Partnerships with local and international NGOs"
  ];

  const stats = [
    { number: "100,000+", label: "Lives Impacted", icon: <Users className="w-6 h-6" /> },
    { number: "50+", label: "Communities Served", icon: <Globe className="w-6 h-6" /> },
    { number: "20", label: "Years Commitment", icon: <Award className="w-6 h-6" /> },
    { number: "$5M+", label: "Investment Made", icon: <TrendingUp className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-pink-600 to-pink-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-light mb-6">
              Corporate Social Responsibility & Community Impact
            </h1>
            <p className="text-xl font-light mb-8 text-pink-100 leading-relaxed">
              Creating meaningful change through comprehensive social responsibility initiatives and community 
              development programs. We believe in giving back and making a positive impact that transforms 
              lives and strengthens communities for sustainable development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-4 text-lg">
                Our Impact
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-pink-600 px-8 py-4 text-lg">
                Partnership Opportunities
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4 text-pink-600">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-pink-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">Social Impact Initiatives</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive social responsibility programs designed to create lasting positive change 
              and sustainable development in communities worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center mb-6 text-pink-600">
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
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8">20 Years of Social Impact</h2>
              <div className="prose prose-lg text-gray-600 mb-10">
                <p className="mb-6 text-lg leading-relaxed">
                  For two decades, Jibran C. Ltd has been committed to creating positive social impact through 
                  comprehensive CSR initiatives and community development programs. We have invested over $5 million 
                  in social causes, impacting 100,000+ lives across 50+ communities worldwide.
                </p>
                <p className="mb-6 text-lg leading-relaxed">
                  Our approach to corporate social responsibility goes beyond traditional philanthropy. We focus 
                  on sustainable development programs that address root causes of social challenges, empower 
                  communities, and create lasting change that benefits current and future generations.
                </p>
                <p className="text-lg leading-relaxed">
                  Through strategic partnerships with local and international organizations, we implement programs 
                  that align with the United Nations Sustainable Development Goals, ensuring our initiatives 
                  contribute to global efforts for a better, more equitable world.
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
                  <Heart className="w-7 h-7 text-pink-500" />
                  <h3 className="text-xl font-semibold text-gray-900">Community Impact</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Direct community engagement and development programs that address 
                  local needs and create sustainable positive change.
                </p>
                <ul className="text-gray-600 space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 mt-1">•</span>
                    <span>Clean water and sanitation projects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 mt-1">•</span>
                    <span>Healthcare clinics and medical outreach</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 mt-1">•</span>
                    <span>Educational infrastructure development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 mt-1">•</span>
                    <span>Microfinance and economic empowerment</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <Leaf className="w-7 h-7 text-green-500" />
                  <h3 className="text-xl font-semibold text-gray-900">Environmental Stewardship</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Environmental conservation initiatives that protect natural resources 
                  and promote sustainable practices for future generations.
                </p>
                <ul className="text-gray-600 space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Reforestation and biodiversity conservation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Renewable energy and clean technology</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Waste reduction and recycling programs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Climate change mitigation initiatives</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-pink-600 text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">Join Our Mission for Positive Change</h2>
          <p className="text-xl font-light mb-10 text-pink-100 leading-relaxed">
            Partner with us to create meaningful social impact and contribute to sustainable development 
            that transforms communities and builds a better future for all.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-pink-600 hover:bg-gray-100 px-10 py-4 text-lg flex items-center gap-3">
                <Phone className="w-5 h-5" />
                Partnership Inquiry
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-pink-600 px-10 py-4 text-lg flex items-center gap-3">
                <Mail className="w-5 h-5" />
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}