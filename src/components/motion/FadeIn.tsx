"use client";

import { type ReactNode, type CSSProperties } from "react";
import { motion, type Variants } from "framer-motion";

const EASE_GENTLE: [number, number, number, number] = [0.25, 0.1, 0.25, 1.0];

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const fadeVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

interface FadeInProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** Delay in seconds */
  delay?: number;
  /** Duration in seconds (default 0.7) */
  duration?: number;
  /** Use simple fade without vertical movement */
  noSlide?: boolean;
  /** Viewport margin for triggering (default "-60px") */
  margin?: string;
}

export function FadeIn({
  children,
  className,
  style,
  delay = 0,
  duration = 0.7,
  noSlide = false,
  margin = "-60px",
}: FadeInProps) {
  return (
    <motion.div
      variants={noSlide ? fadeVariants : fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin }}
      transition={{ duration, delay, ease: EASE_GENTLE }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

interface StaggerProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** Stagger delay between children in seconds */
  stagger?: number;
  /** Viewport margin for triggering */
  margin?: string;
}

export function Stagger({
  children,
  className,
  style,
  stagger = 0.12,
  margin = "-60px",
}: StaggerProps) {
  return (
    <motion.div
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren: 0.1 },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

/* ——— Stagger Item ———
   Use inside a <Stagger> wrapper. Inherits variant trigger from parent. */

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  noSlide?: boolean;
}

export function StaggerItem({ children, className, style, noSlide = false }: StaggerItemProps) {
  return (
    <motion.div
      variants={noSlide ? fadeVariants : fadeUpVariants}
      transition={{ duration: 0.6, ease: EASE_GENTLE }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
