import React from "react";
import { FadeInUp, motion, StaggerContainer } from "./ui/motion";
import { Brain, Lightbulb, Shield, Clock, Cloud } from "lucide-react";

const operationalModel = [
  {
    phase: "01",
    title: "Assessment",
    action:
      "Evaluation of business goals, technical requirements, and risk factors. Stakeholder alignment, feasibility analysis, dependency mapping, and a clear execution roadmap with measurable ROI targets.",
  },
  {
    phase: "02",
    title: "Architecture",
    action:
      "Design of secure, scalable, and cost-efficient system blueprints. Technology selection, data flow design, integration planning, and a resilient foundation built for future growth.",
  },
  {
    phase: "03",
    title: "Engineering",
    action:
      "End-to-end planning, development, system integration, and automation delivery. Quality assurance, performance optimization, release management, and a production-ready high-performance technology stack.",
  },
  {
    phase: "04",
    title: "Scalability",
    action:
      "Continuous scaling, performance optimization, and infrastructure tuning. Capacity forecasting, resilience planning, cost control, and zero-downtime operations at scale.",
  },
];

const CorePillars = () => {
  const corePillars = [
    {
      icon: Lightbulb,
      title: "Innovation at the Core",
      description:
        "Innovation is engineered into our process. We continuously adopt emerging technologies AI-driven insights to keep your systems ahead of the curve, automation. ",
    },
    {
      icon: Shield,
      title: "Secure by Design",
      description:
        "We believe security is not an add-on; it is the foundation. Every line of code and every server migration starts with a defense-in-depth strategy.",
    },
    {
      icon: Clock,
      title: "Unwavering Support",
      description:
        "Reliability is our hallmark. With 24/7 monitoring and proactive optimization, we ensure your business never sleeps.",
    },
    {
      icon: Brain,
      title: "Intelligent Scalability",
      description:
        "We don't just build for today. We design systems using AI and Containerization that grow seamlessly with your business.",
    },

    {
      icon: Cloud,
      title: "Agility",
      description:
        "We respect the power of AI control while leveraging the infinite scale of the Cloud, providing a balanced, modernization-focused approach.",
    },
  ];
  return (
    <section className="px-4 lg:px-20 pt-20 bg-background">
      <FadeInUp className="text-center mb-10">
        <h3 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
          Our <span className="text-primary">Core Pillars</span>
        </h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          These values guide every project we undertake
        </p>
      </FadeInUp>
      <StaggerContainer className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
        {corePillars.map((pillar, index) => (
          <motion.div
            className="gradient-border"
            key={pillar.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
              transitionBehavior: "startToEnd",
            }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <div className="group bg-white border  border-border glass rounded-2xl p-6 h-full hover:border-transparent transition-all duration-300 text-center">
              <div className="w-14 h-14 rounded-xl  flex items-center justify-center mx-auto mb-4 group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                  }}
                  aria-hidden="true"
                >
                  <pillar.icon className="w-10 h-10 text-primary" />
                </motion.div>
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-gradient transition-colors">
                {pillar.title}
              </h4>
              <p className="text-sm text-muted-foreground">
                {pillar.description}
              </p>
            </div>
          </motion.div>
        ))}
      </StaggerContainer>

      <FadeInUp className="text-center mb-10">
        <h3 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
          Vi-3 Technologies<span className="text-primary"> Operating Model</span>
        </h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We follow a high-touch, disciplined methodology to ensure project
          success
        </p>
      </FadeInUp>

      <div className="grid mb-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {operationalModel.map((step, index) => (
          <motion.div
            className="gradient-border "
            key={step.phase}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
              transitionBehavior: "startToEnd",
            }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <div className="glass group bg-white border border-border rounded-2xl p-6 h-full hover:border-transparent transition-all duration-300 relative overflow-hidden">
              <div className="absolute -top-2 -right-1 text-8xl font-bold text-primary/5">
                {step.phase}
              </div>
              <div className="relative z-10">
                {/* <span className="text-sm font-bold text-primary">
                  {step.phase}
                </span> */}
                <h4 className="text-lg group-hover:text-gradient font-bold text-foreground mt-1 mb-3">
                  {step.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-3">
                  {step.action}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CorePillars;
