import { ArrowRight, CheckCircle, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ServicePageProps {
  title: string;
  description: string;
  features: string[];
  content: string;
  whyChooseUs: {
    title: string;
    description: string;
  }[];
  color: string;
  ctaTitle: string;
  ctaDescription: string;
}

export default function ServicePageTemplate({
  title,
  description,
  features,
  content,
  whyChooseUs,
  color,
  ctaTitle,
  ctaDescription
}: ServicePageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className={`bg-gradient-to-r from-${color}-600 to-${color}-800 text-white py-20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-light mb-6">
              {title}
            </h1>
            <p className={`text-xl font-light mb-8 text-${color}-100`}>
              {description}
            </p>
            <Button className={`bg-white text-${color}-600 hover:bg-gray-100 px-8 py-3`}>
              Learn More
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-6">Our Services</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {content}
              </p>
              
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-medium text-gray-900 mb-6">Why Choose Us</h3>
              <div className="space-y-6">
                {whyChooseUs.map((item, index) => (
                  <div key={index}>
                    <h4 className="font-medium text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light text-gray-900 mb-6">{ctaTitle}</h2>
          <p className="text-gray-600 mb-8">{ctaDescription}</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className={`bg-${color}-600 hover:bg-${color}-700 text-white px-6 py-3 flex items-center gap-2`}>
                <Phone className="w-4 h-4" />
                Call Us
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className={`border-${color}-600 text-${color}-600 hover:bg-${color}-50 px-6 py-3 flex items-center gap-2`}>
                <Mail className="w-4 h-4" />
                Email Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}