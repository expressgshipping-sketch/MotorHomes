import { campervans, type Campervan } from "@/data/campervans";
import { motorhomes, type Motorhome } from "@/data/motorhomes";
import { importedMotorhomes } from "@/data/smc_imported";

export function getMotorhomeById(id: number): Motorhome | undefined {
  return motorhomes.find((vehicle) => vehicle.id === id)
    ?? importedMotorhomes.find((vehicle) => vehicle.id === id && vehicle.type !== "Campervan");
}

export function getMotorhomesByBrand(brand: string): Motorhome[] {
  const normalizedBrand = brand.toLowerCase();
  return [...motorhomes, ...importedMotorhomes.filter((vehicle) => vehicle.type !== "Campervan")]
    .filter((vehicle) => vehicle.brand.toLowerCase() === normalizedBrand);
}

export function getCampervanById(id: number): Campervan | undefined {
  return campervans.find((vehicle) => vehicle.id === id)
    ?? importedMotorhomes.find((vehicle) => vehicle.id === id && vehicle.type === "Campervan");
}

export function getCampervansByBrand(brand: string): Campervan[] {
  const normalizedBrand = brand.toLowerCase();
  return [...campervans, ...importedMotorhomes.filter((vehicle) => vehicle.type === "Campervan")]
    .filter((vehicle) => vehicle.brand.toLowerCase() === normalizedBrand || vehicle.brand.toLowerCase().startsWith(`${normalizedBrand} `));
}
