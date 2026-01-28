import { motion } from "framer-motion";
import { FadeInUp, StaggerContainer } from "@/components/ui/motion";
import { Shield, Brain, Clock, Cloud, Target, Lightbulb } from "lucide-react";

 const corePillars = [
  {
    icon: Shield,
    title: "Security-First DNA",
    description: "We believe security is not an add-on; it is the foundation. Every line of code and every server migration starts with a defense-in-depth strategy."
  },
  {
    icon: Brain,
    title: "Intelligent Scalability",
    description: "We don't just build for today. We design systems using AI and Containerization that grow seamlessly with your business."
  },
  {
    icon: Clock,
    title: "Unwavering Support",
    description: "Reliability is our hallmark. With 24/7 monitoring and proactive optimization, we ensure your business never sleeps."
  },
  {
    icon: Cloud,
    title: "Hybrid Agility",
    description: "We respect the power of On-Premises control while leveraging the infinite scale of the Cloud, providing a balanced, modernization-focused approach."
  }
];

const operationalModel = [
  {
    phase: "01",
    title: "Audit & Discover",
    action: "Deep dive into existing infrastructure and security gaps.",
    outcome: "A clear technical roadmap and ROI forecast."
  },
  {
    phase: "02",
    title: "Architecture",
    action: "Designing secure, scalable, and cost-optimized blueprints.",
    outcome: "A future-proof system design."
  },
  {
    phase: "03",
    title: "Engineering",
    action: "Hands-on deployment, migration, and AI integration.",
    outcome: "A fully functional, modernized tech stack."
  },
  {
    phase: "04",
    title: "Sustain (24/7)",
    action: "Round-the-clock monitoring, patching, and optimization.",
    outcome: "Zero downtime and continuous compliance."
  }
];

export const AboutSection = () => {
  return (
    <section id="about" className=" bg-background p-8 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-network-pattern opacity-30" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Who We Are */}
        <FadeInUp className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12">
            Who <span className="text-primary">We Are</span>
          </h2>
          <p className="text-muted-foreground max-w-4xl mx-auto text-lg leading-relaxed">
            Vi-3 Technologies Private Limited is a next-generation IT solutions and Startup company. 
            We specialize in helping businesses thrive in the digital era through secure, scalable, and intelligent technology. 
            We bridge the gap between legacy infrastructure and the future of AI and Quantum Computing, 
            all while maintaining a relentless focus on Cybersecurity and Operational Excellence.
          </p>
          <p className="text-foreground/80 max-w-3xl mx-auto text-lg mt-6">
            At our core, we are problem solvers who believe that complex technology transformation should be 
            innovative, secure, scalable and – above all – simple for our clients to navigate.
          </p>
        </FadeInUp>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <motion.div
           className="gradient-border"
           
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{scale: 1.05, transition: { duration: 0.2 }, transitionBehavior: "startToEnd"}}
            transition={{ duration: 0.5, delay:0.15 }}>

            
            
            <div className="glass group bg-white border border-border rounded-2xl p-8 h-full hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground group-hover:text-gradient">Our Vision</h3>
              </div>
              <p className="text-muted-foreground text-lg">
                To be the most trusted partner for secure, intelligent, and "always-on" enterprise technology.
              </p>
            </div>
            
          </motion.div>
          
<motion.div
           className="gradient-border"
           
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{scale: 1.05, transition: { duration: 0.2 }, transitionBehavior: "startToEnd"}}
            transition={{ duration: 0.5, delay:0.15 }}>

            <div className="glass group bg-white border border-border rounded-2xl p-8 h-full hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl  flex items-center justify-center">
                  <Lightbulb className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground group-hover:text-gradient">Our Mission</h3>
              </div>
              <p className="text-muted-foreground text-lg">
                To simplify digital transformation through expert engineering, "Security-First" design, and 24/7 operational excellence. 
                We strive to deliver enterprise-grade capabilities that maintain the agility and compliance today's market demands.
              </p>
            </div>
          </motion.div>
        </div>

       
      </div>
    </section>
  );
};
