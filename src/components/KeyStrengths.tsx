import { FadeInUp, StaggerContainer } from "@/components/ui/motion";
import { motion } from "framer-motion";
import { 
  Lightbulb, 
  Layers, 
  Users, 
  Shield, 
  Zap, 
  Globe,
  Rocket,
  HeartHandshake
} from "lucide-react";

const strengths = [
  {
    icon: Lightbulb,
    title: "Innovation Capability",
    description: "We stay ahead of the curve by embracing emerging technologies like AI, Quantum Computing, and Web 3.0. Our R&D initiatives ensure clients benefit from cutting-edge solutions before they become mainstream.",
    highlights: ["AI & ML Integration", "Quantum-Ready Solutions", "Web 3.0 Expertise"]
  },
  {
    icon: Layers,
    title: "End-to-End Expertise",
    description: "From initial consulting to 24/7 managed services, we provide comprehensive technology solutions. Our full-stack capabilities mean you work with one trusted partner throughout your digital journey.",
    highlights: ["Complete Tech Stack", "Unified Service Delivery", "Single Point of Contact"]
  },
  {
    icon: Users,
    title: "Customer-Centric Approach",
    description: "We don't just deliver technology; we build partnerships. Our dedicated account teams ensure personalized attention, rapid response times, and solutions tailored to your unique business challenges.",
    highlights: ["Dedicated Support Teams", "Customized Solutions", "Long-term Partnerships"]
  },
  {
    icon: Shield,
    title: "Security-First Mindset",
    description: "Security is embedded in everything we do. From Zero Trust Architecture to Quantum-Safe Encryption, we protect your digital assets with enterprise-grade security at every layer.",
    highlights: ["Enterprise Security","Zero Trust Security", "Compliance Expertise", "24/7 SOC Operations"]
  },
  {
    icon: Zap,
    title: "Agile Delivery",
    description: "Our agile methodology ensures rapid deployment and continuous improvement. We deliver value incrementally, adapting quickly to changing requirements while maintaining quality.",
    highlights: ["Sprint-Based Delivery", "Continuous Integration","Continuous Delivery", "Rapid Time-to-Value"]
  },
  {
    icon: Globe,
    title: "Global Standards, Excellence",
    description: "We combine international best practices with deep International market understanding. Our solutions meet global compliance standards while addressing region-specific requirements.",
    highlights: ["NIST Standards","ISO 27001 Certified", "GDPR Compliant", "Other Industry Standards"]
  }
];

const differentiators = [
  {
    icon: Rocket,
    stat: "10x",
    label: "Faster Deployment",
    description: "Accelerated delivery through automation"
  },
  {
    icon: Shield,
    stat: "99.9%",
    label: "Uptime Guarantee",
    description: "Enterprise-grade reliability"
  },
  {
    icon: HeartHandshake,
    stat: "95%",
    label: "Client Retention",
    description: "Long-term partnership success"
  },
  {
    icon: Users,
    stat: "24/7",
    label: "Expert Support",
    description: "Round-the-clock assistance"
  }
];

export const KeyStrengths = () => {
  return (
    <section id="key-strengths" className="py-8 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-network-pattern opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <FadeInUp className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">Why Vi-3 Technologies</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Our Key <span className="text-primary">Strengths</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            What sets Vi-3 Technologies apart is our unwavering commitment to innovation, 
            security, and customer success.
          </p>
        </FadeInUp>

        {/* Strengths Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {strengths.map((strength, index) => (
            <motion.div
            className="gradient-border "
              key={strength.title}
              initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
                                    whileHover={{scale: 1.03, transition: { duration: 0.2 }, transitionBehavior: "startToEnd"}}

            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
           
              <div className="glass bg-white hover:scale-100 border-2 border-border rounded-2xl p-6 h-full hover:border-transparent transition-all duration-300 group">
                <div className="w-8 h-8 rounded-xl  flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
                   <motion.div
                                    animate={{ scale: [1, 1.15, 1] }}
                                    transition={{
                                      duration: 1.6,
                                      repeat: Infinity,
                                      repeatType: "loop",
                                      ease: "easeInOut",
                                    }}
                                    aria-hidden="true"
                                  >

                  <strength.icon className="w-7 h-7 text-primary" />
                                  </motion.div>
                </div>
                <h3 className="text-xl font-bold text-black group-hover:text-gradient mb-3 shadow-2xl transition-colors">
                  {strength.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {strength.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {strength.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="px-4 py-2 rounded-3xl bg-muted/40 text-primary text-xs font-medium"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            
            </motion.div>
          ))}
        </StaggerContainer>

        {/* Differentiators */}
        <FadeInUp>
          <div className="glass rounded-2xl p-8">
            {/* <h3 className="text-2xl font-bold text-center text-foreground mb-8">
              The Vi-3 <span className="text-primary ml-1"> Difference</span>
            </h3> */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {differentiators.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/20 flex items-center justify-center mx-auto mb-3">
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

                    <item.icon className="w-6 h-6 text-foreground" />
                                   </motion.div>
                  </div>
                  <div className="text-3xl font-bold text-primary mb-1">{item.stat}</div>
                  <div className="text-foreground font-medium text-sm">{item.label}</div>
                  <p className="text-muted-foreground text-xs mt-1">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
};
