// In Div.tsx
"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

type DivProps = {
  children?: React.ReactNode;
  className?: string;
  ref?: React.Ref<HTMLDivElement>; // Accepts a ref to a div element
  style?: React.CSSProperties;
  aosProps?: {
    animation?: string;
    easing?: string;
    duration?: number;
    delay?: number;
  };
  id?: string
  onClick?: React.MouseEventHandler<HTMLDivElement>; // Correct typing for onClick
};

export const Div = ({ style,children, className, aosProps , ref, id, onClick}: DivProps) => {
  useEffect(() => {
    // Initialize AOS with default configuration
    AOS.init({
      duration: 1000, // Default duration for animations
      easing: "linear", // Default easing for animations
      once: true, // Animation happens only once
      offset: 20, // Trigger animation 120px before element is in view
    });
    AOS.refresh(); // Refresh AOS for newly added elements
  }, []);

  return (
    <div

    id={id}
    ref={ref}
    onClick={onClick}
    style={style}
      className={className}
      data-aos={aosProps?.animation || "fade-up"} // Default animation
      data-aos-easing={aosProps?.easing || "ease-in-out"} // Default easing
      data-aos-duration={aosProps?.duration || 1000} // Default duration
      data-aos-delay={aosProps?.delay || 0} // Default delay
    >
      {children}
    </div>
  );
};
