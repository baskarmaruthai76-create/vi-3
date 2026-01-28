import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const newsItems = [
  {
    type: "News",
    title: "Vi-3 Technology Launches Next-Gen AI Solutions for Enterprise",
    link: "#",
  },
  {
    type: "Success Story",
    title: "Cloud Migration Success: 40% Cost Reduction for Financial Services Client",
    link: "#",
  },
  {
    type: "News",
    title: "Vi-3 Technology Achieves AWS Advanced Partner Status",
    link: "#",
  },
];

export const NewsTicker = () => {
  return (
    <section className="news-bar  py-4 overflow-hidden ">
      <div className="flex  w-max animate-ticker">
        {[...newsItems, ...newsItems].map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="flex items-center gap-6 px-12 shrink-0 group whitespace-nowrap"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-foreground"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16z" />
                </svg>
              </div>
              <span className="text-xs uppercase text-black tracking-wider font-bold text-foreground/80">
                {item.type}
              </span>
            </div>

            <p className="font-medium text-black group-hover:underline">
              {item.title}
            </p>

            <motion.div
              whileHover={{ x: 5 }}
              className="w-8 h-8 rounded-full border border-foreground/30 flex items-center justify-center"
            >
              <ArrowRight className="w-4 h-4 text-foreground" />
            </motion.div>
          </a>
        ))}
      </div>
    </section>
  );
};
