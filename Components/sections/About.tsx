"use client";
import React from "react";
import {  Div } from "../Common/Index";
import Image from "next/image"; // Add this import statement

export const About = () => {
  return (
    <Div  className="h-screen p-5 md:p-10 flex items-center justify-center bg-cover bg-center rounded-lg">
      <Div
        className="flex flex-col md:flex-row items-center justify-between bg-secondary bg-opacity-80 p-6 md:p-10 rounded-lg w-full max-w-5xl"
        style={{
          backgroundImage: "url('/bg-1.jpg')",
        }}
      >
        {/* Text Section */}
        <Div
          className="w-full md:w-2/3 text-white space-y-4 text-center md:text-left"
          aosProps={{
            animation: "fade-right",
            easing: "ease-in-out",
            duration: 1000,
            delay: 0,
          }}
        >
          <h1 className="text-2xl md:text-3xl font-bold mb-4">About Me</h1>
          <p className="text-sm md:text-lg leading-relaxed">
            I am a <strong>MERN Stack Developer</strong> with a Bachelor &apos s
            degree in Computer Applications (BCA) from the University of
            Calicut. Over the past year, I have gained valuable experience as a
            self-taught developer and intern, specializing in full-stack
            development using technologies like <strong>React.js</strong>,{" "}
            <strong>Next.js</strong>,<strong>Node.js</strong>,{" "}
            <strong>Express</strong>, and <strong>MongoDB</strong>.
          </p>
          <p className="text-sm md:text-lg leading-relaxed">
            During this time, I worked on diverse projects, honing my skills in
            building scalable REST APIs, implementing secure authentication
            systems, and delivering seamless user experiences. My journey
            reflects a strong commitment to learning and a passion for creating
            impactful digital solutions.
          </p>
        </Div>

        {/* Image Section */}
        <Div
          aosProps={{
            animation: "fade-left",
            easing: "ease-in-out",
            duration: 1000,
            delay: 0,
          }}
          className="w-full md:w-1/3 flex justify-center md:justify-end mt-6 md:mt-0"
        >
          <Image
            src="/My-Pic.jpg"
            className="rounded-xl rotate-6 shadow-lg w-40 md:w-64 max-w-full"
            alt="Profile"
          />
        </Div>
      </Div>
    </Div>
  );
};
