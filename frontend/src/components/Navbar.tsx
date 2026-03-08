"use client";

import Link from "next/link";
import { useState } from "react";
import { Ship, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const serviceCategories = [
    {
      category: "Hospitality & Tourism",
      services: [
        { name: "Travel & Tourism", href: "/services/travel-tourism", desc: "Tour operations & travel solutions" },
        { name: "Hotel & Hospitality", href: "/services/hospitality", desc: "Hotel management & resorts" },
        { name: "Food & Beverage", href: "/services/food-beverage", desc: "Restaurants & catering services" },
      ]
    },
    {
      category: "Infrastructure & Development",
      services: [
        { name: "Real Estate", href: "/services/real-estate", desc: "Property development & management" },
        { name: "Construction", href: "/services/construction", desc: "Engineering & infrastructure" },
        { name: "Agriculture", href: "/services/agriculture", desc: "Farming & agro projects" },
      ]
    },
    {
      category: "Trade & Manufacturing",
      services: [
        { name: "Garments & Textile", href: "/services/garments-textile", desc: "RMG & textile manufacturing" },
        { name: "International Trading", href: "/services/international-trading", desc: "Import & export services" },
      ]
    },
    {
      category: "Professional Services",
      services: [
        { name: "Digital & IT", href: "/services/digital-it", desc: "Technology & digital solutions" },
        { name: "Business Consulting", href: "/services/business-consulting", desc: "Advisory & consulting" },
        { name: "Education & Training", href: "/services/education-training", desc: "Skill development programs" },
        { name: "Media & Broadcasting", href: "/services/media-broadcasting", desc: "Media production & publishing" },
        { name: "CSR & Community", href: "/services/csr-community", desc: "Social responsibility initiatives" },
      ]
    },
  ];

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services", hasMegaMenu: true },
    { name: "Projects", href: "/projects" },
    { name: "Team", href: "/team" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-card/80 backdrop-blur-md z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="p-2 rounded-lg bg-amber-500 group-hover:bg-blue-600 transition-colors shadow-lg">
                <Ship className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="font-normal text-xl tracking-tight text-slate-900 block leading-none">
                  Jibran C. Ltd
                </span>
                <span className="text-[10px] text-slate-500 font-light tracking-wider">
                  Business Portfolio
                </span>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <div
                key={link.name}
                className="relative h-full flex items-center"
                onMouseEnter={() => link.hasMegaMenu && setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <Link
                  href={link.href}
                  className="font-normal text-sm text-slate-600 hover:text-blue-600 transition-colors flex items-center space-x-1"
                >
                  <span>{link.name}</span>
                  {link.hasMegaMenu && <ChevronDown className={`h-3 w-3 transition-transform ${hoveredLink === link.name ? 'rotate-180' : ''}`} />}
                </Link>

                {/* Mega Menu */}
                <AnimatePresence>
                  {link.hasMegaMenu && hoveredLink === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full -left-96 w-[800px] pt-4 z-50"
                    >
                      <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-6">
                        <div className="grid grid-cols-4 gap-6">
                          {serviceCategories.map((category) => (
                            <div key={category.category}>
                              <h3 className="font-nunito font-semibold text-sm text-gray-900 mb-3">
                                {category.category}
                              </h3>
                              <div className="space-y-2">
                                {category.services.map((service) => (
                                  <Link
                                    key={service.name}
                                    href={service.href}
                                    className="block group/item"
                                    onClick={() => setHoveredLink(null)}
                                  >
                                    <p className="font-nunito font-medium text-sm text-gray-700 group-hover/item:text-blue-600 transition-colors mb-1">
                                      {service.name}
                                    </p>
                                    <p className="font-nunito font-light text-xs text-gray-500 leading-tight">
                                      {service.desc}
                                    </p>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="mt-6 pt-4 border-t border-gray-200">
                          <Link
                            href="/services"
                            className="inline-flex items-center font-nunito font-medium text-sm text-blue-600 hover:text-blue-700 transition-colors"
                            onClick={() => setHoveredLink(null)}
                          >
                            View All Services →
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            <Button className="bg-amber-500 hover:bg-amber-600 text-white font-normal shadow-lg transition-all rounded-xl px-6">
              Get Started
            </Button>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-card border-b border-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <div key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => !link.hasMegaMenu && setIsOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-accent"
                >
                  {link.name}
                </Link>
                {link.hasMegaMenu && (
                  <div className="pl-6 space-y-4 mt-2">
                    {serviceCategories.map((category) => (
                      <div key={category.category}>
                        <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">
                          {category.category}
                        </p>
                        <div className="space-y-2">
                          {category.services.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              onClick={() => setIsOpen(false)}
                              className="block px-3 py-1 text-sm text-muted-foreground hover:text-primary"
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="px-3 pt-4">
              <Button className="w-full bg-amber-500 text-white hover:bg-amber-600 font-normal">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
