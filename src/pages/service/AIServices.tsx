import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FadeInUp, StaggerContainer, HoverScale } from "@/components/ui/motion";
import { motion } from "framer-motion";
import { Brain, Bot, Cpu, Sparkles, Zap, TrendingUp, MessageSquare, Eye, Cog, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const aiCapabilities = [
  {
    icon: Brain,
    title: "Enterprise AI Stacks",
    description: "End-to-end deployment of AI, machine learning infrastructure and LLM integration with GPU orchestration and Vector Databases."
  },
  {
    icon: Cpu,
    title: "Machine Learning Operations (MLOps)",
    description: "Automate the lifecycle of your AI models—from training and testing to deployment and version control."
  },
  {
    icon: Bot,
    title: "Agentic AI & AI Agents",
    description: "Build autonomous AI agents that can plan, reason, use tools, and achieve goals with minimal human supervision."
  },
  {
    icon: MessageSquare,
    title: "Multi-Agent Systems",
    description: "Multiple AI agents collaborating, negotiating, and coordinating to solve complex problems efficiently."
  },
  {
    icon: Eye,
    title: "Multimodal Intelligence",
    description: "AI that seamlessly understands and generates text, images, audio, video, and structured data together."
  },
  {
    icon: Cog,
    title: "AI Governance",
    description: "Built-in ethics, transparency, explainability, and compliance by design for responsible AI deployment."
  }
];

const useCases = [
  {
    title: "Predictive Analytics",
    description: "Build data lakes and processing engines for forecasting trends and risks",
    icon: TrendingUp
  },
  {
    title: "Intelligent Automation",
    description: "AI-driven automation for complex business workflows",
    icon: Zap
  },
  {
    title: "Data Science Workbenches",
    description: "Secure, high-performance environments for data scientists",
    icon: Sparkles
  },
  {
    title: "Human-AI Collaboration",
    description: "AI augments human creativity and decision-making",
    icon: MessageSquare
  }
];

const benefits = [
        "End-to-end AI infrastructure deployment",
        "Automated ML model lifecycle management",
        "Real-time predictive analytics capabilities",
        "Secure experimentation environments",
        "Human-AI collaboration frameworks",
        "Trustworthy and governed AI systems"
      ];

const AIServices = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-soft" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <FadeInUp>
            <div className="flex items-center gap-2 mb-6">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
              <span className="text-muted-foreground">/</span>
              <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-primary">AI & Data Science</span>
            </div>
            
            <div className="flex items-center gap-6 mb-8">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-muted flex items-center justify-center">
                <Brain className="w-10 h-10 text-foreground" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                 AI & Data Science
                </h1>
                <p className="text-xl text-muted-foreground mt-2">
                  LLM, ML, Agentic AI & Intelligent Automation
                </p>
              </div>
            </div>
            
            <p className="text-lg text-foreground/80 max-w-3xl mb-8">
             We build the high-performance pipelines that turn raw data into competitive intelligence. From enterprise AI stacks to predictive analytics, we help you harness the power of artificial intelligence to transform your business.           </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 gradient-primary text-primary font-semibold rounded-lg glow-primary hover:opacity-90 transition-opacity">
                Start AI Journey
                <ArrowRight className="w-5 h-5" />
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 border border-primary/50 text-foreground font-semibold rounded-lg hover:bg-primary/10 transition-colors">
                Schedule Consultation
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-8 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-network-pattern opacity-30" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <FadeInUp className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our AI <span className="text-primary">Capabilities</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive AI solutions tailored to your business requirements
            </p>
          </FadeInUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiCapabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <HoverScale>
                  <div className="group glass border-border rounded-2xl p-8 h-full hover:border-primary/50 transition-all duration-300">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-muted flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <capability.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {capability.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {capability.description}
                    </p>
                  </div>
                </HoverScale>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-12 bg-card/50">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInUp className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Real-World <span className="text-primary">Applications</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See how businesses are leveraging our AI solutions
            </p>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <FadeInUp key={useCase.title} className="delay-100" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-center p-6 glass rounded-2xl h-full">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <useCase.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{useCase.title}</h3>
                  <p className="text-sm text-muted-foreground">{useCase.description}</p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

       {/* Benefits */}
      <section className="pb-8 text-center bg-card/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-center gap-12 items-center">
            <FadeInUp>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose  <span className="text-primary">Vi-3 Technologies</span>
              </h2>
              {/* <p className="text-muted-foreground mb-8">
                Partner with Vi-3 Technologies for enterprise-grade IT management that delivers peace of mind and measurable business value.
              </p> */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </FadeInUp>
            
            {/* <FadeInUp style={{ animationDelay: "0.2s" }}>
              <div className="glass rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Vi-3 Operational Model</h3>
                <div className="space-y-4">
                  {[
                    { phase: "01. Audit & Discover", desc: "Deep dive into existing infrastructure and security gaps" },
                    { phase: "02. Architecture", desc: "Designing secure, scalable, and cost-optimized blueprints" },
                    { phase: "03. Engineering", desc: "Hands-on deployment, migration, and integration" },
                    { phase: "04. Sustain (24/7)", desc: "Round-the-clock monitoring, patching, and optimization" }
                  ].map((step, index) => (
                    <div key={step.phase} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500/50 to-purple-600/50 flex items-center justify-center flex-shrink-0">
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
            </FadeInUp> */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Let's discuss how AI can transform your business operations and drive growth.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 gradient-primary text-primary font-semibold rounded-lg glow-primary hover:opacity-90 transition-opacity">
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </FadeInUp>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIServices;
