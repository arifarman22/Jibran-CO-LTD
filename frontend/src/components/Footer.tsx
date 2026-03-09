import Link from "next/link";
import { Ship, Mail, Phone, MapPin } from "lucide-react";

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
                <span>123 Global Trade Center, Finance District, 10001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-secondary flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-secondary flex-shrink-0" />
                <span>inquiry@jibran.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/40 font-sans text-xs">
            &copy; {new Date().getFullYear()} Jibran Co. Ltd. All Rights Reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {/* Social Icons Placeholder */}
            <a href="#" className="text-primary-foreground/60 hover:text-white transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
