import Link from "next/link";
import { Phone, MapPin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Motor Homes Sales UK</h3>
            <p className="text-gray-300 text-sm">
              Browse motorhomes and campervans, then contact us to confirm vehicle availability, pricing and viewing arrangements.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/motorhomes" className="hover:text-primary transition">Motorhomes</Link></li>
              <li><Link href="/campervans" className="hover:text-primary transition">Campervans</Link></li>
              <li><Link href="/servicing" className="hover:text-primary transition">Servicing</Link></li>
              <li><Link href="/about-us" className="hover:text-primary transition">About Us</Link></li>
              <li><Link href="/contact-us" className="hover:text-primary transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Brands */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Brands</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/brands/frankia" className="hover:text-primary transition">Frankia</Link></li>
              <li><Link href="/brands/auto-sleepers" className="hover:text-primary transition">Auto-Sleepers</Link></li>
              <li><Link href="/brands/knaus" className="hover:text-primary transition">Knaus</Link></li>
              <li><Link href="/brands/pilote" className="hover:text-primary transition">Pilote</Link></li>
              <li><Link href="/campervans/brands/weinsberg" className="hover:text-primary transition">Weinsberg</Link></li>
              <li><Link href="/campervans/brands/auto-sleepers" className="hover:text-primary transition">Auto-Sleepers CV</Link></li>
              <li><Link href="/campervans/brands/globecar" className="hover:text-primary transition">Globecar</Link></li>
              <li><Link href="/campervans/brands/yucon" className="hover:text-primary transition">Yucon</Link></li>
              <li><Link href="/campervans/brands/wellhouse" className="hover:text-primary transition">Wellhouse</Link></li>
              <li><Link href="/campervans/brands/volkswagen" className="hover:text-primary transition">Volkswagen</Link></li>
              <li><Link href="/campervans/brands/hymer" className="hover:text-primary transition">Hymer</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>Contact us to confirm the viewing location.</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="flex-shrink-0" />
                <a href="tel:+447412800685" className="hover:text-primary">+44 7412 800685</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="flex-shrink-0" />
                <a href="mailto:motorhomessalesuk@gmail.com" className="hover:text-primary">motorhomessalesuk@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Motor Homes Sales UK. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
