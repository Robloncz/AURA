"use client";

import { motion } from "framer-motion";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const EASE: any = [0.45, 0, 0.55, 1];

// Highly asymmetric polygon-like shapes — 9 keyframes each
const blob1 = {
  borderRadius: [
    "62% 38% 28% 72% / 42% 65% 35% 58%",
    "35% 65% 48% 52% / 72% 25% 68% 38%",
    "28% 72% 65% 35% / 35% 72% 28% 62%",
    "75% 25% 42% 58% / 55% 38% 72% 28%",
    "48% 52% 72% 28% / 22% 68% 38% 72%",
    "65% 35% 25% 75% / 72% 42% 55% 38%",
    "38% 62% 55% 45% / 48% 72% 32% 62%",
    "52% 48% 38% 62% / 65% 28% 72% 35%",
    "62% 38% 28% 72% / 42% 65% 35% 58%",
  ],
  x: ["-1.2%", "2.4%", "-2.1%", "0.6%", "-3%", "1.8%", "-1.5%", "2.7%", "-1.2%"],
  y: ["0.6%", "-2.4%", "1.5%", "-1.8%", "2.4%", "-1.2%", "3%", "-1.2%", "0.6%"],
  scaleX: [1, 1.38, 0.8, 1.28, 0.86, 1.42, 0.83, 1.18, 1],
  scaleY: [1, 0.76, 1.22, 0.84, 1.3, 0.72, 1.25, 0.88, 1],
};

const blob2 = {
  borderRadius: [
    "22% 78% 58% 42% / 58% 28% 72% 42%",
    "72% 28% 35% 65% / 32% 75% 25% 68%",
    "45% 55% 22% 78% / 72% 38% 68% 28%",
    "78% 22% 62% 38% / 25% 65% 38% 62%",
    "32% 68% 72% 28% / 68% 22% 78% 35%",
    "58% 42% 28% 72% / 45% 72% 28% 55%",
    "68% 32% 55% 45% / 28% 68% 52% 32%",
    "38% 62% 42% 58% / 62% 35% 65% 35%",
    "22% 78% 58% 42% / 58% 28% 72% 42%",
  ],
  x: ["1.2%", "-2.4%", "1.5%", "-1.8%", "2.7%", "-1.2%", "2.1%", "-3%", "1.2%"],
  y: ["-0.9%", "2.1%", "-2.4%", "1.2%", "-1.8%", "3%", "-1.2%", "1.5%", "-0.9%"],
  scaleX: [1, 1.42, 0.78, 1.32, 0.82, 1.38, 0.85, 1.22, 1],
  scaleY: [1, 0.72, 1.28, 0.8, 1.35, 0.76, 1.2, 0.85, 1],
};

const blob3 = {
  borderRadius: [
    "52% 48% 32% 68% / 68% 42% 58% 32%",
    "25% 75% 65% 35% / 35% 65% 28% 72%",
    "78% 22% 42% 58% / 58% 28% 72% 42%",
    "42% 58% 72% 28% / 28% 72% 38% 62%",
    "68% 32% 25% 75% / 72% 35% 65% 28%",
    "35% 65% 58% 42% / 42% 65% 32% 68%",
    "62% 38% 45% 55% / 55% 32% 72% 45%",
    "28% 72% 68% 32% / 38% 72% 28% 58%",
    "52% 48% 32% 68% / 68% 42% 58% 32%",
  ],
  x: ["0.6%", "-2.4%", "1.8%", "-1.2%", "3%", "-2.1%", "1.2%", "-2.7%", "0.6%"],
  y: ["1.2%", "-1.5%", "2.4%", "-2.4%", "1.2%", "-3%", "1.8%", "-0.9%", "1.2%"],
  scaleX: [1, 1.35, 0.82, 1.4, 0.78, 1.3, 0.86, 1.25, 1],
  scaleY: [1, 0.8, 1.25, 0.74, 1.32, 0.82, 1.18, 0.88, 1],
};

const blob4 = {
  borderRadius: [
    "48% 52% 72% 28% / 32% 68% 32% 68%",
    "72% 28% 35% 65% / 68% 28% 72% 32%",
    "28% 72% 58% 42% / 48% 72% 28% 52%",
    "65% 35% 22% 78% / 28% 52% 62% 42%",
    "38% 62% 72% 28% / 72% 32% 42% 58%",
    "78% 22% 48% 52% / 35% 72% 28% 65%",
    "28% 72% 62% 38% / 62% 28% 72% 38%",
    "55% 45% 38% 62% / 45% 65% 35% 55%",
    "48% 52% 72% 28% / 32% 68% 32% 68%",
  ],
  x: ["-1.5%", "1.2%", "-2.7%", "2.1%", "-1.2%", "3%", "-2.4%", "0.9%", "-1.5%"],
  y: ["-1.2%", "2.4%", "-1.5%", "0.9%", "-3%", "1.8%", "-0.9%", "2.4%", "-1.2%"],
  scaleX: [1, 1.32, 1.45, 0.76, 1.28, 0.82, 1.38, 0.84, 1],
  scaleY: [1, 0.78, 0.7, 1.3, 0.85, 1.38, 0.72, 1.22, 1],
};

export function HeroOrb() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
      aria-hidden="true"
    >
      {/* Primary blob — massive warm light, nearly full viewport */}
      <motion.div
        animate={blob1}
        transition={{
          duration: 19.6,
          repeat: Infinity,
          ease: EASE,
          times: [0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875, 1],
        }}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          translate: "-50% -50%",
          width: "min(152vw, 1334px)",
          height: "min(152vw, 1334px)",
          background:
            "radial-gradient(ellipse, rgba(255,220,190,0.95) 0%, rgba(238,154,109,0.75) 38%, transparent 65%)",
          filter: "blur(32px)",
        }}
      />

      {/* Secondary blob — saturated orange core */}
      <motion.div
        animate={blob2}
        transition={{
          duration: 15.4,
          repeat: Infinity,
          ease: EASE,
          times: [0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875, 1],
        }}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          translate: "-50% -50%",
          width: "min(129vw, 1147px)",
          height: "min(129vw, 1147px)",
          background:
            "radial-gradient(ellipse, rgba(220,110,65,0.88) 0%, rgba(238,154,109,0.55) 40%, transparent 65%)",
          filter: "blur(36px)",
        }}
      />

      {/* Tertiary blob — blush, wide soft coverage */}
      <motion.div
        animate={blob3}
        transition={{
          duration: 23.8,
          repeat: Infinity,
          ease: EASE,
          times: [0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875, 1],
        }}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          translate: "-50% -50%",
          width: "min(117vw, 1053px)",
          height: "min(117vw, 1053px)",
          background:
            "radial-gradient(ellipse, rgba(244,184,154,0.82) 0%, rgba(255,205,175,0.5) 38%, transparent 65%)",
          filter: "blur(38px)",
        }}
      />

      {/* Accent blob — deep coral punch */}
      <motion.div
        animate={blob4}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: EASE,
          times: [0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875, 1],
        }}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          translate: "-50% -50%",
          width: "min(100vw, 913px)",
          height: "min(100vw, 913px)",
          background:
            "radial-gradient(ellipse, rgba(205,90,50,0.62) 0%, rgba(235,125,80,0.4) 38%, transparent 65%)",
          filter: "blur(42px)",
        }}
      />
    </div>
  );
}
