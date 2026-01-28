import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FadeInUp, StaggerContainer, HoverScale } from "@/components/ui/motion";
import { motion } from "framer-motion";
import { GitBranch, Terminal, Shield, Container, Zap, RefreshCw, ArrowRight, MonitorCheck, Gauge, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const devopsServices = [
  {
    icon: Container,
    title: "Containerization (Kubernetes/Docker)",
    description: "We package your applications into containers, making them portable, easy to scale, and faster to deploy across any environment."
  },
  {
    icon: GitBranch,
    title: "Automated CI/CD Pipelines",
    description: "Integrating security into the CI/CD pipeline to speed up safe software delivery with GitHub Actions, GitLab CI, and Azure DevOps."
  },
  {
    icon: Shield,
    title: "DevSecOps Integration",
    description: "Security integrated into every stage of the development lifecycle with automated scanning, compliance checks, and vulnerability management."
  },
  {
    icon: Terminal,
    title: "Infrastructure as Code",
    description: "Terraform, Pulumi, and CloudFormation for reproducible, version-controlled infrastructure that scales with your needs."
  },
  {
    icon: RefreshCw,
    title: "GitOps Practices",
    description: "Declarative infrastructure and application delivery using Git as single source of truth with ArgoCD and Flux."
  },
  {
    icon: Zap,
    title: "Release Automation",
    description: "Streamlined release management with automated testing, staging environments, and zero-downtime deployments."
  }
];

const tools = [
  { name: "Kubernetes", category: "Orchestration" },
  { name: "Docker", category: "Containers" },
  { name: "Terraform", category: "IaC" },
  { name: "GitHub Actions", category: "CI/CD" },
  { name: "ArgoCD", category: "GitOps" },
  { name: "Prometheus", category: "Monitoring" },
  { name: "Grafana", category: "Dashboards" },
  { name: "Vault", category: "Secrets" }
];

const benefits = [
  "Faster time-to-market with automated pipelines",
  "Security built into every deployment",
  "Reduced manual errors and deployment failures",
  "Consistent environments across dev, staging, and production",
  "Scalable infrastructure that grows with you",
  "24/7 monitoring and incident response"
];

const DevOpsServices = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-background to-background" />
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse-soft" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <FadeInUp>
            <div className="flex items-center gap-2 mb-6">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
              <span className="text-muted-foreground">/</span>
              <Link to="/#services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-primary">DevOps & DevSecOps</span>
            </div>
            
            <div className="flex items-center gap-6 mb-8">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500/50 to-amber-600/50 flex items-center justify-center">
                <GitBranch className="w-10 h-10 text-foreground" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                  DevOps & DevSecOps
                </h1>
                <p className="text-xl text-muted-foreground mt-2">
                  Accelerate Delivery with Security Built-In
                </p>
              </div>
            </div>
            
            <p className="text-lg text-foreground/80 max-w-3xl mb-8">
              We integrate security into the CI/CD pipeline to speed up safe software delivery. Our modern engineering practices combine containerization, automated pipelines, and GitOps to accelerate your development while maintaining enterprise-grade security and reliability.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 gradient-primary text-primary font-semibold rounded-lg glow-primary hover:opacity-90 transition-opacity">
                DevOps Assessment
                <ArrowRight className="w-5 h-5" />
              </Link>
              {/* <Link to="/#contact" className="inline-flex items-center gap-2 px-8 py-4 border border-primary/50 text-foreground font-semibold rounded-lg hover:bg-primary/10 transition-colors">
                View Our Approach
              </Link> */}
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-8 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-network-pattern opacity-30" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <FadeInUp className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              DevOps <span className="text-primary">Capabilities</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              End-to-end DevOps transformation for faster, safer delivery
            </p>
          </FadeInUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {devopsServices.map((service, index) => (
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
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500/40 to-amber-600/40 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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

      {/* Tools */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInUp className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tools & <span className="text-primary">Technologies</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Industry-standard DevOps tools we implement and manage
            </p>
          </FadeInUp>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {tools.map((tool, index) => (
              <FadeInUp key={tool.name} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-center border border-border p-6 glass rounded-2xl hover:border-primary/50 transition-all duration-300">
                  <h3 className="text-lg font-bold text-foreground mb-1">{tool.name}</h3>
                  <p className="text-xs text-muted-foreground">{tool.category}</p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

       {/* Benefits */}
      <section className="py-12 bg-card/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeInUp>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose <span className="text-primary">Vi-3 DevSecOps?</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Our modern engineering approach integrates security into every stage of your development lifecycle, 
                accelerating delivery while maintaining enterprise-grade protection.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </FadeInUp>
            
            <FadeInUp style={{ animationDelay: "0.2s" }}>
              <div className="glass rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">DevSecOps Journey</h3>
                <div className="space-y-4">
                  {[
                    { phase: "01. Assessment", desc: "Evaluate current pipelines and identify improvement areas" },
                    { phase: "02. Architecture", desc: "Design secure, automated CI/CD pipeline architecture" },
                    { phase: "03. Implementation", desc: "Deploy containerization, automation, and security tools" },
                    { phase: "04. Optimization", desc: "Continuous monitoring and pipeline enhancement" }
                  ].map((step, index) => (
                    <div key={step.phase} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500/40 to-amber-600/40 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-foreground">{index + 1}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{step.phase}</h4>
                        <p className="text-sm text-muted-foreground">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-amber-600/10" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Accelerate Your Delivery?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Let's build pipelines that ship faster and safer than ever before.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 gradient-primary text-primary font-semibold rounded-lg glow-primary hover:opacity-90 transition-opacity">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
          </FadeInUp>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DevOpsServices;
