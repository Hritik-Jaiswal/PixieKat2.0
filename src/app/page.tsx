import { Suspense } from "react";
import HeroSection from "@/components/hero-section";
import FeaturedCategories from "@/components/featured-categories";
import ProductGrid from "@/components/product-grid";
import Statistics from "@/components/statistics";
import Testimonials from "@/components/testimonials";
import BlogSection from "@/components/blog-section";
import ClientButton from "@/components/client-button";

export default function HomePage() {
  return (
    <main>
      <Suspense fallback={<div>Loading hero...</div>}>
        <HeroSection />
      </Suspense>

      <Suspense fallback={<div>Loading statistics...</div>}>
        <Statistics />
      </Suspense>

      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Categories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse through our most popular categories and find exactly what you&apos;re looking for
            </p>
          </div>
          <Suspense fallback={<div>Loading categories...</div>}>
            <FeaturedCategories />
          </Suspense>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse our selection of top-rated gaming products and services
            </p>
          </div>
          <Suspense fallback={<div>Loading products...</div>}>
            <ProductGrid />
          </Suspense>
          <div className="text-center mt-8">
            <ClientButton size="lg" showArrow>
              View All Products
            </ClientButton>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
                <p className="text-muted-foreground">
                  We provide the best gaming services with secure transactions and instant delivery
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Secure Transactions</h3>
                    <p className="text-muted-foreground">
                      Your payments are secured with industry-standard encryption and protected by our secure escrow system.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Instant Delivery</h3>
                    <p className="text-muted-foreground">
                      Get your digital products delivered instantly after payment confirmation.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                    <p className="text-muted-foreground">
                      Our dedicated support team is always ready to help you with any questions.
                    </p>
                  </div>
                </div>
              </div>

              <ClientButton size="lg" showArrow>
                Learn More
              </ClientButton>
            </div>

            <div className="relative aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-lg" />
              <img
                src="/images/abstract-orange-shapes.jpg"
                alt="Why Choose Us"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <Suspense fallback={<div>Loading testimonials...</div>}>
        <Testimonials />
      </Suspense>

      <Suspense fallback={<div>Loading blog posts...</div>}>
        <BlogSection />
      </Suspense>
    </main>
  );
}
