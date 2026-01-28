import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FadeInUp, StaggerContainer, HoverScale } from "@/components/ui/motion";
import { motion } from "framer-motion";
import { Headphones, Monitor, Shield, Clock, Wrench, BarChart, CheckCircle, ArrowRight, Settings, Activity } from "lucide-react";
import { Link } from "react-router-dom";

import cloudManagedImg from "@/assets/services/cloud-managed.jpg";

const managedServices = [
  {
    icon: Monitor,
    title: "Proactive Infrastructure Monitoring",
    description: "We use advanced RMM (Remote Monitoring & Management) tools to track the health of your servers, networks, and endpoints in real-time."
  },
  {
    icon: Shield,
    title: "Automated Patch Management",
    description: "We handle the critical task of keeping your OS and software updated, scheduling deployments during off-peak hours to ensure zero business disruption."
  },
  {
    icon: Headphones,
    title: "Level 1-3 Technical Support",
    description: "A dedicated help desk available 24/7 to resolve everything from simple password resets to complex network failures."
  },
  {
    icon: BarChart,
    title: "Performance Optimization",
    description: "Monthly health checks and fine-tuning of your environment to ensure hardware and software are running at peak efficiency."
  },
  {
    icon: Clock,
    title: "SLA-Driven Resolution",
    description: "Guaranteed response times for mission-critical incidents with clear escalation paths and accountability."
  },
  {
    icon: Activity,
    title: "24/7 NOC Operations",
    description: "Round-the-clock Network Operations Center monitoring to catch and fix issues before they impact your business."
  }
];

const slaLevels = [
  {
    level: "Critical (P1)",
    response: "15 minutes",
    resolution: "4 hours",
    description: "Complete system outage or critical business impact"
  },
  {
    level: "High (P2)",
    response: "30 minutes",
    resolution: "8 hours",
    description: "Major functionality impaired, workaround available"
  },
  {
    level: "Medium (P3)",
    response: "2 hours",
    resolution: "24 hours",
    description: "Minor functionality impaired, low business impact"
  },
  {
    level: "Low (P4)",
    response: "4 hours",
    resolution: "72 hours",
    description: "General inquiries, enhancements, or routine requests"
  }
];

const benefits = [
  "Reduced Downtime & Business Disruption",
  "Predictable IT Costs",
  "Access to Enterprise-Grade Expertise",
  "Focus on Core Business Activities",
  "Enhanced Security & Compliance",
  "Scalable Support as You Grow"
];

const ManagedServices = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-background to-background" />
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-soft" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <FadeInUp>
            <div className="flex items-center gap-2 mb-6">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
              <span className="text-muted-foreground">/</span>
              <Link to="/#services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-primary">24×7 Managed Services</span>
            </div>
            
            <div className="flex flex-col lg:flex-row items-start gap-8 mb-8">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500/50 to-purple-600/50 flex items-center justify-center">
                  <Headphones className="w-10 h-10 text-foreground" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                    24×7 Managed Services
                  </h1>
                  <p className="text-xl text-muted-foreground mt-2">
                    Your "Always-On" IT Department
                  </p>
                </div>
              </div>
            </div>
            
            <p className="text-lg text-foreground/80 max-w-3xl mb-8">
              Our Managed Services act as your "Always-On" IT department, providing peace of mind through constant vigilance. 
              We deliver 24/7 monitoring, proactive maintenance, and expert support so you can focus on growing your business.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 gradient-primary text-primary font-semibold rounded-lg glow-primary hover:opacity-90 transition-opacity">
                Get 24/7 Support
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 border border-primary/50 text-foreground font-semibold rounded-lg hover:bg-primary/10 transition-colors">
                Request SLA Details
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-4">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInUp>
            <div className="relative rounded-3xl overflow-hidden">
              {/* <img 
                src={cloudManagedImg} 
                alt="24/7 Managed Services - Always-On IT Support" 
                className="w-full h-64 md:h-96 object-cover"
              /> */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-background/10 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {["24/7 Monitoring", "L1-L3 Support", "Proactive Maintenance", "SLA Guaranteed"].map((item) => (
                    <div key={item} className="glass rounded-xl px-4 py-3 text-center">
                      <span className="text-sm font-medium text-secondary">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInUp className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comprehensive <span className="text-primary">Managed Services</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              End-to-end IT management that keeps your business running smoothly
            </p>
          </FadeInUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {managedServices.map((service, index) => (
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
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500/50 to-purple-600/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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

      {/* SLA Levels */}
      <section className="py-12 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-network-pattern opacity-30" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <FadeInUp className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              SLA-Driven <span className="text-primary">Support Levels</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Guaranteed response and resolution times for every priority level
            </p>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {slaLevels.map((sla, index) => (
              <FadeInUp key={sla.level} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="glass border border-border rounded-2xl p-6 h-full hover:border-primary/50 transition-all duration-300 text-center">
                  <h3 className="text-lg font-bold text-primary mb-4">{sla.level}</h3>
                  <div className="space-y-3 mb-4">
                    <div>
                      <span className="text-sm text-muted-foreground block">Response Time</span>
                      <span className="text-2xl font-bold text-foreground">{sla.response}</span>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground block">Resolution Target</span>
                      <span className="text-xl font-semibold text-foreground">{sla.resolution}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{sla.description}</p>
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
                Why Choose Our <span className="text-primary">Managed Services?</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Partner with Vi-3 Technologies for enterprise-grade IT management that delivers peace of mind and measurable business value.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-600/10" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready for 24/7 Peace of Mind?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Let us handle your IT operations while you focus on what matters most – growing your business.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 gradient-primary text-primary font-semibold rounded-lg glow-primary hover:opacity-90 transition-opacity">
              Start Your Managed Services Journey
              <ArrowRight className="w-5 h-5" />
            </Link>
          </FadeInUp>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ManagedServices;
