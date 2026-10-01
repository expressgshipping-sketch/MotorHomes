import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "Top 10 Motorhome Destinations in the UK for 2026",
    author: "SMC Team",
    date: "05 Jan 2026",
    category: "Travel Tips",
    readTime: "8 min read",
    excerpt: "Discover the best places to visit with your motorhome this year, from coastal retreats to mountain adventures.",
    image: "/placeholder-blog-1.jpg",
  },
  {
    id: 2,
    title: "A Beginner's Guide to Motorhome Ownership",
    author: "SMC Team",
    date: "15 Dec 2025",
    category: "Guides",
    readTime: "10 min read",
    excerpt: "Everything you need to know before buying your first motorhome, from choosing the right vehicle to essential maintenance tips.",
    image: "/placeholder-blog-2.jpg",
  },
  {
    id: 3,
    title: "Winter Motorhoming: Tips for Cold Weather Adventures",
    author: "SMC Team",
    date: "20 Nov 2025",
    category: "Travel Tips",
    readTime: "6 min read",
    excerpt: "Don't let winter stop your adventures. Learn how to prepare your motorhome for cold weather camping.",
    image: "/placeholder-blog-3.jpg",
  },
  {
    id: 4,
    title: "The Benefits of A-Class Motorhomes",
    author: "SMC Team",
    date: "10 Oct 2025",
    category: "Vehicle Reviews",
    readTime: "5 min read",
    excerpt: "Explore why A-Class motorhomes are becoming increasingly popular among discerning motorhome enthusiasts.",
    image: "/placeholder-blog-4.jpg",
  },
  {
    id: 5,
    title: "Motorhome vs Campervan: Which is Right for You?",
    author: "SMC Team",
    date: "25 Sep 2025",
    category: "Guides",
    readTime: "7 min read",
    excerpt: "We compare motorhomes and campervans to help you decide which type of vehicle best suits your lifestyle and needs.",
    image: "/placeholder-blog-5.jpg",
  },
  {
    id: 6,
    title: "Essential Motorhome Accessories for 2026",
    author: "SMC Team",
    date: "15 Aug 2025",
    category: "Accessories",
    readTime: "6 min read",
    excerpt: "Discover the must-have accessories that will enhance your motorhome experience this year.",
    image: "/placeholder-blog-6.jpg",
  },
  {
    id: 7,
    title: "How to Maintain Your Motorhome Battery",
    author: "SMC Team",
    date: "28 Jul 2025",
    category: "Maintenance",
    readTime: "5 min read",
    excerpt: "Proper battery maintenance is crucial for off-grid adventures. Learn the best practices for keeping your leisure batteries in top condition.",
    image: "/placeholder-blog-7.jpg",
  },
  {
    id: 8,
    title: "Best European Motorhome Routes for Summer",
    author: "SMC Team",
    date: "12 Jun 2025",
    category: "Travel Tips",
    readTime: "9 min read",
    excerpt: "Plan your European summer adventure with these spectacular motorhome routes through France, Italy, and Spain.",
    image: "/placeholder-blog-8.jpg",
  },
  {
    id: 9,
    title: "Understanding Motorhome Weights and Licences",
    author: "SMC Team",
    date: "20 May 2025",
    category: "Guides",
    readTime: "8 min read",
    excerpt: "Everything you need to know about motorhome weight categories, driving licences, and legal requirements in the UK.",
    image: "/placeholder-blog-9.jpg",
  },
  {
    id: 10,
    title: "Solar Power for Motorhomes: A Complete Guide",
    author: "SMC Team",
    date: "08 Apr 2025",
    category: "Technical",
    readTime: "12 min read",
    excerpt: "Learn how solar panels can transform your motorhome experience, from choosing the right system to installation tips.",
    image: "/placeholder-blog-10.jpg",
  },
  {
    id: 11,
    title: "Wild Camping vs Campsites: Pros and Cons",
    author: "SMC Team",
    date: "25 Mar 2025",
    category: "Travel Tips",
    readTime: "7 min read",
    excerpt: "We weigh the benefits and drawbacks of wild camping versus staying at organised campsites to help you choose your style.",
    image: "/placeholder-blog-11.jpg",
  },
  {
    id: 12,
    title: "Motorhome Insurance: What You Need to Know",
    author: "SMC Team",
    date: "10 Feb 2025",
    category: "Guides",
    readTime: "6 min read",
    excerpt: "Understanding motorhome insurance requirements, coverage options, and how to find the best policy for your needs.",
    image: "/placeholder-blog-12.jpg",
  },
];

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
