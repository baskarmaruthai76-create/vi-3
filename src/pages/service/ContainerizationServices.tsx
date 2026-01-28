import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FadeInUp, FadeIn, StaggerContainer } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { Container, Boxes, Network, Shield, Gauge, RefreshCw, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Container,
    title: "Docker Containerization",
    description: "Package applications into lightweight, portable containers for consistent deployment across environments."
  },
  {
    icon: Boxes,
    title: "Kubernetes Orchestration",
    description: "Deploy, scale, and manage containerized applications with enterprise-grade Kubernetes solutions."
  },
  {
    icon: Network,
    title: "Service Mesh",
    description: "Implement Istio and Linkerd for secure, observable microservices communication."
  },
  {
    icon: Shield,
    title: "Container Security",
    description: "Secure your container lifecycle with vulnerability scanning and runtime protection."
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    description: "Optimize container resource utilization and application performance at scale."
  },
  {
    icon: RefreshCw,
    title: "CI/CD Integration",
    description: "Automate container builds and deployments with GitOps and continuous delivery pipelines."
  }
];

const platforms = [
  "Kubernetes (EKS, AKS, GKE)",
  "Docker & Docker Compose",
  "OpenShift",
  "Rancher",
  "Helm Charts",
  "ArgoCD & Flux"
];

const ContainerizationServices = () => {
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
                <Container className="w-5 h-5" />
                <span className="text-sm font-medium">Containerization</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Scale with{" "}
                <span className="text-gradient">Container Excellence</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Embrace microservices architecture with our comprehensive Kubernetes and Docker containerization solutions for scalable, resilient applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gradient-primary glow-primary">
                  Start Containerizing
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline">
                  View Architecture
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
              Container <span className="text-primary">Services</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              End-to-end containerization expertise to modernize your application infrastructure.
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

      {/* Platforms Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeInUp>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Platform <span className="text-primary">Expertise</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                We work with leading container platforms and orchestration tools to deliver production-ready solutions.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {platforms.map((platform, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{platform}</span>
                  </div>
                ))}
              </div>
            </FadeInUp>
            <FadeIn delay={0.2}>
              <div className="glass rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Container Journey</h3>
                <div className="space-y-6">
                  {["Assessment & Strategy", "Container Architecture Design", "Migration & Containerization", "Kubernetes Deployment", "Operations & Monitoring"].map((step, index) => (
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
                Ready to Containerize?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Let's discuss your containerization strategy and Kubernetes adoption roadmap.
              </p>
              <Link to="/#contact">
                <Button size="lg" className="gradient-primary glow-primary">
                  Get Started
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

export default ContainerizationServices;
