import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FadeInUp, FadeIn, StaggerContainer } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { Server, Database, HardDrive, Shield, RefreshCw, Monitor, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Server,
    title: "Server Management",
    description: "Windows and Linux server administration, optimization, and 24/7 monitoring services."
  },
  {
    icon: Database,
    title: "Database Services",
    description: "SQL Server, Oracle, MySQL, PostgreSQL administration, tuning, and high availability setup."
  },
  {
    icon: HardDrive,
    title: "Storage Solutions",
    description: "SAN, NAS, and object storage implementation with performance optimization."
  },
  {
    icon: RefreshCw,
    title: "Backup & Recovery",
    description: "Comprehensive backup strategies with automated recovery and data protection."
  },
  {
    icon: Shield,
    title: "Disaster Recovery",
    description: "DR planning, implementation, and regular testing to ensure business continuity."
  },
  {
    icon: Monitor,
    title: "Infrastructure Monitoring",
    description: "Proactive monitoring with alerting, capacity planning, and performance analytics."
  }
];

const capabilities = [
  "Windows Server Administration",
  "Linux/Unix Administration",
  "VMware & Hyper-V Virtualization",
  "Active Directory Management",
  "Network Infrastructure",
  "Enterprise Storage Solutions"
];

const InfrastructureServices = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 network-pattern opacity-30" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <FadeInUp>
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                <Server className="w-5 h-5" />
                <span className="text-sm font-medium">IT Infrastructure</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Robust Infrastructure for{" "}
                <span className="text-gradient">Business Excellence</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Comprehensive IT infrastructure management including servers, databases, storage, backup, and disaster recovery solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gradient-primary glow-primary">
                  Assess Infrastructure
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline">
                  View Capabilities
                </Button>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInUp className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Infrastructure <span className="text-primary">Services</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Complete IT infrastructure management to keep your business running smoothly.
            </p>
          </FadeInUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FadeInUp key={feature.title} delay={index * 0.1}>
                <div className="glass  border-border rounded-2xl p-8 h-full hover:border-primary/50 transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </FadeInUp>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeInUp>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Technical <span className="text-primary">Capabilities</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Our certified engineers bring deep expertise across the full spectrum of IT infrastructure technologies.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{capability}</span>
                  </div>
                ))}
              </div>
            </FadeInUp>
            <FadeIn delay={0.2}>
              <div className="glass rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Our Approach</h3>
                <div className="space-y-6">
                  {["Infrastructure Assessment", "Architecture Planning", "Implementation & Migration", "Optimization & Hardening", "Ongoing Support & Monitoring"].map((step, index) => (
                    <div key={step} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                        {index + 1}
                      </div>
                      <span className="text-foreground">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInUp>
            <div className="glass rounded-3xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Optimize Your Infrastructure
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Let our experts assess and enhance your IT infrastructure for reliability and performance.
              </p>
              <Link to="/#contact">
                <Button size="lg" className="gradient-primary glow-primary">
                  Schedule Assessment
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InfrastructureServices;
