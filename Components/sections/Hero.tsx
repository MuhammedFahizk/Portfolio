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
      <Div className="hero text-white flex items-center justify-center h-screen relative">
        <AnimatedIcons
          icons={[
            {
              Icon: FaReact,
              position: { top: "30%", left: "10%" },
              size: 50,
              color: "#61DAFB", // React icon color
              floatDirection: "animate-float-left",
            },
            {
              Icon: RiNextjsFill,
              position: { top: "15%", left: "50%" },
              size: 50,
              color: "#000", // Next.js icon color
              floatDirection: "animate-float-right",
            },
            {
              Icon: FaNodeJs,
              position: { bottom: "20%", right: "15%" },
              size: 50,
              color: "#68A063", // Node.js icon color
              floatDirection: "animate-float ",
            },
            {
              Icon: RiTailwindCssFill,
              position: { bottom: "20%", left: "15%" },
              size: 50,
              color: "#38B2AC", // Tailwind CSS icon color
              floatDirection: "animate-float-left ",
            },
            {
              Icon: SiRedux,
              position: { bottom: "10%", right: "45%" },
              size: 50,
              color: "#764ABC", // Redux icon color
              floatDirection: "animate-float-right",
            },
            {
              Icon: SiMongodb,
              position: { top: "30%", right: "10%" },
              size: 50,
              color: "#4DB33D", // MongoDB icon color
              floatDirection: "animate-float-top",
            },
          ]}
        />

        {/* Content with animations */}
        <Div className="text-center absolute">
          <Div
            className="text-lg mb-4 text-end"
            aosProps={{
              animation: "fade-left", // AOS animation
              easing: "ease-in-out",
              duration: 1000,
              delay: 0,
            }}
          >
            Build scalable web applications with{" "}
            <span className="text-primary">MERN</span> stack.
          </Div>

          <Div
            className="text-5xl font-bold mb-4"
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
            className="text-lg text-start text-primary"
            aosProps={{
              animation: "fade-right",
              easing: "ease-in-out",
              duration: 1000,
              delay: 0,
            }}
          >
            MERN Stack Developer.
          </Div>

          <Div className="flex gap-3 my-10 justify-end">
            <Button className="btn-primary bg-primary">
              <PiNavigationArrowFill className="text-xl" />
              Get In Touch
            </Button>
            <Button className="btn-secondary">
              <CiSaveDown1 className="text-xl" /> Download Resume
            </Button>
          </Div>
        </Div>
      </Div>
    </Background>
  );
};
