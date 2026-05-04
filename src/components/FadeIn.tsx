"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  variant?: "default" | "label";
};

export function FadeIn({ children, delay = 0, className = "", variant = "default" }: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();

  const baseHidden = { opacity: 0, y: shouldReduceMotion ? 0 : 16 };
  const baseVisible = { opacity: 1, y: 0 };

  const variants = {
    hidden: variant === "label" 
      ? { ...baseHidden, letterSpacing: "0.05em" } 
      : baseHidden,
    visible: variant === "label"
      ? { ...baseVisible, letterSpacing: "0.12em" }
      : baseVisible,
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
