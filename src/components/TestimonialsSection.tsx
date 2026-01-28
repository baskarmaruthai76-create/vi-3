
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Vi-3 Technologies's cloud expertise helped us seamlessly migrate our infrastructure and achieve 40% cost savings. Their team is professional and always delivers on time.",
    author: "Rajesh Kumar",
    title: "CTO, TechVentures India",
    company: "TechVentures",
  },
  {
    quote:
      "The AI solutions implemented by Vi-3 have transformed our customer service operations. We've seen a 60% improvement in response times and customer satisfaction.",
    author: "Sarah Chen",
    title: "Head of Digital, Global Finance Corp",
    company: "GFC",
  },
  {
    quote:
      "Working with Vi-3 on our DevSecOps transformation has been invaluable. Their expertise in security-first development practices has strengthened our entire pipeline.",
    author: "Michael Thompson",
    title: "VP Engineering, SecureNet Systems",
    company: "SecureNet",
  },
  {
    quote:
      "The data analytics platform Vi-3 built for us has revolutionized how we make business decisions. Real-time insights are now at our fingertips.",
    author: "Priya Sharma",
    title: "Director of Analytics, DataDriven Inc",
    company: "DataDriven",
  },
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // 👇 auto-advance
  useEffect(() => {
    const interval = setInterval(next, 4000); // change speed here
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              The Vi-3 Technologies edge:{" "}
              <span className="text-gradient">What our clients say</span>
            </h2>
          </div>
        </FadeIn>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="bg-card rounded-3xl p-8 md:p-12 shadow-sm border border-border/70"
              >
                <Quote className="text-primary/50 w-16 h-16 mb-6" />
                <p className="text-foreground text-lg md:text-xl leading-relaxed mb-8">
                  {testimonials[currentIndex].quote}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                    {testimonials[currentIndex].author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonials[currentIndex].author}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {testimonials[currentIndex].title}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

           {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className="w-12 h-12 rounded-full border-2 border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ChevronLeft size={24} />
            </motion.button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-primary" : "bg-border"
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="w-12 h-12 rounded-full border-2 border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};
