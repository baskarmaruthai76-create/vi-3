"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface ServiceFeature {
  title: string;
  description: string;
}

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: ServiceFeature[];
  keyBenefits?: string[];
  additionalSections?: {
    title: string;
    content: string;
  }[];
  relatedServices?: {
    title: string;
    slug: string;
  }[];
}

export const ServicePageLayout = ({
  title,
  subtitle,
  description,
  image,
  features,
  keyBenefits,
  additionalSections,
  relatedServices,
}: ServicePageLayoutProps) => {
  return (
    <div className="min-h-screen overflow-hidden">
      <Header />

      {/* ================= HERO ================= */}
      <section className="relative py-24  overflow-hidden" 
        style={{ 
          background: 'linear-gradient(135deg, hsl(220 30% 6%) 0%, hsl(225 45% 18%) 50%, hsl(240 40% 15%) 100%)' 
        }}>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-[10%] w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-20 left-[15%] w-80 h-80 bg-accent/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(21, 179, 151, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(21, 179, 151, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 mb-8 text-hero-muted hover:text-primary transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium">Back to Services</span>
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20"
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-semibold tracking-wide">{subtitle}</span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-hero-foreground mb-8">
                {title.split(' ').map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    className="inline-block mr-3"
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-xl text-hero-muted leading-relaxed max-w-xl mb-12"
              >
                {description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <Link
  to="/contact"
  className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-white font-semibold rounded-xl overflow-hidden shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all hover:scale-105"
>
  <span className="relative z-10">Get Started</span>

  <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />

  <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
</Link>

                
                <Link
                  to="/#contact"
                  className="px-8 py-4 bg-white/5 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
                >
                  Learn More
                </Link>
              </motion.div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden lg:block"
            >
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
                
                {/* Image container */}
                <div className="relative rounded-3xl overflow-hidden aspect-[6/4] bg-gradient-to-br from-primary/10 to-accent/10 ring-1 ring-white/10 shadow-2xl">
                  <img
                    src={image}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-24 bg-background relative">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase">
              What We Offer
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Key <span className="text-gradient">Capabilities</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive solutions designed to scale your business efficiently and securely.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div className="group gradient-border"
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{scale: 1.05, transition: { duration: 0.2 }, transitionBehavior: "startToEnd"}}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
                {/* Card */}
                <div className="relative h-full p-8 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 transition-opacity duration-300 pointer-events-none" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 group-hover:scale-150 transition-transform" />
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      {keyBenefits?.length && (
        <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--muted)/0.3) 100%)' }}>
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Why Choose <span className="text-gradient">Vi-3 Technologies</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Partner with us for unmatched expertise and innovation
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {keyBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                              whileHover={{scale: 1.05, transition: { duration: 0.2 }, transitionBehavior: "startToEnd"}}

                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group flex gap-4 p-6 rounded-2xl bg-card/80 backdrop-blur border border-border hover:border-primary/40 hover:bg-card transition-all hover:shadow-lg hover:-translate-y-0.5"
                >
                  <div className="shrink-0">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <span className="text-foreground leading-relaxed pt-1.5">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= ADDITIONAL ================= */}
      {additionalSections?.length && (
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl space-y-12">
            {additionalSections.map((section, index) => (
              <motion.div
               className="gradient-border "
            key={section.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{scale: 1.05, transition: { duration: 0.2 }, transitionBehavior: "startToEnd"}}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          > <div className="bg-white p-4 rounded-2xl">

                <h3 className="text-3xl font-bold mb-6 text-gradient">{section.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {section.content}
                </p>
          </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* ================= RELATED ================= */}
      {relatedServices?.length && (
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Explore Related Services
              </h2>
              <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
                Discover more ways we can help transform your business
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-4">
              {relatedServices.map((service, index) => (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-block px-8 py-3 rounded-full bg-card border border-border font-medium text-foreground hover:bg-primary hover:text-white hover:border-primary hover:scale-105 transition-all shadow-sm hover:shadow-lg"
                  >
                    {service.title}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= CTA ================= */}
      <section className="py-32 relative overflow-hidden" 
        style={{ 
          background: 'linear-gradient(135deg, hsl(220 30% 6%) 0%, hsl(225 45% 18%) 50%, hsl(240 40% 15%) 100%)' 
        }}>
        
        {/* Animated background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1.5s' }} />
        </div>

        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-5xl md:text-6xl font-extrabold text-hero-foreground mb-6 leading-tight">
              Ready to Transform <br />
              <span className="text-gradient">Your Business?</span>
            </h2>
            <p className="text-hero-muted text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
              Let's discuss how Vi-3 Technologies can accelerate your growth with cutting-edge solutions tailored to your needs.
            </p>

           <Link
  to="/contact"
  className="group relative inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-primary to-accent text-white text-lg font-bold rounded-2xl overflow-hidden shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all hover:scale-105"
>
  <span className="relative z-10">Contact Us Today</span>
  <span className="relative z-10 group-hover:translate-x-1 transition-transform">
    →
  </span>

  <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
</Link>

          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};