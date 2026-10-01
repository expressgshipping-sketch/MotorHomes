import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { newsItems } from "@/data/news";


export default function NewsPage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-secondary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">News & Events</h1>
          <p className="text-xl text-gray-300">
            Stay updated with the latest news, events, and offers from SMC Motorhomes
          </p>
        </div>
      </div>

      {/* News Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <article key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <span className="text-gray-500">{item.title}</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <Calendar size={16} />
                  <span>{item.date}</span>
                  <span>•</span>
                  <span>{item.category}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 line-clamp-2">{item.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{item.excerpt}</p>
                <Link
                  href={`/news/${item.id}`}
                  className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                >
                  Read More
                  <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-secondary hover:bg-secondary-light text-white px-8 py-3 rounded-lg font-semibold transition">
            Load More News
          </button>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-secondary">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 mb-8">
              Get the latest news, offers, and event updates delivered straight to your inbox
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
