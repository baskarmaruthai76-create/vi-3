import { motion } from "framer-motion";
import { ReactNode } from "react";

interface InfiniteScrollProps {
  children: ReactNode;
  direction?: "left" | "right";
  speed?: number;
  className?: string;
}

export const InfiniteScroll = ({
  children,
  direction = "left",
  speed = 30,
  className = "",
}: InfiniteScrollProps) => {
  return (
    <div className={`overflow-hidden scroll-container ${className}`}>
      <motion.div
        className="flex gap-8"
        animate={{ x: direction === "left" ? "-50%" : "0%" }}
        initial={{ x: direction === "left" ? "0%" : "-50%" }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
};
