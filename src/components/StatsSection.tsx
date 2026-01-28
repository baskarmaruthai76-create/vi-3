import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FadeInUp } from "@/components/ui/motion";

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
  delay: number;
}

const StatItem = ({ value, suffix, label, sublabel, delay }: StatItemProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        const duration = 2000;
        const steps = 60;
        const increment = value / steps;
        let current = 0;
        
        const counter = setInterval(() => {
          current += increment;
          if (current >= value) {
            setCount(value);
            clearInterval(counter);
          } else {
            setCount(Math.floor(current));
          }
        }, duration / steps);
        
        return () => clearInterval(counter);
      }, delay);
      
      return () => clearTimeout(timer);
    }
  }, [isInView, value, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      className="text-center"
    >
      <div className="text-5xl md:text-6xl lg:text-6xl font-bold text-primary mb-2">
        {count}
        <span className="text-black">{suffix}</span>
      </div>
      <div className="text-foreground font-semibold text-lg mb-1">{label}</div>
      <div className="text-muted-foreground text-sm">{sublabel}</div>
    </motion.div>
  );
};

const stats = [
  { value: 30, suffix: "+", label: "Years Combined", sublabel: "Leadership Experience" },
  { value: 24, suffix: "/7", label: "Managed Services", sublabel: "Always-On Support" },
  { value: 100, suffix: "%", label: "Security-First", sublabel: "DNA Approach" },
  { value: 22, suffix: "+", label: "Industries", sublabel: "Served Globally" },
];

const corePillars = [
  "Security-First DNA",
  "Intelligent Scalability",
  "Unwavering 24/7 Support",
  "Hybrid Cloud Agility",
  "AI & Quantum Ready",
  "Operational Excellence",
  "Defense-in-Depth Strategy",
];

export const StatsSection = () => {
  return (
    <section className="py-12 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <FadeInUp className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Meet <span className="text-gradient">Vi-3 Technologies</span>
          </h2>
           <p className=" pt-4 text-muted-foreground max-w-3xl mx-auto text-lg">
             Trusted partner to global enterprise structure for hybrid & multi-cloud operations.
          </p>
         
        </FadeInUp>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {stats.map((stat, index) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              sublabel={stat.sublabel}
              delay={index * 200}
            />
          ))}
        </div>

        {/* Core Pillars Ticker */}
        <div className="relative overflow-hidden pt-4">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          
          <div className="flex animate-ticker">
            {[...corePillars, ...corePillars].map((pillar, index) => (
              <div
                key={index}
                className="flex items-center gap-4 px-8 shrink-0"
              >
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM8 12l-2-2 1.4-1.4L8 9.2l4.6-4.6L14 6l-6 6z" />
                  </svg>
                </div>
                <span className="text-foreground font-semibold whitespace-nowrap">
                  {pillar}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
