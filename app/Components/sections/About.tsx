"use client";
import React, { useRef } from "react";
import { Div } from "../Common/Index";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  const paragraphRef1 = useRef<HTMLParagraphElement>(null);
  const paragraphRef2 = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    if (!paragraphRef1.current || !paragraphRef2.current) return;
    const text1 = new SplitType(paragraphRef1.current, { types: "lines" });
    const text2 = new SplitType(paragraphRef2.current, { types: "lines" });

    gsap.fromTo(
      [text1.lines, text2.lines],
      { color: "#ffffff", opacity: 0.3 },
      {
        color: "#fffff",
        opacity: 1,
        duration: 0.6,
        stagger: 0.2,
        scrollTrigger: {
          trigger: paragraphRef1.current,
          start: "top 75%",
          end: "bottom 50%",
          scrub: true,
        },
      }
    );

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "html ",
        scrub: 2,
        start: "top center",
        end: "bottom  50%",
      },
    });

    tl.fromTo(
      ".profilePic",
      {
        y: -100,
        x: 200,
        
        duration: 0.5,
        ease: "none",
      },
      {
        stagger: 4,
        y: 100,
        x: -200,
      }
    );
  });

  return (
    <Div
      id="about"
      className="h-screen p-5 md:p-10 flex items-center justify-center bg-cover bg-center "
    >
      <Div className="flex flex-col md:flex-row items-center justify-between  border border-gray-600 bg-opacity-80 p-6 md:p-10  w-full max-w-5xl">
        {/* Text Section */}
        <div className="w-full md:w-4/5 text-white space-y-6 text-center md:text-left">
          <h1 className="text-2xl md:text-3xl text-primary font-bold mb-4 font-acme ">
            About Me
          </h1>
          <p
            ref={paragraphRef1}
            className="text-sm  md:text-md font-courier  leading-relaxed"
          >
            I am a <strong>MERN Stack Developer</strong> with a Bachelor &apos;
            s degree in Computer Applications (BCA) from the University of
            Calicut. Over the past year, I have gained valuable experience as a
            self-taught developer and intern, specializing in full-stack
            development using technologies like <strong>React.js</strong>,{" "}
            <strong>Next.js</strong>,<strong>Node.js</strong>,{" "}
            <strong>Express</strong>, and <strong>MongoDB</strong>
          </p>
          <p
            ref={paragraphRef2}
            className="text-sm font-courier  md:text-md leading-relaxed"
          >
            During this time, I worked on diverse projects, honing my skills in
            building scalable REST APIs, implementing secure authentication
            systems, and delivering seamless user experiences. My journey
            reflects a strong commitment to learning and a passion for creating
            impactful digital solutions.
          </p>
        </div>

        {/* Image Section */}
        <div className=" profilePic w-40 md:w-64 max-w-full flex   bg-[#f1eeee2b]    border border-gray-400  justify-center md:justify-end  mt-6 md:mt-0">
          <Image
            src="/My-Pic.png"
            className=" border border-gray-700  rotate-x-50 rotate-6 shadow-xl w-40 md:w-64 max-w-full"
            alt="Profile"
            width={200}
            height={200}
          />
        </div>
      </Div>
    </Div>
  );
};
