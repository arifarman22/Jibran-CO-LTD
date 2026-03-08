"use client";

import { ArrowRight, CheckCircle, Phone, Mail, GraduationCap, BookOpen, Users, Award, Target, Shield, Clock, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function EducationTrainingPage() {
  const services = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Professional Development",
      description: "Comprehensive skill development programs for professionals across various industries and career levels."
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Corporate Training",
      description: "Customized training solutions for organizations to enhance employee skills and productivity."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Leadership Programs",
      description: "Executive leadership development and management training for emerging and established leaders."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Skills Certification",
      description: "Industry-recognized certification programs that validate professional competencies and expertise."
    }
  ];

  const features = [
    "Industry-certified training programs and curricula",
    "Expert instructors with real-world experience",
    "Flexible learning formats: online, in-person, hybrid",
    "Customized corporate training solutions",
    "Professional certification and accreditation",
    "Career development and placement assistance",
    "Continuous learning and skill assessment",
    "International standards and best practices",
    "Practical hands-on training and workshops",
    "Post-training support and mentoring programs"
  ];

  const stats = [
    { number: "25,000+", label: "Professionals Trained", icon: <Users className="w-6 h-6" /> },
    { number: "500+", label: "Corporate Clients", icon: <Target className="w-6 h-6" /> },
    { number: "15", label: "Years Excellence", icon: <Award className="w-6 h-6" /> },
    { number: "92%", label: "Job Placement Rate", icon: <TrendingUp className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-light mb-6">
              Education & Professional Training
            </h1>
            <p className="text-xl font-light mb-8 text-emerald-100 leading-relaxed">
              Empowering professionals and organizations through comprehensive education and training programs. 
              We develop skills, enhance capabilities, and drive career advancement through industry-leading 
              curricula and expert instruction that delivers measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 text-lg">
                View Programs
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 text-lg">
                Custom Training
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4 text-emerald-600">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">Training & Development Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive education and training solutions designed to enhance professional skills 
              and drive organizational success through continuous learning and development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 text-emerald-600">
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
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8">15 Years of Training Excellence</h2>
              <div className="prose prose-lg text-gray-600 mb-10">
                <p className="mb-6 text-lg leading-relaxed">
                  For 15 years, Jibran C. Ltd has been at the forefront of professional education and training, 
                  developing the skills of over 25,000 professionals and partnering with 500+ corporate clients 
                  worldwide. Our comprehensive programs combine theoretical knowledge with practical application 
                  to ensure real-world competency and career advancement.
                </p>
                <p className="mb-6 text-lg leading-relaxed">
                  We specialize in industry-specific training programs that address current market demands and 
                  emerging trends. Our expert instructors bring real-world experience and industry insights, 
                  ensuring participants gain relevant, applicable skills that translate directly to improved 
                  job performance and career opportunities.
                </p>
                <p className="text-lg leading-relaxed">
                  Our commitment to excellence is reflected in our 92% job placement rate and strong partnerships 
                  with leading organizations who trust us to develop their workforce and enhance their 
                  competitive advantage through skilled, certified professionals.
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
                  <Award className="w-7 h-7 text-emerald-500" />
                  <h3 className="text-xl font-semibold text-gray-900">Certification Programs</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Industry-recognized certifications that validate professional competencies 
                  and enhance career prospects across various sectors.
                </p>
                <ul className="text-gray-600 space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>Project Management Professional (PMP)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>Digital Marketing and Analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>Supply Chain Management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>Leadership and Management Excellence</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-7 h-7 text-blue-500" />
                  <h3 className="text-xl font-semibold text-gray-900">Flexible Learning</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Multiple learning formats and schedules to accommodate diverse needs 
                  and professional commitments.
                </p>
                <ul className="text-gray-600 space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Online self-paced learning modules</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Live virtual instructor-led sessions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>In-person workshops and seminars</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Hybrid learning experiences</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-emerald-600 text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">Invest in Professional Development</h2>
          <p className="text-xl font-light mb-10 text-emerald-100 leading-relaxed">
            Advance your career or enhance your team's capabilities through our comprehensive training programs 
            designed to deliver practical skills and industry-recognized certifications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-emerald-600 hover:bg-gray-100 px-10 py-4 text-lg flex items-center gap-3">
                <Phone className="w-5 h-5" />
                Enrollment Inquiry
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600 px-10 py-4 text-lg flex items-center gap-3">
                <Mail className="w-5 h-5" />
                Program Catalog
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}