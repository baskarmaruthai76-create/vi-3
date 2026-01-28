import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

const team = [
  {
    name: "Gajendrakumar PK",
    role: "Founder",
    description: "A visionary and results-driven Leader with over 3 decades of success in IT Infrastructure, AI, Cloud computing, Networking, and Cybersecurity. Previously worked as Senior Director at Cloud Kinetics, Director at HCL Technologies, and Service Delivery Manager at Mphasis.",
    expertise: ["IT Infrastructure", "AI", "Cloud Computing", "Cybersecurity", "Networking"],
  },
  {
    name: "Baskar Maruthai",
    role: "Co-Founder",
    description: "A visionary and strategic driving force with over 28 years of experience bridging cutting-edge technology with market needs. Key leader at PwC in Czech Republic, HCL Technologies across multiple countries, and Architect at IBM India.",
    expertise: ["Security Architecture", "Cloud Projects", "Multi-Country Implementations", "Engineering"],
  },
];

export const Team = () => {
  return (
    <section id="team" className="py-8  bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Leadership
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Meet Our{" "}
            <span className="text-gradient">Visionaries</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Decades of combined experience driving digital transformation across global enterprises
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="service-card group"
            >
              {/* Avatar & Info */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-2xl shrink-0">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-card-foreground">{member.name}</h3>
                  <span className="text-primary font-medium">{member.role}</span>
                  <div className="flex gap-2 mt-2">
                    <a href="#" className="p-2 rounded-lg bg-muted hover:bg-primary/10 transition-colors">
                      <Linkedin className="w-4 h-4 text-muted-foreground" />
                    </a>
                    <a href="#" className="p-2 rounded-lg bg-muted hover:bg-primary/10 transition-colors">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                {member.description}
              </p>

              {/* Expertise Tags */}
              <div className="flex flex-wrap gap-2">
                {member.expertise.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
