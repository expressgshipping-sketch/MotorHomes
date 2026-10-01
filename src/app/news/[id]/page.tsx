import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { notFound } from "next/navigation";
import { newsItems } from "@/data/news";

const newsData = {
  1: {
    id: 1,
    title: "The Season Finale Motorhome & Campervan Show Lincoln 2026",
    date: "21 Aug 2026",
    category: "News and Events",
    readTime: "5 min read",
    content: `
      <p>We're excited to announce our participation in the Season Finale Motorhome & Campervan Show taking place in Lincoln this year. This is one of the most anticipated events in the motorhome calendar, and we'll be there with a fantastic display of our latest models.</p>
      
      <h2>What to Expect</h2>
      <p>Visit our stand to see our extensive range of new and used motorhomes and campervans from premium brands including Frankia, Auto-Sleepers, Knaus, and more. Our expert team will be on hand to answer any questions and provide expert advice on finding your perfect vehicle.</p>
      
      <h2>Exclusive Show Offers</h2>
      <p>As a special show exclusive, we'll be offering fantastic deals on selected models. Whether you're looking for a luxury A-Class motorhome or a compact campervan, there's never been a better time to buy.</p>
      
      <h2>Show Details</h2>
      <ul>
        <li><strong>Date:</strong> September 2026</li>
        <li><strong>Location:</strong> Lincoln Showground</li>
        <li><strong>Opening Times:</strong> Daily 10am - 5pm</li>
      </ul>
      
      <p>We look forward to welcoming you to our stand and helping you find your dream motorhome or campervan. See you there!</p>
    `,
  },
};

export default function NewsDetailPage({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  const base = newsItems.find((n) => n.id === id);
  if (!base) {
    notFound();
  }
  const detailed = newsData[id as keyof typeof newsData];
  const newsItem = {
    ...base,
    readTime: detailed?.readTime ?? "2 min read",
    content: detailed?.content ?? `<p>${base.excerpt}</p><p>For more information, please <a href="/contact">contact our team</a>.</p>`,
  };
  const related = newsItems.filter((n) => n.id !== id).slice(0, 2);

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-primary"
          >
            <ArrowLeft size={18} />
            Back to News
          </Link>
        </div>
      </div>

      {/* Article */}
      <article className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <span className="flex items-center gap-1">
                <Calendar size={16} />
                {newsItem.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock size={16} />
                {newsItem.readTime}
              </span>
              <span>•</span>
              <span>{newsItem.category}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-secondary">
              {newsItem.title}
            </h1>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 text-gray-600 hover:text-primary">
                <Share2 size={20} />
                Share
              </button>
            </div>
          </div>

          {/* Featured Image */}
          <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg h-96 flex items-center justify-center mb-8">
            <span className="text-gray-500 text-xl">{newsItem.title}</span>
          </div>

          {/* Content */}
          <div 
            className="prose prose-lg max-w-none text-gray-700"
            dangerouslySetInnerHTML={{ __html: newsItem.content }}
          />

          {/* Related News */}
          <div className="mt-16 pt-8 border-t">
            <h2 className="text-2xl font-bold mb-6 text-secondary">Related News</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {related.map((r) => (
                <Link key={r.id} href={`/news/${r.id}`} className="block group">
                  <div className="bg-gray-100 rounded-lg h-40 flex items-center justify-center mb-3 px-4 text-center">
                    <span className="text-gray-400">{r.title}</span>
                  </div>
                  <h3 className="font-semibold group-hover:text-primary transition">{r.title}</h3>
                  <p className="text-sm text-gray-500">{r.date}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
