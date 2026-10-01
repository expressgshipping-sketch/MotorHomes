import Link from "next/link";
import { ArrowLeft, Phone, ShoppingBag, Check, Package } from "lucide-react";
import { notFound } from "next/navigation";
import { getAccessoryById } from "@/data/accessories";

export default function AccessoryDetailPage({ params }: { params: { id: string } }) {
  const accessory = getAccessoryById(parseInt(params.id));

  if (!accessory) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <Link
            href="/accessories"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-primary"
          >
            <ArrowLeft size={18} />
            Back to Accessories
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image */}
          <div>
            <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg h-96 flex items-center justify-center mb-4">
              <span className="text-gray-500 text-xl">{accessory.name}</span>
            </div>
          </div>

          {/* Details */}
          <div>
            <div className="text-primary font-medium mb-1">{accessory.category}</div>
            <h1 className="text-3xl font-bold mb-2">{accessory.name}</h1>
            <div className="text-sm text-gray-500 mb-4">Brand: {accessory.brand}</div>
            <div className="text-4xl font-bold text-secondary mb-6">{accessory.price}</div>
            <p className="text-gray-600 mb-8">{accessory.description}</p>

            {/* Stock Status */}
            <div className="mb-8">
              {accessory.inStock ? (
                <div className="flex items-center gap-2 text-green-600 font-medium">
                  <Check size={20} />
                  In Stock
                </div>
              ) : (
                <div className="flex items-center gap-2 text-red-600 font-medium">
                  Out of Stock
                </div>
              )}
            </div>

            {/* Features */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Features</h2>
              <ul className="space-y-2">
                {accessory.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-600">
                    <Check size={16} className="text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className={`px-8 py-3 rounded-lg font-semibold text-center transition ${
                  accessory.inStock
                    ? "bg-primary hover:bg-primary-dark text-white"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
                disabled={!accessory.inStock}
              >
                {accessory.inStock ? (
                  <>
                    <ShoppingBag size={20} className="inline mr-2" />
                    Add to Cart
                  </>
                ) : (
                  "Out of Stock"
                )}
              </button>
              <a
                href="tel:+447412800685"
                className="border border-secondary text-secondary px-8 py-3 rounded-lg font-semibold inline-flex items-center justify-center gap-2 hover:bg-gray-50 transition"
              >
                <Phone size={20} />
                Call Us
              </a>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Package size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Professional Fitting</h3>
            <p className="text-gray-600 text-sm">
              Our experienced technicians can professionally fit this accessory to your vehicle.
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Check size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Quality Guaranteed</h3>
            <p className="text-gray-600 text-sm">
              All our accessories come with manufacturer warranty and our quality guarantee.
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Phone size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Expert Advice</h3>
            <p className="text-gray-600 text-sm">
              Not sure if this is right for you? Call our team for expert advice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

