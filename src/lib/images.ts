export function generatePlaceholderImages(
  brand: string,
  name: string,
  type: string
): string[] {
  const cleanName = name.replace(/\s+/g, "+");
  const cleanBrand = brand.replace(/\s+/g, "+");
  const cleanType = type.replace(/\s+/g, "+");
  
  return [
    `https://placehold.co/800x600/414042/ef4050?text=${cleanBrand}+${cleanName}`,
    `https://placehold.co/800x600/414042/ef4050?text=${cleanBrand}+${cleanName}+Interior`,
    `https://placehold.co/800x600/414042/ef4050?text=${cleanBrand}+${cleanName}+Kitchen`,
    `https://placehold.co/800x600/414042/ef4050?text=${cleanBrand}+${cleanName}+Bedroom`,
  ];
}

export function generateAccessoryImages(
  brand: string,
  name: string,
  category: string
): string[] {
  const cleanName = name.replace(/\s+/g, "+");
  const cleanBrand = brand.replace(/\s+/g, "+");
  
  return [
    `https://placehold.co/800x600/414042/ef4050?text=${cleanBrand}+${cleanName}`,
    `https://placehold.co/800x600/414042/ef4050?text=${cleanName}+Detail`,
    `https://placehold.co/800x600/414042/ef4050?text=${cleanName}+Installed`,
  ];
}

export function generateBlogImage(title: string): string {
  const cleanTitle = title.replace(/\s+/g, "+").substring(0, 30);
  return `https://placehold.co/1200x600/414042/ef4050?text=${cleanTitle}`;
}

export function generateNewsImage(title: string): string {
  const cleanTitle = title.replace(/\s+/g, "+").substring(0, 30);
  return `https://placehold.co/1200x600/414042/ef4050?text=${cleanTitle}`;
}
