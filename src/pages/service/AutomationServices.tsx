import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FadeInUp, FadeIn, StaggerContainer } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { Workflow, Zap, Bot, Settings, RefreshCw, Target, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Bot,
    title: "Robotic Process Automation",
    description: "Deploy intelligent bots to automate repetitive tasks, reducing manual effort and human error."
  },
  {
    icon: Workflow,
    title: "Workflow Orchestration",
    description: "Design and manage complex workflows across multiple systems and departments seamlessly."
  },
  {
    icon: Zap,
    title: "Business Process Automation",
    description: "Streamline end-to-end business processes with intelligent automation solutions."
  },
  {
    icon: Settings,
    title: "Integration Automation",
    description: "Connect disparate systems and automate data flow across your entire technology stack."
  },
  {
    icon: RefreshCw,
    title: "Continuous Improvement",
    description: "Monitor, analyze, and optimize automated processes for maximum efficiency."
  },
  {
    icon: Target,
    title: "Intelligent Decision Making",
    description: "Leverage AI-powered automation for smart routing and decision automation."
  }
];

const benefits = [
  "Reduce operational costs by up to 70%",
  "Eliminate manual errors and improve accuracy",
  "Accelerate process completion times",
  "Free up employees for strategic work",
  "Ensure 24/7 operations without downtime",
  "Scale operations without proportional cost increase"
];

const AutomationServices = () => {
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
                <Workflow className="w-5 h-5" />
                <span className="text-sm font-medium">Automation & Workflow</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Transform Operations with{" "}
                <span className="text-gradient">Intelligent Automation</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Streamline your business processes, reduce manual effort, and accelerate growth with our comprehensive automation and workflow orchestration solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gradient-primary glow-primary">
                  Start Automating
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline">
                  View Case Studies
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
              Automation <span className="text-primary">Capabilities</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              End-to-end automation solutions designed to transform how your business operates.
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

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeInUp>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose Our <span className="text-primary">Automation Solutions?</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Our automation experts help you identify opportunities, implement solutions, and continuously optimize your automated processes for maximum ROI.
              </p>
              <div className="grid gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </FadeInUp>
            <FadeIn delay={0.2}>
              <div className="glass rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Automation Roadmap</h3>
                <div className="space-y-6">
                  {["Process Discovery & Assessment", "Solution Design & Architecture", "Bot Development & Testing", "Deployment & Integration", "Monitoring & Optimization"].map((step, index) => (
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
                Ready to Automate Your Business?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Let's discuss how automation can transform your operations and drive efficiency.
              </p>
              <Link to="/#contact">
                <Button size="lg" className="gradient-primary glow-primary">
                  Schedule Consultation
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

export default AutomationServices;
