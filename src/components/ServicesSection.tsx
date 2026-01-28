import { motion } from "framer-motion";
import { FadeInUp, StaggerContainer } from "@/components/ui/motion";
import { Link } from "react-router-dom";

import aiImg from "@/assets/services/ai-services.jpg";
import datascience from "@/assets/services/data-science.jpg";
import cloudImg from "@/assets/services/cloud-solutions.jpg";
import managedImg from "@/assets/services/cloud-managed.jpg";
import cyberImg from "@/assets/services/cybersecurity.jpg";
import appImg from "@/assets/services/appimg.jpg";
import devsecopsImg from "@/assets/services/devsecops.jpg";
import devopsImg from "@/assets/services/devops.jpg";
import softwareDevelopmentImg from "@/assets/services/software-development.jpg";
import { ArrowRight } from "lucide-react";
import itInfrastructureImg from "@/assets/services/it-infrastructure.jpg";


const services = [
  {
    image: aiImg,
    title: "Artificial Intelligence",
    description: "Production-grade AI systems leveraging LLMs, agents, and automation to drive intelligent decision-making and real business outcomes.",
    features: ["Agentic AI", "AI Agents & Automation", "AI Workflows & Model Deployment", "LLM & Machine Learning"],
    gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
    slug: "artificial-intelligence",
  },
  {
    image: datascience,
    title: "Data Science",
    description: "Scalable data platforms transforming raw data into actionable insights through analytics, modeling, and decision intelligence.",
    features: ["Data Pipelines & ETL", "Statistical Modeling", "Predictive Analytics", "Data Quality & Observability"],
    gradient: "from-cyan-500 via-sky-500 to-blue-500",
    slug: "data-science",
  },
  {
    image: cloudImg,
    title: "Cloud Services",
    description: "Seamless cloud transitions with On-Prem modernization, secure migrations, and cost optimization.",
    features: ["AWS / Azure / GCP", "Hybrid Cloud Migration", "Cloud Cost Optimization", "On-Premises Migration"],
    gradient: "from-cyan-400 via-sky-500 to-blue-600",
    slug: "cloud-infrastructure",
  },
  {
    image: cyberImg,
    title: "Cybersecurity & Resilience",
    description: "Defense-in-Depth strategy with Zero Trust architecture, MDR, and Quantum-Safe encryption for complete protection.",
    features: ["Zero Trust Implementation", "CNAPP & CSPM", "Managed Detection & Response", "Quantum-Safe Cryptography"],
    gradient: "from-rose-500 via-red-500 to-orange-500",
    slug: "cybersecurity",
  },
   {
    image: devopsImg,
    title: "DevOps",
    description: "Continuous integration and delivery pipelines with infrastructure as code and automated deployment workflows.",
    features: ["CI/CD Automation", "Infrastructure as Code", "Configuration Management", "Deployment Automation"],
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    slug: "devops"
  },
  {
    image: devsecopsImg,
    title: "DevSecOps",
    description: "Modern engineering practices with containerization, Kubernetes orchestration, and security-integrated CI/CD pipelines.",
    features: ["Kubernetes & Docker", "Automated CI/CD Pipelines", "Security Integration", "Infrastructure as Code"],
    gradient: "from-emerald-500 via-green-500 to-teal-500",
    slug: "devsecops"
  },
 
  {
    image: itInfrastructureImg,
    title: "Enterprise IT Infrastructure",
    description: "Robust and scalable infrastructure foundations covering compute, storage, networking, and enterprise systems reliability.",
    features: [
      "Hosting & Network Management",
      "Storage & Backup Solutions",
      "Hosting Migration",
      "Capacity & Performance Planning"
    ],
    gradient: "from-blue-400 via-indigo-500 to-purple-600",
    slug: "it-infrastructure",
  },
  {
    image: managedImg,
    title: "24×7 Managed Services",
    description: "Your 'Always-On' IT department with proactive monitoring, automated patch management, and XLA-driven resolution.",
    features: ["Proactive Infrastructure Monitoring", "Automated Patch Management", "Level 1-3 Technical Support", "Performance Optimization"],
    gradient: "from-blue-400 via-indigo-500 to-purple-600",
    slug: "managed-services",
  },
  {
    image: appImg,
    title: "Application Services",
    description: "End-to-end application development, modernization, secure and lifecycle management aligned to business outcomes.",
    features: [
      "Custom Application Development",
      "Legacy Modernization",
      "API & Microservices Architecture",
      "Application Maintenance & Support"
    ],
    gradient: "from-indigo-400 via-purple-500 to-pink-500",
    slug: "application-services",
  },
  {
    image: softwareDevelopmentImg,
    title: "Software Development",
    description: "Custom software solutions with modern frameworks, agile methodologies, and full-stack development expertise.",
    features: [
      "Full-Stack Development",
      "Mobile App Development",
      "Agile & Scrum Methodologies",
      "Quality Assurance & Testing"
    ],
    gradient: "from-indigo-500 via-violet-500 to-purple-500",
    slug: "software-development",
  },
];


export const ServicesSection = () => {
  return (
    <section id="services" className="py-16  bg-background relative overflow-hidden">
      <div className=" mx-12 relative z-10">

        {/* Header */}
        <FadeInUp className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-2">
            <span className="text-primary">Secure.</span>{" "}
            <span className="text-foreground">Scalable.</span>{" "}
            <span className="text-primary">Intelligent.</span>
          </h2>
          <span className="text-3xl md:text-5xl text-gradient font-extrabold "> Technology Solutions</span>
         
          <p className="mt-6 text-muted-foreground max-w-3xl mx-auto text-lg">
            Enterprise technology services spanning AI, Cloud, Cybersecurity,
            and Quantum Computing — engineered for scale and resilience.
          </p>
        </FadeInUp>

        {/* Grid */}
        <StaggerContainer className="grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Link to={`/services/${service.slug}`}>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group h-full "
                >
                  <div className="relative shadow-2xl h-full rounded-2xl overflow-hidden bg-card border border-border/60 hover:border-primary/60 transition">

                    {/* Image */}
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-4 relative">
                      <div
                        className={`absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r ${service.gradient}
                        scale-x-0 group-hover:scale-x-100 transition-transform origin-left`}
                      />

                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition">
                        {service.title}
                      </h3>

                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features */}
                      <ul className="space-y-2 mb-5">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-2 text-sm text-card-foreground/80"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {/* CTA */}
                      <div className="flex items-center gap-2 text-primary font-medium text-sm">
                        Learn more
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </div>

                    {/* Glow */}
                    <div
                      className={`absolute -bottom-12 -right-12 w-32 h-32 bg-gradient-to-br ${service.gradient}
                      rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition`}
                    />
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
      {/* See All Services */}
      <FadeInUp className="mt-12 text-center">
        <Link to="/services">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="
              inline-flex items-center gap-3
              px-8 py-4 rounded-xl
              bg-primary text-primary-foreground
              font-semibold text-md
              shadow-lg shadow-primary/25
              hover:shadow-primary/40
              transition-all
            "
          >
            See all services
            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-6 transition-transform" />
          </motion.button>
        </Link>
      </FadeInUp>

    </section>
  );
};