import { closeSync, openSync, readFileSync, readSync, statSync } from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";

const publicImagesDirectory = `${path.resolve(process.cwd(), "public", "smc-images")}${path.sep}`;
const smcLogoSize = 9_822;
const smcLogoSha256 = "4cc49e44fa38b473098abcbad1ba0ec45eb046a2522b71116c82f3b11be6edd8";

export function isUsableVehicleImage(image: string): boolean {
  if (!image.startsWith("/smc-images/")) return false;

  const imagePath = path.resolve(process.cwd(), "public", image.slice(1));
  if (!imagePath.startsWith(publicImagesDirectory)) return false;

  try {
    const file = statSync(imagePath);
    if (!file.isFile() || file.size === 0) return false;

    const fileDescriptor = openSync(imagePath, "r");
    let validImage = false;
    try {
      const header = Buffer.alloc(12);
      const bytesRead = readSync(fileDescriptor, header, 0, header.length, 0);
      const extension = path.extname(imagePath).toLowerCase();

      if (extension === ".jpg" || extension === ".jpeg") {
        validImage = bytesRead >= 2 && header[0] === 0xff && header[1] === 0xd8;
      } else if (extension === ".png") {
        validImage = bytesRead >= 8 && header.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]));
      } else if (extension === ".webp") {
        validImage = bytesRead >= 12 && header.toString("ascii", 0, 4) === "RIFF" && header.toString("ascii", 8, 12) === "WEBP";
      }
    } finally {
      closeSync(fileDescriptor);
    }

    if (!validImage) return false;
    if (file.size === smcLogoSize) {
      const hash = createHash("sha256").update(readFileSync(imagePath)).digest("hex");
      if (hash === smcLogoSha256) return false;
    }

    return true;
  } catch {
    return false;
  }
}

export function getUsableVehicleImages(images: string[]): string[] {
  return images.filter(isUsableVehicleImage);
}

export function getFirstUsableVehicleImage(images: string[]): string | undefined {
  return images.find(isUsableVehicleImage);
}
