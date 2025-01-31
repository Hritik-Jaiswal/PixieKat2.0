"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const categories = [
  {
    id: 1,
    name: "Game Services",
    description: "Professional gaming services and boosting",
    image: "/images/categories/game-services.jpg",
    link: "/categories/game-services",
    count: 150,
  },
  {
    id: 2,
    name: "Gift Cards",
    description: "Digital gift cards for games and platforms",
    image: "/images/categories/gift-cards.jpg",
    link: "/categories/gift-cards",
    count: 200,
  },
  {
    id: 3,
    name: "Game Items",
    description: "In-game items, skins, and collectibles",
    image: "/images/categories/game-items.jpg",
    link: "/categories/game-items",
    count: 300,
  },
  {
    id: 4,
    name: "Game Accounts",
    description: "Verified gaming accounts for sale",
    image: "/images/categories/game-accounts.jpg",
    link: "/categories/accounts",
    count: 100,
  },
];

export default function FeaturedCategories() {
  return (
    <section className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Featured Categories</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Browse through our most popular categories and find exactly what you're looking for
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link
              href={category.link}
              className="group block overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md"
            >
              <div className="relative h-48">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold group-hover:text-primary">
                  {category.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {category.description}
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {category.count} items
                  </span>
                  <span className="text-sm font-medium text-primary group-hover:underline">
                    View Category →
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
