"use client";
import React from "react";
import { Div } from "../Common/Index";

export const Background = ({ children }: { children: React.ReactNode }) => {
  return (
    <Div className="relative w-full h-screen overflow-hidden">
      {/* Static Black Background */}
      <div className="absolute inset-0 bg-black z-0" />

      {/* Masked Background */}
      <Div
        className="absolute inset-0 z-10 bg-info
        [mask-image:radial-gradient(ellipse_at_center, black 0%, transparent 120%)]
        [mask-size:cover] [mask-repeat:no-repeat] opacity-40"
      >
        <div
          className="absolute inset-0 bg-[url('/dots.svg')] bg-repeat bg-center"
          style={{
            WebkitMaskImage: "radial-gradient(ellipse at center, black 0%, transparent 96%)",
            maskImage: "radial-gradient(ellipse at center, black 0%, transparent 96%)",
          }}
        />
      </Div>

      {/* Content */}
      <div className="relative z-20">{children}</div>
    </Div>
  );
};
