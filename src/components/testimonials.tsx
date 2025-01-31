"use client";

import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Alex Thompson",
    role: "Professional Gamer",
    image: "/images/testimonials/alex.jpg",
    content:
      "The service quality is outstanding. Fast delivery and excellent customer support. Highly recommended!",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Game Streamer",
    image: "/images/testimonials/sarah.jpg",
    content:
      "Best gaming marketplace I've used. The prices are competitive and the process is smooth.",
    rating: 5,
  },
  {
    id: 3,
    name: "Mike Rodriguez",
    role: "eSports Player",
    image: "/images/testimonials/mike.jpg",
    content:
      "Trustworthy and reliable. I've been using their services for months and never had any issues.",
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Read what our satisfied customers have to say about their experience
            with our services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white/50 backdrop-blur-sm p-6 rounded-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <div className="flex mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              <p className="text-muted-foreground">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
