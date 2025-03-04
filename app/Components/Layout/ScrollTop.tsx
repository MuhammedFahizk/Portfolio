import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useState, useRef } from "react";
import { IoMdArrowDropup } from "react-icons/io";

export const ScrollTop = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const divRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const fullHeight = document.documentElement.scrollHeight;
    const currentPosition = window.scrollY;

    const percentage = (currentPosition / (fullHeight - windowHeight)) * 100;
    setScrollPercentage(Number(percentage.toFixed(0)));
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP(() => {
    if (divRef.current && arrowRef.current) {
      gsap.set(arrowRef.current, { y: 0 });

      divRef.current.addEventListener("mouseenter", () => {
        gsap.to(arrowRef.current, { y: -24, duration: 0.3, ease: "power2.out" });
      });

      divRef.current.addEventListener("mouseleave", () => {
        gsap.to(arrowRef.current, { y: 0, duration: 0.3, ease: "power2.out" });
      });
    }
  }, []);

  return (
    <div
      ref={divRef}
      className="fixed bottom-10 right-10 z-50 flex flex-col items-center space-y-2"
    >
      <div className="bg-gray-900 text-white flex flex-col h-14  p-2 justify-center w-14 text-sm  items-center rounded-full shadow-md cursor-pointer">
        <div ref={arrowRef} className="text-2xl">
          <IoMdArrowDropup />
        </div>
        {scrollPercentage}%
      </div>
    </div>
  );
};
