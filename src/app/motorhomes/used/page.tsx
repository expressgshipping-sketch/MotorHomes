"use client";

import Link from "next/link";
import { useState } from "react";
import { motorhomes } from "@/data/motorhomes";
import { importedMotorhomeCards } from "@/data/smc_listing";
import ImageWithFallback from "@/components/ImageWithFallback";
import Pagination from "@/components/Pagination";

export default function UsedMotorhomesPage() {
  const [page, setPage] = useState(1);

  const catalog = [...motorhomes, ...importedMotorhomeCards.filter((vehicle) => vehicle.type !== "Campervan")];
  const filteredMotorhomes = catalog.filter((m) => !m.isNew);
  const filteredStock = filteredMotorhomes;

  const filteredByType = filteredStock;
  const pageSize = 18;
  const pageCount = Math.ceil(filteredByType.length / pageSize);
  const currentPage = Math.min(page, pageCount || 1);
  const visibleMotorhomes = filteredByType.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-secondary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Used Motorhomes</h1>
          <p className="text-xl text-gray-300">
            Browse {filteredByType.length} used motorhome catalogue listings. Check each vehicle's availability before travelling.
          </p>
        </div>
      </div>

      {/* Motorhomes Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleMotorhomes.map((motorhome) => (
            <div
              key={motorhome.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition group"
            >
              <div className="relative">
                <ImageWithFallback
                  src={motorhome.images[0] || "/placeholder"}
                  alt={motorhome.name}
                  width={400}
                  height={224}
                  className="w-full h-56 object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-primary font-medium mb-1">{motorhome.brand}</div>
                <h3 className="text-xl font-semibold mb-2">{motorhome.name}</h3>
                {motorhome.availability && <p className={`mb-3 text-sm font-semibold ${motorhome.availability === "Available" ? "text-green-700" : "text-amber-700"}`}>{motorhome.availability}</p>}
                <div className="flex gap-4 text-sm text-gray-600 mb-4">
                  <span>{motorhome.type}</span>
                  <span>•</span>
                  <span>{motorhome.berths} Berths</span>
                  <span>•</span>
                  <span>{motorhome.year}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-secondary">{motorhome.price}</div>
                  <Link
                    href={`/motorhomes/${motorhome.id}`}
                    className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg font-medium transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Pagination page={currentPage} pageCount={pageCount} totalItems={filteredByType.length} pageSize={pageSize} onPageChange={setPage} />

        {filteredByType.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No used motorhomes match your filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}
