import Link from "next/link";

export default function CampervanBrandsPage() {
  const brands = [
    { name: "Auto-Sleepers", href: "/campervans/brands/auto-sleepers", description: "Premium British campervans" },
    { name: "Globecar", href: "/campervans/brands/globecar", description: "German quality campervans" },
    { name: "Yucon", href: "/campervans/brands/yucon", description: "Compact adventure campervans" },
    { name: "Wellhouse", href: "/campervans/brands/wellhouse", description: "UK-built campervan conversions" },
    { name: "Volkswagen", href: "/campervans/brands/volkswagen", description: "The iconic VW California" },
    { name: "Hymer", href: "/campervans/brands/hymer", description: "Premium German campervans" },
  ];

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-secondary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Campervan Brands</h1>
          <p className="text-xl text-gray-300">
            Explore campervans from the world's leading manufacturers
          </p>
        </div>
      </div>

      {/* Brands Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brands.map((brand) => (
            <Link
              key={brand.name}
              href={brand.href}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition group"
            >
              <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <span className="text-3xl font-bold text-gray-500 group-hover:text-primary transition">
                  {brand.name}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-secondary">{brand.name}</h3>
                <p className="text-gray-600 mb-4">{brand.description}</p>
                <span className="text-primary font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  View Range
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-secondary">Need Help Choosing?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our experienced team can help you find the perfect campervan from our extensive range of brands.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/contact-us"
              className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold transition"
            >
              Contact Us
            </Link>
            <Link
              href="/campervans"
              className="bg-secondary hover:bg-secondary-light text-white px-8 py-3 rounded-lg font-semibold transition"
            >
              View All Campervans
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
