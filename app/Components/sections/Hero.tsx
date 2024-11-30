"use client";
import React from "react";
import { Background } from "../Layout/Index";
import { Div, AnimatedIcons, Button } from "../Common/Index";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiRedux } from "react-icons/si";
import { CiSaveDown1 } from "react-icons/ci";
import { PiNavigationArrowFill } from "react-icons/pi";

export const Hero = () => {
  return (
    <Background>
      <Div className="hero flex flex-col items-center justify-center min-h-screen px-6 text-white relative">
        {/* Animated Icons */}
        <AnimatedIcons
          icons={[
            {
              Icon: FaReact,
              position: { top: "30%", left: "10%" },
              smPosition: { top: "15%", left: "5%" },
              size: 60,
              smSize: 30,
              color: "#61DAFB",
              floatDirection: "animate-float-left",
            },
            {
              Icon: RiNextjsFill,
              position: { top: "5%", right: "10%" },
              smPosition: { top: "10%", right: "5%" },
              size: 60,
              smSize: 30,
              color: "#000",
              floatDirection: "animate-float-right",
            },
            {
              Icon: FaNodeJs,
              position: { bottom: "0%", right: "15%" },
              smPosition: { bottom: "10%", right: "10%" },
              size: 60,
              smSize: 30,
              color: "#68A063",
              floatDirection: "animate-float",
            },
            {
              Icon: RiTailwindCssFill,
              position: { bottom: "20%", left: "15%" },
              smPosition: { bottom: "10%", left: "5%" },
              size: 60,
              smSize: 30,
              color: "#38B2AC",
              floatDirection: "animate-float-left",
            },
            {
              Icon: SiRedux,
              position: { bottom: "10%", right: "45%" },
              smPosition: { bottom: "5%", right: "40%" },
              size: 60,
              smSize: 30,
              color: "#764ABC",
              floatDirection: "animate-float-right",
            },
            {
              Icon: SiMongodb,
              position: { top: "30%", right: "10%" },
              smPosition: { top: "20%", right: "5%" },
              size: 60,
              smSize: 30,
              color: "#4DB33D",
              floatDirection: "animate-float-top",
            },
          ]}
        />

        {/* Hero Content */}
        <Div className="text-center relative z-20">
          <Div
            className="  sm:text-center md:text-end  md:text-lg text-accent mb-4"
            aosProps={{
              animation: "fade-left",
              easing: "ease-in-out",
              duration: 1000,
              delay: 0,
            }}
          >
            Build scalable web applications with{" "}
            <span className="text-primary font-semibold">MERN</span> stack.
          </Div>

          <Div
            className="text-3xl sm:text-2xl md:text-5xl font-bold mb-4 leading-tight"
            aosProps={{
              animation: "fade-down",
              easing: "ease-in-out",
              duration: 800,
              delay: 0,
            }}
          >
            Hi, I am Muhammed <span className="text-accent">Fahiz</span> K.
          </Div>

          <Div
            className="text-lg md:text-start text-center sm:text-sm md:text-lg text-primary mb-6"
            aosProps={{
              animation: "fade-right",
              easing: "ease-in-out",
              duration: 1000,
              delay: 0,
            }}
          >
            MERN Stack Developer.
          </Div>

          <Div className="flex flex-wrap gap-4 justify-center">
            <Button className="btn-primary bg-primary px-6 py-3 sm:px-4 sm:py-2 text-sm sm:text-xs flex items-center gap-2">
              <PiNavigationArrowFill className="text-xl sm:text-lg" />
              Get In Touch
            </Button>
            <Button className="btn-secondary px-6 py-3 sm:px-4 sm:py-2 text-sm sm:text-xs flex items-center gap-2">
              <CiSaveDown1 className="text-xl sm:text-lg" />
              Download Resume
            </Button>
          </Div>
        </Div>
      </Div>
    </Background>
  );
};
