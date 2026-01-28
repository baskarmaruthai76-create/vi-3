import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FadeInUp, StaggerContainer, HoverScale } from "@/components/ui/motion";
import { motion } from "framer-motion";
import { Cloud, Server, Shield, Zap, Globe, Database, Lock, ArrowRight, Settings, BarChart } from "lucide-react";
import { Link } from "react-router-dom";

const cloudProviders = [
  {
    name: "AWS",
    description: "Amazon Web Services - Leading cloud platform for scalability and flexibility",
    features: ["EC2 & Lambda", "S3 Storage", "RDS & DynamoDB", "EKS & ECS"]
  },
  {
    name: "Azure",
    description: "Microsoft Azure - Enterprise-grade cloud with deep Microsoft integration",
    features: ["Virtual Machines", "Azure Functions", "Cosmos DB", "AKS"]
  },
  {
    name: "GCP",
    description: "Google Cloud Platform - Innovation-driven with AI/ML leadership",
    features: ["Compute Engine", "Cloud Functions", "BigQuery", "GKE"]
  },
  {
    name: "Private Cloud",
    description: "On-premises cloud solutions for complete data control and compliance",
    features: ["VMware", "OpenStack", "Kubernetes", "HCI Solutions"]
  }
];

const cloudServices = [
  {
    icon: Globe,
    title: "Secure Cloud Migration",
    description: "Lift and Shift or Re-platforming migrations to AWS, Azure, or GCP with zero data loss and minimal downtime."
  },
  {
    icon: Server,
    title: "On-Premises Refurbishment",
    description: "Modernize your physical data centre using Software-Defined Networking (SDN) and Hyper-Converged Infrastructure (HCI)."
  },
  {
    icon: Shield,
    title: "Cloud Security",
    description: "Zero-Trust security architecture with continuous identity verification and AI-driven threat detection."
  },
  {
    icon: BarChart,
    title: "Cloud Cost Optimization",
    description: "Analyze your cloud consumption to eliminate waste, ensuring you only pay for the resources you actually use."
  },
  {
    icon: Settings,
    title: "Intelligent Cloud Platforms",
    description: "Deep integration of AI and ML for self-managing, predictive, and optimized cloud operations."
  },
  {
    icon: Lock,
    title: "Disaster Recovery",
    description: "Business continuity solutions with automated failover, replication, and rapid recovery capabilities."
  }
];

const CloudServices = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-background to-background" />
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-soft" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <FadeInUp>
            <div className="flex items-center gap-2 mb-6">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
              <span className="text-muted-foreground">/</span>
              <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-primary">Cloud Solutions</span>
            </div>
            
            <div className="flex items-center gap-6 mb-8">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500/50 to-blue-600/50 flex items-center justify-center">
                <Cloud className="w-10 h-10 text-foreground" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                  Cloud Solutions
                </h1>
                <p className="text-xl text-muted-foreground mt-2">
                  AWS, Azure, GCP & Private Cloud
                </p>
              </div>
            </div>
            
            <p className="text-lg text-foreground/80 max-w-3xl mb-8">
              We provide end-to-end cloud services, including cloud strategy, migration, 
              optimization, and management across public, private, and hybrid environments. 
              Our solutions ensure scalability, cost efficiency, and high availability.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 gradient-primary text-primary font-semibold rounded-lg glow-primary hover:opacity-90 transition-opacity">
                Start Cloud Journey
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 border border-primary/50 text-foreground font-semibold rounded-lg hover:bg-primary/10 transition-colors">
                Cloud Assessment
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Cloud Providers */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInUp className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Multi-Cloud <span className="text-primary">Expertise</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Certified expertise across all major cloud platforms
            </p>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cloudProviders.map((provider, index) => (
              <FadeInUp key={provider.name} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="glass border border-border rounded-2xl p-6 h-full hover:border-primary/50 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-primary mb-2">{provider.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{provider.description}</p>
                  <ul className="space-y-2">
                    {provider.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                        <Zap className="w-4 h-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-network-pattern opacity-30" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <FadeInUp className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Cloud <span className="text-primary">Services</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              End-to-end cloud solutions for your business needs
            </p>
          </FadeInUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cloudServices.map((service, index) => (
              <motion.div
                key={service.title}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <HoverScale>
                  <div className="group glass border border-border rounded-2xl p-8 h-full hover:border-primary/50 transition-all duration-300">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/50 to-blue-600/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-7 h-7 text-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </HoverScale>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-600/10" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Move to the Cloud?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Let's build a cloud strategy that aligns with your business goals.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 gradient-primary text-primary font-semibold rounded-lg glow-primary hover:opacity-90 transition-opacity">
              Get Cloud Assessment
              <ArrowRight className="w-5 h-5" />
            </Link>
          </FadeInUp>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CloudServices;
