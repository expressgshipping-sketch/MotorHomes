import { importedMotorhomes } from "@/data/smc_imported";
import { importedMotorhomeCards } from "@/data/smc_listing";

const detailedImagesById = new Map(importedMotorhomes.map((vehicle) => [vehicle.id, vehicle.images]));

function vehiclePhotos(images: string[]): string[] {
  return images.filter((image) => !/\/image-0\.png$/i.test(image));
}

export const importedCardsWithVehiclePhotos = importedMotorhomeCards.flatMap((vehicle) => {
  const images = vehiclePhotos(detailedImagesById.get(vehicle.id) ?? vehicle.images);
  return images.length > 0 ? [{ ...vehicle, images }] : [];
});
