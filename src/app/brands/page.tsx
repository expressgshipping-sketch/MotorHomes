import Link from "next/link";
import { motorhomes } from "@/data/motorhomes";
import { importedMotorhomes } from "@/data/smc_imported";

const inventory = [...motorhomes, ...importedMotorhomes.filter((vehicle) => vehicle.type !== "Campervan")];
const toSlug = (brand: string) => brand.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export default function MotorhomeBrandsPage() {
  const brands = Array.from(new Set(inventory.map((vehicle) => vehicle.brand))).sort((a, b) => a.localeCompare(b));

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-secondary">Motorhome brands</h1>
      <p className="mt-3 text-gray-600">Browse vehicles by manufacturer and see how many listings are in the catalogue.</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {brands.map((brand) => {
          const count = inventory.filter((vehicle) => vehicle.brand === brand).length;
          return (
            <Link key={brand} href={`/brands/${toSlug(brand)}`} className="rounded-lg border bg-white p-5 shadow-sm transition hover:shadow-md">
              <span className="text-xl font-semibold text-secondary">{brand}</span>
              <span className="mt-2 block text-gray-600">{count} {count === 1 ? "vehicle" : "vehicles"}</span>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
