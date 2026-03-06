"use client";

import { type ReactNode, type CSSProperties } from "react";
import { motion } from "framer-motion";

interface CardHoverProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export function CardHover({ children, className, style }: CardHoverProps) {
  return (
    <motion.div
      whileHover={{
        y: -4,
        boxShadow: "0 12px 32px -8px rgba(224, 123, 74, 0.15), 0 4px 12px -4px rgba(224, 123, 74, 0.08)",
      }}
      transition={{
        duration: 0.35,
        ease: [0.25, 0.1, 0.25, 1.0],
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
