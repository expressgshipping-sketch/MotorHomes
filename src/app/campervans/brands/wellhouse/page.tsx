import BrandVehicleInventory from "@/components/BrandVehicleInventory";
import { getCampervansByBrand } from "@/data/catalog-lookups";

export default function CampervanBrandPage({ searchParams }: { searchParams?: { page?: string } }) {
  const parsed = Number.parseInt(searchParams?.page || "1", 10);
  const page = Number.isFinite(parsed) ? parsed : 1;
  return <BrandVehicleInventory brand="Wellhouse" vehicles={getCampervansByBrand("Wellhouse")} basePath="/campervans/brands/wellhouse" page={page} />;
}