"use client";

import { Package, Wrench, Home, Battery, ShoppingBag, Phone, Filter } from "lucide-react";
import { useState } from "react";
import { accessories } from "@/data/accessories";
import Link from "next/link";

export default function AccessoriesPage() {
  const [filterCategory, setFilterCategory] = useState("all");

  const categories = Array.from(new Set(accessories.map((a) => a.category)));

  const filteredAccessories = accessories.filter((a) => {
    if (filterCategory !== "all" && a.category !== filterCategory) return false;
    return true;
  });

  const categoryIcons: Record<string, React.ReactNode> = {
    "Electrical": <Battery size={32} />,
    "Water & Plumbing": <Wrench size={32} />,
    "Heating & Climate": <Home size={32} />,
    "Security & Safety": <Package size={32} />,
    "Storage & Organization": <Home size={32} />,
    "Kitchen & Dining": <Package size={32} />,
    "Comfort & Living": <Home size={32} />,
    "Awnings & Covers": <Package size={32} />,
  };

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-secondary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Accessories</h1>
          <p className="text-xl text-gray-300">
            Browse our range of {accessories.length} quality accessories for your motorhome or campervan
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-4 items-center">
            <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
              <Filter size={18} />
              <span>Filters</span>
            </button>
            <select 
              className="px-4 py-2 border rounded-lg"
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
            >
              <option value="all">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            <div className="ml-auto text-sm text-gray-600">
              Showing {filteredAccessories.length} of {accessories.length}
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {filteredAccessories.map((accessory) => (
            <div key={accessory.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <span className="text-gray-500">{accessory.name}</span>
              </div>
              <div className="p-6">
                <div className="text-sm text-primary font-medium mb-1">{accessory.category}</div>
                <h3 className="text-lg font-semibold mb-2">{accessory.name}</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{accessory.description}</p>
                <div className="flex items-center justify-between">
                  <div className="text-xl font-bold text-secondary">{accessory.price}</div>
                  <Link
                    href={`/accessories/${accessory.id}`}
                    className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg font-medium transition"
                  >
                    View Details
                  </Link>
                </div>
                {!accessory.inStock && (
                  <div className="mt-2 text-sm text-red-500 font-medium">Out of Stock</div>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredAccessories.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No accessories match your filters.</p>
          </div>
        )}

        {/* Services */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-secondary">Accessories Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Wrench size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Professional Fitting</h3>
              <p className="text-gray-600">
                Our experienced technicians can professionally fit any accessories purchased from us.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Package size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Advice</h3>
              <p className="text-gray-600">
                Not sure what you need? Our team can provide expert advice on the best accessories for your vehicle.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Phone size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Special Orders</h3>
              <p className="text-gray-600">
                Can't find what you're looking for? We can special order items from our extensive supplier network.
              </p>
            </div>
          </div>
        </div>

        {/* Popular Brands */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-secondary">Popular Brands</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {["Thule", "Fiamma", "Waeco", "Dometic", "Sargent", "Sterling"].map((brand) => (
              <div
                key={brand}
                className="bg-white border rounded-lg p-6 text-center hover:shadow-lg transition cursor-pointer"
              >
                <div className="text-lg font-semibold text-secondary">{brand}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help Finding the Right Accessory?</h2>
          <p className="text-xl mb-6 text-gray-100">
            Contact our accessories team for expert advice and recommendations
          </p>
          <a
            href="tel:+447412800685"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            <Phone size={20} />
            Call +44 7412 800685
          </a>
        </div>
      </div>
    </div>
  );
}

