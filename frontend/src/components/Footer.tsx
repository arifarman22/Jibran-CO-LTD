import Link from "next/link";
import { Ship, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8 border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-6 group">
              <div className="p-1.5 rounded-md bg-white/10 group-hover:bg-secondary transition-colors">
                <Ship className="h-6 w-6 text-secondary group-hover:text-primary" />
              </div>
              <span className="font-sans font-extrabold text-xl tracking-tight text-white">
                Jibran Co. Ltd
              </span>
            </Link>
            <p className="text-primary-foreground/70 font-sans text-sm mb-6 leading-relaxed">
              A premier global enterprise specializing in <strong>Import, Export, and Strategic Trading</strong>. Empowering international commerce with reliability and excellence.
            </p>
          </div>

          <div>
            <h4 className="font-sans font-bold text-sm uppercase tracking-widest mb-6 text-secondary">Quick Links</h4>
            <ul className="space-y-4 font-sans text-sm">
              <li><Link href="/about" className="text-primary-foreground/70 hover:text-white transition-colors">Corporate Profile</Link></li>
              <li><Link href="/services" className="text-primary-foreground/70 hover:text-white transition-colors">Global Services</Link></li>
              <li><Link href="/products" className="text-primary-foreground/70 hover:text-white transition-colors">Export Products</Link></li>
              <li><Link href="/projects" className="text-primary-foreground/70 hover:text-white transition-colors">Trade Portfolio</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans font-bold text-sm uppercase tracking-widest mb-6 text-secondary">Governance</h4>
            <ul className="space-y-4 font-sans text-sm">
              <li><Link href="/privacy" className="text-primary-foreground/70 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-primary-foreground/70 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/compliance" className="text-primary-foreground/70 hover:text-white transition-colors">Compliance Hub</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans font-bold text-sm uppercase tracking-widest mb-6 text-secondary">Contact Us</h4>
            <ul className="space-y-5 font-sans text-sm text-primary-foreground/70">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Ground floor (E0), House 12C, Concrete Road, Toul Thanan Village, Russey Keo, Phnom Penh</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-secondary flex-shrink-0" />
                <span>+855 71 666 7335</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-secondary flex-shrink-0" />
                <span>jibrancoltd@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans font-bold text-sm uppercase tracking-widest mb-6 text-secondary">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-secondary rounded-full flex items-center justify-center transition-all hover:scale-110">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-secondary rounded-full flex items-center justify-center transition-all hover:scale-110">
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-secondary rounded-full flex items-center justify-center transition-all hover:scale-110">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-secondary rounded-full flex items-center justify-center transition-all hover:scale-110">
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/40 font-sans text-xs">
            &copy; {new Date().getFullYear()} Jibran Co. Ltd. All Rights Reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-white transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-white transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-white transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
