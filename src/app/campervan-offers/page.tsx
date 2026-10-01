import Link from "next/link";
import { Tag } from "lucide-react";
import { campervans } from "@/data/campervans";
import { importedMotorhomes } from "@/data/smc_imported";
import ImageWithFallback from "@/components/ImageWithFallback";

export default function CampervanOffersPage() {
  const offerCampervans = [...campervans, ...importedMotorhomes.filter((vehicle) => vehicle.type === "Campervan")].filter((c) => c.isOffer && (!c.availability || c.availability === "Available" || c.availability === "Back order")).slice(0, 60);

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Tag size={32} />
            <h1 className="text-4xl md:text-5xl font-bold">Campervan Offers</h1>
          </div>
          <p className="text-xl text-gray-100">
            Campervans currently marked as offers by the source dealership
          </p>
        </div>
      </div>

      {/* Offer Banner */}
      <div className="bg-secondary text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg">
            Availability can change. Contact us to confirm a vehicle before travelling.
          </p>
        </div>
      </div>

      {/* Campervans Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerCampervans.map((campervan) => (
            <div
              key={campervan.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition group border-2 border-primary"
            >
              <div className="relative">
                <ImageWithFallback
                  src={campervan.images[0] || "/placeholder"}
                  alt={campervan.name}
                  width={400}
                  height={224}
                  className="w-full h-56 object-cover"
                />
                <span className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                  <Tag size={14} />
                  Offer
                </span>
                {campervan.isNew && (
                  <span className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    New
                  </span>
                )}
              </div>
              <div className="p-6">
                <div className="text-sm text-primary font-medium mb-1">{campervan.brand}</div>
                <h3 className="text-xl font-semibold mb-2">{campervan.name}</h3>
                {campervan.availability && <p className={`mb-3 text-sm font-semibold ${campervan.availability === "Available" ? "text-green-700" : "text-amber-700"}`}>{campervan.availability}</p>}
                <div className="flex gap-4 text-sm text-gray-600 mb-4">
                  <span>{campervan.type}</span>
                  <span>•</span>
                  <span>{campervan.berths} Berths</span>
                  <span>•</span>
                  <span>{campervan.year}</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-secondary">{campervan.price}</div>
                  <div className="flex items-center gap-1 text-sm text-red-600">
                    <span>Source-listed offer</span>
                  </div>
                </div>
                <Link
                  href={`/campervans/${campervan.id}`}
                  className="block w-full bg-primary hover:bg-primary-dark text-white px-4 py-3 rounded-lg font-medium text-center transition"
                >
                  View Offer
                </Link>
              </div>
            </div>
          ))}
        </div>

        {offerCampervans.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No current offers available. Check back soon!</p>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-secondary">Don't Miss Out!</h2>
          <p className="text-xl text-gray-600 mb-6">
            Contact us to check current availability, ask a question or arrange a viewing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact-us"
              className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold transition"
            >
              Enquire Now
            </Link>
            <a
              href="tel:+447412800685"
              className="border border-secondary text-secondary px-8 py-3 rounded-lg font-semibold inline-flex items-center justify-center gap-2 hover:bg-gray-100 transition"
            >
              Call +44 7412 800685
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

