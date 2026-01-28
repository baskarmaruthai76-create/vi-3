import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FadeInUp, StaggerContainer, HoverScale } from "@/components/ui/motion";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, AlertTriangle, FileCheck, Users, Search, Bell, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const securityServices = [
  {
    icon: Shield,
    title: "Zero Trust Architecture",
    description: "Implementing strict identity verification for every user and device with continuous verification."
  },
  {
    icon: Eye,
    title: "Managed Detection & Response (MDR)",
    description: "24/7 threat hunting and incident response to identify, isolate, and neutralize cyberattacks before they spread."
  },
  {
    icon: Lock,
    title: "Quantum-Safe Encryption",
    description: "Preparing your data protection strategies for the era of quantum decryption with post-quantum cryptography."
  },
  {
    icon: FileCheck,
    title: "CNAPP Security",
    description: "Cloud-Native Application Protection Platform providing unified Code-to-Cloud security with CSPM, CWPP, and CIEM."
  },
  {
    icon: AlertTriangle,
    title: "Security Operations Center (SOC)",
    description: "AI-powered threat detection with SOAR automation, XDR visibility, and proactive threat hunting."
  },
  {
    icon: Users,
    title: "Security Governance",
    description: "Continuous risk assessment, policy enforcement, audit readiness, and regulatory compliance automation."
  }
];

const complianceFrameworks = [
  { name: "SOC 2", description: "Service Organization Control" },
  { name: "ISO 27001", description: "Information Security" },
  { name: "GDPR", description: "Data Protection" },
  { name: "HIPAA", description: "Healthcare Compliance" },
  { name: "PCI DSS", description: "Payment Card Security" },
  { name: "NIST", description: "Cybersecurity Framework" }
];

const CybersecurityServices = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32  overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-background to-background" />
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse-soft" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <FadeInUp>
            <div className="flex items-center gap-2 mb-6">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
              <span className="text-muted-foreground">/</span>
              <Link to="/#services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-primary">Cybersecurity & GRC</span>
            </div>
            
            <div className="flex items-center gap-6 mb-8">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-red-500/70 to-rose-600/50 flex items-center justify-center">
                <Shield className="w-10 h-10 text-foreground" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                  Cybersecurity & GRC
                </h1>
                <p className="text-xl text-muted-foreground mt-2">
                  Defense-in-Depth • Zero Trust • 24/7 MDR
                </p>
              </div>
            </div>
            
            <p className="text-lg text-foreground/80 max-w-3xl mb-8">
              We implement a Defense-in-Depth strategy, ensuring that security is a foundation, 
              not an afterthought. Our cybersecurity moves from reactive defense to intelligent, 
              adaptive, and proactive protection across digital ecosystems.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 gradient-primary text-primary font-semibold rounded-lg glow-primary hover:opacity-90 transition-opacity">
                Security Assessment
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 border border-primary/50 text-foreground font-semibold rounded-lg hover:bg-primary/10 transition-colors">
                Talk to Expert
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-network-pattern opacity-30" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <FadeInUp className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Security <span className="text-primary">Services</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Multi-layered security approach to protect your digital assets
            </p>
          </FadeInUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityServices.map((service, index) => (
              <motion.div
                key={service.title}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <HoverScale>
                  <div className="group border border-border glass rounded-2xl p-8 h-full hover:border-primary/50 transition-all duration-300">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-500/70 to-rose-600/70 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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

      {/* Compliance Frameworks */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInUp className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Compliance <span className="text-primary">Expertise</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We help you achieve and maintain compliance with major frameworks
            </p>
          </FadeInUp>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {complianceFrameworks.map((framework, index) => (
              <FadeInUp key={framework.name} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-center border border-border p-6 glass rounded-2xl hover:border-primary/50 transition-all duration-300">
                  <h3 className="text-xl font-bold text-primary mb-1">{framework.name}</h3>
                  <p className="text-xs text-muted-foreground">{framework.description}</p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-rose-600/10" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Don't Wait for a Breach
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Proactive security is the best defense. Let's assess your security posture today.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 gradient-primary text-primary font-semibold rounded-lg glow-primary hover:opacity-90 transition-opacity">
              Get Security Assessment
              <ArrowRight className="w-5 h-5" />
            </Link>
          </FadeInUp>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CybersecurityServices;
