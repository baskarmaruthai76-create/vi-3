
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

interface PolicyLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export const PolicyLayout = ({ title, lastUpdated, children }: PolicyLayoutProps) => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden" 
        style={{ background: 'linear-gradient(135deg, hsl(220 30% 6%) 0%, hsl(225 45% 18%) 50%, hsl(240 40% 15%) 100%)' }}>
        
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-[10%] w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 mb-8 text-hero-muted hover:text-primary transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium">Back to Home</span>
            </Link>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-hero-foreground mb-4">
              {title}
            </h1>
            <p className="text-hero-muted">Last Updated: {lastUpdated}</p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto prose prose-lg prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-ul:text-muted-foreground prose-ol:text-muted-foreground"
          >
            {children}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

