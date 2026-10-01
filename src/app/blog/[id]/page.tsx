import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User, Share2 } from "lucide-react";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog";

const blogData = {
  1: {
    id: 1,
    title: "Top 10 Motorhome Destinations in the UK for 2026",
    author: "Motor Homes Sales UK Team",
    date: "05 Jan 2026",
    category: "Travel Tips",
    readTime: "8 min read",
    content: `
      <p>Planning your motorhome adventures for 2026? We've compiled a list of the top destinations across the UK that are perfect for motorhome enthusiasts. From stunning coastal retreats to breathtaking mountain landscapes, there's something for everyone.</p>
      
      <h2>1. Lake District National Park</h2>
      <p>The Lake District offers some of the most spectacular scenery in the UK. With numerous campsites catering to motorhomes, you can explore the lakes, mountains, and charming villages at your own pace.</p>
      
      <h2>2. Cornwall Coast</h2>
      <p>Experience the rugged beauty of Cornwall's coastline. Park up near stunning beaches, explore quaint fishing villages, and enjoy fresh seafood. The mild climate makes it perfect for year-round visits.</p>
      
      <h2>3. Scottish Highlands</h2>
      <p>For those seeking adventure, the Scottish Highlands offer dramatic landscapes and remote wilderness. Perfect for off-grid motorhome enthusiasts who want to escape the crowds.</p>
      
      <h2>4. Peak District</h2>
      <p>Accessible yet wild, the Peak District offers excellent motorhome facilities alongside stunning countryside. Great for hiking, cycling, and exploring historic towns.</p>
      
      <h2>5. Norfolk Broads</h2>
      <p>Unique waterways and peaceful countryside make the Norfolk Broads a motorhome paradise. Enjoy boating, wildlife watching, and gentle countryside walks.</p>
      
      <h2>6. Snowdonia National Park</h2>
      <p>Wales' highest mountain and stunning valleys await. With excellent motorhome sites and endless outdoor activities, Snowdonia is a must-visit.</p>
      
      <h2>7. Yorkshire Dales</h2>
      <p>Rolling hills, dry stone walls, and picturesque villages define the Yorkshire Dales. Perfect for leisurely drives and countryside exploration.</p>
      
      <h2>8. Pembrokeshire Coast</h2>
      <p>Britain's only coastal national park offers dramatic cliffs, sandy beaches, and abundant wildlife. Excellent motorhome sites are available throughout.</p>
      
      <h2>9. Cotswolds</h2>
      <p>For a more relaxed motorhome experience, the Cotswolds offer honey-coloured villages, gentle hills, and excellent pubs. Perfect for a leisurely tour.</p>
      
      <h2>10. Northumberland Coast</h2>
      <p>With its castles, beaches, and dark skies, Northumberland offers a unique motorhome experience. Visit Holy Island and enjoy some of the UK's best stargazing.</p>
      
      <h2>Tips for Motorhome Travel</h2>
      <ul>
        <li>Book campsites in advance, especially during peak season</li>
        <li>Check height and weight restrictions on routes</li>
        <li>Carry essential spare parts and tools</li>
        <li>Respect local communities and follow countryside codes</li>
        <li>Plan your route but allow flexibility for spontaneous discoveries</li>
      </ul>
      
      <p>Wherever you choose to explore in 2026, make sure your motorhome is ready for the journey. Visit our servicing page for expert maintenance and preparation advice.</p>
    `,
  },
};

export default function BlogDetailPage({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  const base = blogPosts.find((p) => p.id === id);
  if (!base) {
    notFound();
  }
  const detailed = blogData[id as keyof typeof blogData];
  const blogPost = {
    ...base,
    content: detailed?.content ?? `<p>${base.excerpt}</p><p>For more information, please <a href="/contact">contact our team</a>.</p>`,
  };
  const related = blogPosts.filter((p) => p.id !== id).slice(0, 2);

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-primary"
          >
            <ArrowLeft size={18} />
            Back to Blog
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
                <User size={16} />
                {blogPost.author}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar size={16} />
                {blogPost.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock size={16} />
                {blogPost.readTime}
              </span>
              <span>•</span>
              <span>{blogPost.category}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-secondary">
              {blogPost.title}
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
            <span className="text-gray-500 text-xl">{blogPost.title}</span>
          </div>

          {/* Content */}
          <div 
            className="prose prose-lg max-w-none text-gray-700"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />

          {/* Tags */}
          <div className="mt-12 pt-8 border-t">
            <h3 className="font-semibold mb-4 text-secondary">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {["Travel", "Destinations", "UK", "Motorhomes", "Tips"].map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Author Bio */}
          <div className="mt-12 bg-gray-50 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <User size={32} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">{blogPost.author}</h3>
                <p className="text-gray-600 text-sm">
                  The Motor Homes Sales UK team brings together decades of experience in the motorhome industry. 
                  We're passionate about helping customers find their perfect vehicle and enjoy the motorhome lifestyle to the fullest.
                </p>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          <div className="mt-16 pt-8 border-t">
            <h2 className="text-2xl font-bold mb-6 text-secondary">Related Posts</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {related.map((r) => (
                <Link key={r.id} href={`/blog/${r.id}`} className="block group">
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
