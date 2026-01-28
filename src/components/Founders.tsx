import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Sparkles, TrendingUp } from 'lucide-react';

const StaggerContainer = ({ children, className }) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.div>
  );
};

const FadeInUp = ({ children, className }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

const founders = [
  {
    name: "Gajendrakumar PK",
    role: "Founder & Director",
    experience: "30+ Years",
    featured: true,
    expertise: [
      "Cloud Architecture & Migration",
      "DevOps & DevSecOps",
      "Infrastructure Modernization",
      "AI & ML Integration",
      "Enterprise Security"
    ],
description:
  "Gajendrakumar PK brings over 30 years of hands-on experience in building and operating large-scale enterprise systems and customers. As Founder and Director, he defines the leadership direction of the company and is directly involved in architecture decisions, platform stability, and engineering standards.",
    achievements: [
      "Led 100+ enterprise cloud migrations across global Fortune 500 companies",
      "Architected AI-driven infrastructure solutions serving millions of users",
      "Expert in AWS, Azure, and GCP ecosystems with multi-cloud expertise",
      "Pioneer in implementing DevSecOps practices for enterprise security"
    ]
  },
  {
    name: "Baskar Maruthai",
    role: "Co-Founder & Director",
    experience: "28+ Years",
    featured: false,
    expertise: [
      "Business Strategy & Operations",
      "Digital Transformation",
      "Client Relationship Management",
      "IT Service Management",
      "Cybersecurity & GRC",
      "AI Stack"
    ],
    description: "Baskar Maruthai is a visionary and strategic leader with over 28 years of excellence bridging cutting-edge technologies with AI & emerging market needs, he is responsible for translating our core vision into a innovative, scalable, secure, and resilient business. ",
    achievements: [
      "Managed enterprise accounts worth $50M+",
      "Established strategic technology partnerships",
      "Expert in ITIL and service management"
    ]
  }
];

const stats = [
  { value: 30, suffix: "+", label: "Years Combined", sublabel: "Leadership Excellence" },
  { value: 100, suffix: "+", label: "Enterprises Transformation", sublabel: "Across Global Markets" },
  { value: 22, suffix: "+", label: "Industries Served", sublabel: "End-to-End Solutions" },
];

const StatItem = ({ value, suffix, label, sublabel, delay }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        const duration = 2000;
        const steps = 60;
        const increment = value / steps;
        let current = 0;
        
        const counter = setInterval(() => {
          current += increment;
          if (current >= value) {
            setCount(value);
            clearInterval(counter);
          } else {
            setCount(Math.floor(current));
          }
        }, duration / steps);
        
        return () => clearInterval(counter);
      }, delay);
      
      return () => clearTimeout(timer);
    }
  }, [isInView, value, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      className="text-center"
    >
      <div className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-primary mb-2">
        {count}
        <span className="text-slate-800">{suffix}</span>
      </div>
      <div className="text-slate-900 font-semibold text-lg mb-1">{label}</div>
      <div className="text-slate-600 text-sm">{sublabel}</div>
    </motion.div>
  );
};

 export function Founders() {
  return (
    <section id="founders" className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-slate-200 opacity-40" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-8xl">
        <FadeInUp className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-blue-600 font-semibold tracking-wider uppercase text-sm mb-4">
            <Sparkles className="w-4 h-4" />
            Leadership
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Meet Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Founders</span>
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed">
            With 30+ years of combined industry experience, our founders bring deep expertise 
            in enterprise technology, cloud computing, and digital transformation and Cyber Security.
          </p>
        </FadeInUp>

        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={founder.featured ? "" : ""}
            >
              <div className={`relative group h-full max-w-4xl` }>
                {/* Featured badge */}
                {/* {founder.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg">
                      <Sparkles className="w-4 h-4" />
                      Principal Founder
                    </div>
                  </div>
                )} */}

                {/* Animated gradient border */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-100 blur transition-all duration-500" />
                
                {/* Card content */}
                <div className="relative bg-white backdrop-blur-xl border-2 border-slate-200 rounded-3xl p-8 h-full hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 group-hover:border-transparent">
                  {/* Decorative gradient orb */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Header */}
                  <div className={`flex flex-col md:flex-row items-start gap-6 mb-6 relative z-10`}>
                    <div className="relative mx-auto sm:mx-0">
                      <div className="w-24 h-24 rounded-2xl bg-transparent  flex items-center justify-center flex-shrink-0  shadow-purple-500/30 group-hover:shadow-purple-500/50 transition-all duration-300 group-hover:scale-105">
                        <span className="text-3xl font-bold text-primary">
                           {founder.name === "Gajendrakumar PK" ? "GK" : "BM"}
                        </span>
                      </div>
                      {/* Pulse ring */}
                      {/* <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-30 animate-ping" /> */}
                    </div>
                    
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {founder.name}
                      </h3>
                      <p className="text-primary font-semibold text-lg mb-3">{founder.role}</p>
                      <div className="flex items-center justify-center sm:justify-start gap-2 mb-3">
                        <Briefcase className="w-4 h-4 text-slate-500" />
                        <span className="text-slate-600 text-sm font-medium">{founder.experience} Excellence</span>
                      </div>
                      {founder.featured && (
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200">
                          <TrendingUp className="w-4 h-4 text-blue-600" />
                          <span className="text-sm font-semibold text-blue-700">Leading 100+ Enterprise Transformations</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-700 mb-6 leading-relaxed text-center sm:text-left">
                    {founder.description}
                  </p>

                  <div className={`grid md:grid-cols-2 gap-6`}>
                    {/* Expertise */}
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2 justify-center sm:justify-start">
                        <GraduationCap className="w-4 h-4 text-purple-600" />
                        Areas of Expertise
                      </h4>
                      <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                        {founder.expertise.map((skill) => (
                          <span
                            key={skill}
                            className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 text-blue-700 text-sm font-medium hover:border-purple-300 hover:shadow-md transition-all duration-300 cursor-default"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2 justify-center sm:justify-start">
                        <Award className="w-4 h-4 text-purple-600" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-3">
                        {founder.achievements.map((achievement) => (
                          <li key={achievement} className="flex items-start gap-3 text-sm text-slate-700 group/item">
                            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mt-1.5 flex-shrink-0 group-hover/item:shadow-lg group-hover/item:shadow-purple-500/50 transition-shadow duration-300" />
                            <span className="group-hover/item:text-slate-900 transition-colors duration-300">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* Combined Experience Banner */}
        <FadeInUp className={''}>
          <div className="relative bg-white backdrop-blur-xl border-2 border-slate-200 rounded-3xl p-8 md:p-12 shadow-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50" />
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
            
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {stats.map((stat, index) => (
                <StatItem
                  key={stat.label}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  sublabel={stat.sublabel}
                  delay={index * 200}
                />
              ))}
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}

