"use client";
import React from "react";
import { motion, MotionProps } from "framer-motion";
import { IconType } from "react-icons";

type AnimatedIconsProps = {
  icons: {
    Icon: IconType; // React Icon component
    position: { top?: string; left?: string; bottom?: string; right?: string }; // Position for larger screens
    smPosition?: { top?: string; left?: string; bottom?: string; right?: string }; // Position for smaller screens
    animationProps?: MotionProps; // Custom animation props for each icon
    size?: number; // Icon size
    smSize?: number; // Icon size for smaller screens
    color?: string; // Icon color
    floatDirection?: string; // Optional direction for floating animation
  }[];
  className?: string; // Additional classes for container
};

export const AnimatedIcons = ({ icons, className }: AnimatedIconsProps) => {
  return (
    <div className={`relative w-full h-full ${className}`}>
      {icons.map((iconData, index) => {
        const isSmallScreen = typeof window !== "undefined" && window.innerWidth <= 640;

        // Determine the position and size based on screen size
        const dynamicPosition = isSmallScreen && iconData.smPosition ? iconData.smPosition : iconData.position;
        const dynamicSize = isSmallScreen && iconData.smSize ? iconData.smSize : iconData.size || 40;

        return (
          <motion.div
            key={index}
            className={`absolute ${iconData.floatDirection || ""}`}
            style={dynamicPosition} // Set position dynamically
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }} // Add a staggered animation
            {...iconData.animationProps} // Custom animation props if provided
          >
            <iconData.Icon
              size={dynamicSize}

              color={iconData.color || "white"}
              
            />
          </motion.div>
        );
      })}
    </div>
  );
};
