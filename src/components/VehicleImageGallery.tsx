"use client";

import { useState } from "react";
import ImageWithFallback from "@/components/ImageWithFallback";

export default function VehicleImageGallery({ images, title }: { images: string[]; title: string }) {
  const gallery = images.length ? images : [""];
  const [selected, setSelected] = useState(0);

  return (
    <div>
      <div className="mb-4 h-96 overflow-hidden rounded-lg">
        <ImageWithFallback src={gallery[selected]} alt={`${title} photo ${selected + 1}`} width={1200} height={900} className="h-full w-full object-cover" priority />
      </div>
      {gallery.length > 1 && (
        <div aria-label={`${gallery.length} photos of ${title}`} className="grid max-h-64 grid-cols-4 gap-2 overflow-y-auto sm:grid-cols-5">
          {gallery.map((image, index) => (
            <button
              key={`${image}-${index}`}
              type="button"
              aria-label={`Show photo ${index + 1} of ${gallery.length}`}
              aria-pressed={selected === index}
              onClick={() => setSelected(index)}
              className={`h-20 overflow-hidden rounded border-2 ${selected === index ? "border-primary" : "border-transparent"}`}
            >
              <ImageWithFallback src={image} alt={`${title} thumbnail ${index + 1}`} width={240} height={160} className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}
      <p className="mt-2 text-sm text-gray-500">{gallery.length} vehicle {gallery.length === 1 ? "photo" : "photos"}</p>
    </div>
  );
}
