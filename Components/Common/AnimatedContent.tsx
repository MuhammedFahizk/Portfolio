"use client";
import React from "react";
import { motion, MotionProps } from "framer-motion";

type AnimatedContentProps = {
  as?: keyof JSX.IntrinsicElements; // Allows choosing the HTML tag
  children: React.ReactNode;
  className?: string;
  animationProps?: MotionProps; // Accept animation props
};

export const AnimatedContent = ({
  as: Component = "div", // Default to "div"
  children,
  className,
  animationProps,
}: AnimatedContentProps) => {
  const defaultAnimation: MotionProps = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.5 },
  };

  return (
    <motion.div
      as={Component} // Dynamically choose the tag
      className={className}
      {...{ ...defaultAnimation, ...animationProps }}
    >
      {children}
    </motion.div>
  );
};
