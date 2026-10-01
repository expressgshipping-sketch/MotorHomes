import Link from "next/link";
import { ArrowLeft, Heart, Phone, Calendar, Users, Gauge, Fuel } from "lucide-react";
import { notFound } from "next/navigation";
import { getCampervanById } from "@/data/catalog-lookups";
import { importedMotorhomes } from "@/data/smc_imported";
import VehicleImageGallery from "@/components/VehicleImageGallery";

export default function CampervanDetailPage({ params }: { params: { id: string } }) {
  const campervan = getCampervanById(parseInt(params.id)) ?? importedMotorhomes.find((vehicle) => vehicle.id === parseInt(params.id) && vehicle.type === "Campervan");

  if (!campervan) {
    notFound();
  }

  const specificationRows = ([
    ["Availability", campervan.availability ?? ""],
    ["Condition", campervan.isNew ? "New" : "Used"],
    ["Year", campervan.year ? String(campervan.year) : ""],
    ["Berths", campervan.berths ? String(campervan.berths) : ""],
    ["Mileage", campervan.mileage ?? ""],
    ["Length", campervan.length],
    ["Maximum weight", campervan.weight],
    ["Payload", campervan.payload ?? ""],
    ["Transmission", campervan.transmission],
    ["Fuel", campervan.fuel],
    ["Engine", campervan.engine],
    ["Horsepower", campervan.bhp ?? ""],
    ["Gears", campervan.gears ?? ""],
    ["Chassis", campervan.chassis ?? ""],
    ["Layout", campervan.endLayout ?? ""],
    ["Bedroom layout", campervan.bedroomLayout ?? ""],
    ["Unladen weight", campervan.unladenWeight ?? ""],
    ["Seat belts", campervan.seatBelts ?? ""],
  ] as [string, string][]).filter(([, value]) => Boolean(value) && value !== "Details on request");

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <Link
            href="/campervans"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-primary"
          >
            <ArrowLeft size={18} />
            Back to Campervans
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <VehicleImageGallery images={campervan.images} title={campervan.name} />

          {/* Details */}
          <div>
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="text-primary font-medium mb-1">{campervan.brand}</div>
                <h1 className="text-3xl font-bold mb-2">{campervan.name}</h1>
                <div className="flex gap-4 text-gray-600">
                  <span className="flex items-center gap-1">
                    <Calendar size={16} />
                    {campervan.year}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users size={16} />
                    {campervan.berths ? `${campervan.berths} Berths` : "Berths on request"}
                  </span>
                </div>
              </div>
              <button className="p-2 border rounded-lg hover:bg-gray-50">
                <Heart size={24} className="text-gray-400" />
              </button>
            </div>

            <div className="text-4xl font-bold text-secondary mb-6">{campervan.price}</div>

            <p className="text-gray-600 mb-8">{campervan.description}</p>
            {campervan.sourceUrl && (
              <p className="-mt-4 mb-8 text-sm text-gray-500">
                Imported listing details can change. <a href={campervan.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-primary underline">Check the original SMC listing</a> before making travel arrangements.
              </p>
            )}

            {/* Specifications */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Specifications</h2>
              <dl className="grid grid-cols-2 gap-4">
                {specificationRows.map(([label, value]) => (
                  <div key={label}>
                    <dt className="text-sm text-gray-500">{label}</dt>
                    <dd className="font-medium">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Features */}
            {campervan.features.length > 0 && <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Features</h2>
              <ul className="grid grid-cols-2 gap-2">
                {campervan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-600">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={`mailto:motorhomessalesuk@gmail.com?subject=${encodeURIComponent(`Enquiry about ${campervan.name}`)}`}
                className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold text-center transition"
              >
                Enquire Now
              </Link>
              <a
                href="tel:+447412800685"
                className="border border-secondary text-secondary px-8 py-3 rounded-lg font-semibold inline-flex items-center justify-center gap-2 hover:bg-gray-50 transition"
              >
                <Phone size={20} />
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

