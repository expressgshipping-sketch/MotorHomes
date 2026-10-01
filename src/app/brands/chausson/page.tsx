import BrandVehicleInventory from "@/components/BrandVehicleInventory";
import { getMotorhomesByBrand } from "@/data/catalog-lookups";

export default function BrandPage({ searchParams }: { searchParams?: { page?: string } }) {
  const parsed = Number.parseInt(searchParams?.page || "1", 10);
  const page = Number.isFinite(parsed) ? parsed : 1;
  return <BrandVehicleInventory brand="Chausson" vehicles={getMotorhomesByBrand("Chausson")} basePath="/brands/chausson" page={page} />;
}