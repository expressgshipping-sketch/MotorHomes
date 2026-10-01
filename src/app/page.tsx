import Link from "next/link";
import { ArrowRight, Wrench, DollarSign, Calendar, MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";
import ImageWithFallback from "@/components/ImageWithFallback";
import { importedMotorhomes } from "@/data/smc_imported";

const latestArrivals = importedMotorhomes
  .filter((vehicle) => vehicle.availability === "Available" && vehicle.images.length > 0)
  .slice(0, 4);

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-secondary-light text-white py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The adventure starts here
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              We strive to bring you the best quality motorhomes, the biggest range and top customer service.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/motorhomes"
                className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-2 transition"
              >
                Explore more
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Browse Shortcuts */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-6 text-center">Find your next vehicle</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  ["New motorhomes", "/motorhomes/new"],
                  ["Used motorhomes", "/motorhomes/used"],
                  ["Campervans", "/campervans"],
                  ["Browse all vehicles", "/smc-imported"],
                ].map(([label, href]) => (
                  <Link key={href} href={href} className="bg-white border rounded-lg px-4 py-3 text-center font-semibold text-secondary hover:border-primary hover:text-primary transition">
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Search by type</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/motorhomes/new" className="group">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition card-hover">
                <div className="h-48 relative">
                  <Image
                    src="/smc-images/new-2026-frankia-platin-i-8400-plus-motorhome-7214/image-0.jpg"
                    alt="New Motorhomes"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">New Motorhomes</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition">New Motorhomes</h3>
                  <p className="text-gray-600 mb-4">Browse the new motorhome listings</p>
                  <span className="text-primary font-medium inline-flex items-center gap-2">
                    View <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </Link>

            <Link href="/motorhomes/used" className="group">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition card-hover">
                <div className="h-48 relative">
                  <Image
                    src="/smc-images/new-2026-pilote-evidence-g781-fgj-motorhome-8751/image-0.jpg"
                    alt="Used Motorhomes"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">Used Motorhomes</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition">Used Motorhomes</h3>
                  <p className="text-gray-600 mb-4">Browse pre-owned motorhome listings</p>
                  <span className="text-primary font-medium inline-flex items-center gap-2">
                    View <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </Link>

            <Link href="/campervans" className="group">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition card-hover">
                <div className="h-48 relative">
                  <Image
                    src="/smc-images/new-globecar-summit-shine-600-campervan-6923/image-0.jpg"
                    alt="Campervans"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">Campervans</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition">Campervans</h3>
                  <p className="text-gray-600 mb-4">Compact and versatile for any journey</p>
                  <span className="text-primary font-medium inline-flex items-center gap-2">
                    View <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-primary text-white p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">2026 models</h2>
              <p className="mb-6 text-gray-100">Now available</p>
              <Link
                href="/motorhomes/new"
                className="bg-white text-primary px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 hover:bg-gray-100 transition"
              >
                View models
                <ArrowRight size={20} />
              </Link>
            </div>

            <div className="bg-secondary text-white p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Frankia motorhomes</h2>
              <p className="mb-6 text-gray-300">Design. Comfort. Quality.</p>
              <Link
                href="/brands/frankia"
                className="bg-white text-secondary px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 hover:bg-gray-100 transition"
              >
                Explore the range
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sell Your Motorhome Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Thinking about selling your motorhome or campervan?</h2>
                <p className="text-gray-600 mb-6">
                  Motor Homes Sales UK makes it really easy and completely hassle-free. Whether your plans have changed or you're ready for your next adventure, our friendly team is on hand to help every step of the way.
                </p>
                <p className="text-gray-600 mb-6">
                  There's no complicated process; simply fill in a quick enquiry form with a few details about your vehicle, and we will be in touch to guide you from there. It's a straightforward, relaxed way to sell, with people who genuinely understand motorhomes and campervans.
                </p>
                <Link
                  href="/sell-your-motorhome"
                  className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 transition"
                >
                  Get a valuation
                  <ArrowRight size={20} />
                </Link>
              </div>
              <div className="bg-gradient-to-br from-primary to-primary-light rounded-lg h-64 flex items-center justify-center">
                <span className="text-white text-xl font-semibold">Sell Your Motorhome</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Showcase */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Explore our new motorhome brands</h2>
            <Link href="/brands" className="text-primary font-medium hover:underline">
              View all
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {['Frankia', 'Auto-Sleepers', 'Knaus', 'Pilote', 'Weinsberg', 'Hymer', 'Adria', 'Laika', 'Swift', 'Benimar', 'Burstner', 'Carthago'].map((brand) => (
              <Link key={brand} href={`/brands/${brand.toLowerCase().replace(' ', '-')}`} className="group">
                <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition text-center">
                  <div className="h-20 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-gray-700 group-hover:text-primary transition">{brand}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Arrivals */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Vehicles marked available</h2>
            <Link href="/motorhomes" className="text-primary font-medium hover:underline">
              View all
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestArrivals.map((vehicle) => (
              <Link
                key={vehicle.id}
                href={`/${vehicle.type === "Campervan" ? "campervans" : "motorhomes"}/${vehicle.id}`}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
              >
                <div className="relative">
                  <ImageWithFallback
                    src={vehicle.images[0]}
                    alt={`${vehicle.brand} ${vehicle.name}`}
                    width={600}
                    height={360}
                    className="h-48 w-full object-cover"
                  />
                  <span className={`absolute top-4 left-4 ${vehicle.isNew ? "bg-primary" : "bg-gray-800"} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                    {vehicle.isNew ? "New" : "Used"}
                  </span>
                </div>
                <div className="p-4">
                  <div className="text-sm text-primary font-medium mb-1">{vehicle.brand}</div>
                  <h3 className="font-semibold mb-2">{vehicle.name}</h3>
                  <div className="flex flex-wrap gap-2 text-xs text-gray-600 mb-3">
                    {vehicle.berths > 0 && <span>{vehicle.berths} berths</span>}
                    {vehicle.transmission && <span>• {vehicle.transmission}</span>}
                    <span>• {vehicle.year}</span>
                  </div>
                  <div className="font-bold text-secondary">{vehicle.price}</div>
                  <div className="mt-2 text-xs font-medium text-green-700">Available — confirm before travelling</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">20 Bay Workshop</h3>
              <p className="text-gray-600 mb-4">
                Book into our fully-equipped service and repair centre.
              </p>
              <Link href="/servicing" className="text-primary font-medium hover:underline">
                Explore
              </Link>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Get a Valuation</h3>
              <p className="text-gray-600 mb-4">
                Competitive prices for your used leisure vehicles!
              </p>
              <Link href="/sell-your-motorhome" className="text-primary font-medium hover:underline">
                Quote me
              </Link>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">News & Events</h3>
              <p className="text-gray-600 mb-4">
                Stay updated with our latest news and upcoming events.
              </p>
              <Link href="/news" className="text-primary font-medium hover:underline">
                View all
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">About Motor Homes Sales UK</h2>
            <p className="text-lg text-gray-600 mb-8">
              Browse motorhomes and campervans with vehicle details and photographs. Stock and prices can change, so contact us to confirm current availability and arrange a viewing.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Get in touch</h2>
            <p className="text-xl mb-8 text-gray-200">
              Have questions? Our friendly team is here to help you find your perfect motorhome.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <a href="tel:+447412800685" className="flex items-center gap-2 hover:text-gray-300">
                <Phone size={24} />
                <span className="text-xl">+44 7412 800685</span>
              </a>
              <a href="mailto:motorhomessalesuk@gmail.com" className="flex items-center gap-2 hover:text-gray-300">
                <Mail size={24} />
                <span className="text-xl">motorhomessalesuk@gmail.com</span>
              </a>
            </div>
            <div className="mt-8">
              <Link
                href="/contact-us"
                className="bg-white text-secondary px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-2 hover:bg-gray-100 transition"
              >
                Contact us
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
