"use client";
import React, { useEffect, useRef } from "react";
import { Background } from "../Layout/Index";
import { Div, Button } from "../Common/Index";
import { CiSaveDown1 } from "react-icons/ci";
import { PiNavigationArrowFill } from "react-icons/pi";
import gsap from "gsap";

export const Hero = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const texts = ["Full", "MERN"];
    let currentTextIndex = 0;

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
    tl.to(".trans", {
      opacity: 0,
      duration: 0.5,
      ease: "power3.out",
      onComplete: () => {
        currentTextIndex = (currentTextIndex + 1) % texts.length;
        textRef.current.innerText = texts[currentTextIndex];
      },
    })
      .to(textRef.current, { opacity: 1, duration: 0.5 })
      .delay(2);

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <Background>
      <Div className="container mx-auto flex flex-col md:flex-row items-center  justify-between min-h-screen px-10 text-white">
        <Div className="md:w-1/2 text-center md:text-left">
          <Div className="font-courier text-lg mb-4">Hi all. I am</Div>
          <Div className="text-5xl font-acme mb-4 leading-tight">
            Muhammed Fahiz K
          </Div>
          <Div className=" text-xl font-courier text-primary mb-6">
            &gt; &nbsp;
            <span ref={textRef} className="trans">
              Full
            </span>
            &nbsp;Stack Developer.
          </Div>
          <Div className=" text-xs font-courier ">
            <span className="text-gray-500 ">
              // you can also see it on my Github Page <br />
            </span>
            <span className="text-blue-700">const </span>{" "}
            <span className=" text-[#3BBE9F]"> gitHubLink </span> = &nbsp;
            <span className="text-[#BD8306]">
              <a
                href="https://github.com/MuhammedFahizk"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/MuhammedFahizk
              </a>
            </span>
          </Div>
        </Div>

        {/* Right Column: Image */}
        <Div className="md:w-1/2 flex items-center justify-center mt-8 md:mt-0">
          <img
            src="/path/to/your/image.jpg"
            alt="Profile Picture of Muhammed Fahiz K"
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </Div>
      </Div>
    </Background>
  );
};
