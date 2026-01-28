import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TextType from "@/components/ui/TextType";

// Import hero images for each word
import heroDigital from "@/assets/light/hero-digital.jpg";
import heroCloud from "@/assets/light/hero-cloud.jpg";
import heroApplication from "@/assets/light/hero-application.jpg";
import heroData from "@/assets/light/hero-data.jpg";
import heroAi from "@/assets/light/hero-ai.jpg";
import { NewsTicker } from "./NewsTicker";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const heroDataNew ='https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'

const transformWords = ["Digital", "Cloud", "Application", "Data", "AI"];
const heroImages = [heroDigital, heroCloud, heroApplication, heroData, heroAi];

export const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleTextChange = useCallback((_text: string, index: number) => {
    setCurrentImageIndex(index);
  }, []);
// min-h-screen   h-[83vh] lg:h-[90vh] 
  return (  
    <section className="relative h-screen">

    
    <section className="relative h-full flex items-center overflow-hidden">
      {/* Background Images with crossfade */}
      <AnimatePresence mode="sync">
        <motion.div
    key={currentImageIndex}
    initial={{ opacity: 0, scale: 1.005 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 1.005 }}
    transition={{
      duration: 1.8,
      ease: [0.4, 0.0, 0.2, 1],
    }}
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: `url(${heroImages[currentImageIndex]})` }}
  >
  {/* Image contrast scrim */}
<div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-black/10" />
<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent" />

        </motion.div>

      </AnimatePresence>

      {/* Content */}
        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-32 pb-20">
        <div className="max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-lg md:text-xl text-secondary mb-4 font-medium"
          >
            Powering your
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6"
          >
            <span className="relative inline-block">
              <TextType
                text={transformWords}
                typingSpeed={120}
                deletingSpeed={50}
                pauseDuration={2000}
                loop={true}
                showCursor={true}
                cursorCharacter="|"
                cursorClassName="text-primary"
                className="text-primary"
                onTextChange={handleTextChange}
              />
              <span className="absolute -bottom-1 left-0 w-full h-1 gradient-primary rounded-full" />
            </span>
            <span className="text-secondary ml-4">transformation</span>
          </motion.h1>

           <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm md:text-base tracking-[0.3em] uppercase text-secondary/90 mb-8 font-semibold"
          >
            Security-First • Intelligent Scalability • 24/7 Support
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}

            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <motion.div
                                        whileHover={{scale: 1.05, transition: { duration: 0.2 }, transitionBehavior: "startToEnd"}}
            transition={{ duration: 0.3, delay:0.10 }}>
            <Link
  to="/services"
  className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-white font-semibold rounded-xl overflow-hidden shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all hover:scale-105"
>
  <span className="relative z-10">Explore services</span>

  <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />

  <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
</Link>

            </motion.div>
                     <motion.div
                                        whileHover={{scale: 1.05, transition: { duration: 0.2 }, transitionBehavior: "startToEnd"}}
            transition={{ duration: 0.3, delay:0.10 }}>

            <a
              href="#services"
              className="inline-flex items-center gap-2 px-8 py-4 border border-primary/50 text-primary font-semibold rounded-lg hover:bg-primary/15  transition-colors"
            >
              Get Started
            </a>
                        </motion.div>

          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1s" }} />
    </section>
     <div className="absolute bottom-0 left-0 w-full z-20">
    <NewsTicker />
  </div>
</section> 
      );
};
