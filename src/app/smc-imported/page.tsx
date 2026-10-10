import Image from "next/image";
import Link from "next/link";
import { importedMotorhomes } from "@/data/smc_imported";
import { getUsableVehicleImages } from "@/lib/vehicle-images";

export default function ImportedPage({ searchParams }: { searchParams?: { page?: string } }) {
  const pageSize = 24;
  const productsWithPhotos = importedMotorhomes.flatMap((product) => {
    const images = getUsableVehicleImages(product.images);
    return images.length > 0 ? [{ ...product, images }] : [];
  });
  const pageCount = Math.ceil(productsWithPhotos.length / pageSize);
  const requestedPage = Number(searchParams?.page ?? 1);
  const page = Number.isFinite(requestedPage) ? Math.min(Math.max(1, requestedPage), pageCount) : 1;
  const products = productsWithPhotos.slice((page - 1) * pageSize, page * pageSize);

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-3">Imported Inventory</h1>
      <p className="text-gray-600 mb-8">{productsWithPhotos.length} downloaded listings with vehicle photos. Availability is shown where it could be verified against the reference site.</p>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <article key={product.id} className="overflow-hidden rounded-lg bg-white shadow">
            <Image src={product.images[0]} alt={`${product.brand} ${product.name}`} width={800} height={600} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-56 w-full object-cover" />
            <div className="p-5">
              <p className="text-sm font-medium text-primary">{product.isNew ? "New" : "Used"} {product.type} · {product.brand}</p>
              <h2 className="mt-1 text-xl font-semibold">{product.name}</h2>
              <p className={`mt-2 text-sm font-semibold ${product.availability === "Available" ? "text-green-700" : "text-amber-700"}`}>{product.availability ?? "Availability unverified"}</p>
              <p className="mt-2 text-lg font-bold">{product.price}</p>
              <Link className="mt-4 inline-block text-primary underline" href={`/${product.type === "Campervan" ? "campervans" : "motorhomes"}/${product.id}`}>View details</Link>
            </div>
          </article>
        ))}
      </div>
      {pageCount > 1 && <nav aria-label="Imported inventory pages" className="mt-8 flex items-center justify-between gap-4">
        <span className="text-sm text-gray-600">Page {page} of {pageCount}</span>
        <div className="flex gap-3">
          {page > 1 && <Link className="rounded border px-4 py-2" href={`/smc-imported?page=${page - 1}`}>Previous</Link>}
          {page < pageCount && <Link className="rounded border px-4 py-2" href={`/smc-imported?page=${page + 1}`}>Next</Link>}
        </div>
      </nav>}
    </main>
  );
}
