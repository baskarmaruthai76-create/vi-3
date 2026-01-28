import { useState } from "react";
import { motion } from "framer-motion";
import { FadeInUp, StaggerContainer } from "@/components/ui/motion";
import {
  Building2,
  Car,
  Stethoscope,
  Zap,
  Factory,
  Plane,
  Phone,
  Film,
  Cpu,
  ShoppingBag,
  Shield,
  ShoppingCart,
  FlaskConical,
  Rocket,
  Landmark,
  Truck,
  GraduationCap,
  Leaf,
  Fuel,
  Home,
  Atom,
  Briefcase,
} from "lucide-react";

const industries = [
  { icon: Building2, name: "Banking & Finance" },
  { icon: Car, name: "Automotive" },
  { icon: Stethoscope, name: "Healthcare & Life-science" },
  { icon: Zap, name: "Utilities" },
  { icon: Factory, name: "Manufacturing" },
  { icon: Plane, name: "Hospitality & Travel" },
  { icon: Phone, name: "Telecommunications" },
  { icon: Film, name: "Media & Entertainment" },
  { icon: Cpu, name: "High-Tech & Enterprises" },
  { icon: ShoppingBag, name: "Consumer Products" },
  { icon: Shield, name: "Insurance" },
  { icon: ShoppingCart, name: "Retail & Ecommerce" },
  { icon: FlaskConical, name: "Life Science" },
  { icon: Rocket, name: "Aerospace & Defense" },
  { icon: Landmark, name: "Public Sector" },
  { icon: Truck, name: "Supply Chain" },
  { icon: GraduationCap, name: "Education & Research" },
  { icon: Leaf, name: "Agribusiness" },
  { icon: Fuel, name: "Oil, Gas & Energy" },
  { icon: Home, name: "Real Estate" },
  { icon: Atom, name: "Chemicals" },
  { icon: Briefcase, name: "Professional Services" },
];

export const Industries = () => {
  const [expanded, setExpanded] = useState(false);

  // 6 columns on lg → 2 rows = 12 items
  const VISIBLE_COUNT = 12;
  const visibleIndustries = expanded
    ? industries
    : industries.slice(0, VISIBLE_COUNT);

  return (
    <section id="industries" className="py-16 bg-card/30 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-network-pattern opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <FadeInUp className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-primary">Industries</span> We Serve
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Delivering transformative IT solutions across 22+ industries,
            helping businesses navigate digital transformation with confidence and trust.
          </p>
        </FadeInUp>

<StaggerContainer
  key={expanded ? "expanded" : "collapsed"}
  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
>
          {visibleIndustries.map((industry, index) => (
            <motion.div
            className="gradient-border"
              key={industry.name}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.3, delay: index * 0.05 }}

            >
              <motion.div 
                whileHover={{scale: 1.05, transition: { duration: 0.2 }, transitionBehavior: "startToEnd"}}
            transition={{ duration: 0.5, delay:0.15 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-white border shadow-2xl hover:border-transparent glass rounded-xl p-4 h-full flex flex-col items-center justify-center text-center  transition-all duration-300 cursor-default"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-3">
                  <industry.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground/80 group-hover:text-gradient transition-colors">
                  {industry.name}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* Load More */}
        {industries.length > VISIBLE_COUNT && (
          <div className="text-center mt-10">
            <button
              onClick={() => setExpanded(!expanded)}
              className="px-6 py-3 rounded-full border border-primary text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {expanded ? "Show less" : "Load more"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
