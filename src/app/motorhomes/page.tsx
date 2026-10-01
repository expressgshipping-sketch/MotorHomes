"use client";

import Link from "next/link";
import { Users, Settings, Calendar, Scale } from "lucide-react";
import { useEffect, useState } from "react";
import { motorhomes } from "@/data/motorhomes";
import { importedMotorhomeCards } from "@/data/smc_listing";
import ImageWithFallback from "@/components/ImageWithFallback";
import Pagination from "@/components/Pagination";

export default function MotorhomesPage() {
  const catalog = [...motorhomes, ...importedMotorhomeCards.filter((vehicle) => vehicle.type !== "Campervan")];
  const [filterType, setFilterType] = useState("all");
  const [filterBrand, setFilterBrand] = useState("all");
  const [filterBerths, setFilterBerths] = useState("all");
  const [filterYear, setFilterYear] = useState("all");
  const [filterCondition, setFilterCondition] = useState("all");
  const [filterBudget, setFilterBudget] = useState("all");
  const [filterWeight, setFilterWeight] = useState("all");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const berths = params.get("berths");
    if (berths && /^\d+$/.test(berths)) setFilterBerths(berths);
    const weight = params.get("weight");
    if (weight === "under3500" || weight === "over3500") setFilterWeight(weight);
  }, []);

  const filteredMotorhomes = catalog.filter((m) => {
    if (filterType !== "all" && m.type !== filterType) return false;
    if (filterBrand !== "all" && m.brand.toLowerCase() !== filterBrand.toLowerCase()) return false;
    if (filterBerths !== "all" && m.berths !== parseInt(filterBerths)) return false;
    if (filterYear !== "all" && m.year !== parseInt(filterYear)) return false;
    if (filterCondition !== "all") {
      if (filterCondition === "new" && !m.isNew) return false;
      if (filterCondition === "used" && m.isNew) return false;
    }
    if (filterBudget !== "all") {
      if (m.price === "Price on request") return false;
      const price = parseInt(m.price.replace(/[^0-9]/g, ""));
      if (filterBudget === "under30000" && price >= 30000) return false;
      if (filterBudget === "30000-50000" && (price < 30000 || price > 50000)) return false;
      if (filterBudget === "50000-75000" && (price < 50000 || price > 75000)) return false;
      if (filterBudget === "over75000" && price <= 75000) return false;
    }
    if (filterWeight !== "all") {
      const weight = parseInt(m.weight.replace(/[^0-9]/g, ""));
      if (filterWeight === "under3500" && weight >= 3500) return false;
      if (filterWeight === "over3500" && weight <= 3500) return false;
    }
    return true;
  });
  const pageSize = 18;
  const pageCount = Math.ceil(filteredMotorhomes.length / pageSize);
  const currentPage = Math.min(page, pageCount || 1);
  const visibleMotorhomes = filteredMotorhomes.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const brands = Array.from(new Set(catalog.map((m) => m.brand)));
  const types = Array.from(new Set(catalog.map((m) => m.type)));
  const years = Array.from(new Set(catalog.map((m) => m.year)));
  const berthCounts = Array.from(new Set(catalog.map((m) => m.berths)));

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Motorhomes</h1>
          <p className="text-xl text-gray-300">
            Browse the motorhome catalogue. Each imported listing shows its latest verified availability; unchecked and unavailable vehicles are labelled.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-4 items-center">
            <select
              className="px-4 py-2 border rounded-lg"
              value={filterCondition}
              onChange={(e) => setFilterCondition(e.target.value)}
            >
              <option value="all">All Conditions</option>
              <option value="new">New</option>
              <option value="used">Used</option>
            </select>
            <select
              className="px-4 py-2 border rounded-lg"
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
            >
              <option value="all">All Types</option>
              {types.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            <select
              className="px-4 py-2 border rounded-lg"
              value={filterBrand}
              onChange={(e) => setFilterBrand(e.target.value)}
            >
              <option value="all">All Brands</option>
              {brands.map((brand) => (
                <option key={brand} value={brand}>{brand}</option>
              ))}
            </select>
            <select
              className="px-4 py-2 border rounded-lg"
              value={filterBerths}
              onChange={(e) => setFilterBerths(e.target.value)}
            >
              <option value="all">All Berths</option>
              {berthCounts.map((berths) => (
                <option key={berths} value={berths}>{berths} Berths</option>
              ))}
            </select>
            <select
              className="px-4 py-2 border rounded-lg"
              value={filterYear}
              onChange={(e) => setFilterYear(e.target.value)}
            >
              <option value="all">All Years</option>
              {years.map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
            <select
              className="px-4 py-2 border rounded-lg"
              value={filterBudget}
              onChange={(e) => setFilterBudget(e.target.value)}
            >
              <option value="all">All Budgets</option>
              <option value="under30000">Under £30,000</option>
              <option value="30000-50000">£30,000 - £50,000</option>
              <option value="50000-75000">£50,000 - £75,000</option>
              <option value="over75000">Over £75,000</option>
            </select>
            <select
              className="px-4 py-2 border rounded-lg"
              value={filterWeight}
              onChange={(e) => setFilterWeight(e.target.value)}
            >
              <option value="all">All Weights</option>
              <option value="under3500">Up to 3500kg</option>
              <option value="over3500">Over 3500kg</option>
            </select>
            <div className="ml-auto text-sm text-gray-600">
              Showing {filteredMotorhomes.length} of {catalog.length} catalogue listings
            </div>
          </div>
        </div>
      </div>

      {/* Motorhomes Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleMotorhomes.map((motorhome) => (
            <div
              key={motorhome.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition group card-hover"
            >
              <div className="relative">
                <ImageWithFallback
                  src={motorhome.images[0]}
                  alt={`${motorhome.brand} ${motorhome.name}`}
                  width={800}
                  height={520}
                  className="h-56 w-full object-cover"
                />
                {motorhome.isNew && (
                  <span className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                    New
                  </span>
                )}
                {!motorhome.isNew && (
                  <span className="absolute top-4 left-4 bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Used
                  </span>
                )}
                {motorhome.isOffer && (
                  <span className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Offer
                  </span>
                )}
              </div>
              <div className="p-6">
                <div className="text-sm text-primary font-medium mb-1">{motorhome.brand}</div>
                <h3 className="text-xl font-semibold mb-3">{motorhome.name}</h3>
                {motorhome.availability && <p className={`mb-3 text-sm font-semibold ${motorhome.availability === "Available" ? "text-green-700" : "text-amber-700"}`}>{motorhome.availability}</p>}
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <Users size={16} />
                    <span>{motorhome.berths ? `${motorhome.berths} berths` : "Berths on request"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Settings size={16} />
                    <span>{motorhome.transmission === "—" ? "Details on request" : motorhome.transmission}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{motorhome.year}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Scale size={16} />
                    <span>{motorhome.weight === "—" ? "Weight on request" : motorhome.weight}</span>
                  </div>
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

        <Pagination page={currentPage} pageCount={pageCount} totalItems={filteredMotorhomes.length} pageSize={pageSize} onPageChange={setPage} />

        {filteredMotorhomes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No motorhomes match your filters. Try adjusting your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
