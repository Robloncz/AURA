"use client";

import { type ReactNode, useRef, useCallback, useState } from "react";
import { motion } from "framer-motion";
import { useRouter, usePathname } from "@/i18n/navigation";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const EASE_GENTLE: any = [0.25, 0.1, 0.25, 1.0];

/** Pages in swipe order — swipe left/right to move between them */
const PAGE_ORDER = ["/", "/studio", "/clarity", "/philosophy", "/about"];

/** Minimum horizontal distance (px) for a swipe to trigger navigation */
const SWIPE_THRESHOLD = 80;

export default function Template({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const touchStart = useRef({ x: 0, y: 0 });

  // Read swipe direction stored before navigation (if any)
  const [direction] = useState<"left" | "right" | null>(() => {
    if (typeof window === "undefined") return null;
    const dir = sessionStorage.getItem("aura-nav-dir") as
      | "left"
      | "right"
      | null;
    sessionStorage.removeItem("aura-nav-dir");
    return dir;
  });

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStart.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      // Don't intercept swipes on form elements
      const tag = (e.target as HTMLElement).tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;

      const dx = e.changedTouches[0].clientX - touchStart.current.x;
      const dy = e.changedTouches[0].clientY - touchStart.current.y;

      // Must be a deliberate horizontal swipe
      if (
        Math.abs(dx) < SWIPE_THRESHOLD ||
        Math.abs(dy) > Math.abs(dx) * 0.7
      )
        return;

      const idx = PAGE_ORDER.indexOf(pathname);
      if (idx === -1) return;

      if (dx > 0 && idx > 0) {
        // Swipe right → go to previous page
        sessionStorage.setItem("aura-nav-dir", "right");
        router.push(PAGE_ORDER[idx - 1]);
      } else if (dx < 0 && idx < PAGE_ORDER.length - 1) {
        // Swipe left → go to next page
        sessionStorage.setItem("aura-nav-dir", "left");
        router.push(PAGE_ORDER[idx + 1]);
      }
    },
    [pathname, router],
  );

  // Directional slide for swipe, gentle rise for link clicks
  const initialX = direction === "left" ? 30 : direction === "right" ? -30 : 0;
  const initialY = direction ? 0 : 6;

  return (
    <div onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <motion.div
        initial={{ opacity: 0, x: initialX, y: initialY }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.45, ease: EASE_GENTLE }}
      >
        {children}
      </motion.div>
    </div>
  );
}
