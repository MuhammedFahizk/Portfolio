"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Div } from "../Common/Index";
import { IoIosHome } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { MdContactMail } from "react-icons/md";
import { CiInstagram, CiLinkedin } from "react-icons/ci";
import { PiWhatsappLogoLight, PiGithubLogoLight } from "react-icons/pi";

export const NavBar = () => {
  // State to track the current active link
  const [activeLink, setActiveLink] = useState("#home");

  const socialMediaLinks = [
    { href: "https://github.com/yourusername", icon: <PiGithubLogoLight size={20} /> },
    {
      href: "https://www.linkedin.com/in/yourusername/",
      icon: <CiLinkedin size={20} />,
    },
    {
      href: "https://www.instagram.com/yourusername/",
      icon: <CiInstagram size={20} />,
    },
  ];

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
    <>
      <Div className="nav-bar fixed top-4 w-screen flex justify-center z-50 px-10 ">
        <div className="bg-[#000000f5]   w-full divide-x divide-slate-50  border border-collapse  backdrop-blur-md justify-between flex gap-6 items-center text-white">
          <h1 className=" font-courier hover:text-primary px-8 text-sm text-gray-400 py-3 ">#Muhammed_fahiz_k</h1>
          <Div className="social-media-icons grid grid-cols-3    divide-x divide-gray-600  ">
            {socialMediaLinks.map(({ href, icon }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500  py-3 px-4   hover:text-primary"
              >
                {icon}
              </a>
            ))}
          </Div>
        </div>
      </Div>
      <Div className="nav-bar fixed bottom-10 w-screen flex justify-center z-50">
        <div className="bg-[#00000031]   divide-x divide-gray-600 border border-gray-500 border-collapse   backdrop-blur-md flex  items-center text-white">
          {navLinks.map(({ href, label, icon }) => (
            <Link href={href} passHref key={href}>
              <Div
                onClick={() => setActiveLink(href)} // Update active link on click
                className={`flex items-center gap-2  py-3  px-4 cursor-pointer font-courier h-fit  ${
                  activeLink === href ? "text-primary" : "text-white"
                }`}
              >
                {icon}
                <span className="text-sm font-semibold">{label}</span>
              </Div>
            </Link>
          ))}
        </div>
      </Div>
    </>
  );
};
