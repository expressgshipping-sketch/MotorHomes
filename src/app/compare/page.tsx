import { Heart, Trash2 } from "lucide-react";

export default function ComparePage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-secondary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Favourites</h1>
          <p className="text-xl text-gray-300">
            View and manage your favourite motorhomes and campervans
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center py-12">
          <Heart size={64} className="mx-auto mb-4 text-gray-300" />
          <h2 className="text-2xl font-semibold mb-2 text-secondary">No favourites yet</h2>
          <p className="text-gray-600 mb-6">
            Start browsing our motorhomes and campervans to add items to your favourites list.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="/motorhomes"
              className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-medium transition"
            >
              Browse Motorhomes
            </a>
            <a
              href="/campervans"
              className="bg-secondary hover:bg-secondary-light text-white px-6 py-3 rounded-lg font-medium transition"
            >
              Browse Campervans
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
