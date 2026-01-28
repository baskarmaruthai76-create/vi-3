import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ArrowRight } from "lucide-react";
import {
  servicesConfig,
  categoriesConfig,
  categoryIdMap,
} from "@/config/serviceConfig";

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, hsl(220 30% 6%) 0%, hsl(225 45% 18%) 50%, hsl(240 40% 15%) 100%)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              radial-gradient(ellipse at 80% 20%, rgba(21, 179, 151, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse at 20% 80%, rgba(167, 88, 212, 0.1) 0%, transparent 50%)
            `,
          }}
        />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-hero-foreground leading-tight mb-6">
              End-to-End{" "}
              <span className="text-gradient">Technology Solutions</span>
            </h1>
            <p className="text-lg text-hero-muted leading-relaxed max-w-3xl mx-auto">
              From AI and cybersecurity to cloud infrastructure and quantum
              computing, we deliver enterprise-grade solutions with agility and
              compliance. Explore our complete service catalog covering 60+
              specialized technology domains.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services by Category */}
      {categoriesConfig.map((category, categoryIndex) => {
        const categoryServices = servicesConfig.filter((s) => {
          if (Array.isArray(s.category)) {
            return s.category.includes(category.name);
          }
          return s.category === category.name;
        });

        if (categoryServices.length === 0) return null;

        return (
          <section
            id={category.id}
            key={category.name}
            className={`py-12 ${categoryIndex % 2 === 0 ? "bg-background" : "partners-gradient"}`}
          >
            <div className="container mx-auto px-4 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                  <span className="text-gradient">{category.name}</span>{" "}
                  Services
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  {category.description}
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryServices.map((service, index) => (
                  <motion.div
                    className="gradient-border"
                    key={service.slug}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link to={`/services/${service.slug}`}>
                      <motion.div
                        whileHover={{ y: -10 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
                        className="group h-full"
                      >
                        <div className="relative shadow-2xl h-full rounded-2xl overflow-hidden bg-card border border-border/60 hover:border-transparent transition">
                          {/* Image */}
                          <div className="relative h-52 overflow-hidden">
                            <img
                              src={service.image}
                              alt={service.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div
                              className={`absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center backdrop-blur-sm`}
                            >
                              <service.icon className="w-6 h-6 text-primary" />
                            </div>
                          </div>

                          {/* Content */}
                          <div className="p-6 relative">
                            <div
                              className={`absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r ${service.gradient} scale-x-0 group-hover:scale-x-100 transition-transform origin-left`}
                            />

                            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition">
                              {service.title}
                            </h3>

                            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                              {service.description}
                            </p>

                            {/* CTA */}
                            <div className="flex items-center gap-2 text-primary font-medium text-sm">
                              Learn More
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>

                          {/* Glow */}
                          <div
                            className={`absolute -bottom-12 -right-12 w-32 h-32 bg-gradient-to-br ${service.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition`}
                          />
                        </div>
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="py-20 cta-gradient">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-hero-foreground mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-hero-muted mb-8 max-w-2xl mx-auto">
              Contact our experts today to discuss how we can help you achieve
              your technology goals with our comprehensive suite of services.
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

export default ServicesPage;
