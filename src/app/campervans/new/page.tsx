"use client";

import Link from "next/link";
import { useState } from "react";
import { campervans } from "@/data/campervans";
import { importedMotorhomeCards } from "@/data/smc_listing";
import ImageWithFallback from "@/components/ImageWithFallback";
import Pagination from "@/components/Pagination";

export default function NewCampervansPage() {
  const [page, setPage] = useState(1);

  const catalog = [...campervans, ...importedMotorhomeCards.filter((vehicle) => vehicle.type === "Campervan")];
  const filteredCampervans = catalog.filter((c) => c.isNew);
  const filteredStock = filteredCampervans;

  const filteredByType = filteredStock;
  const pageSize = 18;
  const pageCount = Math.ceil(filteredByType.length / pageSize);
  const currentPage = Math.min(page, pageCount || 1);
  const visibleCampervans = filteredByType.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-secondary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">New Campervans</h1>
          <p className="text-xl text-gray-300">
            Browse {filteredByType.length} new campervan catalogue listings. Check each vehicle's availability before travelling.
          </p>
        </div>
      </div>

      {/* Campervans Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleCampervans.map((campervan) => (
            <div
              key={campervan.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition group"
            >
              <div className="relative">
                <ImageWithFallback
                  src={campervan.images[0] || "/placeholder"}
                  alt={campervan.name}
                  width={400}
                  height={224}
                  className="w-full h-56 object-cover"
                />
                <span className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                  New
                </span>
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
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-secondary">{campervan.price}</div>
                  <Link
                    href={`/campervans/${campervan.id}`}
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
            <p className="text-gray-500 text-lg">No new campervans match your filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}
