import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import Link from "next/link";
import { blogPosts } from "@/data/blog";


const categories = [
  { name: "Travel Tips", count: 15 },
  { name: "Guides", count: 12 },
  { name: "Vehicle Reviews", count: 8 },
  { name: "Accessories", count: 6 },
  { name: "Maintenance", count: 9 },
  { name: "Technical", count: 4 },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-secondary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-gray-300">
            Tips, guides, and insights for motorhome and campervan enthusiasts
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                  <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <span className="text-gray-500">{post.title}</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <User size={14} />
                        {post.author}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {post.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {post.readTime}
                      </span>
                    </div>
                    <div className="text-sm text-primary font-medium mb-2">{post.category}</div>
                    <h3 className="text-xl font-semibold mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                    >
                      Read More
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-2 mt-12">
              <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">Previous</button>
              <button className="px-4 py-2 bg-primary text-white rounded-lg">1</button>
              <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">2</button>
              <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">3</button>
              <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">Next</button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Categories */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4 text-secondary">Categories</h3>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="flex justify-between items-center text-gray-600 hover:text-primary transition"
                    >
                      <span>{category.name}</span>
                      <span className="text-sm text-gray-400">({category.count})</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4 text-secondary">Recent Posts</h3>
              <ul className="space-y-4">
                {blogPosts.slice(0, 4).map((post) => (
                  <li key={post.id}>
                    <Link
                      href={`/blog/${post.id}`}
                      className="block group"
                    >
                      <h4 className="font-medium group-hover:text-primary transition line-clamp-2 mb-1">
                        {post.title}
                      </h4>
                      <p className="text-sm text-gray-500">{post.date}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="bg-primary text-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Subscribe to Our Blog</h3>
              <p className="text-gray-100 text-sm mb-4">
                Get the latest articles delivered to your inbox
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 rounded-lg text-gray-900 focus:ring-2 focus:ring-white"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-white text-primary px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
