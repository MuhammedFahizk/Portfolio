"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Div } from "../Common/Index";
import { IoIosHome } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { MdContactMail } from "react-icons/md";

export const NavBar = () => {
  // State to track the current active link
  const [activeLink, setActiveLink] = useState("#home");

  // Array of navigation links
  const navLinks = [
    { href: "#home", label: "Home", icon: <IoIosHome size={20} /> },
    { href: "#about", label: "About", icon: <FaUserAlt size={20} /> },
    { href: "#projects", label: "Projects", icon: <MdWork size={20} /> },
    { href: "#contact", label: "Contact", icon: <MdContactMail size={20} /> },
  ];

  // Create refs for each section
  const sectionsRef = {
    home: useRef(null),
    about: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
  };

  // Intersection Observer to track the sections
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Update activeLink when a section is in view
            setActiveLink(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    // Observe each section
    Object.values(sectionsRef).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      // Cleanup the observer on component unmount
      observer.disconnect();
    };
  }, []);

  return (
    <div className="nav-bar fixed bottom-10 w-screen flex justify-center z-50">
      <div className="bg-[#00000031] px-5 py-3 border border-collapse rounded-lg backdrop-blur-md flex gap-6 items-center text-white">
        {navLinks.map(({ href, label, icon }) => (
          <Link href={href} passHref key={href}>
            <Div
              onClick={() => setActiveLink(href)} // Update active link on click
              className={`flex items-center gap-2 cursor-pointer ${
                activeLink === href ? "text-primary" : "text-white"
              }`}
            >
              {icon}
              <span className="text-sm font-semibold">{label}</span>
            </Div>
          </Link>
        ))}
      </div>
    </div>
  );
};

