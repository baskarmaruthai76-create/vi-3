import { FadeInUp, HoverScale } from "@/components/ui/motion";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Tag } from "lucide-react";

const resources = [
  {
    title: "What Is Agentic AI: Redefining Enterprise Intelligence & Decision Making",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    tags: ["Agentic AI", "GenAI", "Artificial Intelligence"],
    date: "Dec 2024",
  },
  {
    title: "The Modern CISO's Cybersecurity Playbook: Balancing Security, Risk & Business",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
    tags: ["Cloud Security", "Cybersecurity", "GRC"],
    date: "Nov 2024",
  },
  {
    title: "IT Service Management 101: Streamlining Operations & Service Delivery",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
    tags: ["ITSM", "Enterprise Applications", "Cloud"],
    date: "Oct 2024",
  },
];

export const ResourcesSection = () => {
  return (
    <section id="insights" className="py-16 bg-secondary/20 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <FadeInUp className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Explore latest <span className="text-primary">resources</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Stay ahead with insights, trends, and best practices from our technology experts.
          </p>
        </FadeInUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <motion.article
                    key={resource.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <HoverScale>
                <a href="/resources" className="group block glass rounded-2xl overflow-hidden border-primary/40 hover:border-primary transition-all duration-300">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={resource.image}
                      alt={resource.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                      <div className={`absolute inset-0 bg-gradient-to-t from-background/20 via-background/10 to-transparent`} />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                        <Calendar className="w-4 h-4" />
                        {resource.date}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-foreground mb-4 group-hover:text-primary transition-colors line-clamp-2">
                      {resource.title}
                    </h3>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {resource.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                        >
                          <Tag className="w-3 h-3" />
                          {tag}
                        </span>
                      ))}
                      {resource.tags.length > 2 && (
                        <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium">
                          +{resource.tags.length - 2}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </a>
              </HoverScale>
            </motion.article>
          ))}
        </div>

        <FadeInUp delay={0.3} className="text-center mt-12">
          <a
            href="/resources"
            className="inline-flex items-center gap-2 px-8 py-4 gradient-primary text-primary font-semibold rounded-lg glow-primary hover:opacity-90 transition-opacity"
          >
            See More Resources
            <ArrowRight className="w-5 h-5" />
          </a>
        </FadeInUp>
      </div>
    </section>
  );
};
