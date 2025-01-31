"use client";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const statistics = [
  {
    number: "5000",
    title: "Total Users",
  },
  {
    number: "1000",
    title: "Daily Transactions",
  },
  {
    number: "98",
    title: "Satisfaction Rate",
  },
  {
    number: "24",
    title: "Support Hours",
  },
];

export default function Statistics() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" ref={ref}>
          {statistics.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-white/50 backdrop-blur-sm"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={index * 100}
            >
              <h2 className="text-4xl font-bold text-primary mb-2">
                {inView ? (
                  <>
                    <CountUp end={parseInt(stat.number)} duration={2.5} />
                    <sup>+</sup>
                  </>
                ) : (
                  "0+"
                )}
              </h2>
              <p className="text-muted-foreground">{stat.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
