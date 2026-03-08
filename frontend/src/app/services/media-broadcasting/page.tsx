"use client";

import { ArrowRight, CheckCircle, Phone, Mail, Radio, Video, Mic, Camera, Award, Users, Clock, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function MediaBroadcastingPage() {
  const services = [
    {
      icon: <Video className="w-6 h-6" />,
      title: "Video Production",
      description: "Professional video production services including corporate videos, documentaries, commercials, and digital content."
    },
    {
      icon: <Radio className="w-6 h-6" />,
      title: "Broadcasting Services",
      description: "Complete broadcasting solutions for radio, television, and digital platforms with technical expertise and content creation."
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Content Creation",
      description: "Creative content development for various media platforms including social media, web, and traditional broadcasting."
    },
    {
      icon: <Mic className="w-6 h-6" />,
      title: "Audio Production",
      description: "Professional audio recording, editing, and production services for podcasts, music, and multimedia content."
    }
  ];

  const features = [
    "Professional video and audio production facilities",
    "Experienced creative and technical teams",
    "Multi-platform content distribution strategies",
    "Live streaming and broadcast capabilities",
    "Post-production and editing services",
    "Digital media and social content creation",
    "Brand storytelling and marketing videos",
    "Documentary and corporate film production",
    "Podcast development and production",
    "Media consulting and strategy development"
  ];

  const stats = [
    { number: "1,000+", label: "Projects Completed", icon: <Video className="w-6 h-6" /> },
    { number: "250+", label: "Media Clients", icon: <Users className="w-6 h-6" /> },
    { number: "12", label: "Years Experience", icon: <Award className="w-6 h-6" /> },
    { number: "50M+", label: "Audience Reached", icon: <TrendingUp className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-light mb-6">
              Media Production & Broadcasting
            </h1>
            <p className="text-xl font-light mb-8 text-red-100 leading-relaxed">
              Creating compelling content and delivering professional broadcasting solutions that engage audiences 
              and amplify brand messages. We combine creative excellence with technical expertise to produce 
              high-quality media content across all platforms and formats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg">
                View Portfolio
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 text-lg">
                Production Inquiry
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4 text-red-600">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">Media & Broadcasting Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive media production and broadcasting solutions that bring stories to life 
              and connect brands with their audiences through powerful, engaging content.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6 text-red-600">
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
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8">Media Production Excellence</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With 12 years of media production excellence, we have completed 1,000+ projects for 250+ clients, 
                reaching over 50 million audience members worldwide. Our creative and technical expertise spans 
                all aspects of media production and broadcasting.
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
              <h3 className="text-2xl font-medium text-gray-900 mb-6">Our Capabilities</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Creative Excellence</h4>
                  <p className="text-gray-600 text-sm">Award-winning creative team and storytelling expertise</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Technical Innovation</h4>
                  <p className="text-gray-600 text-sm">State-of-the-art equipment and production facilities</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Multi-Platform Distribution</h4>
                  <p className="text-gray-600 text-sm">Content optimization for all media channels</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-red-600 text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">Bring Your Story to Life</h2>
          <p className="text-xl font-light mb-10 text-red-100 leading-relaxed">
            Partner with us to create compelling media content that engages your audience and amplifies 
            your brand message across all platforms and channels.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-red-600 hover:bg-gray-100 px-10 py-4 text-lg flex items-center gap-3">
                <Phone className="w-5 h-5" />
                Production Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}