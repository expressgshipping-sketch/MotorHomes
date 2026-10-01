"use client";

import Link from "next/link";
import { Menu, X, Phone, Heart } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      {/* Top bar */}
      <div className="bg-secondary text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <Link href="/compare" className="flex items-center gap-2 hover:text-gray-300">
            <Heart size={16} />
            <span>Favourites</span>
          </Link>
          <a href="tel:+447412800685" className="flex items-center gap-2 hover:text-gray-300">
            <Phone size={16} />
            <span>Call: +44 7412 800685</span>
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            Motor Homes Sales UK
          </Link>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="relative group">
              <button className="font-medium hover:text-primary transition">
                Motorhomes
              </button>
              <div className="absolute left-0 mt-2 w-[900px] bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-6">
                  <div className="grid grid-cols-4 gap-6">
                    <div>
                      <div className="font-semibold text-sm mb-3 text-secondary">Quick Links</div>
                      <div className="space-y-2">
                        <Link href="/motorhome-offers" className="block py-1 hover:text-primary text-sm">Motorhome offers</Link>
                        <Link href="/motorhomes/new" className="block py-1 hover:text-primary text-sm">New motorhomes</Link>
                        <Link href="/motorhomes/used" className="block py-1 hover:text-primary text-sm">Used motorhomes</Link>
                        <Link href="/brands" className="block py-1 hover:text-primary text-sm">Our motorhome brands</Link>
                        <Link href="/smc-imported" className="block py-1 hover:text-primary text-sm">Imported inventory</Link>
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-sm mb-3 text-secondary">Search by brand</div>
                      <div className="space-y-2">
                        <Link href="/brands/frankia" className="block py-1 hover:text-primary text-sm">Frankia</Link>
                        <Link href="/brands/auto-trail" className="block py-1 hover:text-primary text-sm">Auto-Trail</Link>
                        <Link href="/brands/auto-sleepers" className="block py-1 hover:text-primary text-sm">Auto-Sleepers</Link>
                        <Link href="/brands/knaus" className="block py-1 hover:text-primary text-sm">Knaus</Link>
                        <Link href="/brands/pilote" className="block py-1 hover:text-primary text-sm">Pilote</Link>
                        <Link href="/brands/swift" className="block py-1 hover:text-primary text-sm">Swift</Link>
                        <Link href="/brands/sunlight" className="block py-1 hover:text-primary text-sm">Sunlight</Link>
                        <Link href="/brands/chausson" className="block py-1 hover:text-primary text-sm">Chausson</Link>
                        <Link href="/brands/elddis" className="block py-1 hover:text-primary text-sm">Elddis</Link>
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-sm mb-3 text-secondary">Search by type</div>
                      <div className="space-y-2">
                        <div className="text-xs text-gray-500 mb-1">Berths</div>
                        <Link href="/motorhomes?berths=2" className="block py-1 hover:text-primary text-sm">2 berths</Link>
                        <Link href="/motorhomes?berths=4" className="block py-1 hover:text-primary text-sm">4 berths</Link>
                        <Link href="/motorhomes?berths=6" className="block py-1 hover:text-primary text-sm">6 berths</Link>
                        <div className="text-xs text-gray-500 mb-1 mt-3">Body type</div>
                        <Link href="/motorhomes/new" className="block py-1 hover:text-primary text-sm">New motorhomes</Link>
                        <Link href="/motorhomes/used" className="block py-1 hover:text-primary text-sm">Used motorhomes</Link>
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-sm mb-3 text-secondary">Search by specs</div>
                      <div className="space-y-2">
                        <div className="text-xs text-gray-500 mb-1">Transmission</div>
                        <div className="text-xs text-gray-500 mb-1 mt-3">Weight</div>
                        <Link href="/motorhomes?weight=under3500" className="block py-1 hover:text-primary text-sm">Up to 3500kg</Link>
                        <Link href="/motorhomes?weight=over3500" className="block py-1 hover:text-primary text-sm">Over 3500kg</Link>
                        <div className="text-xs text-gray-500 mb-1 mt-3">Length</div>
                      </div>
                    </div>
                  </div>
                  <div className="border-t mt-4 pt-4 flex justify-between items-center">
                    <Link href="/sell-your-motorhome" className="block py-1 hover:text-primary text-sm font-medium">Sell your motorhome</Link>
                    <Link href="/motorhomes" className="block py-1 hover:text-primary font-medium text-sm bg-primary text-white px-4 py-2 rounded">View all motorhomes</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="font-medium hover:text-primary transition">
                Campervans
              </button>
              <div className="absolute left-0 mt-2 w-[900px] bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-6">
                  <div className="grid grid-cols-4 gap-6">
                    <div>
                      <div className="font-semibold text-sm mb-3 text-secondary">Quick Links</div>
                      <div className="space-y-2">
                        <Link href="/campervan-offers" className="block py-1 hover:text-primary text-sm">Campervan offers</Link>
                        <Link href="/campervans/new" className="block py-1 hover:text-primary text-sm">New campervans</Link>
                        <Link href="/campervans/used" className="block py-1 hover:text-primary text-sm">Used campervans</Link>
                        <Link href="/campervans/brands" className="block py-1 hover:text-primary text-sm">Our campervan brands</Link>
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-sm mb-3 text-secondary">Search by brand</div>
                      <div className="space-y-2">
                        <Link href="/campervans/brands/auto-sleepers" className="block py-1 hover:text-primary text-sm">Auto-Sleepers</Link>
                        <Link href="/campervans/brands/globecar" className="block py-1 hover:text-primary text-sm">Globecar</Link>
                        <Link href="/campervans/brands/knaus" className="block py-1 hover:text-primary text-sm">Knaus</Link>
                        <Link href="/campervans/brands/volkswagen" className="block py-1 hover:text-primary text-sm">Volkswagen</Link>
                        <Link href="/campervans/brands/hymer" className="block py-1 hover:text-primary text-sm">Hymer</Link>
                        <Link href="/campervans/brands/etrusco" className="block py-1 hover:text-primary text-sm">Etrusco</Link>
                        <Link href="/campervans/brands/yucon" className="block py-1 hover:text-primary text-sm">Yucon</Link>
                        <Link href="/campervans/brands/weinsberg" className="block py-1 hover:text-primary text-sm">Weinsberg</Link>
                        <Link href="/campervans/brands/wellhouse" className="block py-1 hover:text-primary text-sm">Wellhouse</Link>
                        <Link href="/campervans/brands/malibu" className="block py-1 hover:text-primary text-sm">Malibu</Link>
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-sm mb-3 text-secondary">Search by type</div>
                      <div className="space-y-2">
                        <div className="text-xs text-gray-500 mb-1">Berths</div>
                        <Link href="/campervans?berths=2" className="block py-1 hover:text-primary text-sm">2 berths</Link>
                        <Link href="/campervans?berths=4" className="block py-1 hover:text-primary text-sm">4 berths</Link>
                        <div className="text-xs text-gray-500 mb-1 mt-3">Body type</div>
                        <Link href="/campervans/new" className="block py-1 hover:text-primary text-sm">New campervans</Link>
                        <Link href="/campervans/used" className="block py-1 hover:text-primary text-sm">Used campervans</Link>
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-sm mb-3 text-secondary">Search by specs</div>
                      <div className="space-y-2">
                        <div className="text-xs text-gray-500 mb-1">Transmission</div>
                        <div className="text-xs text-gray-500 mb-1 mt-3">Weight</div>
                        <Link href="/campervans?weight=under3500" className="block py-1 hover:text-primary text-sm">Up to 3500kg</Link>
                        <Link href="/campervans?weight=over3500" className="block py-1 hover:text-primary text-sm">Over 3500kg</Link>
                        <div className="text-xs text-gray-500 mb-1 mt-3">Length</div>
                      </div>
                    </div>
                  </div>
                  <div className="border-t mt-4 pt-4 flex justify-between items-center">
                    <Link href="/sell-your-motorhome" className="block py-1 hover:text-primary text-sm font-medium">Sell your campervan</Link>
                    <Link href="/campervans" className="block py-1 hover:text-primary font-medium text-sm bg-primary text-white px-4 py-2 rounded">View all campervans</Link>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/servicing" className="font-medium hover:text-primary transition">
              Servicing
            </Link>
            <Link href="/accessories" className="font-medium hover:text-primary transition">
              Accessories
            </Link>
            <div className="relative group">
              <button className="font-medium hover:text-primary transition">
                More
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-4">
                  <Link href="/about-us" className="block py-2 hover:text-primary">About us</Link>
                  <Link href="/careers" className="block py-2 hover:text-primary">Careers</Link>
                  <Link href="/news" className="block py-2 hover:text-primary">News & events</Link>
                  <Link href="/blog" className="block py-2 hover:text-primary">Blog</Link>
                  <Link href="/servicing" className="block py-2 hover:text-primary">Bodyshop &amp; servicing</Link>
                  <Link href="/contact-us" className="block py-2 hover:text-primary">Contact us</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col gap-4">
              <div>
                <button className="font-medium w-full text-left flex items-center justify-between">
                  Motorhomes
                  <span className="text-xs text-gray-500">▼</span>
                </button>
                <div className="ml-4 mt-2 grid grid-cols-2 gap-2">
                  <div className="col-span-2 font-semibold text-sm mb-1 text-secondary">Quick Links</div>
                  <Link href="/motorhome-offers" className="hover:text-primary text-sm">Motorhome offers</Link>
                  <Link href="/motorhomes/new" className="hover:text-primary text-sm">New motorhomes</Link>
                  <Link href="/motorhomes/used" className="hover:text-primary text-sm">Used motorhomes</Link>
                  <Link href="/brands" className="hover:text-primary text-sm">Our brands</Link>
                  <Link href="/smc-imported" className="hover:text-primary text-sm">Imported inventory</Link>
                  <div className="col-span-2 font-semibold text-sm mb-1 mt-2 text-secondary">Brands</div>
                  <Link href="/brands/frankia" className="hover:text-primary text-sm">Frankia</Link>
                  <Link href="/brands/auto-trail" className="hover:text-primary text-sm">Auto-Trail</Link>
                  <Link href="/brands/auto-sleepers" className="hover:text-primary text-sm">Auto-Sleepers</Link>
                  <Link href="/brands/knaus" className="hover:text-primary text-sm">Knaus</Link>
                  <Link href="/brands/pilote" className="hover:text-primary text-sm">Pilote</Link>
                  <Link href="/brands/swift" className="hover:text-primary text-sm">Swift</Link>
                  <Link href="/brands/sunlight" className="hover:text-primary text-sm">Sunlight</Link>
                  <Link href="/brands/chausson" className="hover:text-primary text-sm">Chausson</Link>
                  <Link href="/brands/elddis" className="hover:text-primary text-sm">Elddis</Link>
                  <div className="col-span-2 font-semibold text-sm mb-1 mt-2 text-secondary">Filters</div>
                  <Link href="/motorhomes?berths=2" className="hover:text-primary text-sm">2 berths</Link>
                  <Link href="/motorhomes?berths=4" className="hover:text-primary text-sm">4 berths</Link>
                  <Link href="/motorhomes?berths=6" className="hover:text-primary text-sm">6 berths</Link>
                  <Link href="/motorhomes/new" className="hover:text-primary text-sm">New motorhomes</Link>
                  <Link href="/motorhomes/used" className="hover:text-primary text-sm">Used motorhomes</Link>
                  <Link href="/motorhomes" className="hover:text-primary font-medium text-sm col-span-2 bg-primary text-white py-2 rounded text-center">View all motorhomes</Link>
                </div>
              </div>
              <div>
                <button className="font-medium w-full text-left flex items-center justify-between">
                  Campervans
                  <span className="text-xs text-gray-500">▼</span>
                </button>
                <div className="ml-4 mt-2 grid grid-cols-2 gap-2">
                  <div className="col-span-2 font-semibold text-sm mb-1 text-secondary">Quick Links</div>
                  <Link href="/campervan-offers" className="hover:text-primary text-sm">Campervan offers</Link>
                  <Link href="/campervans/new" className="hover:text-primary text-sm">New campervans</Link>
                  <Link href="/campervans/used" className="hover:text-primary text-sm">Used campervans</Link>
                  <Link href="/campervans/brands" className="hover:text-primary text-sm">Our brands</Link>
                  <div className="col-span-2 font-semibold text-sm mb-1 mt-2 text-secondary">Brands</div>
                  <Link href="/campervans/brands/auto-sleepers" className="hover:text-primary text-sm">Auto-Sleepers</Link>
                  <Link href="/campervans/brands/globecar" className="hover:text-primary text-sm">Globecar</Link>
                  <Link href="/campervans/brands/knaus" className="hover:text-primary text-sm">Knaus</Link>
                  <Link href="/campervans/brands/volkswagen" className="hover:text-primary text-sm">Volkswagen</Link>
                  <Link href="/campervans/brands/hymer" className="hover:text-primary text-sm">Hymer</Link>
                  <Link href="/campervans/brands/etrusco" className="hover:text-primary text-sm">Etrusco</Link>
                  <Link href="/campervans/brands/yucon" className="hover:text-primary text-sm">Yucon</Link>
                  <Link href="/campervans/brands/weinsberg" className="hover:text-primary text-sm">Weinsberg</Link>
                  <Link href="/campervans/brands/wellhouse" className="hover:text-primary text-sm">Wellhouse</Link>
                  <Link href="/campervans/brands/malibu" className="hover:text-primary text-sm">Malibu</Link>
                  <div className="col-span-2 font-semibold text-sm mb-1 mt-2 text-secondary">Filters</div>
                  <Link href="/campervans?berths=2" className="hover:text-primary text-sm">2 berths</Link>
                  <Link href="/campervans?berths=4" className="hover:text-primary text-sm">4 berths</Link>
                  <Link href="/campervans/new" className="hover:text-primary text-sm">New campervans</Link>
                  <Link href="/campervans/used" className="hover:text-primary text-sm">Used campervans</Link>
                  <Link href="/campervans" className="hover:text-primary font-medium text-sm col-span-2 bg-primary text-white py-2 rounded text-center">View all campervans</Link>
                </div>
              </div>
              <Link href="/servicing" className="hover:text-primary font-medium">Servicing</Link>
              <Link href="/accessories" className="hover:text-primary font-medium">Accessories</Link>
              <div>
                <button className="font-medium w-full text-left flex items-center justify-between">
                  More
                  <span className="text-xs text-gray-500">▼</span>
                </button>
                <div className="ml-4 mt-2 grid grid-cols-2 gap-2">
                  <Link href="/about-us" className="hover:text-primary text-sm">About us</Link>
                  <Link href="/careers" className="hover:text-primary text-sm">Careers</Link>
                  <Link href="/news" className="hover:text-primary text-sm">News & events</Link>
                  <Link href="/blog" className="hover:text-primary text-sm">Blog</Link>
                  <Link href="/servicing" className="hover:text-primary text-sm">Bodyshop &amp; servicing</Link>
                  <Link href="/contact-us" className="hover:text-primary text-sm">Contact us</Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
