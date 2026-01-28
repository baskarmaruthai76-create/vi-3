import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FadeInUp, StaggerContainer, HoverScale } from "@/components/ui/motion";
import { motion } from "framer-motion";
import { Database,Cpu, Brain, Shield, BarChart, TrendingUp,  ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const dataServices = [
  {
    icon: Cpu,
    title: "AI Stack Engineering",
    description: "We design and deploy the specialized infrastructure (GPU orchestration, Vector Databases) required to run Large Language Models (LLMs) and custom AI apps."
  },
  {
    icon: Brain,
    title: "Machine Learning Operations (MLOps)",
    description: "We automate the lifecycle of your AI models—from training and testing to deployment and version control."
  },
  {
    icon: TrendingUp,
    title: "Predictive Analytics Pipelines",
    description: "We build data lakes and processing engines that help you forecast market trends, customer behaviour, and operational risks."
  },
  {
    icon: Shield,
    title: "Secure Data Science Workbenches",
    description: "Providing your data scientists with isolated, secure, and high-performance environments to experiment without risking production data."
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Building secure data lakes and predictive analytics pipelines with modern ETL processes and data governance."
  },
  {
    icon: BarChart,
    title: "Business Intelligence",
    description: "Interactive dashboards and reporting solutions that transform raw data into actionable business insights."
  }
];

const techStack = [
  { name: "GPU Orchestration", category: "AI Infrastructure" },
  { name: "Vector Databases", category: "AI/ML Storage" },
  { name: "LLM Integration", category: "AI Models" },
  { name: "Databricks", category: "Data Platform" },
  { name: "Snowflake", category: "Data Warehouse" },
  { name: "Apache Spark", category: "Processing" },
  { name: "MLflow", category: "MLOps" },
  { name: "Tableau/Power BI", category: "Visualization" }
];

const benefits = [
  "Enterprise AI infrastructure built for scale",
  "Automated ML model lifecycle management",
  "Secure, isolated data science environments",
  "Real-time predictive analytics capabilities",
  "Competitive intelligence from raw data",
  "Faster time-to-insight with modern data stacks"
];



const DataAnalyticsServices = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-background to-background" />
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse-soft" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <FadeInUp>
            <div className="flex items-center gap-2 mb-6">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
              <span className="text-muted-foreground">/</span>
              <Link to="/#services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-primary">Data & Analytics</span>
            </div>
            
            <div className="flex items-center gap-6 mb-8">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500/50 to-emerald-600/50 flex items-center justify-center">
                <Database className="w-10 h-10 text-foreground" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                  Data & Analytics
                </h1>
                <p className="text-xl text-muted-foreground mt-2">
                 Turn Raw Data into Competitive Intelligence
                </p>
              </div>
            </div>
            
            <p className="text-lg text-foreground/80 max-w-3xl mb-8">
              We build the high-performance pipelines that turn raw data into competitive intelligence. 
              From AI stack engineering to MLOps and predictive analytics, we deliver the infrastructure 
              and expertise to power your data-driven transformation.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 gradient-primary text-primary font-semibold rounded-lg glow-primary hover:opacity-90 transition-opacity">
                Data Strategy Session
                <ArrowRight className="w-5 h-5" />
              </Link>
              {/* <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 border border-primary/50 text-foreground font-semibold rounded-lg hover:bg-primary/10 transition-colors">
                View Case Studies
              </Link> */}
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-8 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-network-pattern opacity-30" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <FadeInUp className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Data <span className="text-primary">Services</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              End-to-end data solutions from ingestion to insights
            </p>
          </FadeInUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dataServices.map((service, index) => (
              <motion.div
                key={service.title}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <HoverScale>
                  <div className="group  border border-border glass rounded-2xl p-8 h-full hover:border-primary/50 transition-all duration-300">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500/50 to-emerald-600/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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

      {/* Tech Stack */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInUp className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Modern Data <span className="text-primary">Stack</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Industry-leading tools and platforms we work with
            </p>
          </FadeInUp>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {techStack.map((tech, index) => (
              <FadeInUp key={tech.name} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="  border border-border text-center p-6 glass rounded-2xl hover:border-primary/50 transition-all duration-300">
                  <h3 className="text-lg font-bold text-foreground mb-1">{tech.name}</h3>
                  <p className="text-xs text-muted-foreground">{tech.category}</p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

       {/* Benefits */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeInUp>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose <span className="text-primary">Vi-3 Data Science?</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                We build the specialized infrastructure and pipelines that transform your data 
                into competitive intelligence, powering AI-driven decision making across your organization.
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
                <h3 className="text-2xl font-bold text-foreground mb-6">Data Science Journey</h3>
                <div className="space-y-4">
                  {[
                    { phase: "01. Data Assessment", desc: "Evaluate current data infrastructure and identify opportunities" },
                    { phase: "02. Architecture Design", desc: "Design AI stack and data pipeline architecture" },
                    { phase: "03. Implementation", desc: "Deploy infrastructure, build pipelines, train models" },
                    { phase: "04. Operationalize", desc: "MLOps automation and continuous optimization" }
                  ].map((step, index) => (
                    <div key={step.phase} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500/40 to-emerald-600/40 flex items-center justify-center flex-shrink-0">
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
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-600/10" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Become Data-Driven?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Let's build a data strategy that unlocks insights and drives growth.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 gradient-primary text-primary font-semibold rounded-lg glow-primary hover:opacity-90 transition-opacity">
              Start Your Data Journey
              <ArrowRight className="w-5 h-5" />
            </Link>
          </FadeInUp>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DataAnalyticsServices;
