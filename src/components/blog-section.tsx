"use client";

import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/utils";

const posts = [
  {
    id: 1,
    title: "Top 10 Gaming Tips for Beginners",
    excerpt:
      "Essential tips and tricks to help you improve your gaming skills and climb the ranks.",
    image: "/images/blog/gaming-tips.jpg",
    date: "2024-01-15",
    author: {
      name: "David Chen",
      image: "/images/authors/david.jpg",
    },
    category: "Gaming Tips",
  },
  {
    id: 2,
    title: "The Future of Esports: 2024 and Beyond",
    excerpt:
      "A deep dive into the evolving landscape of competitive gaming and what's next for esports.",
    image: "/images/blog/esports-future.jpg",
    date: "2024-01-10",
    author: {
      name: "Sarah Miller",
      image: "/images/authors/sarah.jpg",
    },
    category: "Esports",
  },
  {
    id: 3,
    title: "Understanding Game Account Security",
    excerpt:
      "Learn how to protect your gaming accounts and digital assets from hackers.",
    image: "/images/blog/account-security.jpg",
    date: "2024-01-05",
    author: {
      name: "Michael Wong",
      image: "/images/authors/michael.jpg",
    },
    category: "Security",
  },
];

export default function BlogSection() {
  return (
    <section className="py-16 bg-white/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Latest Gaming News</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay up to date with the latest gaming trends, tips, and industry
            insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="group block bg-white/50 backdrop-blur-sm rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-primary/90 text-white px-2 py-1 rounded text-sm">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden">
                      <Image
                        src={post.author.image}
                        alt={post.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {post.author.name}
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {formatDate(post.date)}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            View All Posts
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
