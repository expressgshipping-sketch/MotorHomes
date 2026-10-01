"use client";

import { useState } from "react";
import Image from "next/image";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export default function ImageWithFallback({
  src,
  alt,
  className = "",
  width = 800,
  height = 600,
  priority = false,
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    setHasError(true);
  };

  if (hasError || !src || src.startsWith("https://placehold.co")) {
    return (
      <div
        className={`bg-gradient-to-br from-slate-100 to-slate-200 border-b border-gray-100 flex flex-col items-center justify-center text-center p-4 select-none ${className}`}
      >
        <svg
          className="w-12 h-12 text-slate-400 mb-2 opacity-75"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8h4l3 3v5h-2m-8 0h6"
          />
        </svg>
        <span className="text-xs font-semibold text-slate-600 line-clamp-1 max-w-[85%]">{alt}</span>
        <span className="text-[10px] text-slate-400 mt-0.5 tracking-wider uppercase">Photo coming soon</span>
      </div>
    );
  }

  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={handleError}
      priority={priority}
      unoptimized
    />
  );
}
