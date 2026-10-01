import BrandVehicleInventory from "@/components/BrandVehicleInventory";
import { getCampervansByBrand } from "@/data/catalog-lookups";

export default function CampervanBrandPage({ searchParams }: { searchParams?: { page?: string } }) {
  const parsed = Number.parseInt(searchParams?.page || "1", 10);
  const page = Number.isFinite(parsed) ? parsed : 1;
  return <BrandVehicleInventory brand="Auto-Sleepers" vehicles={getCampervansByBrand("Auto-Sleepers")} basePath="/campervans/brands/auto-sleepers" page={page} />;
}