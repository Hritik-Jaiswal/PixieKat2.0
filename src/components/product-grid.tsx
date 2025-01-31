"use client";

import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "League of Legends Boosting",
    description: "Professional rank boosting service",
    price: 29.99,
    image: "/images/products/lol-boost.jpg",
    category: "Game Services",
    rating: 4.8,
    reviews: 156,
  },
  {
    id: 2,
    name: "Steam Gift Card",
    description: "$50 Steam wallet code - Digital delivery",
    price: 50.00,
    image: "/images/products/steam-card.jpg",
    category: "Gift Cards",
    rating: 5.0,
    reviews: 243,
  },
  {
    id: 3,
    name: "CS:GO Skins Bundle",
    description: "Premium weapon skins collection",
    price: 149.99,
    image: "/images/products/csgo-skins.jpg",
    category: "Game Items",
    rating: 4.9,
    reviews: 89,
  },
  {
    id: 4,
    name: "Valorant Account",
    description: "Level 50+ account with rare skins",
    price: 199.99,
    image: "/images/products/valorant-account.jpg",
    category: "Game Accounts",
    rating: 4.7,
    reviews: 67,
  },
];

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="group bg-white/50 backdrop-blur-sm rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <Link href={`/products/${product.id}`}>
            <div className="relative h-48 overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute top-4 left-4 bg-primary/90 text-white px-2 py-1 rounded text-sm">
                {product.category}
              </div>
            </div>
          </Link>
          <div className="p-4">
            <Link href={`/products/${product.id}`}>
              <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                {product.name}
              </h3>
            </Link>
            <p className="text-muted-foreground text-sm mb-2 line-clamp-2">
              {product.description}
            </p>
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                ({product.reviews})
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-primary">
                {formatPrice(product.price)}
              </span>
              <Button size="sm" variant="outline">
                View Details
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
