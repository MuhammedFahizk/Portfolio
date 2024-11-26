"use client";
import React from "react";
import { motion, MotionProps } from "framer-motion";
import { IconType } from "react-icons";

type AnimatedIconsProps = {
  icons: {
    Icon: IconType; // React Icon component
    position: { top?: string; left?: string; bottom?: string; right?: string }; // Icon position
    animationProps?: MotionProps; // Custom animation props for each icon
    size?: number; // Icon size
    color?: string; // Icon color
    floatDirection?: string; // Optional direction for floating animation
  }[];
  className?: string; // Additional classes for container
};

export const AnimatedIcons = ({ icons, className }: AnimatedIconsProps) => {
  return (
    <div className={`relative w-full h-full ${className}`}>
      {icons.map((iconData, index) => {
        // Determine the animation direction dynamically based on position (left or right)
        

        return (
          <motion.div
            key={index}
            className={`absolute    ${iconData.floatDirection}`}
            style={iconData.position} // Set the position dynamically
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }} // Add a staggered animation
            {...iconData.animationProps} // Custom animation props if provided
          >
            <iconData.Icon 
              size={iconData.size || 40} 
              color={iconData.color || "white"} 
            />
          </motion.div>
        );
      })}
    </div>
  );
};
