import Link from "next/link";
import { Calendar, Scale, Settings, Users } from "lucide-react";
import ImageWithFallback from "@/components/ImageWithFallback";
import type { Motorhome } from "@/data/motorhomes";

interface BrandVehicleInventoryProps {
  brand: string;
  vehicles: Motorhome[];
  basePath: string;
  page?: number;
}

export default function BrandVehicleInventory({ brand, vehicles, basePath, page = 1 }: BrandVehicleInventoryProps) {
  const pageSize = 18;
  const pageCount = Math.ceil(vehicles.length / pageSize);
  const currentPage = Math.min(Math.max(1, page), pageCount || 1);
  const visibleVehicles = vehicles.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  const availableCount = vehicles.filter((vehicle) => vehicle.availability === "Available").length;

  return (
    <main className="container mx-auto px-4 py-12">
      <Link href={basePath.startsWith("/campervans") ? "/campervans/brands" : "/brands"} className="text-primary hover:underline">
        All {basePath.startsWith("/campervans") ? "campervan" : "motorhome"} brands
      </Link>
      <h1 className="mt-4 text-4xl font-bold text-secondary">{brand} {basePath.startsWith("/campervans") ? "campervans" : "motorhomes"}</h1>
      <p className="mt-3 text-gray-600">
        {vehicles.length} catalogue listings · {availableCount} marked available in the latest source check. Please confirm current availability and price before travelling.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visibleVehicles.map((vehicle) => {
          const path = vehicle.type === "Campervan" ? "/campervans" : "/motorhomes";
          return (
            <article key={vehicle.id} className="overflow-hidden rounded-lg bg-white shadow">
              <ImageWithFallback src={vehicle.images[0] || ""} alt={`${brand} ${vehicle.name}`} width={800} height={520} className="h-56 w-full object-cover" />
              <div className="p-5">
                <p className="text-sm text-gray-600">{vehicle.isNew ? "New" : "Used"} · {vehicle.year || "Year on request"} · {vehicle.availability || "Availability unverified"}</p>
                <h2 className="mt-2 text-xl font-semibold">{vehicle.name}</h2>
                <div className="mt-3 grid grid-cols-2 gap-2 text-sm text-gray-600">
                  <span className="inline-flex items-center gap-1"><Users size={15} />{vehicle.berths > 0 ? `${vehicle.berths} berths` : "Berths on request"}</span>
                  <span className="inline-flex items-center gap-1"><Settings size={15} />{vehicle.transmission || "Details on request"}</span>
                  <span className="inline-flex items-center gap-1"><Calendar size={15} />{vehicle.year || "Year on request"}</span>
                  <span className="inline-flex items-center gap-1"><Scale size={15} />{vehicle.weight || "Weight on request"}</span>
                </div>
                <p className="mt-4 text-2xl font-bold text-secondary">{vehicle.price}</p>
                <Link href={`${path}/${vehicle.id}`} className="mt-4 inline-block rounded bg-primary px-4 py-2 font-medium text-white hover:bg-primary-dark">View details</Link>
              </div>
            </article>
          );
        })}
      </div>

      {vehicles.length === 0 && <p className="py-12 text-center text-gray-600">No catalogue listings found for this brand.</p>}
      {pageCount > 1 && (
        <nav aria-label="Brand listings pages" className="mt-10 flex items-center justify-center gap-4">
          {currentPage > 1 && <Link className="rounded border px-4 py-2" href={`${basePath}?page=${currentPage - 1}`}>Previous</Link>}
          <span className="text-sm text-gray-600">Page {currentPage} of {pageCount}</span>
          {currentPage < pageCount && <Link className="rounded border px-4 py-2" href={`${basePath}?page=${currentPage + 1}`}>Next</Link>}
        </nav>
      )}
    </main>
  );
}
