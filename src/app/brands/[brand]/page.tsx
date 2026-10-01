import { notFound } from "next/navigation";
import BrandVehicleInventory from "@/components/BrandVehicleInventory";
import { getMotorhomesByBrand } from "@/data/catalog-lookups";
import { motorhomes } from "@/data/motorhomes";
import { importedMotorhomes } from "@/data/smc_imported";

const inventory = [...motorhomes, ...importedMotorhomes.filter((vehicle) => vehicle.type !== "Campervan")];
const toSlug = (brand: string) => brand.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export function generateStaticParams() {
  return Array.from(new Set(inventory.map((vehicle) => vehicle.brand))).map((brand) => ({ brand: toSlug(brand) }));
}

export default function BrandInventoryPage({
  params,
  searchParams,
}: {
  params: { brand: string };
  searchParams?: { page?: string };
}) {
  const brand = Array.from(new Set(inventory.map((vehicle) => vehicle.brand))).find((name) => toSlug(name) === params.brand);
  if (!brand) notFound();

  const vehicles = getMotorhomesByBrand(brand);
  const parsedPage = Number.parseInt(searchParams?.page || "1", 10);
  const page = Number.isFinite(parsedPage) ? parsedPage : 1;
  return <BrandVehicleInventory brand={brand} vehicles={vehicles} basePath={`/brands/${params.brand}`} page={page} />;
}
