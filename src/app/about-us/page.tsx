import { Users, Award, MapPin, Clock } from "lucide-react";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-secondary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-gray-300">
            Helping you explore motorhomes and campervans
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Our Story */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-secondary">Our Story</h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-4">
                Motor Homes Sales UK helps you browse motorhomes and campervans, compare vehicle details and contact us about a vehicle that suits your plans.
              </p>
              <p className="mb-4">
                Our aim is to make it straightforward to review the information available and ask questions before arranging a viewing.
              </p>
              <p>
                Vehicle details and availability can change. Please contact us to confirm current stock, price and viewing arrangements before travelling.
              </p>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-secondary">Why Choose Us</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users size={24} className="text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Family-Run Business</h3>
                  <p className="text-gray-600">
                    We treat every customer like family, providing personalized service and building lasting relationships.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Award size={24} className="text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                  <p className="text-gray-600">
                    Our knowledgeable staff have years of experience and are passionate about helping you find your perfect vehicle.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <MapPin size={24} className="text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Viewing Arrangements</h3>
                  <p className="text-gray-600">
                    Contact us to confirm a vehicle's current location and arrange a viewing before travelling.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Clock size={24} className="text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">After-Sales Support</h3>
                  <p className="text-gray-600">
                    Our 20-bay workshop provides comprehensive servicing and maintenance to keep you on the road.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Our Values */}
          <section className="bg-gray-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold mb-6 text-secondary">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Quality</h3>
                <p className="text-gray-600">
                  We only stock vehicles that meet our rigorous quality standards, ensuring you receive the best.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Integrity</h3>
                <p className="text-gray-600">
                  Honest pricing and transparent dealings - we believe in doing business the right way.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Customer Care</h3>
                <p className="text-gray-600">
                  Your satisfaction is our priority. We go above and beyond to exceed your expectations.
                </p>
              </div>
            </div>
          </section>

          {/* Our Brands */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-secondary">Our Premium Brands</h2>
            <p className="text-gray-600 mb-8">
              We're proud to offer an extensive range of motorhomes and campervans from the world's leading manufacturers.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {["Frankia", "Auto-Sleepers", "Knaus", "Pilote", "Weinsberg", "Globecar"].map((brand) => (
                <div
                  key={brand}
                  className="bg-white border rounded-lg p-6 text-center hover:shadow-lg transition cursor-pointer"
                >
                  <div className="text-lg font-semibold text-secondary">{brand}</div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
