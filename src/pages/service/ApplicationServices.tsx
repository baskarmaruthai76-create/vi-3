import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FadeInUp, FadeIn, StaggerContainer } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { AppWindow, Code2, Layers, RefreshCw, Smartphone, Globe, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Code2,
    title: "Custom Development",
    description: "Build tailored applications that perfectly align with your unique business requirements and workflows."
  },
  {
    icon: RefreshCw,
    title: "Application Modernization",
    description: "Transform legacy applications into modern, scalable, and cloud-native solutions."
  },
  {
    icon: Layers,
    title: "API Development & Integration",
    description: "Create robust APIs and seamlessly integrate applications across your ecosystem."
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Develop cross-platform mobile applications that deliver exceptional user experiences."
  },
  {
    icon: Globe,
    title: "Web Applications",
    description: "Build responsive, performant web applications using modern frameworks and technologies."
  },
  {
    icon: AppWindow,
    title: "Enterprise Applications",
    description: "Develop scalable enterprise solutions that drive business transformation."
  }
];

const technologies = [
  "React & Next.js",
  "Node.js & Python",
  "Java & .NET",
  "React Native & Flutter",
  "Microservices Architecture",
  "GraphQL & REST APIs"
];

const ApplicationServices = () => {
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
                <AppWindow className="w-5 h-5" />
                <span className="text-sm font-medium">Application Services</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Build Applications That{" "}
                <span className="text-gradient">Drive Innovation</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                From custom development to modernization, we deliver end-to-end application services that transform your digital capabilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gradient-primary glow-primary">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline">
                  View Portfolio
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
              Application <span className="text-primary">Expertise</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive application services to meet every stage of your software lifecycle.
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

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeInUp>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Modern <span className="text-primary">Technology Stack</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                We leverage cutting-edge technologies and frameworks to build robust, scalable, and maintainable applications.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {technologies.map((tech, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{tech}</span>
                  </div>
                ))}
              </div>
            </FadeInUp>
            <FadeIn delay={0.2}>
              <div className="glass rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Development Process</h3>
                <div className="space-y-6">
                  {["Requirements Analysis", "Architecture & Design", "Agile Development", "Quality Assurance", "Deployment & Support"].map((step, index) => (
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
                Let's Build Something Amazing
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Partner with us to create applications that deliver real business value.
              </p>
              <Link to="/#contact">
                <Button size="lg" className="gradient-primary glow-primary">
                  Discuss Your Project
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

export default ApplicationServices;
