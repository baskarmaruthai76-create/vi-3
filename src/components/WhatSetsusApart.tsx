import { motion } from "framer-motion";
import { Sparkles, Target, TrendingUp, Users, Zap, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const differentiators = [
  {
    icon: Target,
    title: "From SLAs to XLAs",
    subtitle: "Experience Level Agreements",
    description: "We've evolved beyond traditional Service Level Agreements. Our Experience Level Agreements (XLAs) focus on real user satisfaction and business impact, not just technical metrics.",
    highlight: "Experience-First Approach",
    gradient: "from-primary to-accent",
  },
  {
    icon: Users,
    title: "Experience-Centric Services",
    subtitle: "Digital Employee Experience (DEX)",
    description: "Success is measured by how technology shapes employee productivity and sentiment. We're responsible for the complete digital experience, not just uptime.",
    highlight: "DEX-Driven Metrics",
    gradient: "from-accent to-purple-500",
  },
  {
    icon: TrendingUp,
    title: "Outcome-Based Pricing",
    subtitle: "Results That Matter",
    description: "Our contracts are tied to real business results—like reducing customer churn rather than labor hours or ticket counts. Your success is our success.",
    highlight: "Pay for Results",
    gradient: "from-purple-500 to-pink-500",
  },
];

const stats = [
  { value: "100%", label: "Outcome-Focused" },
  { value: "XLA", label: "XLA - Outcome" },
  { value: "360°", label: "Experience View" },
];

export const WhatSetsusApart = () => {
  return (
    <section className="relative pt-12 overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]" />
      </div>

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full bg-primary/10 border border-primary/20"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary text-md font-semibold tracking-wide">Why Choose Vi-3</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            What Sets Us{" "}
            <span className="text-gradient">Apart</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            In an industry still bound by traditional metrics, we're pioneering a new era of 
            IT services focused on experience, outcomes, and real business value.
          </p>
        </motion.div>

        {/* Main Differentiators */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full p-8 rounded-3xl bg-card border border-border hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br ${item.gradient} transition-opacity duration-500`} style={{ opacity: 0.03 }} />
                
                {/* Top accent line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 shadow-lg`}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Highlight badge */}
                <div className="inline-flex items-center gap-1.5 mb-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                  <Zap className="w-3 h-3 text-primary" />
                  <span className="text-xs font-semibold text-primary">{item.highlight}</span>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm font-medium text-primary/80 mb-4">
                  {item.subtitle}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>

                {/* Bottom decoration */}
                <div className="absolute bottom-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity">
                  <item.icon className="w-full h-full" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative rounded-3xl overflow-hidden mb-16"
          style={{ 
            background: 'linear-gradient(135deg, hsl(220 30% 8%) 0%, hsl(225 45% 12%) 50%, hsl(240 40% 10%) 100%)' 
          }}
        >
          {/* Animated gradient border */}
          <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-[shimmer_3s_linear_infinite]" style={{ WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }} />
          
          <div className="relative p-8 md:p-12">
            <div className="grid md:grid-cols-4 gap-8 items-center">
              {/* Left content */}
              <div className="md:col-span-1">
                <div className="flex items-center gap-3 mb-3">
                  <Award className="w-6 h-6 text-primary" />
                  <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Edge</span>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Industry-Leading Standards
                </h3>
              </div>

              {/* Stats */}
              <div className="md:col-span-3 grid grid-cols-3 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-white/60 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <Link
            to="/about"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-primary/10 hover:bg-primary text-primary hover:text-white font-semibold rounded-full border border-primary/30 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
          >
            <span>Discover Our Approach</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
