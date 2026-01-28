import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FadeInUp, FadeIn, StaggerContainer } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { Atom, Cpu, Lock, FlaskConical, Sparkles, TrendingUp, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Cpu,
    title: "Quantum Algorithm Development",
    description: "Design and implement quantum algorithms tailored for your complex computational problems."
  },
  {
    icon: Lock,
    title: "Quantum Cryptography",
    description: "Future-proof your security with quantum-resistant encryption and key distribution."
  },
  {
    icon: FlaskConical,
    title: "Quantum Simulation",
    description: "Simulate molecular and physical systems for drug discovery and materials science."
  },
  {
    icon: Sparkles,
    title: "Quantum Machine Learning",
    description: "Leverage quantum computing to accelerate machine learning model training and inference."
  },
  {
    icon: TrendingUp,
    title: "Optimization Solutions",
    description: "Solve complex optimization problems in logistics, finance, and supply chain."
  },
  {
    icon: Atom,
    title: "Quantum Readiness",
    description: "Assess your organization's quantum readiness and develop a strategic adoption roadmap."
  }
];

const useCases = [
  "Financial Portfolio Optimization",
  "Drug Discovery & Molecular Modeling",
  "Supply Chain Optimization",
  "Cryptography & Security",
  "Climate Modeling",
  "AI & Machine Learning Enhancement"
];

const QuantumServices = () => {
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
                <Atom className="w-5 h-5" />
                <span className="text-sm font-medium">Quantum Computing</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Unlock the Power of{" "}
                <span className="text-gradient">Quantum Computing</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Pioneer the next frontier of computing with our quantum solutions designed for complex computational challenges that classical computers cannot solve.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gradient-primary glow-primary">
                  Explore Quantum
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline">
                  Read Whitepaper
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
              Quantum <span className="text-primary">Capabilities</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Cutting-edge quantum computing solutions for enterprises ready to lead the quantum revolution.
            </p>
          </FadeInUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FadeInUp key={feature.title} delay={index * 0.1}>
                <div className="glass rounded-2xl border border-border p-8 h-full hover:border-primary/50 transition-all duration-300 group">
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

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeInUp>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Industry <span className="text-primary">Applications</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Quantum computing is revolutionizing industries by solving problems that were previously impossible to tackle with classical computing.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {useCases.map((useCase, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{useCase}</span>
                  </div>
                ))}
              </div>
            </FadeInUp>
            <FadeIn delay={0.2}>
              <div className="glass rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Quantum Journey</h3>
                <div className="space-y-6">
                  {["Quantum Assessment", "Use Case Identification", "Algorithm Design", "Proof of Concept", "Production Implementation"].map((step, index) => (
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
                Ready for the Quantum Future?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Start your quantum journey with a free consultation to explore potential use cases for your organization.
              </p>
              <Link to="/#contact">
                <Button size="lg" className="gradient-primary glow-primary">
                  Begin Quantum Journey
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

export default QuantumServices;
