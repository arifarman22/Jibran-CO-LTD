"use client";

import { ArrowRight, CheckCircle, Phone, Mail, MapPin, Users, Calendar, Globe, Star, Shield, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TravelTourismPage() {
  const services = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Destination Management",
      description: "Complete destination planning with local expertise, cultural insights, and exclusive access to unique experiences worldwide."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Corporate Travel Solutions",
      description: "Streamlined business travel management including meeting planning, accommodation booking, and comprehensive expense management."
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Event & Conference Tourism",
      description: "Specialized event planning for international conferences, incentive trips, and corporate retreats with full logistics support."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Multi-Country Tours",
      description: "Seamless international tour packages with visa assistance, cultural guides, and expert coordination across borders."
    }
  ];

  const features = [
    "24/7 multilingual customer support in 12 languages",
    "Partnerships with 500+ premium hotels worldwide",
    "Complete visa and documentation assistance",
    "Comprehensive travel insurance and safety protocols",
    "Personalized itinerary planning and customization",
    "Exclusive group discounts and corporate rates",
    "Emergency assistance and flexible rebooking policies",
    "Authentic cultural and adventure experiences"
  ];

  const stats = [
    { number: "50+", label: "Countries Covered", icon: <Globe className="w-6 h-6" /> },
    { number: "15,000+", label: "Happy Travelers", icon: <Users className="w-6 h-6" /> },
    { number: "18", label: "Years Experience", icon: <Award className="w-6 h-6" /> },
    { number: "99.2%", label: "Customer Satisfaction", icon: <Star className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-light mb-6">
              Travel & Tourism Excellence
            </h1>
            <p className="text-xl font-light mb-8 text-blue-100 leading-relaxed">
              Transform your travel dreams into extraordinary realities with our comprehensive tour operations 
              and travel solutions. We connect you to the world's most remarkable destinations through expertly 
              crafted experiences, seamless logistics, and unparalleled customer service that exceeds expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
                Explore Packages
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
                Custom Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
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

      {/* Services Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">Comprehensive Travel Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From individual leisure travel to large-scale corporate events, we provide end-to-end solutions 
              tailored to your specific needs, preferences, and budget requirements.
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

      {/* Detailed Content Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8">Why Choose Our Travel Services</h2>
              <div className="prose prose-lg text-gray-600 mb-10">
                <p className="mb-6 text-lg leading-relaxed">
                  With over 18 years of excellence in the travel industry, Jibran C. Ltd has established itself 
                  as the premier choice for discerning travelers seeking exceptional experiences. Our deep understanding 
                  of global destinations, combined with strategic local partnerships, ensures every journey is 
                  seamlessly executed and unforgettable.
                </p>
                <p className="mb-6 text-lg leading-relaxed">
                  We specialize in creating bespoke travel experiences that transcend typical tourist attractions. 
                  Our team of certified destination experts collaborates closely with local communities, cultural 
                  institutions, and premium service providers to offer authentic, exclusive, and transformative experiences.
                </p>
                <p className="text-lg leading-relaxed">
                  From adventure expeditions in remote wilderness areas to luxury cultural immersions in historic cities, 
                  we handle every intricate detail with precision and care, allowing you to focus entirely on creating 
                  lasting memories and meaningful connections.
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
                  <Star className="w-7 h-7 text-yellow-500" />
                  <h3 className="text-xl font-semibold text-gray-900">Premium Exclusive Experiences</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Gain access to exclusive venues, private tours, and VIP experiences not available to the general public, 
                  creating truly unique and memorable travel moments.
                </p>
                <ul className="text-gray-600 space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Private museum tours and after-hours exclusive access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Exclusive dining experiences with world-renowned chefs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Access to restricted natural reserves and protected areas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Personal meet-and-greets with local artisans and cultural experts</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-7 h-7 text-blue-500" />
                  <h3 className="text-xl font-semibold text-gray-900">Safety & Security Excellence</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Comprehensive safety protocols and round-the-clock support ensure complete peace of mind 
                  throughout every aspect of your journey, from departure to return.
                </p>
                <ul className="text-gray-600 space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Real-time travel alerts and security updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Comprehensive emergency evacuation insurance coverage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Local emergency contacts and support in every destination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Detailed health and safety briefings and protocols</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <Globe className="w-7 h-7 text-green-500" />
                  <h3 className="text-xl font-semibold text-gray-900">Extensive Global Network</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our extensive worldwide partnerships ensure consistent quality, local expertise, and 
                  preferential treatment in every destination across our global network.
                </p>
                <ul className="text-gray-600 space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>500+ partner hotels, resorts, and luxury accommodations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Certified local guides and experts in 50+ countries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Preferred rates and priority booking with major airlines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Comprehensive ground transportation networks worldwide</span>
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
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">Our Proven Travel Planning Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We follow a systematic, personalized approach to ensure every aspect of your travel experience 
              is perfectly planned, coordinated, and executed to exceed your expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { 
                step: "01", 
                title: "Personal Consultation", 
                desc: "In-depth discussion of your travel preferences, budget, timeline, and specific goals",
                icon: <Users className="w-6 h-6" />
              },
              { 
                step: "02", 
                title: "Custom Planning", 
                desc: "Creating detailed, personalized itineraries with multiple options and backup alternatives",
                icon: <MapPin className="w-6 h-6" />
              },
              { 
                step: "03", 
                title: "Secure Booking", 
                desc: "Confirming all reservations, permits, documentation, and special arrangements",
                icon: <CheckCircle className="w-6 h-6" />
              },
              { 
                step: "04", 
                title: "24/7 Support", 
                desc: "Continuous assistance during travel with local coordination and emergency support",
                icon: <Clock className="w-6 h-6" />
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6 shadow-lg">
                  {process.step}
                </div>
                <div className="flex justify-center mb-4 text-blue-600">
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
      <section className="bg-blue-600 text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">Ready to Begin Your Extraordinary Journey?</h2>
          <p className="text-xl font-light mb-10 text-blue-100 leading-relaxed">
            Contact our expert travel consultants today to start planning your next adventure. 
            We're committed to making your travel dreams a spectacular reality with personalized service and attention to detail.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-4 text-lg flex items-center gap-3">
                <Phone className="w-5 h-5" />
                Speak with Travel Experts
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-10 py-4 text-lg flex items-center gap-3">
                <Mail className="w-5 h-5" />
                Request Custom Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}